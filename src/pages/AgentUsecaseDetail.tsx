import { useState } from "react";
import { Button } from "@/components/ui/button";
import { ArrowLeft, Building2, PhoneCall, CalendarClock, Mail, Check, ArrowRight } from "lucide-react";
import { Link, useParams, Redirect } from "wouter";
import { motion, AnimatePresence } from "framer-motion";
import { AnimatedSection, AnimatedText, AnimatedCard } from "@/components/AnimatedSection";
import { RecruitingUIMockup } from "@/components/RecruitingUIMockup";
import { getAgentUsecase } from "@/data/agentUsecases";

const INTEGRATION_ICONS: Record<string, React.ReactNode> = {
  Workday: <Building2 className="w-4 h-4" />,
  "Voice AI": <PhoneCall className="w-4 h-4" />,
  "Calendar & Meetings": <CalendarClock className="w-4 h-4" />,
  Email: <Mail className="w-4 h-4" />,
};

export default function AgentUsecaseDetail() {
  const { slug } = useParams<{ slug: string }>();
  const usecase = getAgentUsecase(slug);
  const [activeIndex, setActiveIndex] = useState(0);

  if (!usecase) {
    return <Redirect to="/agent-usecases" />;
  }

  const activeScenario = usecase.scenarios[activeIndex];

  return (
    <div className="flex flex-col pb-20 overflow-x-hidden">
      {/* HERO */}
      <section className="relative py-24 overflow-hidden bg-secondary/30">
        <div className="container relative z-10">
          <Link href="/agent-usecases">
            <a className="inline-flex items-center gap-2 text-sm font-medium text-muted-foreground hover:text-foreground transition-colors mb-8">
              <ArrowLeft className="w-4 h-4" />
              All agent usecases
            </a>
          </Link>

          <div className="max-w-3xl">
            <AnimatedText>
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white border border-border text-xs font-bold text-primary mb-6 uppercase tracking-wider shadow-sm">
                {usecase.eyebrow}
              </div>

              <h1 className="text-4xl lg:text-6xl font-heading font-bold mb-6 tracking-tight">
                {usecase.heroTitle}
              </h1>

              <p className="text-lg leading-relaxed max-w-2xl mb-8 text-muted-foreground">
                {usecase.heroSubhead}
              </p>

              <div className="flex flex-wrap gap-3 mb-10">
                {usecase.integrations.map((tag) => (
                  <span
                    key={tag}
                    className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-white border border-border text-sm font-medium text-foreground/80 shadow-sm"
                  >
                    {INTEGRATION_ICONS[tag]}
                    {tag}
                  </span>
                ))}
              </div>

              <div className="flex flex-wrap gap-4">
                <a href="#pod">
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
              {usecase.costTitle}
            </h2>
            <p className="text-xl text-muted-foreground">{usecase.costSub}</p>
          </AnimatedSection>

          <div className="grid lg:grid-cols-[1.1fr_0.9fr] gap-10 items-center">
            <div className="grid sm:grid-cols-2 gap-6">
              {usecase.strains.map((item, i) => (
                <AnimatedCard key={i} delay={i * 0.1} className="glass-card p-8 hover:shadow-xl transition-all h-full flex flex-col">
                  <h3 className="text-xl font-bold tracking-tight mb-3">{item.title}</h3>
                  <p className="text-muted-foreground leading-relaxed">{item.desc}</p>
                </AnimatedCard>
              ))}
            </div>
            <div className="flex flex-col items-center lg:items-end gap-3">
              <RecruitingUIMockup sample={usecase.beforeSample} />
              <span className="text-xs text-muted-foreground italic">Feedback follow-up, today.</span>
            </div>
          </div>

          <AnimatedSection className="max-w-2xl mx-auto text-center mt-16">
            <p className="text-lg font-medium text-foreground/80">{usecase.costClose}</p>
          </AnimatedSection>
        </div>
      </section>

      {/* THE POD */}
      <section id="pod" className="container py-24 scroll-mt-24">
        <AnimatedSection className="mb-12">
          <p className="text-xs font-bold uppercase tracking-wider text-muted-foreground mb-3">
            The Recruiting Pod
          </p>
          <h2 className="text-4xl font-heading font-bold tracking-tight mb-4">
            Seven agents, one complete pipeline.
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl">{usecase.podIntro}</p>
        </AnimatedSection>

        <div className="flex flex-wrap gap-3 mb-10">
          {usecase.scenarios.map((s, i) => (
            <button
              key={s.id}
              type="button"
              onClick={() => setActiveIndex(i)}
              className={`px-4 py-2 rounded-xl text-sm font-medium transition-colors ${
                i === activeIndex
                  ? "bg-primary text-white shadow-sm"
                  : "bg-secondary text-foreground/70 hover:text-foreground hover:bg-secondary/80"
              }`}
            >
              {s.number} · {s.title}
            </button>
          ))}
        </div>

        <AnimatePresence mode="wait">
          <motion.div
            key={activeScenario.id}
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -12 }}
            transition={{ duration: 0.3, ease: "easeOut" }}
            className="glass-card rounded-2xl p-8 md:p-10 grid lg:grid-cols-[1.2fr_1fr] gap-10 items-center"
          >
            <div>
              <div className="flex items-center gap-3 mb-3">
                <div className="w-11 h-11 rounded-xl bg-primary/10 border border-primary/20 flex items-center justify-center text-primary flex-shrink-0">
                  <activeScenario.icon className="w-5 h-5" />
                </div>
                <span className="text-xs font-bold text-muted-foreground">{activeScenario.number}</span>
              </div>
              <p className="text-xs font-bold uppercase tracking-wider text-primary mb-1">
                {activeScenario.headline}
              </p>
              <h3 className="text-2xl md:text-3xl font-heading font-bold mb-3 tracking-tight">
                {activeScenario.title}
              </h3>
              <p className="text-muted-foreground leading-relaxed mb-6">
                {activeScenario.description}
              </p>

              <div className="grid sm:grid-cols-2 gap-3">
                <div className="p-3 rounded-lg bg-secondary/50 border border-border text-sm">
                  <span className="font-semibold text-foreground/70 block mb-1">Before</span>
                  <span className="text-muted-foreground">{activeScenario.before}</span>
                </div>
                <div className="p-3 rounded-lg bg-primary/5 border border-primary/10 text-sm">
                  <span className="font-semibold text-primary block mb-1">After</span>
                  <span className="text-foreground/80">{activeScenario.after}</span>
                </div>
              </div>
            </div>

            <div className="flex flex-col items-center gap-3">
              <RecruitingUIMockup sample={activeScenario.uiSample} />
              <span className="text-xs text-muted-foreground italic">{activeScenario.caption}</span>
            </div>
          </motion.div>
        </AnimatePresence>
      </section>

      {/* THE JOURNEY */}
      <section className="py-24 border-y border-border/50 glass-bg">
        <div className="container">
          <AnimatedSection className="text-center mb-16">
            <p className="text-xs font-bold uppercase tracking-wider text-muted-foreground mb-3">
              One Week, End to End
            </p>
            <h2 className="text-4xl font-heading font-bold tracking-tight mb-4">{usecase.journeyIntro}</h2>
          </AnimatedSection>

          <AnimatedCard className="glass-card rounded-2xl p-8 md:p-10 max-w-3xl mx-auto">
            <div className="flex flex-col divide-y divide-border">
              {usecase.journey.map((item, i) => (
                <div key={i} className="flex gap-6 py-4 first:pt-0 last:pb-0">
                  <span className="w-24 flex-shrink-0 text-xs font-bold text-primary font-heading">{item.day}</span>
                  <span className="text-sm text-foreground/80 leading-relaxed">{item.desc}</span>
                </div>
              ))}
            </div>
          </AnimatedCard>

          <AnimatedSection className="max-w-2xl mx-auto text-center mt-12">
            <p className="text-lg font-medium text-foreground/80">{usecase.journeyClose}</p>
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
            <h2 className="text-3xl font-heading font-bold mb-4 tracking-tight">{usecase.metricsIntro}</h2>
            <ul className="space-y-4 mt-8">
              {usecase.metrics.map((item, i) => (
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
            <p className="text-sm text-muted-foreground mt-8 leading-relaxed">{usecase.pilotLine}</p>
          </AnimatedSection>

          <div className="flex flex-col items-center lg:items-end gap-3">
            <RecruitingUIMockup sample={usecase.dashboardSample} />
            <span className="text-xs text-muted-foreground italic">Impact, measured.</span>
          </div>
        </div>

        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <AnimatedCard className="glass-card rounded-2xl p-8">
            <h3 className="text-xl font-bold mb-2">Guardrails</h3>
            <p className="text-sm text-muted-foreground mb-6">Non-negotiable, on every deployment.</p>
            <div className="space-y-4">
              {usecase.guardrails.map((item, i) => (
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
            <RecruitingUIMockup sample={usecase.approvalSample} />
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
            {usecase.builtFor.map((item, i) => (
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
      <section className="container pt-16 pb-24">
        <AnimatedSection>
          <div className="bg-[#111827] rounded-2xl p-12 text-center text-white relative overflow-hidden shadow-2xl">
            <div className="absolute top-0 left-0 w-full h-full opacity-20">
              <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-primary via-transparent to-transparent blur-3xl" />
            </div>
            <div className="relative z-10 max-w-2xl mx-auto space-y-8">
              <h2 className="text-3xl lg:text-4xl font-heading font-bold tracking-tight text-gray-300">
                {usecase.closeTitle}
              </h2>
              <p className="text-gray-300 text-lg">{usecase.closeSub}</p>
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
