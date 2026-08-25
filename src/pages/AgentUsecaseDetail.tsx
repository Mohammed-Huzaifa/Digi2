import { Button } from "@/components/ui/button";
import { PhoneCall, CalendarClock, Mail, ArrowRight, Briefcase, Users, Lock } from "lucide-react";
import { Link, useParams, Redirect } from "wouter";
import { AnimatedSection, AnimatedText, AnimatedCard } from "@/components/AnimatedSection";
import { RecruitingUIMockup } from "@/components/RecruitingUIMockup";
import { LiveTracePanel } from "@/components/LiveTracePanel";
import { PodCarousel } from "@/components/PodCarousel";
import { getAgentUsecase } from "@/data/agentUsecases";
import { useDocumentHead } from "@/hooks/useDocumentHead";

const INTEGRATION_ICONS: Record<string, React.ReactNode> = {
  "Voice AI": <PhoneCall className="w-4 h-4" aria-hidden="true" />,
  "Calendar & Meetings": <CalendarClock className="w-4 h-4" aria-hidden="true" />,
  Email: <Mail className="w-4 h-4" aria-hidden="true" />,
  Workday: <Briefcase className="w-4 h-4" aria-hidden="true" />,
  HR: <Users className="w-4 h-4" aria-hidden="true" />,
};

export default function AgentUsecaseDetail() {
  const { slug } = useParams<{ slug: string }>();
  const usecase = getAgentUsecase(slug);

  useDocumentHead({
    title: usecase ? `${usecase.title} | Digiworks Workers` : "Workers | Digiworks",
    description: usecase ? usecase.cardDescription : "Browse real Digiworks agent pipelines.",
    path: `/workers/${slug}`,
    noindex: !usecase,
  });

  if (!usecase) {
    return <Redirect to="/workers" />;
  }

  return (
    <div className="flex flex-col pb-20 overflow-x-hidden">
      {/* HERO */}
      <section className="relative py-24 overflow-hidden bg-secondary/30">
        <div className="container relative z-10">
          <div className="grid lg:grid-cols-[1.1fr_0.9fr] gap-12 items-center">
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
                <a href="#pod" className="inline-block">
                  <Button size="lg" className="h-12 px-8 text-base bg-primary hover:bg-primary/90 text-white rounded-md shadow-lg shadow-primary/20 font-medium">
                    See the pod in action
                  </Button>
                </a>
                <a href="#business-case" className="inline-block">
                  <Button size="lg" variant="outline" className="h-12 px-8 text-base bg-white hover:bg-secondary border-border rounded-md font-medium text-foreground">
                    The business case <ArrowRight className="ml-2 w-4 h-4" aria-hidden="true" />
                  </Button>
                </a>
              </div>
            </AnimatedText>

            <AnimatedSection delay={0.2} className="flex justify-center lg:justify-end">
              <LiveTracePanel steps={usecase.heroTrace} />
            </AnimatedSection>
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

      {/* THE POD — horizontal, one agent at a time */}
      <section id="pod" className="scroll-mt-0">
        <PodCarousel scenarios={usecase.scenarios} podIntro={usecase.podIntro} />
      </section>

      {/* CASE STUDY — gated behind registration */}
      <section id="business-case" className="py-24 border-y border-border/50 glass-bg scroll-mt-24">
        <div className="container">
          <AnimatedSection className="text-center mb-12 max-w-2xl mx-auto">
            <p className="text-xs font-bold uppercase tracking-wider text-muted-foreground mb-3">
              The Full Case Study
            </p>
            <h2 className="text-4xl font-heading font-bold tracking-tight mb-4">
              See the full rollout, metrics, and guardrails.
            </h2>
            <p className="text-lg text-muted-foreground">
              Register to unlock the week-by-week timeline, measured outcomes, and safety guardrails behind this pipeline.
            </p>
          </AnimatedSection>

          <AnimatedCard className="relative glass-card rounded-2xl overflow-hidden max-w-3xl mx-auto">
            <div className="p-8 md:p-10 blur-[6px] select-none pointer-events-none" aria-hidden="true">
              <div className="flex flex-col divide-y divide-border">
                {usecase.journey.slice(0, 4).map((item, i) => (
                  <div key={i} className="flex gap-6 py-4 first:pt-0 last:pb-0">
                    <span className="w-24 flex-shrink-0 text-xs font-bold text-primary font-heading">{item.day}</span>
                    <span className="text-sm text-foreground/80 leading-relaxed">{item.desc}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="absolute inset-0 flex flex-col items-center justify-center bg-white/90 backdrop-blur-sm px-8 text-center">
              <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center text-primary mb-4">
                <Lock className="w-5 h-5" aria-hidden="true" />
              </div>
              <p className="font-bold text-lg mb-2">Register to get the case study report</p>
              <p className="text-sm text-muted-foreground max-w-sm mb-6">
                Full rollout timeline, measured outcomes, and guardrails, sent straight to you.
              </p>
              <Button asChild size="lg" className="h-12 px-8 text-base bg-primary hover:bg-primary/90 text-white rounded-md shadow-lg shadow-primary/20 font-medium">
                <Link href="/contact">Get the case study report</Link>
              </Button>
            </div>
          </AnimatedCard>
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
                <Button asChild size="lg" className="h-14 px-10 text-lg rounded-md shadow-xl bg-white text-black hover:bg-gray-100 font-medium">
                  <Link href="/contact">
                    Book a 20-minute walkthrough
                  </Link>
                </Button>
                <Button asChild size="lg" variant="outline" className="h-14 px-10 text-lg rounded-md border-white/20 bg-transparent text-white hover:bg-white/10 font-medium">
                  <Link href="/contact">
                    Talk to our team
                  </Link>
                </Button>
              </div>
            </div>
          </div>
        </AnimatedSection>
      </section>
    </div>
  );
}
