import { Workflow, type LucideIcon } from "lucide-react";
import type { FlowNode } from "@/components/AgentFlowDiagram";

export interface Scenario {
  id: string;
  kicker: string;
  title: string;
  trigger: string;
  hook: string;
  description: string;
  nodes: FlowNode[];
  benefit: string;
}

export interface AgentUsecase {
  slug: string;
  icon: LucideIcon;
  eyebrow: string;
  title: string;
  cardHook: string;
  cardDescription: string;
  cardStat: string;
  integrations: string[];
  heroTitle: string;
  heroSubhead: string;
  problems: { title: string; desc: string }[];
  scenarios: Scenario[];
  closingTitle: string;
  closingBody: string;
  closingStats: { value: string; label: string }[];
}

export const agentUsecases: AgentUsecase[] = [
  {
    slug: "hr-automation-flow",
    icon: Workflow,
    eyebrow: "DIGIWORKS AGENTFLOW",
    title: "HR Automation Flow",
    cardHook: "From resume to hire — five agents, zero manual handoffs.",
    cardDescription:
      "A closed-loop pipeline that enriches resumes, runs AI voice screenings, schedules interviews, and briefs your execs — writing every result straight back into Workday.",
    cardStat: "5 connected agents · 3 lifecycle stages",
    integrations: ["Workday", "Twilio", "Microsoft Teams", "Gmail"],
    heroTitle: "Your recruiting pipeline, running itself — inside Workday.",
    heroSubhead:
      "DigiWorks AgentFlow chains five AI agents across Workday, Twilio, Microsoft Teams, and Gmail. Every time a recruiter moves a candidate's stage, the next agent fires automatically — and writes its results straight back into the candidate record.",
    problems: [
      {
        title: "Resumes pile up unread",
        desc: "Hundreds of applications land in Workday, and every one needs a human to open the PDF, compare it to the job description, and judge fit — before a recruiter even picks up the phone.",
      },
      {
        title: "Screening calls eat the calendar",
        desc: "First-round phone screens are still booked, dialed, and summarized by hand — one candidate at a time, one recruiter at a time.",
      },
      {
        title: "Feedback gets lost in inboxes",
        desc: "Interviewer notes arrive as scattered email replies, with no structured path back into the candidate record for leadership to act on.",
      },
    ],
    scenarios: [
      {
        id: "resume-enrichment",
        kicker: "Scenario 1",
        title: "Resume Enrichment Agent",
        trigger: "Triggers on: a new resume or application submitted in Workday",
        hook: "Every resume becomes a structured, scored profile before a recruiter opens it.",
        description:
          "The agentflow extracts the resume content, has an LLM parse and compare it against the job description, and posts the enriched candidate profile back to Workday via API.",
        nodes: [
          { label: "Start", type: "trigger", detail: "Receives the trigger from Workday with the candidate/application reference and resume file." },
          { label: "PDF to Text", type: "function", detail: "Converts the uploaded resume PDF into plain text for parsing." },
          { label: "Resume Parsing", type: "llm", detail: "Extracts structured candidate data (skills, experience, education) and compares it against the job description to produce an AI summary/fit assessment." },
          { label: "Get WD Token", type: "function", detail: "Requests/refreshes the Workday OAuth access token used to authenticate the API call." },
          { label: "Build POST Body", type: "function", detail: "Assembles the Workday API request payload from the parsed resume data." },
          { label: "Post Request to Workday", type: "http", detail: "Sends the enriched profile / AI summary object to Workday via API (PATCH/POST)." },
        ],
        benefit:
          "Recruiters open Workday to a fully parsed profile — skills, experience, education, and an AI fit assessment — instead of a raw PDF.",
      },
      {
        id: "screening-interview",
        kicker: "Scenario 2",
        title: "Screening Interview Agent (Twilio)",
        trigger: "Triggers on: the recruiter moves the candidate to the Screening stage",
        hook: "An AI-led phone interview happens before your recruiter finds time to call.",
        description:
          "This calls the candidate, conducts an AI-led voice screening interview, and then extracts and writes the transcript and recording back to Workday.",
        nodes: [
          { label: "Start", type: "trigger", detail: "Fires when Workday moves the candidate into the Screening stage." },
          { label: "Interviewer", type: "voice", detail: "Places an outbound AI voice call to the candidate, conducts the screening interview, and records + transcribes the call." },
          { label: "Call Content Extractor", type: "llm", detail: "Processes the raw call transcript into a structured summary of questions and candidate answers." },
          { label: "POST Body Structure", type: "function", detail: "Builds the Workday API request payload from the extracted call content." },
          { label: "GET WD Token", type: "function", detail: "Requests/refreshes the Workday OAuth access token." },
          { label: "Send to Workday", type: "http", detail: "Posts the interview transcript and recording link back to Workday." },
        ],
        benefit:
          "By the time a recruiter checks the candidate record, the screening call has already happened — transcript, recording, and structured Q&A summary included.",
      },
      {
        id: "interview-cycle-3a",
        kicker: "Scenario 3a",
        title: "Interview Question Generator",
        trigger: "Triggers on: the recruiter moves the candidate to the Interview stage",
        hook: "Scheduling, confirmation, and interview prep — handled before a human says a word.",
        description:
          "Checks the interviewer's calendar, calls the candidate to confirm availability, schedules the Teams meeting, pulls the resume summary from Workday, generates tailored interview questions, and e-mails them to the interviewer.",
        nodes: [
          { label: "Start", type: "trigger", detail: "Fires when Workday moves the candidate into the Interview stage; receives candidate ID, job application ID and role." },
          { label: "Get Availability", type: "llm", detail: "Agent with an Outlook calendar tool checks the interviewer's calendar for open slots." },
          { label: "Interview Scheduler", type: "voice", detail: "Calls the candidate to confirm their availability against the proposed slots." },
          { label: "Create Event", type: "llm", detail: "Agent with a Teams calendar tool creates the interview meeting on Microsoft Teams once a slot is confirmed." },
          { label: "Get Token", type: "function", detail: "Requests/refreshes the Workday OAuth access token." },
          { label: "Get Resume Summary", type: "http", detail: "Pulls the candidate's AI resume summary from Workday to inform question generation." },
          { label: "Question Generator", type: "llm", detail: "Agent with a Gmail tool generates role-specific interview questions and e-mails them to the interviewer." },
        ],
        benefit:
          "The interviewer opens their inbox to a confirmed Teams meeting and a tailored question set — built from the candidate's actual resume summary.",
      },
      {
        id: "interview-cycle-3b",
        kicker: "Scenario 3b",
        title: "Email Reply to Workday",
        trigger: "Triggers on: the interviewer replies to the question e-mail with the candidate's answers",
        hook: "Interview notes go from inbox reply to Workday record automatically.",
        description:
          "After the Teams interview, the interviewer replies to that e-mail with the candidate's answers; this agentflow extracts the answers from the reply and writes them to Workday.",
        nodes: [
          { label: "Start", type: "trigger", detail: "Fires when the interviewer replies to the interview-question e-mail with the candidate's answers." },
          { label: "Response Extractor", type: "llm", detail: "Parses the e-mail reply and extracts the candidate's answers to each interview question." },
          { label: "Post Body Structure", type: "function", detail: "Builds the Workday API request payload from the extracted answers." },
          { label: "Get WD Token", type: "function", detail: "Requests/refreshes the Workday OAuth access token." },
          { label: "Post Request", type: "http", detail: "Writes the candidate's interview answers back to Workday." },
        ],
        benefit:
          "No copy-pasting interviewer feedback. The reply email becomes structured answers in the candidate's Workday record within seconds.",
      },
      {
        id: "interview-cycle-3c",
        kicker: "Scenario 3c",
        title: "Executive Meeting Intelligence Agent",
        trigger: "Triggers on: the Teams interview transcript becomes available",
        hook: "Executives get the verdict, not the transcript.",
        description:
          "Once the Teams interview transcript is available, this agent analyzes it and sends a summary and recommendation back to Workday.",
        nodes: [
          { label: "Start", type: "trigger", detail: "Fires once the Teams interview has ended and a transcript is available." },
          { label: "Data Collector", type: "llm", detail: "Agent collects and validates the required inputs, then calls a transcript_analyser tool that analyzes the Teams transcript and produces a summary and recommendation." },
          { label: "Written to Workday", type: "outcome", detail: "The summary and hiring recommendation are written back to the candidate's Workday record." },
        ],
        benefit:
          "Leadership gets a structured recommendation and summary the moment the interview ends — no transcript-reading required.",
      },
    ],
    closingTitle: "Five agents. One closed loop. Zero manual re-entry.",
    closingBody:
      "Workday stage changes drive resume enrichment, an AI voice screening round, and a full interview cycle — scheduling, question generation, answer capture, and meeting summarization — with every result written back into Workday automatically. Recruiters always see the latest AI-generated data on the candidate record, without touching a spreadsheet or re-typing a single field.",
    closingStats: [
      { value: "5", label: "connected agentflows" },
      { value: "4", label: "systems synced automatically" },
      { value: "0", label: "manual data re-entry" },
    ],
  },
];

export function getAgentUsecase(slug: string) {
  return agentUsecases.find((u) => u.slug === slug);
}
