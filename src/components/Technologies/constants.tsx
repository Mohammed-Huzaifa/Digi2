// src/components/Technologies/constants.tsx

import { PythonIcon } from "@/components/icons/skills/python-icon";
import { DriveIcon } from "@/components/icons/skills/google-drive";
import { AzureIcon } from "@/components/icons/skills/azure-icon";
import { FastAPIIcon } from "@/components/icons/skills/fast-api-icon";
import { GeminiIcon } from "@/components/icons/skills/gemini-icon";
import { LangchainIcon } from "@/components/icons/skills/langchain-icon";
import { OpenaiIcon } from "@/components/icons/skills/open-ai-icon";
import { PineconeIcon } from "@/components/icons/skills/pinecone-icon";
import { UpstashIcon } from "@/components/icons/skills/upstash-icon";
import { PostgresqlIcon } from "@/components/icons/skills/postgresql-icon";
import { SupabaseIcon } from "@/components/icons/skills/supabase-icon";
import { DockerIcon } from "@/components/icons/skills/docker-icon";
import { AnthropicIcon } from "@/components/icons/skills/anthropic-icon";

import type { Skill } from "./types";

// Assets you added (use as <img />, Vite/React will handle these as URLs)
import awsSvg from "@/components/icons/skills/AWS.svg";
import slackSvg from "@/components/icons/skills/Slack.svg";
import gmailPng from "@/components/icons/skills/icons8-gmail-48.png";
import shopifyPng from "@/components/icons/skills/icons8-shopify-48.png";
import teamsPng from "@/components/icons/skills/icons8-teams-48.png";
import outlookPng from "@/components/icons/skills/icons8-outlook-48.png";

// ✅ IMPORTANT: keep this export name EXACTLY as "skillRows"
export const skillRows: Skill[][] = [
  [
    { icon: <img src={awsSvg} className="w-6 h-6" alt="AWS" />, name: "AWS" },
    { icon: <AzureIcon className="w-6 h-6 text-[#0078D4]" />, name: "Azure" },
    { icon: <PythonIcon className="w-6 h-6 text-[#3776AB]" />, name: "Python" },
    { icon: <FastAPIIcon className="w-6 h-6 text-[#009688]" />, name: "FastAPI" },
    { icon: <GeminiIcon className="w-6 h-6 text-[#4285F4]" />, name: "Gemini" },
  ],
  [
    { icon: <OpenaiIcon className="w-6 h-6 text-[#10A37F]" />, name: "OpenAI API" },
    { icon: <AnthropicIcon className="w-6 h-6 text-[#111111]" />, name: "Anthropic" },
    { icon: <LangchainIcon className="w-6 h-6 text-[#1C7ED6]" />, name: "LangChain" },
    { icon: <PineconeIcon className="w-6 h-6 text-[#5B3DF5]" />, name: "Pinecone" },
    { icon: <UpstashIcon className="w-6 h-6 text-[#00E9A3]" />, name: "Upstash" },
  ],
  [
    { icon: <SupabaseIcon className="w-6 h-6" />, name: "Supabase" },
    { icon: <PostgresqlIcon className="w-6 h-6 text-[#336791]" />, name: "PostgreSQL" },
    { icon: <DockerIcon className="w-6 h-6 text-[#2496ED]" />, name: "Docker" },
    { icon: <img src={slackSvg} className="w-6 h-6" alt="Slack" />, name: "Slack" },
    { icon: <img src={gmailPng} className="w-6 h-6" alt="Gmail" />, name: "Gmail" },
    { icon: <img src={shopifyPng} className="w-6 h-6" alt="Shopify" />, name: "Shopify" },
    { icon: <img src={teamsPng} className="w-6 h-6" alt="Teams" />, name: "Teams" },
    { icon: <img src={outlookPng} className="w-6 h-6" alt="Outlook" />, name: "Outlook" },
  ],
];
