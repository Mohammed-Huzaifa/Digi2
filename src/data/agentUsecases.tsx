import { Workflow, type LucideIcon } from "lucide-react";

export interface Scenario {
  id: string;
  kicker: string;
  title: string;
  hook: string;
  description: string;
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
    cardHook: "From resume to hire: five agents, zero manual handoffs.",
    cardDescription:
      "A closed-loop pipeline that enriches resumes, runs AI voice screenings, schedules interviews, and briefs your execs, writing every result straight back into Workday.",
    cardStat: "5 connected agents · 3 lifecycle stages",
    integrations: ["Workday", "Voice AI", "Calendar & Meetings", "Email"],
    heroTitle: "Your recruiting pipeline, running itself inside Workday.",
    heroSubhead:
      "DigiWorks AgentFlow chains five AI agents across Workday and the voice, calendar, and email channels your recruiters already use. Every time a recruiter moves a candidate's stage, the next agent fires automatically and writes its results straight back into the candidate record.",
    problems: [
      {
        title: "Resumes pile up unread",
        desc: "Hundreds of applications land in Workday, and every one needs a human to open the PDF, compare it to the job description, and judge fit before a recruiter even picks up the phone.",
      },
      {
        title: "Screening calls eat the calendar",
        desc: "First-round phone screens are still booked, dialed, and summarized by hand, one candidate at a time, one recruiter at a time.",
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
        hook: "Every resume becomes a structured, scored profile before a recruiter opens it.",
        description:
          "The moment a candidate applies, this agent reads the resume, weighs it against the job description, and adds a structured, scored profile straight to the candidate's Workday record, before anyone on the team has opened the file.",
        benefit:
          "Recruiters open Workday to a fully parsed profile: skills, experience, education, and a fit assessment, instead of a raw PDF.",
      },
      {
        id: "screening-interview",
        kicker: "Scenario 2",
        title: "Screening Interview Agent",
        hook: "An AI-led phone interview happens before your recruiter finds time to call.",
        description:
          "As soon as a candidate reaches the Screening stage, this agent calls them, runs the first-round interview by voice, and saves the transcript and recording straight back to their Workday record.",
        benefit:
          "By the time a recruiter checks the candidate record, the screening call has already happened: transcript, recording, and a structured summary included.",
      },
      {
        id: "interview-cycle-3a",
        kicker: "Scenario 3a",
        title: "Interview Question Generator",
        hook: "Scheduling, confirmation, and interview prep, handled before a human says a word.",
        description:
          "Once a candidate reaches the Interview stage, this agent checks the interviewer's calendar, calls the candidate to confirm a time, books the meeting, and sends the interviewer a set of tailored questions built from the candidate's resume summary.",
        benefit:
          "The interviewer opens their inbox to a confirmed meeting invite and a tailored question set, built from the candidate's actual resume summary.",
      },
      {
        id: "interview-cycle-3b",
        kicker: "Scenario 3b",
        title: "Email Reply to Workday",
        hook: "Interview notes go from inbox reply to Workday record automatically.",
        description:
          "After the interview, the interviewer simply replies with the candidate's answers. This agent reads that reply and writes the structured answers straight into Workday.",
        benefit:
          "No copy-pasting interviewer feedback. The reply becomes structured answers in the candidate's Workday record within seconds.",
      },
      {
        id: "interview-cycle-3c",
        kicker: "Scenario 3c",
        title: "Executive Meeting Intelligence Agent",
        hook: "Executives get the verdict, not the transcript.",
        description:
          "As soon as the interview transcript is ready, this agent reviews it and sends leadership a clear summary and hiring recommendation, written straight back into Workday.",
        benefit:
          "Leadership gets a structured recommendation and summary the moment the interview ends, no transcript-reading required.",
      },
    ],
    closingTitle: "Five agents. One closed loop. Zero manual re-entry.",
    closingBody:
      "Workday stage changes drive resume enrichment, an AI voice screening round, and a full interview cycle: scheduling, question generation, answer capture, and meeting summarization, with every result written back into Workday automatically. Recruiters always see the latest AI-generated data on the candidate record, without touching a spreadsheet or re-typing a single field.",
    closingStats: [
      { value: "5", label: "connected agents" },
      { value: "4", label: "systems synced automatically" },
      { value: "0", label: "manual data re-entry" },
    ],
  },
];

export function getAgentUsecase(slug: string) {
  return agentUsecases.find((u) => u.slug === slug);
}
