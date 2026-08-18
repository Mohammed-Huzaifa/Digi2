import { Button } from "@/components/ui/button";
import {
  FileEdit,
  FileSearch,
  Phone,
  CalendarCheck,
  ClipboardList,
  MessageSquare,
  BarChart3,
  Check,
  ArrowRight,
  ShieldCheck,
  Lock,
  ClipboardCheck,
} from "lucide-react";
import { Link } from "wouter";
import { AnimatedSection, AnimatedText, AnimatedCard } from "@/components/AnimatedSection";
import { RecruitingUIMockup, type RecruitingSample } from "@/components/RecruitingUIMockup";

const beforeSample: RecruitingSample = {
  kind: "inbox",
  system: "Inbox",
  heading: "Today, before",
  threads: [
    { sender: "Priya · Hiring Manager", text: "Any update on the feedback for Marcus?", time: "9:14" },
    { sender: "Priya · Hiring Manager", text: "Following up, still waiting on feedback", time: "11:40" },
    { sender: "Priya · Hiring Manager", text: "Bump: can we close this out today?", time: "2:55" },
  ],
};

const dashboardSample: RecruitingSample = {
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
};

const approvalSample: RecruitingSample = {
  kind: "approval",
  system: "Workday",
  heading: "Approval Required",
  request: "Offer request: Marcus Reyes",
  detail: "Senior Backend Engineer · $168,000 base",
  log: [
    { text: "Executive Debrief Agent flagged offer-ready", time: "3m ago" },
    { text: "Awaiting hiring manager approval", time: "now" },
  ],
};

const strains = [
  {
    title: "Volume",
    desc: "Hundreds of applications per role. Review is hurried and uneven, good candidates slip through unnoticed.",
  },
  {
    title: "Coordination",
    desc: "One interview can take a dozen emails across three calendars. Momentum, and candidates, get lost in between.",
  },
  {
    title: "Feedback",
    desc: "Debriefs wait days for input scattered across inboxes. Decisions lose context, and speed.",
  },
  {
    title: "Evaluation",
    desc: "Every interviewer applies a different standard, leaving leadership with impressions instead of comparable data.",
  },
];

