import { Button } from "@/components/ui/button";
import { Check, Shield, Lock, Server, ArrowRight, GraduationCap, Building2 } from "lucide-react";
import { Link } from "wouter";
import { useEffect, useRef } from "react";
  
import { AnimatedSection, AnimatedText, AnimatedCard } from "@/components/AnimatedSection";

export default function Solutions() {
  // Scroll to section if hash is present
  useEffect(() => {
    const hash = window.location.hash;
    if (hash) {
      const element = document.querySelector(hash);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    }
  }, []);

  const higherEdCarouselRef = useRef<HTMLDivElement>(null);

const scrollCarousel = (direction: "left" | "right") => {
  if (!higherEdCarouselRef.current) return;
  const scrollAmount = 340; // one card width
  higherEdCarouselRef.current.scrollBy({
    left: direction === "left" ? -scrollAmount : scrollAmount,
    behavior: "smooth",
  });
};


  const HigherEdRoles = [
    { title: "Academic Policy Assistant", desc: "Helps students and staff quickly understand academic policies, prerequisites, and deadlines." },
    { title: "Study Skills Coach", desc: "Coaches students on time management, study strategies, and exam preparation." },
    { title: "Course Insights Advisor", desc: "Surfaces course trends and helps students choose and balance their course selections." },
    { title: "Learning Resource Finder", desc: "Recommends relevant learning materials based on courses and challenges." },
    { title: "Campus Resource Navigator", desc: "Guides students to the right campus offices, services, and support programs." },
    { title: "Student Engagement Insights", desc: "Analyzes interaction patterns to highlight where engagement is dropping." },
    { title: "Feedback Summarizer", desc: "Aggregates feedback into clear themes and action items for faculty." },
    { title: "Career Readiness Coach", desc: "Supports students with resumes, interview practice, and career alignment." },
    { title: "Academic Support Evaluator", desc: "Identifies which support interventions are working for which student groups." },
    { title: "Student Sentiment Pulse", desc: "Tracks sentiment across channels to give leadership a pulse on morale." }
  ];

  const EnterpriseRoles = [
    { title: "IT & Service Desk", desc: "Resets passwords, unlocks accounts, triages tickets, and answers IT questions." },
    { title: "HR & People", desc: "Responds to policy/benefit questions, guides onboarding, and supports offboarding." },
    { title: "Finance & Operations", desc: "Routes invoices, chases approvals, and aggregates operational info." },
    { title: "Knowledge & Insights", desc: "Turns resolved tickets into documentation and surfaces recurring issue patterns." }
  ];

  return (
    <div className="flex flex-col pb-20 overflow-x-hidden">
      {/* Sticky Sub-nav - Clerk Style */}
      <div className="sticky top-16 z-40 bg-background/80 backdrop-blur-md border-b border-border">
  <div className="container flex justify-center gap-10 py-4">
    
    <a
      href="#higher-ed"
      className="flex flex-col items-center px-4 py-2 rounded-lg hover:bg-secondary transition-colors"
    >
      <div className="flex items-center gap-2 text-sm font-semibold">
        <GraduationCap className="w-4 h-4" />
        Higher Ed
      </div>
      <span className="text-xs text-muted-foreground mt-0.5">
        Universities & institutions
      </span>
    </a>

    <a
      href="#enterprise"
      className="flex flex-col items-center px-4 py-2 rounded-lg hover:bg-secondary transition-colors"
    >
      <div className="flex items-center gap-2 text-sm font-semibold">
        <Building2 className="w-4 h-4" />
        Enterprise
      </div>
      <span className="text-xs text-muted-foreground mt-0.5">
        IT, HR & operations teams
      </span>
    </a>

  </div>
</div>


      {/* HIGHER ED SECTION */}
      <div id="higher-ed" className="scroll-mt-32">
      <section className="relative py-24 overflow-hidden bg-secondary/30">
  <div className="container relative z-10">
    <div className="grid items-center gap-12 lg:grid-cols-2">
      {/* LEFT: text */}
      <AnimatedText className="max-w-3xl">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white border border-border text-xs font-bold text-primary mb-6 uppercase tracking-wider shadow-sm">
          Higher Ed Solutions
        </div>

        <h1 className="text-4xl lg:text-6xl font-heading font-bold mb-6 tracking-tight">
          Higher Ed coworkers
        </h1>

        <p className="text-xl lg:text-2xl text-muted-foreground mb-8">
          AI coworkers for every department on campus.
        </p>

        <p className="text-lg leading-relaxed max-w-2xl mb-8 text-muted-foreground">
          Digiworks coworkers act like additional staff for recruitment, advising, student services, and alumni relations—integrated with your campus systems and available 24/7 for students, families, and alumni.
        </p>
      </AnimatedText>

      {/* RIGHT: image (your marked area) */}
      <div className="relative">
        <div className="absolute -inset-6 rounded-[32px] bg-gradient-to-br from-primary/10 via-transparent to-sky-200/20 blur-2xl" />
        <img
          src="/images/stu.jpg"
          alt="Higher education students collaborating"
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
              <h2 className="text-3xl font-heading font-bold mb-6 tracking-tight">Why Coworkers for Higher Ed</h2>
              <p className="text-lg text-muted-foreground mb-8">
                Higher education is under pressure to do more with less. Coworkers help you support every stakeholder while reducing administrative load and costs.
              </p>
              <ul className="space-y-4">
                {[
                  "Perform critical functions in multiple departments, from admissions to alumni engagement.",
                  "Help absorb rising expectations for personalization without adding headcount.",
                  "Free staff from repetitive tasks so they can focus on complex cases and high‑touch relationships."
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
              <h3 className="text-xl font-bold mb-4">How It Works for Campuses</h3>
              <p className="text-muted-foreground mb-6">
                Digiworks coworkers plug into your CRM, SIS, LMS, ERP, ticketing tools, and communication channels to become part of your campus operating system.
              </p>
              <div className="space-y-4">
                <div className="p-4 bg-secondary/50 rounded-lg text-sm border border-border">
                  <span className="font-semibold text-primary block mb-1">Data Access</span>
                  Pull the right data to answer questions and complete tasks.
                </div>
                <div className="p-4 bg-secondary/50 rounded-lg text-sm border border-border">
                  <span className="font-semibold text-primary block mb-1">Audit Trail</span>
                  Log their actions so staff can see exactly what happened and why.
                </div>
                <div className="p-4 bg-secondary/50 rounded-lg text-sm border border-border">
                  <span className="font-semibold text-primary block mb-1">Escalation</span>
                  Escalate sensitive or complex issues to human staff with full context.
                </div>
              </div>
            </AnimatedCard>
          </div>
        </section>

        <section className="py-24 overflow-hidden border-y border-border/50 glass-bg">
          <div className="container">
            <AnimatedSection>
              <h2 className="text-3xl font-heading font-bold mb-10 tracking-tight">Coworker Roles</h2>
            </AnimatedSection>
            
            {/* Horizontal Scroll Container */}
            {/* Horizontal Scroll Container */}
            <div className="relative">
  {/* Left Arrow */}
  <button
    onClick={() => scrollCarousel("left")}
    className="absolute left-0 top-1/2 -translate-y-1/2 z-10 h-10 w-10 rounded-full bg-white/80 backdrop-blur-md border border-border shadow-md flex items-center justify-center hover:bg-white transition"
  >
    <ArrowRight className="w-5 h-5 rotate-180 text-muted-foreground" />
  </button>

  {/* Right Arrow */}
  <button
    onClick={() => scrollCarousel("right")}
    className="absolute right-0 top-1/2 -translate-y-1/2 z-10 h-10 w-10 rounded-full bg-white/80 backdrop-blur-md border border-border shadow-md flex items-center justify-center hover:bg-white transition"
  >
    <ArrowRight className="w-5 h-5 text-muted-foreground" />
  </button>

  <div
    ref={higherEdCarouselRef}
    className="flex overflow-x-auto pb-8 gap-6 snap-x no-scrollbar px-12"
  >

    {HigherEdRoles.map((role, i) => (
      <div key={i} className="min-w-[300px] max-w-[300px] snap-center">
        <AnimatedCard
          delay={i * 0.1}
          className="h-full glass-card p-6 rounded-xl transition-colors shadow-sm"
        >
          <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center text-primary mb-4">
            <GraduationCap className="w-5 h-5" />
          </div>
          <h4 className="font-bold text-lg mb-2">{role.title}</h4>
          <p className="text-sm text-muted-foreground leading-relaxed">
            {role.desc}
          </p>
        </AnimatedCard>
      </div>
    ))}
  </div>
</div>

          </div>
        </section>

        <section className="container py-24">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <AnimatedSection>
              <h2 className="text-3xl font-heading font-bold mb-6 tracking-tight">Built for campus systems and institutional trust.</h2>
              <div className="grid gap-6">
                <div className="flex gap-4">
                  <div className="w-10 h-10 rounded-lg bg-green-100 flex items-center justify-center text-green-600 flex-shrink-0 border border-green-200">
                    <Server className="w-5 h-5" />
                  </div>
                  <div>
                    <h4 className="font-bold mb-1">Deep Integration</h4>
                    <p className="text-sm text-muted-foreground">Integrates with CRM, SIS, LMS, ERP, ticketing, and communication tools to orchestrate full workflows.</p>
                  </div>
                </div>
                <div className="flex gap-4">
                  <div className="w-10 h-10 rounded-lg bg-blue-100 flex items-center justify-center text-blue-600 flex-shrink-0 border border-blue-200">
                    <Shield className="w-5 h-5" />
                  </div>
                  <div>
                    <h4 className="font-bold mb-1">Compliance & Visibility</h4>
                    <p className="text-sm text-muted-foreground">Offers full visibility into coworker conversations, decisions, and actions for compliance and review.</p>
                  </div>
                </div>
                <div className="flex gap-4">
                  <div className="w-10 h-10 rounded-lg bg-purple-100 flex items-center justify-center text-purple-600 flex-shrink-0 border border-purple-200">
                    <Lock className="w-5 h-5" />
                  </div>
                  <div>
                    <h4 className="font-bold mb-1">Safety Guardrails</h4>
                    <p className="text-sm text-muted-foreground">Uses modern techniques to minimize hallucinations. Provides controls for sensitive topics like financial aid or mental health.</p>
                  </div>
                </div>
              </div>
            </AnimatedSection>
            
            <AnimatedCard className="bg-[#111827] text-white rounded-xl p-8 lg:p-12 shadow-2xl relative overflow-hidden">
              <div className="relative z-10">
                <h3 className="text-2xl font-bold mb-4">Launch your first campus coworker pod for 25K.</h3>
                <ul className="space-y-4 mb-8 text-gray-300">
                  <li className="flex gap-3">
                    <Check className="w-5 h-5 flex-shrink-0 text-primary" />
                    <span>Start with a focused pod—such as a set of academic support coworkers.</span>
                  </li>
                  <li className="flex gap-3">
                    <Check className="w-5 h-5 flex-shrink-0 text-primary" />
                    <span>We handle discovery, workflow design, integrations, configuration, and training.</span>
                  </li>
                  <li className="flex gap-3">
                    <Check className="w-5 h-5 flex-shrink-0 text-primary" />
                    <span>Live in weeks, handling real student and family needs.</span>
                  </li>
                </ul>
                <Link href="/contact">
                  <Button className="w-full bg-white text-black hover:bg-gray-100 font-medium">Get Started</Button>
                </Link>
              </div>
            </AnimatedCard>
          </div>
        </section>
      </div>

      {/* ENTERPRISE SECTION */}
      <div id="enterprise" className="scroll-mt-32 pt-20 border-t border-border">
      <section className="relative py-24 overflow-hidden bg-secondary/30">
  <div className="container relative z-10">
    <div className="grid items-center gap-12 lg:grid-cols-2">
      {/* LEFT: text */}
      <AnimatedText className="max-w-3xl">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white border border-border text-xs font-bold text-primary mb-6 uppercase tracking-wider shadow-sm">
          Enterprise Solutions
        </div>

        <h1 className="text-4xl lg:text-6xl font-heading font-bold mb-6 tracking-tight">
          Enterprise coworkers
        </h1>

        <p className="text-xl lg:text-2xl text-muted-foreground mb-8">
          AI coworkers for every enterprise team.
        </p>

        <p className="text-lg leading-relaxed max-w-2xl mb-8 text-muted-foreground">
          Digiworks coworkers sit in Teams, Slack, and your enterprise stack to auto-resolve routine requests, streamline workflows, and give your people more time for real work.
        </p>
      </AnimatedText>

      {/* RIGHT: image */}
      <div className="relative">
        <div className="absolute -inset-6 rounded-[32px] bg-gradient-to-br from-primary/10 via-transparent to-sky-200/20 blur-2xl" />
        <img
          src="/images/ent.jpg"
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
        < div className="container">
          <AnimatedSection>
            <h2 className="text-3xl font-heading font-bold mb-10 tracking-tight">Enterprise Capabilities</h2>
          </AnimatedSection>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {EnterpriseRoles.map((role, i) => (
              <AnimatedCard key={i} delay={i * 0.1} className="h-full glass-card p-6 rounded-xl transition-colors shadow-sm">
                <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center text-primary mb-4">
                  <Building2 className="w-5 h-5" />
                </div>
                <h4 className="font-bold text-lg mb-2">{role.title}</h4>
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
                <h3 className="text-2xl font-bold mb-4">Start with a 25K coworker pod.</h3>
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
                    <p className="text-muted-foreground">Increase the share of issues auto‑resolved without human intervention.</p>
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
