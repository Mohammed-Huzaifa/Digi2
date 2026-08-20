import {
  Workflow,
  FileEdit,
  FileSearch,
  Phone,
  CalendarCheck,
  ClipboardList,
  MessageSquare,
  BarChart3,
  ShieldCheck,
  Lock,
  ClipboardCheck,
  type LucideIcon,
} from "lucide-react";
import type { RecruitingSample } from "@/components/RecruitingUIMockup";

export interface Scenario {
  id: string;
  number: string;
  icon: LucideIcon;
  title: string;
  headline: string;
  description: string;
  before: string;
  after: string;
  caption: string;
  uiSample: RecruitingSample;
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
  heroTrace: { day: string; desc: string; icon: LucideIcon }[];
  costTitle: string;
  costSub: string;
  strains: { title: string; desc: string }[];
  costClose: string;
  beforeSample: RecruitingSample;
  podIntro: string;
  scenarios: Scenario[];
  journeyIntro: string;
  journey: { day: string; desc: string }[];
  journeyClose: string;
  metricsIntro: string;
  metrics: { title: string; desc: string }[];
  pilotLine: string;
  guardrails: { icon: LucideIcon; title: string; desc: string }[];
  dashboardSample: RecruitingSample;
  approvalSample: RecruitingSample;
  builtFor: string[];
  closeTitle: string;
  closeSub: string;
}

