import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import { Link } from "wouter";
import { AnimatedSection, AnimatedText, AnimatedCard } from "@/components/AnimatedSection";
import { agentUsecases } from "@/data/agentUsecases";
import { useDocumentHead } from "@/hooks/useDocumentHead";

export default function AgentUsecases() {
  useDocumentHead({
    title: "Workers | Digiworks",
    description:
      "Browse real Digiworks agent pipelines: the exact triggers, systems, and outcomes we deploy inside customer stacks, starting with the AI recruiting suite.",
    path: "/workers",
  });

  return (
    <div className="flex flex-col pb-20 overflow-x-hidden">
      {/* HERO */}
      <section className="relative py-24 overflow-hidden bg-secondary/30">
        <div className="container relative z-10">
          <div className="max-w-3xl">
            <AnimatedText>
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white border border-border text-xs font-bold text-primary mb-6 uppercase tracking-wider shadow-sm">
                Workers
              </div>

              <h1 className="text-4xl lg:text-6xl font-heading font-bold mb-6 tracking-tight">
                Real agent pipelines, built for real systems.
              </h1>

              <p className="text-lg leading-relaxed max-w-2xl mb-8 text-muted-foreground">
                Every use case below is a live deployment already running for real teams. No slideware, no hypotheticals.
              </p>

              <Button asChild size="lg" className="h-12 px-8 text-base bg-primary hover:bg-primary/90 text-white rounded-md shadow-lg shadow-primary/20 font-medium">
                <Link href="/contact">
                  Talk to our team
                </Link>
              </Button>
            </AnimatedText>
          </div>
        </div>
      </section>

      {/* USECASE GRID */}
      <section className="container py-24">
        <AnimatedSection className="mb-16">
          <p className="text-xs font-bold uppercase tracking-wider text-muted-foreground mb-3">
            Agent Library
          </p>
          <h2 className="text-4xl font-heading font-bold tracking-tight mb-4">
            Browse by use case
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl">
            Click into any use case to see what it does, the systems it touches, and what changes once it's live.
          </p>
        </AnimatedSection>

        <div className="grid md:grid-cols-2 gap-8">
          {agentUsecases.map((usecase, i) => (
            <Link key={usecase.slug} href={`/workers/${usecase.slug}`} className="block rounded-2xl focus-visible:outline focus-visible:outline-2 focus-visible:outline-primary focus-visible:outline-offset-2">
              <AnimatedCard
                delay={i * 0.1}
                className="group cursor-pointer glass-card rounded-2xl p-8 h-full flex flex-col"
              >
                <div className="flex items-start justify-between mb-6">
                  <div className="w-14 h-14 rounded-xl bg-primary/10 border border-primary/20 flex items-center justify-center text-primary flex-shrink-0">
                    <usecase.icon className="w-6 h-6" aria-hidden="true" />
                  </div>
                  <ArrowRight className="w-5 h-5 text-muted-foreground/40 transition-transform group-hover:translate-x-1 group-hover:text-primary" aria-hidden="true" />
                </div>

                <p className="text-xs font-bold uppercase tracking-wider text-primary mb-2">
                  {usecase.eyebrow}
                </p>
                <h3 className="text-2xl font-heading font-bold mb-3 tracking-tight">
                  {usecase.title}
                </h3>
                <p className="text-muted-foreground leading-relaxed mb-6">
                  {usecase.cardDescription}
                </p>

                <div className="mt-auto pt-6 border-t border-border/60">
                  <p className="text-xs font-semibold text-muted-foreground mb-3">
                    {usecase.cardStat}
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {usecase.integrations.map((tag) => (
                      <span
                        key={tag}
                        className="px-2.5 py-1 rounded-full bg-secondary text-xs font-medium text-foreground/70 border border-border"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </AnimatedCard>
            </Link>
          ))}
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
                Don't see your workflow yet?
              </h2>
              <p className="text-gray-300 text-lg">
                Tell us what your team does manually today, and we'll design the agent that takes it over.
              </p>
              <Button asChild size="lg" className="h-14 px-10 text-lg rounded-md shadow-xl bg-white text-black hover:bg-gray-100 font-medium">
                <Link href="/contact">
                  Talk to our team
                </Link>
              </Button>
            </div>
          </div>
        </AnimatedSection>
      </section>
    </div>
  );
}
