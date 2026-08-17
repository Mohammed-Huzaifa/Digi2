import { Button } from "@/components/ui/button";
import {
  FileText,
  Phone,
  Calendar,
  Mail,
  BarChart3,
  Check,
  ArrowRight,
  ChevronRight,
} from "lucide-react";
import { Link } from "wouter";
import { AnimatedSection, AnimatedText, AnimatedCard } from "@/components/AnimatedSection";

const agents = [
  {
    number: "01",
    icon: FileText,
    title: "Resume Enrichment Agent",
    tagline: "Stop reading CVs. Start knowing candidates.",
    description:
      "Analyzes candidate resumes and job descriptions, extracts structured profiles, and scores job fit automatically — so recruiters spend time on people, not paperwork.",
    capabilities: [
      "Resume parsing and skills extraction",
      "Candidate-to-job fit evaluation",
      "Structured profile generation for ATS/HR systems",
      "Education and certification identification",
    ],
    color: "bg-violet-100 text-violet-600 border-violet-200",
  },
  {
    number: "02",
    icon: Phone,
    title: "Screening Agent",
    tagline: "First-round interviews, fully automated.",
    description:
      "Conducts AI-powered voice screening calls, collects candidate responses, and delivers transcripts and summaries — without a recruiter on the line.",
    capabilities: [
      "Automated outbound voice interviews",
      "Natural language conversation handling",
      "Interview transcript and summary generation",
      "Call recording and structured screening results",
    ],
    color: "bg-blue-100 text-blue-600 border-blue-200",
  },
  {
    number: "03",
    icon: Calendar,
    title: "Interview Scheduling & Question Generator",
    tagline: "Schedule smarter. Walk in prepared.",
    description:
      "Checks interviewer availability, confirms candidates via voice, books the meeting, and sends hiring managers tailored interview questions — all without manual coordination.",
    capabilities: [
      "Interviewer calendar availability checks",
      "Candidate availability confirmation via voice",
      "Automatic meeting scheduling",
      "Role-specific question generation sent to interviewers",
    ],
    color: "bg-emerald-100 text-emerald-600 border-emerald-200",
  },
  {
    number: "04",
    icon: Mail,
    title: "Email Reply Processing Agent",
    tagline: "Turn inbox responses into structured data.",
    description:
      "Reads interviewer email feedback, extracts answers, and converts them into structured evaluation data — eliminating manual feedback processing entirely.",
    capabilities: [
      "Interviewer email content analysis",
      "Feedback extraction and categorization",
      "Structured evaluation data generation",
      "Automated recruitment workflow updates",
    ],
    color: "bg-orange-100 text-orange-600 border-orange-200",
  },
  {
    number: "05",
    icon: BarChart3,
    title: "Executive Meeting Intelligence Agent",
    tagline: "From transcript to decision in minutes.",
    description:
      "Analyzes interview meeting transcripts and produces executive-level summaries, candidate strengths, concerns, and hiring recommendations — giving leadership the signal without the noise.",
    capabilities: [
      "Interview transcript analysis",
      "Candidate strengths and concerns extraction",
      "Hiring recommendations and action items",
      "Executive summary generation",
    ],
    color: "bg-rose-100 text-rose-600 border-rose-200",
  },
];

const workflow = [
  { step: "01", title: "Resume Enrichment", desc: "Agent parses and profiles every candidate automatically." },
  { step: "02", title: "Voice Screening", desc: "AI conducts the first-round call and summarizes responses." },
  { step: "03", title: "Schedule & Prepare", desc: "Interviews get booked and interviewers receive tailored questions." },
  { step: "04", title: "Capture Feedback", desc: "Email replies are parsed into structured evaluation data." },
  { step: "05", title: "Executive Insights", desc: "Hiring leaders receive summaries and recommendations instantly." },
];