const agents = [
  {
    number: "01",
    icon: FileEdit,
    title: "Job Description Agent",
    headline: "A three-line request becomes a posted role, in minutes.",
    description:
      "The recruiter forwards the hiring manager's requirement from Slack, email, or a meeting note. The agent drafts the JD in the organization's standard format; HR approves it into Workday or your HR management tool. No template hunting, no format drift, no drafting cycles.",
    before: "Two to three days of drafting and follow-up per role.",
    after: "Requirement in, company-format JD out, role live on approval.",
    caption: "From request to live role, in minutes.",
    color: "bg-violet-100 text-violet-600 border-violet-200",
    uiSample: {
      kind: "chat",
      system: "Digiworks",
      heading: "Job Description Agent",
      bubbles: [
        { from: "user", text: "\"Senior backend engineer, Go, payments, Toronto.\"" },
        { from: "agent", label: "Digi · AI Coworker", text: "Drafted in your standard format: role summary, requirements, comp band. Ready for HR review." },
      ],
      confirm: "Job posted in Workday.",
    } satisfies RecruitingSample,
  },
  {
    number: "02",
    icon: FileSearch,
    title: "Resume Enrichment Agent",
    headline: "Every resume read in seconds, and the strong candidates found.",
    description:
      "CVs are parsed, skills mapped, and fit scored against the job description, then written to your existing app as candidate profiles.",
    before: "Review is uneven; strong candidates are missed under volume.",
    after: "Hundreds of resumes become scored, comparable profiles by start of day.",
    caption: "Every candidate, read and scored.",
    color: "bg-blue-100 text-blue-600 border-blue-200",
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
    } satisfies RecruitingSample,
  },
  {
    number: "03",
    icon: Phone,
    title: "Screening Agent",
    headline: "First-round screening, around the clock.",
    description:
      "The agent runs structured voice screenings, capturing responses, transcripts, and summaries without a recruiter on the line. Candidates in any time zone move forward without waiting weeks.",
    before: "Phone screens consume a recruiter's full day.",
    after: "Screens complete overnight; results sit in your app by morning.",
    caption: "Screening, on your schedule.",
    color: "bg-emerald-100 text-emerald-600 border-emerald-200",
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
    } satisfies RecruitingSample,
  },
  {
    number: "04",
    icon: CalendarCheck,
    title: "Interview Scheduling Agent",
    headline: "One calendar for the hiring manager, the recruiter, and the candidate.",
    description:
      "Availability is checked across all three, the candidate is confirmed by voice, and the interview is booked. No double-booking, no dropped threads.",
    before: "A dozen emails to find a slot everyone can hold.",
    after: "Three parties aligned, booked, and confirmed automatically.",
    caption: "Three calendars, one slot.",
    color: "bg-orange-100 text-orange-600 border-orange-200",
    uiSample: {
      kind: "calendar",
      system: "Calendar",
      heading: "Wed, Interview",
      time: "2:00 PM to 2:45 PM",
      title: "Interview: Marcus Reyes",
      subtitle: "Candidate · Recruiter · Hiring Manager, all confirmed",
      skipped: ["1:00 PM, conflict, skipped", "3:30 PM, conflict, skipped"],
    } satisfies RecruitingSample,
  },
  {
    number: "05",
    icon: ClipboardList,
    title: "Questionnaire Agent",
    headline: "The hiring manager walks in prepared, with questions worth asking.",
    description:
      "Before each interview, the agent assembles a question set tailored to the role and the candidate, so every conversation starts from the same strong foundation.",
    before: "Improvised interviews that resist comparison.",
    after: "Consistent conversations from the first question.",
    caption: "Prepared before the interview.",
    color: "bg-sky-100 text-sky-600 border-sky-200",
    uiSample: {
      kind: "email",
      system: "Digiworks",
      heading: "Interview Questions",
      from: "To: Priya (Hiring Manager)",
      subject: "Interview questions: Marcus Reyes, Senior Backend Engineer",
      points: [
        "Walk through your approach to a queue backup under production load.",
        "How do you decide when to roll back versus patch forward?",
        "Tell me about migrating a payments system with zero downtime.",
      ],
    } satisfies RecruitingSample,
  },
  {
    number: "06",
    icon: MessageSquare,
    title: "Feedback Agent",
    headline: "Interview feedback, captured while it's fresh.",
    description:
      "After the interview, the agent notes the hiring manager's feedback from chat or voice and saves it to the candidate record, directly in the recruiting software.",
    before: "Feedback lives in memory and scattered emails; debriefs stretch across days.",
    after: "The verdict is captured and comparable for every candidate.",
    caption: "Feedback, captured while fresh.",
    color: "bg-amber-100 text-amber-600 border-amber-200",
    uiSample: {
      kind: "chat",
      system: "Digiworks",
      heading: "Feedback Agent",
      bubbles: [
        { from: "agent", label: "Digi · AI Coworker", text: "How did the interview with Marcus go?" },
        { from: "user", text: "Strong on system design, a bit light on team leadership examples. Would move forward." },
      ],
      confirm: "Saved to candidate record, Workday.",
    } satisfies RecruitingSample,
  },
  {
    number: "07",
    icon: BarChart3,
    title: "Executive Debrief Agent",
    headline: "Decision-ready summaries, without the transcript-diving.",
    description:
      "Interview transcripts are distilled into concise executive summaries: strengths, concerns, and a clear recommendation, so leadership reviews signal, not noise.",
    before: "Leadership wades through transcripts and gut feel.",
    after: "One crisp, decision-ready summary per candidate.",
    caption: "Signal, not transcripts.",
    color: "bg-rose-100 text-rose-600 border-rose-200",
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
    } satisfies RecruitingSample,
  },
];

const journey = [
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
];

const metrics = [
  { title: "Requisition to posting", desc: "From days to minutes." },
  { title: "Recruiter capacity", desc: "Administrative load cut; time returned to candidates and decisions." },
  { title: "Time to fill", desc: "Weeks compressed; vacancy cost reduced." },
  { title: "Decision quality", desc: "Every candidate compared on the same structured basis." },
  { title: "Scale", desc: "Higher volume without added headcount." },
];

