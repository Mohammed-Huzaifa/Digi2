import { useEffect } from "react";

interface DocumentHeadOptions {
  title: string;
  description: string;
  path: string;
  noindex?: boolean;
}

function setMeta(selector: string, attr: "content", value: string) {
  const el = document.head.querySelector(selector);
  if (el) el.setAttribute(attr, value);
}

function setCanonical(href: string) {
  let link = document.head.querySelector<HTMLLinkElement>('link[rel="canonical"]');
  if (!link) {
    link = document.createElement("link");
    link.setAttribute("rel", "canonical");
    document.head.appendChild(link);
  }
  link.setAttribute("href", href);
}

/**
 * Sets per-route <title>, meta description, OG/Twitter tags, and canonical URL.
 * Runs on mount so the prerender script (which renders after JS execution)
 * captures the correct values in the static HTML for each route.
 */
export function useDocumentHead({ title, description, path, noindex }: DocumentHeadOptions) {
  useEffect(() => {
    const url = `https://digiworks.ai${path}`;

    document.title = title;
    setMeta('meta[name="description"]', "content", description);
    setMeta('meta[property="og:title"]', "content", title);
    setMeta('meta[property="og:description"]', "content", description);
    setMeta('meta[property="og:url"]', "content", url);
    setMeta('meta[name="twitter:title"]', "content", title);
    setMeta('meta[name="twitter:description"]', "content", description);
    setCanonical(url);

    let robots = document.head.querySelector<HTMLMetaElement>('meta[name="robots"]');
    if (noindex) {
      if (!robots) {
        robots = document.createElement("meta");
        robots.setAttribute("name", "robots");
        document.head.appendChild(robots);
      }
      robots.setAttribute("content", "noindex, nofollow");
    } else if (robots) {
      robots.remove();
    }
  }, [title, description, path, noindex]);
}