export const agentUsecases: AgentUsecase[] = [
  {
    slug: "hr-automation-flow",
    icon: Workflow,
    eyebrow: "AI RECRUITING SUITE",
    title: "HR Automation Flow",
    cardHook: "From resume to hire: seven agents, zero manual handoffs.",
    cardDescription:
      "A closed-loop pipeline that posts the role, enriches resumes, runs AI voice screenings, schedules interviews, and briefs your execs, writing every result straight back into Workday.",
    cardStat: "7 connected agents · full hiring lifecycle",
    integrations: ["Voice AI", "Calendar & Meetings", "Email"],
    heroTitle: "Your best candidates aren't lost to competitors. They're lost to your process.",
    heroSubhead:
      "Open roles carry a cost every day they sit unfilled. Digiworks AI coworkers run the recruiting pipeline end to end: posting, screening, scheduling, preparation, and feedback, so your team owns every decision while the agents carry the work. Live in weeks. Measured from day one.",
    heroTrace: [
      { day: "Tue", desc: "Role posted to Workday, drafted and approved in minutes.", icon: FileEdit },
      { day: "Mon", desc: "Resumes scored and written to the candidate record.", icon: FileSearch },
      { day: "Tue", desc: "Screening calls complete, transcripts saved.", icon: Phone },
      { day: "Wed", desc: "Interview scheduled, tailored questions sent.", icon: CalendarCheck },
      { day: "Thu", desc: "Interviewer feedback captured while it's fresh.", icon: MessageSquare },
      { day: "Fri", desc: "Decision-ready debrief lands with leadership.", icon: BarChart3 },
    ],

    costTitle: "The cost of a slow hire",
    costSub: "Every open role is a bet that the delay is cheaper than the risk.",
    strains: [
      { title: "Volume", desc: "Hundreds of applications per role. Review is hurried and uneven, good candidates slip through unnoticed." },
      { title: "Coordination", desc: "One interview can take a dozen emails across three calendars. Momentum, and candidates, get lost in between." },
      { title: "Feedback", desc: "Debriefs wait days for input scattered across inboxes. Decisions lose context, and speed." },
      { title: "Evaluation", desc: "Every interviewer applies a different standard, leaving leadership with impressions instead of comparable data." },
    ],
    costClose: "The Monday meeting starts with the decision already in reach. The work was done overnight.",
    beforeSample: {
      kind: "inbox",
      system: "Inbox",
      heading: "Today, before",
      threads: [
        { sender: "Adrian · Hiring Manager", text: "Any update on the feedback for Marcus?", time: "9:14" },
        { sender: "Adrian · Hiring Manager", text: "Following up, still waiting on feedback", time: "11:40" },
        { sender: "Adrian · Hiring Manager", text: "Bump: can we close this out today?", time: "2:55" },
      ],
    },

    podIntro: "Seven agents, one complete pipeline. Each handles one stage; together they run the entire loop, from request to decision.",
    scenarios: [
      {
        id: "job-description",
        number: "01",
        icon: FileEdit,
        title: "Job Description Agent",
        headline: "A three-line request becomes a posted role, in minutes.",
        description:
          "The recruiter forwards the hiring manager's requirement from Slack, email, or a meeting note. The agent drafts the JD in the organization's standard format; HR approves it into Workday or your HR management tool. No template hunting, no format drift, no drafting cycles.",
        before: "Two to three days of drafting and follow-up per role.",
        after: "Requirement in, company-format JD out, role live on approval.",
        caption: "From request to live role, in minutes.",
        uiSample: {
          kind: "chat",
          system: "Digiworks",
          heading: "Job Description Agent",
          bubbles: [
            { from: "user", text: "\"Senior backend engineer, Go, payments, Toronto.\"" },
            { from: "agent", label: "Digi · AI Coworker", text: "Drafted in your standard format: role summary, requirements, comp band. Ready for HR review." },
          ],
          confirm: "Job posted in Workday.",
        },
      },
      {
        id: "resume-enrichment",
        number: "02",
        icon: FileSearch,
        title: "Resume Enrichment Agent",
        headline: "Every resume read in seconds, and the strong candidates found.",
        description:
          "CVs are parsed, skills mapped, and fit scored against the job description, then written to your existing app as candidate profiles.",
        before: "Review is uneven; strong candidates are missed under volume.",
        after: "Hundreds of resumes become scored, comparable profiles by start of day.",
        caption: "Every candidate, read and scored.",
        uiSample: {
          kind: "split",
          system: "Workday",
          heading: "Candidate Profile",
          raw: "Marcus Reyes\n6+ yrs backend eng.\nGo, Postgres, AWS.\nLed payments migration\nat prior fintech...",
          name: "Marcus Reyes",
          role: "Senior Backend Engineer",
          score: { label: "Fit score", value: "91%" },
          fields: [
            { label: "Skills", value: "Go, Postgres, AWS, Kafka" },
            { label: "Experience", value: "6 years, payments infra" },
            { label: "Written to", value: "Candidate record" },
          ],
        },
      },
      {
        id: "screening",
        number: "03",
        icon: Phone,
        title: "Screening Agent",
        headline: "First-round screening, around the clock.",
        description:
          "The agent runs structured voice screenings, capturing responses, transcripts, and summaries without a recruiter on the line. Candidates in any time zone move forward without waiting weeks.",
        before: "Phone screens consume a recruiter's full day.",
        after: "Screens complete overnight; results sit in your app by morning.",
        caption: "Screening, on your schedule.",
        uiSample: {
          kind: "call",
          system: "Workday",
          heading: "Screening Call",
          duration: "6:48",
          lines: [
            { speaker: "ai", text: "Tell me about a recent production incident you handled." },
            { speaker: "candidate", text: "A payments queue backed up during a deploy. I rolled back, drained the queue, then patched forward." },
          ],
          tags: ["Strong signal", "Transcript saved"],
        },
      },
      {
        id: "interview-scheduling",
        number: "04",
        icon: CalendarCheck,
        title: "Interview Scheduling Agent",
        headline: "One calendar for the hiring manager, the recruiter, and the candidate.",
        description:
          "Availability is checked across all three, the candidate is confirmed by voice, and the interview is booked. No double-booking, no dropped threads.",
        before: "A dozen emails to find a slot everyone can hold.",
        after: "Three parties aligned, booked, and confirmed automatically.",
        caption: "Three calendars, one slot.",
        uiSample: {
          kind: "calendar",
          system: "Calendar",
          heading: "Wed, Interview",
          time: "2:00 PM to 2:45 PM",
          title: "Interview: Marcus Reyes",
          subtitle: "Candidate · Recruiter · Hiring Manager, all confirmed",
          skipped: ["1:00 PM, conflict, skipped", "3:30 PM, conflict, skipped"],
        },
      },
      {
        id: "questionnaire",
        number: "05",
        icon: ClipboardList,
        title: "Questionnaire Agent",
        headline: "The hiring manager walks in prepared, with questions worth asking.",
        description:
          "Before each interview, the agent assembles a question set tailored to the role and the candidate, so every conversation starts from the same strong foundation.",
        before: "Improvised interviews that resist comparison.",
        after: "Consistent conversations from the first question.",
        caption: "Prepared before the interview.",
        uiSample: {
          kind: "email",
          system: "Digiworks",
          heading: "Interview Questions",
          from: "To: Adrian (Hiring Manager)",
          subject: "Interview questions: Marcus Reyes, Senior Backend Engineer",
          points: [
            "Walk through your approach to a queue backup under production load.",
            "How do you decide when to roll back versus patch forward?",
            "Tell me about migrating a payments system with zero downtime.",
          ],
        },
      },
      {
        id: "feedback",
        number: "06",
        icon: MessageSquare,
        title: "Feedback Agent",
        headline: "Interview feedback, captured while it's fresh.",
        description:
          "After the interview, the agent notes the hiring manager's feedback from chat or voice and saves it to the candidate record, directly in the recruiting software.",
        before: "Feedback lives in memory and scattered emails; debriefs stretch across days.",
        after: "The verdict is captured and comparable for every candidate.",
        caption: "Feedback, captured while fresh.",
        uiSample: {
          kind: "chat",
          system: "Digiworks",
          heading: "Feedback Agent",
          bubbles: [
            { from: "agent", label: "Digi · AI Coworker", text: "How did the interview with Marcus go?" },
            { from: "user", text: "Strong on system design, a bit light on team leadership examples. Would move forward." },
          ],
          confirm: "Saved to candidate record, Workday.",
        },
      },
      {
        id: "executive-debrief",
        number: "07",
        icon: BarChart3,
        title: "Executive Debrief Agent",
        headline: "Decision-ready summaries, without the transcript-diving.",
        description:
          "Interview transcripts are distilled into concise executive summaries: strengths, concerns, and a clear recommendation, so leadership reviews signal, not noise.",
        before: "Leadership wades through transcripts and gut feel.",
        after: "One crisp, decision-ready summary per candidate.",
        caption: "Signal, not transcripts.",
        uiSample: {
          kind: "summary",
          system: "Digiworks",
          heading: "Executive Summary",
          recommendation: "Strong Hire",
          points: [
            "Deep, specific answers on incident response and system design.",
            "Light on leadership examples; worth probing in a follow-up.",
            "No concerns on technical depth or team fit.",
          ],
        },
      },
    ],

    journeyIntro: "The same week, with the pod running in the background.",
    journey: [
      { day: "Tue 09:00", desc: "Hiring manager: \"Senior backend engineer, Go, payments, Toronto.\"" },
      { day: "Tue 09:05", desc: "JD drafted in company format, sent for HR approval." },
      { day: "Tue 09:15", desc: "HR approves. Role live in Workday." },
      { day: "Mon 09:00", desc: "Applications arrive." },
      { day: "Mon 09:03", desc: "Profiles scored and written to the ATS." },
      { day: "Tue", desc: "Voice screens complete, summarized." },
      { day: "Wed", desc: "Interview booked: candidate, recruiter, hiring manager aligned." },
      { day: "Wed", desc: "Hiring manager receives the tailored question set." },
      { day: "Thu", desc: "Feedback captured, saved to Workday." },
      { day: "Fri", desc: "Decision-ready debrief on the candidate." },
    ],
    journeyClose: "A week that used to run on coordination now runs on its own, with approvals exactly where they belong.",

    metricsIntro: "The suite pays for itself in the places leadership already tracks.",
    metrics: [
      { title: "Requisition to posting", desc: "From days to minutes." },
      { title: "Recruiter capacity", desc: "Administrative load cut; time returned to candidates and decisions." },
      { title: "Time to fill", desc: "Weeks compressed; vacancy cost reduced." },
      { title: "Decision quality", desc: "Every candidate compared on the same structured basis." },
      { title: "Scale", desc: "Higher volume without added headcount." },
    ],
    pilotLine: "A focused pilot, live in weeks, with impact measured from the first workflow. The numbers carry the conversation.",
    guardrails: [
      { icon: ShieldCheck, title: "Audit Trail", desc: "Every agent action is logged and reviewable." },
      { icon: Lock, title: "Approval Gates", desc: "Human approval required on offers and sensitive steps." },
      { icon: ClipboardCheck, title: "Non-Destructive", desc: "Nothing deleted, nothing committed without policy." },
    ],
    dashboardSample: {
      kind: "dashboard",
      system: "Digiworks",
      heading: "Pipeline Dashboard",
      stats: [
        { value: "68%", label: "Recruiter time saved" },
        { value: "14", label: "Roles in pipeline" },
        { value: "92%", label: "Auto-resolved steps" },
      ],
      log: [
        { text: "Feedback Agent wrote to candidate record", time: "2m ago" },
        { text: "Scheduling Agent booked interview slot", time: "18m ago" },
        { text: "Resume Agent scored 12 new applicants", time: "1h ago" },
      ],
    },
    approvalSample: {
      kind: "approval",
      system: "Workday",
      heading: "Approval Required",
      request: "Offer request: Marcus Reyes",
      detail: "Senior Backend Engineer · $168,000 base",
      log: [
        { text: "Executive Debrief Agent flagged offer-ready", time: "3m ago" },
        { text: "Awaiting hiring manager approval", time: "now" },
      ],
    },

    builtFor: [
      "Lives inside Microsoft Teams and Slack, no new login for your team.",
      "Posts jobs natively to Workday, your ATS and HRIS in one.",
      "Stores interview feedback in the recruiting software, on the candidate record.",
      "Connects to your calendar and email systems.",
      "Aligns to your security model and permissions.",
      "Escalation rules defined by your teams.",
    ],

    closeTitle: "Tell us about one role you're hiring for today.",
    closeSub: "We'll show you exactly where the coworkers take over, live, in your stack.",
  },
];

export function getAgentUsecase(slug: string) {
  return agentUsecases.find((u) => u.slug === slug);
}