const guardrails = [
  { icon: ShieldCheck, title: "Audit Trail", desc: "Every agent action is logged and reviewable." },
  { icon: Lock, title: "Approval Gates", desc: "Human approval required on offers and sensitive steps." },
  { icon: ClipboardCheck, title: "Non-Destructive", desc: "Nothing deleted, nothing committed without policy." },
];

const builtFor = [
  "Lives inside Microsoft Teams and Slack, no new login for your team.",
  "Posts jobs natively to Workday, your ATS and HRIS in one.",
  "Stores interview feedback in the recruiting software, on the candidate record.",
  "Connects to your calendar and email systems.",
  "Aligns to your security model and permissions.",
  "Escalation rules defined by your teams.",
];

export default function RecruitingAgent() {
  return (
    <div className="flex flex-col pb-20 overflow-x-hidden">

      {/* HERO */}
      <section className="relative py-24 overflow-hidden bg-secondary/30">
        <div className="container relative z-10">
          <div className="max-w-3xl">
            <AnimatedText>
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white border border-border text-xs font-bold text-primary mb-6 uppercase tracking-wider shadow-sm">
                AI Recruiting Suite
              </div>

              <h1 className="text-4xl lg:text-6xl font-heading font-bold mb-6 tracking-tight">
                Your best candidates aren't lost to competitors. They're lost to your process.
              </h1>

              <p className="text-lg leading-relaxed max-w-2xl mb-8 text-muted-foreground">
                Open roles carry a cost every day they sit unfilled. Digiworks AI coworkers run the recruiting pipeline end to end: posting, screening, scheduling, preparation, and feedback, so your team owns every decision while the agents carry the work. Live in weeks. Measured from day one.
              </p>

              <div className="flex flex-wrap gap-4">
                <a href="#agents">
                  <Button size="lg" className="h-12 px-8 text-base bg-primary hover:bg-primary/90 text-white rounded-md shadow-lg shadow-primary/20 font-medium">
                    See the pod in action
                  </Button>
                </a>
                <a href="#business-case">
                  <Button size="lg" variant="outline" className="h-12 px-8 text-base bg-white hover:bg-secondary border-border rounded-md font-medium text-foreground">
                    The business case <ArrowRight className="ml-2 w-4 h-4" />
                  </Button>
                </a>
              </div>
            </AnimatedText>
          </div>
        </div>
      </section>

      {/* THE COST OF A SLOW HIRE */}
      <section className="py-24 glass-bg">
        <div className="container">
          <AnimatedSection className="max-w-3xl mx-auto text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-heading font-bold tracking-tight mb-6">
              The cost of a slow hire
            </h2>
            <p className="text-xl text-muted-foreground">
              Every open role is a bet that the delay is cheaper than the risk.
            </p>
          </AnimatedSection>

          <div className="grid lg:grid-cols-[1.1fr_0.9fr] gap-10 items-center">
            <div className="grid sm:grid-cols-2 gap-6">
              {strains.map((item, i) => (
                <AnimatedCard key={i} delay={i * 0.1} className="glass-card p-8 hover:shadow-xl transition-all h-full flex flex-col">
                  <h3 className="text-xl font-bold tracking-tight mb-3">{item.title}</h3>
                  <p className="text-muted-foreground leading-relaxed">{item.desc}</p>
                </AnimatedCard>
              ))}
            </div>
            <div className="flex flex-col items-center lg:items-end gap-3">
              <RecruitingUIMockup sample={beforeSample} />
              <span className="text-xs text-muted-foreground italic">Feedback follow-up, today.</span>
            </div>
          </div>

          <AnimatedSection className="max-w-2xl mx-auto text-center mt-16">
            <p className="text-lg font-medium text-foreground/80">
              The Monday meeting starts with the decision already in reach. The work was done overnight.
            </p>
          </AnimatedSection>
        </div>
      </section>

      {/* THE RECRUITING POD */}
      <section id="agents" className="container py-24 scroll-mt-24">
        <AnimatedSection className="mb-16">
          <p className="text-xs font-bold uppercase tracking-wider text-muted-foreground mb-3">
            The Recruiting Pod
          </p>
          <h2 className="text-4xl font-heading font-bold tracking-tight mb-4">
            Seven agents, one complete pipeline.
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl">
            Each handles one stage; together they run the entire loop, from request to decision.
          </p>
        </AnimatedSection>

        <div className="grid gap-8">
          {agents.map((agent, i) => (
            <AnimatedCard
              key={i}
              delay={i * 0.05}
              className="glass-card rounded-2xl p-8 md:p-10 grid md:grid-cols-[auto_1fr] gap-8 items-start"
            >
              {/* Left: icon + number */}
              <div className="flex flex-col items-center gap-3">
                <div className={`w-14 h-14 rounded-xl border flex items-center justify-center flex-shrink-0 ${agent.color}`}>
                  <agent.icon className="w-6 h-6" />
                </div>
                <span className="text-xs font-bold text-muted-foreground">{agent.number}</span>
              </div>

              {/* Right: content + mockup */}
              <div className="grid lg:grid-cols-[1.2fr_1fr] gap-8 items-center">
                <div>
                  <p className="text-xs font-bold uppercase tracking-wider text-primary mb-1">{agent.headline}</p>
                  <h3 className="text-2xl font-heading font-bold mb-3 tracking-tight">{agent.title}</h3>
                  <p className="text-muted-foreground leading-relaxed mb-6 max-w-2xl">{agent.description}</p>

                  <div className="grid sm:grid-cols-2 gap-3">
                    <div className="p-3 rounded-lg bg-secondary/50 border border-border text-sm">
                      <span className="font-semibold text-foreground/70 block mb-1">Before</span>
                      <span className="text-muted-foreground">{agent.before}</span>
                    </div>
                    <div className="p-3 rounded-lg bg-primary/5 border border-primary/10 text-sm">
                      <span className="font-semibold text-primary block mb-1">After</span>
                      <span className="text-foreground/80">{agent.after}</span>
                    </div>
                  </div>
                </div>

                <div className="flex flex-col items-center gap-3">
                  <RecruitingUIMockup sample={agent.uiSample} />
                  <span className="text-xs text-muted-foreground italic">{agent.caption}</span>
                </div>
              </div>
            </AnimatedCard>
          ))}
        </div>
      </section>

      {/* THE JOURNEY */}
      <section className="py-24 border-y border-border/50 glass-bg">
        <div className="container">
          <AnimatedSection className="text-center mb-16">
            <p className="text-xs font-bold uppercase tracking-wider text-muted-foreground mb-3">
              One Week, End to End
            </p>
            <h2 className="text-4xl font-heading font-bold tracking-tight mb-4">
              The same week, with the pod running in the background
            </h2>
          </AnimatedSection>

          <AnimatedCard className="glass-card rounded-2xl p-8 md:p-10 max-w-3xl mx-auto">
            <div className="flex flex-col divide-y divide-border">
              {journey.map((item, i) => (
                <div key={i} className="flex gap-6 py-4 first:pt-0 last:pb-0">
                  <span className="w-24 flex-shrink-0 text-xs font-bold text-primary font-heading">{item.day}</span>
                  <span className="text-sm text-foreground/80 leading-relaxed">{item.desc}</span>
                </div>
              ))}
            </div>
          </AnimatedCard>

          <AnimatedSection className="max-w-2xl mx-auto text-center mt-12">
            <p className="text-lg font-medium text-foreground/80">
              A week that used to run on coordination now runs on its own, with approvals exactly where they belong.
            </p>
          </AnimatedSection>
        </div>
      </section>

      {/* WHAT CHANGES, AND HOW IT'S MEASURED */}
      <section id="business-case" className="container py-24 scroll-mt-24">
        <div className="grid lg:grid-cols-2 gap-16 items-center mb-16">
          <AnimatedSection>
            <p className="text-xs font-bold uppercase tracking-wider text-muted-foreground mb-3">
              What Changes, and How It's Measured
            </p>
            <h2 className="text-3xl font-heading font-bold mb-4 tracking-tight">
              The suite pays for itself in the places leadership already tracks.
            </h2>
            <ul className="space-y-4 mt-8">
              {metrics.map((item, i) => (
                <li key={i} className="flex gap-3 items-start">
                  <div className="mt-1 w-5 h-5 rounded-full bg-primary/10 flex items-center justify-center text-primary flex-shrink-0">
                    <Check className="w-3 h-3" />
                  </div>
                  <span className="text-foreground/80">
                    <span className="font-semibold text-foreground">{item.title}: </span>
                    {item.desc}
                  </span>
                </li>
              ))}
            </ul>
            <p className="text-sm text-muted-foreground mt-8 leading-relaxed">
              A focused pilot, live in weeks, with impact measured from the first workflow. The numbers carry the conversation.
            </p>
          </AnimatedSection>

          <div className="flex flex-col items-center lg:items-end gap-3">
            <RecruitingUIMockup sample={dashboardSample} />
            <span className="text-xs text-muted-foreground italic">Impact, measured.</span>
          </div>
        </div>

        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <AnimatedCard className="glass-card rounded-2xl p-8">
            <h3 className="text-xl font-bold mb-2">Guardrails</h3>
            <p className="text-sm text-muted-foreground mb-6">Non-negotiable, on every deployment.</p>
            <div className="space-y-4">
              {guardrails.map((item, i) => (
                <div key={i} className="flex gap-4 p-4 bg-secondary/50 rounded-lg border border-border">
                  <div className="w-9 h-9 rounded-lg bg-primary/10 flex items-center justify-center text-primary flex-shrink-0">
                    <item.icon className="w-4 h-4" />
                  </div>
                  <div>
                    <span className="font-semibold text-sm block">{item.title}</span>
                    <span className="text-sm text-muted-foreground">{item.desc}</span>
                  </div>
                </div>
              ))}
            </div>
          </AnimatedCard>

          <div className="flex flex-col items-center lg:items-end gap-3">
            <RecruitingUIMockup sample={approvalSample} />
            <span className="text-xs text-muted-foreground italic">Humans approve. Agents execute.</span>
          </div>
        </div>
      </section>

      {/* BUILT FOR THE WAY YOU ALREADY WORK */}
      <section className="py-24 glass-bg">
        <div className="container">
          <AnimatedSection className="max-w-3xl mx-auto text-center mb-12">
            <h2 className="text-3xl lg:text-4xl font-heading font-bold tracking-tight mb-6">
              Built for the way you already work
            </h2>
          </AnimatedSection>

          <div className="grid sm:grid-cols-2 gap-4 max-w-3xl mx-auto">
            {builtFor.map((item, i) => (
              <AnimatedCard key={i} delay={i * 0.05} className="glass-card p-5 rounded-xl flex gap-3 items-start">
                <div className="mt-0.5 w-5 h-5 rounded-full bg-primary/10 flex items-center justify-center text-primary flex-shrink-0">
                  <Check className="w-3 h-3" />
                </div>
                <span className="text-sm text-foreground/80">{item}</span>
              </AnimatedCard>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="container pb-24">
        <AnimatedSection>
          <div className="bg-[#111827] rounded-2xl p-12 text-center text-white relative overflow-hidden shadow-2xl">
            <div className="absolute top-0 left-0 w-full h-full opacity-20">
              <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-primary via-transparent to-transparent blur-3xl" />
            </div>
            <div className="relative z-10 max-w-2xl mx-auto space-y-8">
              <h2 className="text-3xl lg:text-4xl font-heading font-bold tracking-tight text-gray-300">
                Tell us about one role you're hiring for today.
              </h2>
              <p className="text-gray-300 text-lg">
                We'll show you exactly where the coworkers take over, live, in your stack.
              </p>
              <div className="flex flex-wrap gap-4 justify-center">
                <Link href="/contact">
                  <Button size="lg" className="h-14 px-10 text-lg rounded-md shadow-xl bg-white text-black hover:bg-gray-100 font-medium">
                    Book a 20-minute walkthrough
                  </Button>
                </Link>
                <Link href="/contact">
                  <Button size="lg" variant="outline" className="h-14 px-10 text-lg rounded-md border-white/20 bg-transparent text-white hover:bg-white/10 font-medium">
                    Talk to our team
                  </Button>
                </Link>
              </div>
            </div>
          </div>
        </AnimatedSection>
      </section>

    </div>
  );
}
