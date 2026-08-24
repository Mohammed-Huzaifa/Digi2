import { Button } from "@/components/ui/button";
import { Check, Headset, Users, Receipt, Wallet } from "lucide-react";

import { Link } from "wouter";
import { AnimatedSection, AnimatedText, AnimatedCard } from "@/components/AnimatedSection";
import { useDocumentHead } from "@/hooks/useDocumentHead";

export default function BusinessOperations() {
    useDocumentHead({
      title: "Business Operations AI Coworkers | Digiworks",
      description:
        "Digiworks AI coworkers handle HR, finance, IT, and payroll tasks inside Microsoft Teams, Slack, and your existing business systems, auto-resolving routine work and accelerating approvals.",
      path: "/business-operations",
    });

    const BusinessOperationsRoles = [
        { title: "HR & People Operations", desc: "Meeting Organizer, Profile Enrichment, Doctor's Certificate Validator, policy questions, onboarding support, and offboarding workflows.", icon: Users },
        { title: "Finance & Procurement", desc: "Invoice approvals, expense reporting, purchase order creation, vendor onboarding, budget inquiries, and approval routing.", icon: Receipt },
        { title: "IT & Service Desk", desc: "Password resets, account unlocks, access management, ticket triage, software requests, and knowledge base answers.", icon: Headset },
        { title: "Payroll & Operations", desc: "Pay stub requests, tax form generation, status inquiries, scheduling, and operational task automation.", icon: Wallet }
      ];


  return (
    <div className="flex flex-col pb-20 overflow-x-hidden">
      {/* BUSINESS OPERATIONS SECTION */}
      <div className="pt-20">
        <section className="relative py-24 overflow-hidden bg-secondary/30">
          <div className="container relative z-10">
            <div className="grid items-center gap-12 lg:grid-cols-2">
              {/* LEFT: text */}
              <AnimatedText className="max-w-3xl">
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white border border-border text-xs font-bold text-primary mb-6 uppercase tracking-wider shadow-sm">
                  Business Operations
                </div>

                <h1 className="text-4xl lg:text-6xl font-heading font-bold mb-6 tracking-tight">
  AI coworkers for every business team.
</h1>

<p className="text-lg leading-relaxed max-w-2xl mb-8 text-muted-foreground">
  Digiworks coworkers handle HR, finance, IT, payroll, and procurement tasks, right inside Microsoft Teams, Slack, and your existing business systems.
</p>

              </AnimatedText>

              {/* RIGHT: image */}
              <div className="relative">
                <div className="absolute -inset-6 rounded-[32px] bg-gradient-to-br from-primary/10 via-transparent to-sky-200/20 blur-2xl" />
                <img
                  src="/images/hero-coworkers.jpg"
                  alt="Business team reviewing analytics"
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
              <h2 className="text-3xl font-heading font-bold mb-6 tracking-tight">Why Coworkers for Business Operations</h2>
              <p className="text-lg text-muted-foreground mb-8">
                Every business runs on tickets, emails, and repeatable requests. Most are routine, but they still consume expensive human attention.
              </p>
              <ul className="space-y-4">
                {[
                  "Coworkers automate repetitive HR, IT, finance, payroll, and procurement tasks so your team focuses on what requires human judgment.",
                  "They live inside the tools your teams already use: Teams, Slack, your HRIS, ERP, and ITSM.",
                  "They help standardize processes and reduce dependence on tribal knowledge."
                ].map((item, i) => (
                  <li key={i} className="flex gap-3 items-start">
                    <div className="mt-1 w-5 h-5 rounded-full bg-primary/10 flex items-center justify-center text-primary flex-shrink-0">
                      <Check className="w-3 h-3" aria-hidden="true" />
                    </div>
                    <span className="text-foreground/80">{item}</span>
                  </li>
                ))}
              </ul>
            </AnimatedSection>

            <AnimatedCard className="glass-card p-8 rounded-xl shadow-sm">
              <h3 className="text-xl font-bold mb-4">How It Works</h3>
              <p className="text-muted-foreground mb-6">
                Digiworks coworkers plug into your ITSM, HRIS, ERP, and collaboration tools so they can work across departments, not in silos.
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
              <h2 className="text-3xl font-heading font-bold mb-10 tracking-tight">Business Operations Capabilities</h2>
            </AnimatedSection>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {BusinessOperationsRoles.map((role, i) => (
                <AnimatedCard key={i} delay={i * 0.1} className="h-full glass-card p-6 rounded-xl transition-colors shadow-sm">
                  <div className="flex items-start gap-3 mb-2">
                    <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center text-primary flex-shrink-0">
                    {(() => {
  const Icon = role.icon ?? Users;
  return <Icon className="w-5 h-5" aria-hidden="true" />;
})()}

                    </div>
                    <h3 className="font-bold text-lg leading-tight mt-2">{role.title}</h3>
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
                    <Check className="w-5 h-5 flex-shrink-0 text-primary" aria-hidden="true" />
                    <span>Choose one function, like IT support, HR, or finance.</span>
                  </li>
                  <li className="flex gap-3">
                    <Check className="w-5 h-5 flex-shrink-0 text-primary" aria-hidden="true" />
                    <span>Includes defined roles, integrations, configuration, and guardrails.</span>
                  </li>
                  <li className="flex gap-3">
                    <Check className="w-5 h-5 flex-shrink-0 text-primary" aria-hidden="true" />
                    <span>Live in weeks handling real requests.</span>
                  </li>
                </ul>
                <Button asChild className="w-full bg-white text-black hover:bg-gray-100 font-medium">
                  <Link href="/contact">Get Started</Link>
                </Button>
              </div>
            </AnimatedCard>

            <AnimatedSection className="order-1 md:order-2">
              <h2 className="text-3xl font-heading font-bold mb-6 tracking-tight">See coworker impact in weeks.</h2>
              <div className="space-y-8">
                <div className="flex gap-4 items-start">
                  <div className="text-4xl font-bold text-primary/20">01</div>
                  <div>
                    <h3 className="font-bold text-lg">Reduce Manual Work</h3>
                    <p className="text-muted-foreground">Reduce manual handling of routine requests on targeted workflows.</p>
                  </div>
                </div>
                <div className="flex gap-4 items-start">
                  <div className="text-4xl font-bold text-primary/20">02</div>
                  <div>
                    <h3 className="font-bold text-lg">Auto-Resolution</h3>
                    <p className="text-muted-foreground">Increase the share of issues auto-resolved without human intervention.</p>
                  </div>
                </div>
                <div className="flex gap-4 items-start">
                  <div className="text-4xl font-bold text-primary/20">03</div>
                  <div>
                    <h3 className="font-bold text-lg">Faster Outcomes</h3>
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
