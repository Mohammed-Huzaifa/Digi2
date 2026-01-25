import { PythonIcon } from "@/components/icons/skills/python-icon";
import { DriveIcon } from "@/components/icons/skills/google-drive";
import { GrokIcon } from "@/components/icons/skills/grok-icon";
import { UpstashIcon } from "@/components/icons/skills/upstash-icon";
import { DeepSeekIcon } from "@/components/icons/skills/deepseek-icon";
import { AzureIcon } from "@/components/icons/skills/azure-icon";
import { FastAPIIcon } from "@/components/icons/skills/fast-api-icon";
import { GeminiIcon } from "@/components/icons/skills/gemini-icon";
import { LangchainIcon } from "@/components/icons/skills/langchain-icon";
import { OpenaiIcon } from "@/components/icons/skills/open-ai-icon";
import { OpencvIcon } from "@/components/icons/skills/open-cv-icon";
import { PineconeIcon } from "@/components/icons/skills/pinecone-icon";
import { PostgresqlIcon } from "@/components/icons/skills/postgresql-icon";
import { MongodbIcon } from "@/components/icons/skills/mongo-db-icon";
import { DockerIcon } from "@/components/icons/skills/docker-icon";
import { AnthropicIcon } from "@/components/icons/skills/anthropic-icon";
import { CheerioIcon } from "@/components/icons/skills/cheerio-icon";
import { OllamaIcon } from "@/components/icons/skills/ollama-icon";
import type { Skill } from "./types";

export const skillRows: Skill[][] = [
  [
    { icon: <PythonIcon className="w-6 h-6" />, name: "Python" },
    { icon: <DriveIcon className="w-6 h-6" />, name: "Google Drive" },
    { icon: <GrokIcon className="w-6 h-6" />, name: "Grok" },
    { icon: <AzureIcon className="w-6 h-6" />, name: "Azure" },
    { icon: <FastAPIIcon className="w-6 h-6" />, name: "FastAPI" },
    { icon: <GeminiIcon className="w-6 h-6" />, name: "Gemini" },
  ],
  [
    { icon: <LangchainIcon className="w-6 h-6" />, name: "LangChain" },
    { icon: <OpenaiIcon className="w-6 h-6" />, name: "OpenAI API" },
    { icon: <DeepSeekIcon className="w-6 h-6" />, name: "DeepSeek" },
    { icon: <OpencvIcon className="w-6 h-6" />, name: "OpenCV" },
    { icon: <PineconeIcon className="w-6 h-6" />, name: "Pinecone" },
    { icon: <UpstashIcon className="w-6 h-6" />, name: "Upstash" },
  ],
  [
    { icon: <PostgresqlIcon className="w-6 h-6" />, name: "PostgreSQL" },
    { icon: <MongodbIcon className="w-6 h-6" />, name: "MongoDB" },
    { icon: <DockerIcon className="w-6 h-6" />, name: "Docker" },
    { icon: <AnthropicIcon className="w-6 h-6" />, name: "Anthropic" },
    { icon: <CheerioIcon className="w-6 h-6" />, name: "Cheerio" },
    { icon: <OllamaIcon className="w-6 h-6" />, name: "Ollama" },
  ],
];
