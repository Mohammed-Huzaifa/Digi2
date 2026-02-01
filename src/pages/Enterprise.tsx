import { Button } from "@/components/ui/button";
import { Check, Headset, Users, Receipt, Lightbulb } from "lucide-react";

import { Link } from "wouter";
import { AnimatedSection, AnimatedText, AnimatedCard } from "@/components/AnimatedSection";

export default function Enterprise() {
    const EnterpriseRoles = [
        { title: "IT & Service Desk", desc: "Resets passwords, unlocks accounts, triages tickets, and answers IT questions.", icon: Headset },
        { title: "HR & People", desc: "Responds to policy/benefit questions, guides onboarding, and supports offboarding.", icon: Users },
        { title: "Finance & Operations", desc: "Routes invoices, chases approvals, and aggregates operational info.", icon: Receipt },
        { title: "Knowledge & Insights", desc: "Turns resolved tickets into documentation and surfaces recurring issue patterns.", icon: Lightbulb }
      ];
      

  return (
    <div className="flex flex-col pb-20 overflow-x-hidden">
      {/* ENTERPRISE SECTION */}
      <div className="pt-20">
        <section className="relative py-24 overflow-hidden bg-secondary/30">
          <div className="container relative z-10">
            <div className="grid items-center gap-12 lg:grid-cols-2">
              {/* LEFT: text */}
              <AnimatedText className="max-w-3xl">
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white border border-border text-xs font-bold text-primary mb-6 uppercase tracking-wider shadow-sm">
                  Enterprise Solutions
                </div>

                <h1 className="text-4xl lg:text-6xl font-heading font-bold mb-6 tracking-tight">
  AI coworkers for every enterprise team.
</h1>

<p className="text-lg leading-relaxed max-w-2xl mb-8 text-muted-foreground">
  Digiworks coworkers reduce operational load and accelerate execution by handling routine work, all from within the tools your teams already use, including Teams, Slack, and your enterprise platforms.
</p>

              </AnimatedText>

              {/* RIGHT: image */}
              <div className="relative">
                <div className="absolute -inset-6 rounded-[32px] bg-gradient-to-br from-primary/10 via-transparent to-sky-200/20 blur-2xl" />
                <img
                  src="/images/hero-coworkers.jpg"
                  alt="Enterprise team reviewing analytics"
                  className="relative w-full h-[320px] sm:h-[380px] lg:h-[440px] object-cover rounded-3xl border border-border/60 shadow-xl"
                  loading="lazy"
                />
              </div>
            </div>
          </div>
        </section>

        <section className="container py-24">
          <div className="grid lg:grid-cols-2 gap-20">
            <AnimatedSection>
              <h2 className="text-3xl font-heading font-bold mb-6 tracking-tight">Why Coworkers for Enterprise</h2>
              <p className="text-lg text-muted-foreground mb-8">
                The modern enterprise runs on tickets, emails, and requests. Most of them are routine, but they still consume expensive human attention.
              </p>
              <ul className="space-y-4">
                {[
                  "Coworkers automate repetitive IT, HR, and operations tasks so teams can focus on complex challenges.",
                  "They use your existing tools and data, avoiding the need for yet another interface.",
                  "They help standardize processes and reduce dependence on tribal knowledge."
                ].map((item, i) => (
                  <li key={i} className="flex gap-3 items-start">
                    <div className="mt-1 w-5 h-5 rounded-full bg-primary/10 flex items-center justify-center text-primary flex-shrink-0">
                      <Check className="w-3 h-3" />
                    </div>
                    <span className="text-foreground/80">{item}</span>
                  </li>
                ))}
              </ul>
            </AnimatedSection>

            <AnimatedCard className="glass-card p-8 rounded-xl shadow-sm">
              <h3 className="text-xl font-bold mb-4">How It Works for Enterprises</h3>
              <p className="text-muted-foreground mb-6">
                Digiworks coworkers plug into your ITSM, HRIS, ERP, CRM, and collaboration tools so they can work across departments, not in silos.
              </p>
              <div className="space-y-4">
                <div className="p-4 bg-secondary/50 rounded-lg text-sm border border-border">
                  <span className="font-semibold text-primary block mb-1">Security First</span>
                  Respect your security model and user permissions.
                </div>
                <div className="p-4 bg-secondary/50 rounded-lg text-sm border border-border">
                  <span className="font-semibold text-primary block mb-1">Defined Policy</span>
                  Use clear workflows and policies defined by your teams.
                </div>
                <div className="p-4 bg-secondary/50 rounded-lg text-sm border border-border">
                  <span className="font-semibold text-primary block mb-1">Analytics</span>
                  Provide dashboards and logs so you can see impact and activity at a glance.
                </div>
              </div>
            </AnimatedCard>
          </div>
        </section>

        <section className="py-10 glass-bg">
          <div className="container">
            <AnimatedSection>
              <h2 className="text-3xl font-heading font-bold mb-10 tracking-tight">Enterprise Capabilities</h2>
            </AnimatedSection>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {EnterpriseRoles.map((role, i) => (
                <AnimatedCard key={i} delay={i * 0.1} className="h-full glass-card p-6 rounded-xl transition-colors shadow-sm">
                  <div className="flex items-start gap-3 mb-2">
                    <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center text-primary flex-shrink-0">
                    {(() => {
  const Icon = role.icon ?? Lightbulb;
  return <Icon className="w-5 h-5" />;
})()}

                    </div>
                    <h4 className="font-bold text-lg leading-tight mt-2">{role.title}</h4>
                  </div>
                  <p className="text-sm text-muted-foreground leading-relaxed">{role.desc}</p>
                </AnimatedCard>
              ))}
            </div>
          </div>
        </section>

        <section className="container py-24">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <AnimatedCard className="bg-[#111827] text-white rounded-xl p-8 lg:p-12 shadow-2xl relative overflow-hidden order-2 md:order-1">
              <div className="relative z-10">
                <h3 className="text-2xl font-bold mb-4 text-gray-300">Start with a coworker pod.</h3>
                <ul className="space-y-4 mb-8 text-gray-300">
                  <li className="flex gap-3">
                    <Check className="w-5 h-5 flex-shrink-0 text-primary" />
                    <span>Choose one function—like IT support, HR, or finance.</span>
                  </li>
                  <li className="flex gap-3">
                    <Check className="w-5 h-5 flex-shrink-0 text-primary" />
                    <span>Includes defined roles, integrations, configuration, and guardrails.</span>
                  </li>
                  <li className="flex gap-3">
                    <Check className="w-5 h-5 flex-shrink-0 text-primary" />
                    <span>Live in weeks handling real requests.</span>
                  </li>
                </ul>
                <Link href="/contact">
                  <Button className="w-full bg-white text-black hover:bg-gray-100 font-medium">Get Started</Button>
                </Link>
              </div>
            </AnimatedCard>

            <AnimatedSection className="order-1 md:order-2">
              <h2 className="text-3xl font-heading font-bold mb-6 tracking-tight">See coworker impact in weeks.</h2>
              <div className="space-y-8">
                <div className="flex gap-4 items-start">
                  <div className="text-4xl font-bold text-primary/20">01</div>
                  <div>
                    <h4 className="font-bold text-lg">Reduce Manual Work</h4>
                    <p className="text-muted-foreground">Reduce manual handling of routine requests on targeted workflows.</p>
                  </div>
                </div>
                <div className="flex gap-4 items-start">
                  <div className="text-4xl font-bold text-primary/20">02</div>
                  <div>
                    <h4 className="font-bold text-lg">Auto-Resolution</h4>
                    <p className="text-muted-foreground">Increase the share of issues auto-resolved without human intervention.</p>
                  </div>
                </div>
                <div className="flex gap-4 items-start">
                  <div className="text-4xl font-bold text-primary/20">03</div>
                  <div>
                    <h4 className="font-bold text-lg">Faster Outcomes</h4>
                    <p className="text-muted-foreground">Shorten resolution times, reduce backlogs, and improve employee satisfaction scores.</p>
                  </div>
                </div>
              </div>
            </AnimatedSection>
          </div>
        </section>
      </div>
    </div>
  );
}
