import { useState } from "react";
import { Button } from "@/components/ui/button";
import { ArrowLeft, Building2, PhoneCall, CalendarClock, Mail } from "lucide-react";
import { Link, useParams, Redirect } from "wouter";
import { motion, AnimatePresence } from "framer-motion";
import { AnimatedSection, AnimatedText, AnimatedCard } from "@/components/AnimatedSection";
import { UsecaseUIMockup } from "@/components/UsecaseUIMockup";
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
                <Link href="/contact">
                  <Button size="lg" className="h-12 px-8 text-base bg-primary hover:bg-primary/90 text-white rounded-md shadow-lg shadow-primary/20 font-medium">
                    Talk to our team
                  </Button>
                </Link>
                <a href="#scenarios">
                  <Button size="lg" variant="outline" className="h-12 px-8 text-base bg-white hover:bg-secondary border-border rounded-md font-medium text-foreground">
                    See how it works
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
              Moving a candidate forward touches five systems and zero automation
            </h2>
          </AnimatedSection>

          <div className="grid md:grid-cols-3 gap-8">
            {usecase.problems.map((item, i) => (
              <AnimatedCard key={i} delay={i * 0.1} className="glass-card p-8 hover:shadow-xl transition-all h-full flex flex-col">
                <h3 className="text-xl font-bold tracking-tight mb-3">{item.title}</h3>
                <p className="text-muted-foreground leading-relaxed">{item.desc}</p>
              </AnimatedCard>
            ))}
          </div>
        </div>
      </section>

      {/* SCENARIOS */}
      <section id="scenarios" className="container py-24 scroll-mt-24">
        <AnimatedSection className="mb-12">
          <p className="text-xs font-bold uppercase tracking-wider text-muted-foreground mb-3">
            How It Works
          </p>
          <h2 className="text-4xl font-heading font-bold tracking-tight mb-4">
            Five agents, each handling their part automatically
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl">
            Every stage below runs on its own, the moment a candidate moves forward in Workday. Click through to see what each one produces.
          </p>
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
              {s.kicker}: {s.title}
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
            className="glass-card rounded-2xl p-8 md:p-10 grid lg:grid-cols-[1.1fr_0.9fr] gap-10 items-center"
          >
            <div>
              <p className="text-xs font-bold uppercase tracking-wider text-primary mb-2">
                {activeScenario.kicker}
              </p>
              <h3 className="text-2xl md:text-3xl font-heading font-bold mb-3 tracking-tight">
                {activeScenario.title}
              </h3>
              <p className="text-lg font-medium text-foreground/80 mb-4">{activeScenario.hook}</p>
              <p className="text-muted-foreground leading-relaxed mb-8">
                {activeScenario.description}
              </p>

              <div className="p-5 rounded-xl bg-primary/5 border border-primary/10">
                <p className="text-foreground/80 leading-relaxed">
                  <span className="font-semibold text-primary">Why it matters: </span>
                  {activeScenario.benefit}
                </p>
              </div>
            </div>

            <div className="flex justify-center lg:justify-end">
              <UsecaseUIMockup sample={activeScenario.uiSample} />
            </div>
          </motion.div>
        </AnimatePresence>
      </section>

      {/* CLOSING SUMMARY */}
      <section className="py-24 mt-16 border-y border-border/50 glass-bg">
        <div className="container">
          <AnimatedSection className="max-w-3xl mx-auto text-center mb-12">
            <h2 className="text-3xl lg:text-4xl font-heading font-bold tracking-tight mb-6">
              {usecase.closingTitle}
            </h2>
            <p className="text-lg text-muted-foreground leading-relaxed">
              {usecase.closingBody}
            </p>
          </AnimatedSection>

          <div className="grid grid-cols-3 max-w-2xl mx-auto gap-6 text-center">
            {usecase.closingStats.map((stat, i) => (
              <AnimatedCard key={i} delay={i * 0.1} className="glass-card rounded-2xl py-8 px-4">
                <div className="text-4xl font-heading font-bold text-primary mb-2">{stat.value}</div>
                <div className="text-xs text-muted-foreground font-medium">{stat.label}</div>
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
                Ready to put your recruiting pipeline on autopilot?
              </h2>
              <p className="text-gray-300 text-lg">
                Tell us how candidates move through Workday today and we'll show you exactly where this fits in.
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