const outcomes = [
  "Dramatically reduced recruiter workload",
  "Faster candidate screening and shortlisting",
  "Consistent, bias-reduced evaluations",
  "Searchable interview records across all candidates",
  "Interviewers arrive better prepared",
  "Hiring decisions backed by structured data",
  "Scales to high-volume recruitment without extra headcount",
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
                Hire faster with AI coworkers that run your recruiting pipeline
              </h1>

              <p className="text-lg leading-relaxed max-w-2xl mb-8 text-muted-foreground">
                Five specialized AI agents that cover the full recruiting lifecycle — from resume review to executive debrief — so your team focuses on decisions, not administration.
              </p>

              <div className="flex flex-wrap gap-4">
                <Link href="/contact">
                  <Button size="lg" className="h-12 px-8 text-base bg-primary hover:bg-primary/90 text-white rounded-md shadow-lg shadow-primary/20 font-medium">
                    Talk to our team
                  </Button>
                </Link>
                <a href="#agents">
                  <Button size="lg" variant="outline" className="h-12 px-8 text-base bg-white hover:bg-secondary border-border rounded-md font-medium text-foreground">
                    See the agents <ArrowRight className="ml-2 w-4 h-4" />
                  </Button>
                </a>
              </div>
            </AnimatedText>
          </div>
        </div>
      </section>

      {/* THE PROBLEM */}
      <section className="py-24 glass-bg">
        <div className="container">
          <AnimatedSection className="max-w-3xl mx-auto text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-heading font-bold tracking-tight mb-6">
              Recruiting is slow because it's still mostly manual
            </h2>
            <p className="text-xl text-muted-foreground">
              Screening calls, interview coordination, feedback chasing — your recruiters are spending hours on tasks that shouldn't require a human at all.
            </p>
          </AnimatedSection>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                title: "Volume overwhelm",
                desc: "Hundreds of resumes per role. Recruiters can't meaningfully review every one, so good candidates get missed.",
              },
              {
                title: "Coordination drag",
                desc: "Scheduling screening calls, chasing interviewer calendars, and following up on feedback eats up the working day.",
              },
              {
                title: "Inconsistent evaluation",
                desc: "Different interviewers, different standards. Feedback arrives in scattered emails with no structure for comparison.",
              },
            ].map((item, i) => (
              <AnimatedCard key={i} delay={i * 0.1} className="glass-card p-8 hover:shadow-xl transition-all h-full flex flex-col">
                <h3 className="text-xl font-bold tracking-tight mb-3">{item.title}</h3>
                <p className="text-muted-foreground leading-relaxed">{item.desc}</p>
              </AnimatedCard>
            ))}
          </div>
        </div>
      </section>

      {/* THE AGENTS */}
      <section id="agents" className="container py-24 scroll-mt-24">
        <AnimatedSection className="mb-16">
          <p className="text-xs font-bold uppercase tracking-wider text-muted-foreground mb-3">
            The Suite
          </p>
          <h2 className="text-4xl font-heading font-bold tracking-tight mb-4">
            Five agents. One complete pipeline.
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl">
            Each agent handles a distinct stage of the recruiting process. They work independently or as a connected end-to-end system.
          </p>
        </AnimatedSection>

        <div className="grid gap-8">
          {agents.map((agent, i) => (
            <AnimatedCard
              key={i}
              delay={i * 0.1}
              className="glass-card rounded-2xl p-8 md:p-10 grid md:grid-cols-[auto_1fr] gap-8 items-start"
            >
              {/* Left: icon + number */}
              <div className="flex flex-col items-center gap-3">
                <div className={`w-14 h-14 rounded-xl border flex items-center justify-center flex-shrink-0 ${agent.color}`}>
                  <agent.icon className="w-6 h-6" />
                </div>
                <span className="text-xs font-bold text-muted-foreground">{agent.number}</span>
              </div>

              {/* Right: content */}
              <div>
                <p className="text-xs font-bold uppercase tracking-wider text-primary mb-1">{agent.tagline}</p>
                <h3 className="text-2xl font-heading font-bold mb-3 tracking-tight">{agent.title}</h3>
                <p className="text-muted-foreground leading-relaxed mb-6 max-w-2xl">{agent.description}</p>

                <ul className="grid sm:grid-cols-2 gap-3">
                  {agent.capabilities.map((cap, j) => (
                    <li key={j} className="flex gap-3 items-start">
                      <div className="mt-0.5 w-5 h-5 rounded-full bg-primary/10 flex items-center justify-center text-primary flex-shrink-0">
                        <Check className="w-3 h-3" />
                      </div>
                      <span className="text-sm text-foreground/80">{cap}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </AnimatedCard>
          ))}
        </div>
      </section>

      {/* END TO END WORKFLOW */}
      <section className="py-24 border-y border-border/50 glass-bg">
        <div className="container">
          <AnimatedSection className="text-center mb-16">
            <p className="text-xs font-bold uppercase tracking-wider text-muted-foreground mb-3">
              End-to-End Workflow
            </p>
            <h2 className="text-4xl font-heading font-bold tracking-tight mb-4">
              How the pipeline runs together
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Agents hand off to each other automatically. A candidate enters the pipeline and moves through every stage without manual intervention.
            </p>
          </AnimatedSection>

          <div className="grid md:grid-cols-5 gap-6 relative">
            {workflow.map((item, i) => (
              <AnimatedCard
                key={i}
                delay={i * 0.1}
                className="glass-card border-none rounded-2xl px-6 py-8 flex flex-col items-center text-center relative"
              >
                <div className="glass-card w-12 h-12 rounded-2xl shadow-sm flex items-center justify-center text-lg font-bold font-heading text-primary mb-4">
                  {item.step}
                </div>
                <h3 className="font-bold text-base mb-2 tracking-tight">{item.title}</h3>
                <p className="text-xs text-muted-foreground leading-relaxed">{item.desc}</p>

                {i < workflow.length - 1 && (
                  <div className="hidden md:flex absolute -right-3 top-1/2 -translate-y-1/2 z-10">
                    <ChevronRight className="w-5 h-5 text-muted-foreground/40" />
                  </div>
                )}
              </AnimatedCard>
            ))}
          </div>
        </div>
      </section>

      {/* OUTCOMES */}
      <section className="container py-24">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <AnimatedSection>
            <p className="text-xs font-bold uppercase tracking-wider text-muted-foreground mb-3">
              Expected Outcomes
            </p>
            <h2 className="text-3xl font-heading font-bold mb-6 tracking-tight">
              What changes when recruiting runs on AI coworkers
            </h2>
            <ul className="space-y-4">
              {outcomes.map((item, i) => (
                <li key={i} className="flex gap-3 items-start">
                  <div className="mt-1 w-5 h-5 rounded-full bg-primary/10 flex items-center justify-center text-primary flex-shrink-0">
                    <Check className="w-3 h-3" />
                  </div>
                  <span className="text-foreground/80">{item}</span>
                </li>
              ))}
            </ul>
          </AnimatedSection>

          <AnimatedCard className="glass-card rounded-2xl p-8">
            <h3 className="text-xl font-bold mb-4">How We Deploy It</h3>
            <p className="text-muted-foreground mb-6 text-sm leading-relaxed">
              Digiworks handles the full implementation — integrations with your ATS, HRIS, email, and calendar systems, plus configuration, guardrails, and staff onboarding.
            </p>
            <div className="space-y-4">
              <div className="p-4 bg-secondary/50 rounded-lg text-sm border border-border">
                <span className="font-semibold text-primary block mb-1">System Integrations</span>
                Connects to your ATS, HRIS, calendar, email, and communication tools.
              </div>
              <div className="p-4 bg-secondary/50 rounded-lg text-sm border border-border">
                <span className="font-semibold text-primary block mb-1">Guardrails & Oversight</span>
                Full audit trail of every agent action. Human escalation built in.
              </div>
              <div className="p-4 bg-secondary/50 rounded-lg text-sm border border-border">
                <span className="font-semibold text-primary block mb-1">Live in Weeks</span>
                Start with a focused pilot. Expand across teams as confidence grows.
              </div>
            </div>
          </AnimatedCard>
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
                Ready to transform your recruiting pipeline?
              </h2>
              <p className="text-gray-300 text-lg">
                Tell us about your current hiring process and we'll show you exactly where AI coworkers can take over.
              </p>
              <Link href="/contact">
                <Button size="lg" className="h-14 px-10 text-lg rounded-md shadow-xl bg-white text-black hover:bg-gray-100 font-medium">
                  Talk to our team
                </Button>
              </Link>
            </div>
          </div>
        </AnimatedSection>
      </section>

    </div>
  );
}
