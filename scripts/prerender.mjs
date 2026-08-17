/**
 * Post-build prerender script.
 * Starts vite preview, visits each route with puppeteer, and writes static HTML
 * into dist/ so AI crawlers (GPTBot, CCBot, Claude-Web, etc.) see real content.
 *
 * Run automatically via the "postbuild" npm script.
 */

import puppeteer from 'puppeteer';
import { spawn } from 'child_process';
import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const ROOT = path.resolve(__dirname, '..');
const DIST = path.join(ROOT, 'dist');
const PORT = 4174;
const BASE = `http://localhost:${PORT}`;

const ROUTES = ['/', '/solutions', '/business-operations', '/recruiting-agent', '/contact'];

function startServer() {
  return new Promise((resolve, reject) => {
    const proc = spawn(
      'npx',
      ['vite', 'preview', '--port', String(PORT), '--host'],
      { cwd: ROOT, shell: true, stdio: 'pipe' }
    );

    proc.stdout.on('data', (data) => {
      if (data.toString().includes(String(PORT))) resolve(proc);
    });

    proc.stderr.on('data', (data) => {
      if (data.toString().includes(String(PORT))) resolve(proc);
    });

    setTimeout(() => resolve(proc), 3000);
    proc.on('error', reject);
  });
}

async function prerender() {
  console.log('Starting preview server...');
  const server = await startServer();

  let browser;
  try {
    browser = await puppeteer.launch({ args: ['--no-sandbox', '--disable-setuid-sandbox'] });
  } catch (err) {
    console.warn('Pre-render skipped: could not launch headless Chromium in this environment.');
    console.warn(err.message);
    server.kill();
    return;
  }

  try {
    for (const route of ROUTES) {
      console.log(`Pre-rendering ${route}...`);
      const page = await browser.newPage();

      await page.goto(`${BASE}${route}`, {
        waitUntil: 'networkidle0',
        timeout: 30000,
      });

      // Wait a bit for JS animations to settle
      await new Promise((r) => setTimeout(r, 1500));

      const html = await page.content();

      const outPath =
        route === '/'
          ? path.join(DIST, 'index.html')
          : path.join(DIST, route.slice(1), 'index.html');

      fs.mkdirSync(path.dirname(outPath), { recursive: true });
      fs.writeFileSync(outPath, html, 'utf-8');
      console.log(`  Saved → ${path.relative(ROOT, outPath)}`);

      await page.close();
    }
  } finally {
    await browser.close();
    server.kill();
  }

  console.log('Pre-rendering complete.');
}

prerender().catch((err) => {
  console.warn('Pre-render failed, continuing without it:', err.message);
});
