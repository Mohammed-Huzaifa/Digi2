import { Button } from "@/components/ui/button";
import { ArrowRight, MessageSquare, CheckCircle2, Zap, Layers, Users, ChevronRight } from "lucide-react";
import { Link } from "wouter";
import { AnimatedSection, AnimatedText, AnimatedCard } from "@/components/AnimatedSection";
import { motion } from "framer-motion";
import { ParticleSphere } from "@/components/particle-sphere";


export default function Home() {
  return (
    <div className="flex flex-col gap-0 pb-20 overflow-x-hidden">
      {/* Hero Section - Clerk Style Layout with Graphite Animation */}
      <section className="relative min-h-[820px] pt-32 pb-20 lg:pt-40 lg:pb-32 overflow-hidden">

        {/* Subtle Clerk-like background grid */}
        <div className="absolute inset-0 -z-10 h-full w-full bg-white bg-[linear-gradient(to_right,#8080800a_1px,transparent_1px),linear-gradient(to_bottom,#8080800a_1px,transparent_1px)] bg-[size:14px_24px]"></div>
        <div className="absolute left-0 right-0 top-0 -z-10 m-auto h-[310px] w-[310px] rounded-full bg-primary/20 opacity-20 blur-[100px]"></div>
        <div className="absolute inset-0 z-0 pointer-events-none">
  {/* subtle dark radial + bottom fade (still looks like a white page) */}
  <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(0,0,0,0.10),transparent_55%)]" />
  <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-black/10" />

  {/* darken the Spline render slightly so white particles show on white */}
  <div className="absolute inset-0 opacity-100 [filter:contrast(1.15)_brightness(0.75)]">
    <ParticleSphere />
  </div>
</div>




        
        <div className="container relative z-10">
          <div className="flex flex-col items-center text-center max-w-4xl mx-auto">
            <AnimatedText delay={0.1}>
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-secondary border border-border text-sm font-medium text-foreground mb-8 hover:bg-secondary/80 transition-colors cursor-pointer group">
                <span className="flex h-2 w-2 rounded-full bg-primary"></span>
                <span>Start with one coworker pod today</span>
                <ChevronRight className="w-3 h-3 text-muted-foreground group-hover:translate-x-0.5 transition-transform" />
              </div>
            </AnimatedText>
            
            <AnimatedText delay={0.2}>
            <h1 className="text-5xl lg:text-7xl font-heading font-bold tracking-tighter text-foreground mb-6 leading-[1.1] text-center">
  <span className="block whitespace-nowrap">
    Your team was hired to <span className="text-primary">think</span>
  </span>
  <span className="block whitespace-nowrap">
    Let AI coworkers handle the rest.
  </span>
</h1>



            </AnimatedText>
            
            <AnimatedText delay={0.3}>
              <p className="text-xl text-muted-foreground leading-relaxed max-w-2xl mx-auto mb-10">
                Digiworks deploys AI coworkers inside Microsoft Teams, Slack, and your core systems to take over mundane work, auto‑resolve routine issues, and free your people for high‑value decisions.
              </p>
            </AnimatedText>
            
            <AnimatedText delay={0.4} className="flex flex-wrap justify-center gap-4 w-full">
              <Link href="/contact">
                <Button size="lg" className="h-12 px-8 text-base bg-primary hover:bg-primary/90 text-white rounded-md shadow-lg shadow-primary/20 transition-all hover:-translate-y-0.5 font-medium">
                  Talk to our team
                </Button>
              </Link>
              <Link href="/solutions">
                <Button size="lg" variant="outline" className="h-12 px-8 text-base bg-white hover:bg-secondary border-border rounded-md font-medium text-foreground">
                  See coworker use cases
                </Button>
              </Link>
            </AnimatedText>
            
            <AnimatedText delay={0.5} className="mt-8">
              <p className="text-sm text-muted-foreground font-medium flex items-center justify-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-primary" />
                Start with one coworker pod. Prove ROI in weeks, not months.
              </p>
            </AnimatedText>
          </div>
          
          {/* Graphite-style Hero Visual - 3D/Video feel */}
          <AnimatedSection delay={0.6} className="mt-20 relative mx-auto max-w-5xl">
            <div className="relative rounded-xl border border-border bg-white/50 shadow-2xl overflow-hidden aspect-[16/9] group">
              {/* This would be a video loop in a real Graphite implementation */}
              <img 
                src="/images/hero-coworkers.jpg" 
                alt="AI Coworkers Visualization" 
                className="w-full h-full object-cover transition-transform duration-[2s] group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-background/40 to-transparent pointer-events-none" />
              
              {/* Floating UI Overlay - Graphite style */}
              <motion.div 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 1, duration: 0.8 }}
                className="absolute bottom-8 left-8 right-8 md:w-96 bg-white/90 backdrop-blur-md border border-white/50 rounded-lg p-4 shadow-lg"
              >
                <div className="flex items-center gap-3 mb-3">
                  <div className="w-8 h-8 rounded-full bg-blue-100 flex items-center justify-center text-blue-600">
                    <MessageSquare className="w-4 h-4" />
                  </div>
                  <div>
                    <p className="text-xs font-semibold text-muted-foreground">Teams Integration</p>
                    <p className="text-sm font-medium">Processing invoice #4092...</p>
                  </div>
                </div>
                <div className="h-1.5 w-full bg-secondary rounded-full overflow-hidden">
                  <motion.div 
                    initial={{ width: "0%" }}
                    animate={{ width: "100%" }}
                    transition={{ duration: 2, repeat: Infinity, repeatDelay: 1 }}
                    className="h-full bg-primary" 
                  />
                </div>
              </motion.div>
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* Problem Section - Clerk Style Cards */}
      <section className="py-24 glass-bg">
      <div className="container">
        <AnimatedSection>
          <div className="max-w-3xl mx-auto text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-heading font-bold tracking-tight mb-6">The Mundane is Killing Your Momentum</h2>
            <p className="text-xl text-muted-foreground">
              Your smartest people are stuck doing work they were never hired for.
            </p>
          </div>
        </AnimatedSection>
        
        <div className="grid md:grid-cols-3 gap-8">
          {[
            {
              title: "Trapped Talent",
              desc: "High‑value employees trapped in low‑value tasks: triaging tickets, chasing approvals, answering the same questions again and again.",
              icon: Users
            },
            {
              title: "Shadow Operations",
              desc: "Shadow work and manual processes quietly become your operating system, slowing every initiative and inflating costs.",
              icon: Layers
            },
            {
              title: "Innovation Stalled",
              desc: "Burnout rises, innovation stalls, and strategic projects are delayed because the team is buried in routine work.",
              icon: Zap
            }
          ].map((item, i) => (
            <AnimatedCard key={i} delay={i * 0.1} className="glass-card p-8 hover:shadow-xl transition-all h-full flex flex-col">
              <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center text-primary mb-6">
                <item.icon className="w-6 h-6" />
              </div>
              <h3 className="text-xl font-bold mb-3 tracking-tight">{item.title}</h3>
              <p className="text-muted-foreground leading-relaxed flex-1">
                {item.desc}
              </p>
            </AnimatedCard>
          ))}
        </div>
        </div>
        </section>


      {/* Solution Section - Graphite Scroll Effect */}
      <section className="bg-secondary/50 py-32 relative overflow-hidden">
        <div className="container">
          <div className="grid lg:grid-cols-2 gap-20 items-center">
            <div className="order-2 lg:order-1 relative">
              <div className="relative z-10 grid gap-6">
                <AnimatedCard delay={0.1} className="glass-card p-6 rounded-xl shadow-sm">
                  <h4 className="font-bold text-lg mb-2 flex items-center gap-2">
                    <img src="/images/icon-teams.png" className="w-6 h-6 object-contain" alt="Teams" />
                    Microsoft Teams
                  </h4>
                  <p className="text-sm text-muted-foreground">"Hey Digi, can you reset the password for user @sarah?"</p>
                </AnimatedCard>
                
                <AnimatedCard delay={0.2} className="glass-card p-6 rounded-xl shadow-sm translate-x-8">
                  <h4 className="font-bold text-lg mb-2 flex items-center gap-2">
                    <div className="w-6 h-6 bg-black rounded flex items-center justify-center text-white text-[10px] font-bold">S</div>
                    Slack
                  </h4>
                  <p className="text-sm text-muted-foreground">"Approved. Please proceed with the purchase order #9921."</p>
                </AnimatedCard>
                
                <AnimatedCard delay={0.3} className="glass-card p-6 rounded-xl shadow-sm">
                  <h4 className="font-bold text-lg mb-2 flex items-center gap-2">
                    <img src="/images/icon-workflow.png" className="w-6 h-6 object-contain" alt="System" />
                    CRM / ERP Update
                  </h4>
                  <p className="text-sm text-muted-foreground">System updated successfully. Notification sent to finance team.</p>
                </AnimatedCard>
              </div>
              
              {/* Decorative Glow */}
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[120%] h-[120%] bg-primary/5 rounded-full blur-3xl -z-10" />
            </div>
            
            <div className="order-1 lg:order-2 space-y-8">
              <AnimatedText>
                <h2 className="text-3xl lg:text-4xl font-heading font-bold tracking-tight">Meet Your New Digital Coworkers</h2>
                <p className="text-lg text-muted-foreground leading-relaxed mt-4">
                  Digiworks coworkers are AI agents that act like digital teammates. They live where your teams already work, plug into your systems, and run real workflows from end to end.
                </p>
                
                <ul className="space-y-4 mt-8">
                  {[
                    "Coworkers join your Microsoft Teams and Slack channels and respond like colleagues.",
                    "They connect to tools like CRM, ERP, HRIS, SIS, LMS, and ITSM to take action.",
                    "You define what they can do, what requires human approval, and escalation rules."
                  ].map((point, i) => (
                    <li key={i} className="flex gap-3 items-start">
                      <div className="mt-1.5 w-5 h-5 rounded-full bg-primary/10 flex items-center justify-center text-primary flex-shrink-0">
                        <CheckCircle2 className="w-3 h-3" />
                      </div>
                      <span className="text-foreground/80">{point}</span>
                    </li>
                  ))}
                </ul>
              </AnimatedText>
            </div>
          </div>
        </div>
      </section>

      {/* How It Works - Step Cards */}
      <section className="container py-24 glass-bg">
        <AnimatedSection className="text-center mb-16">
          <h2 className="text-3xl font-heading font-bold mb-4 tracking-tight">How It Works</h2>
          <p className="text-muted-foreground text-lg">Deploying your first coworker pod is a structured 3-step plan.</p>
        </AnimatedSection>
        
        <div className="grid md:grid-cols-3 gap-8 relative">
          {/* Connecting line */}
          <div className="hidden md:block absolute top-8 left-0 w-full h-px bg-border -z-10" />
          
          {[
  {
    step: "01",
    title: "Identify high-leverage workflows",
    desc: "We start by finding the repetitive, rules-based work that slows your teams down—support tickets, admissions inquiries, HR questions, approvals, and more."
  },
  {
    step: "02",
    title: "Connect your systems and guardrails",
    desc: "Next, we integrate your coworkers with the right systems and data, design their responsibilities, and set clear boundaries and escalation rules."
  },
  {
    step: "03",
    title: "Deploy, monitor, and scale",
    desc: "We deploy your first coworkers in weeks. You track their impact, refine their behavior, and then scale coworkers across teams and departments."
  }
].map((item, i) => (
  <AnimatedCard
    key={i}
    delay={i * 0.2}
    className="glass-card border-none rounded-2xl px-8 py-10 min-h-[260px] flex flex-col"
  >
    <div className="glass-card w-16 h-16 rounded-2xl shadow-sm flex items-center justify-center text-xl font-bold font-heading text-primary mb-6 mx-auto z-10 relative">
      {item.step}
    </div>

    <h3 className="text-[20px] lg:text-xl font-bold mb-4 text-center tracking-tight leading-snug">
      {item.title}
    </h3>

    <p className="text-center text-muted-foreground text-sm leading-relaxed mt-auto">
      {item.desc}
    </p>
  </AnimatedCard>
))}

        </div>
      </section>

      {/* Solutions Overview - Bento Grid Style */}
      <section className="container py-10">
        <div className="grid md:grid-cols-2 gap-8">
          <AnimatedCard className="min-h-[400px] flex flex-col justify-between group cursor-pointer glass-card rounded-2xl overflow-hidden">
            <div className="p-8">
              <h3 className="text-2xl font-heading font-bold mb-3">Higher Ed Coworkers</h3>
              <p className="text-muted-foreground mb-6">
                Coworkers for recruitment, advising, student services, alumni engagement, and more—performing critical functions across campus, 24/7, in many languages.
              </p>
              <Link href="/solutions">
                <Button variant="outline" className="group-hover:bg-primary group-hover:text-white group-hover:border-primary transition-all">
                  View Higher Ed solutions <ArrowRight className="ml-2 w-4 h-4" />
                </Button>
              </Link>
            </div>
            <div className="h-48 relative overflow-hidden mt-auto">
              <img src="/images/higher-ed-bg.jpg" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" alt="Higher Ed" />
              <div className="absolute inset-0 bg-gradient-to-t from-white via-transparent to-transparent" />
            </div>
          </AnimatedCard>
          
          <AnimatedCard delay={0.2} className="min-h-[400px] flex flex-col justify-between group cursor-pointer glass-card rounded-2xl overflow-hidden">
            <div className="p-8">
              <h3 className="text-2xl font-heading font-bold mb-3">Enterprise Coworkers</h3>
              <p className="text-muted-foreground mb-6">
                Coworkers for IT, HR, finance, and operations that auto‑resolve routine issues, optimize knowledge, and accelerate approvals.
              </p>
              <Link href="/solutions">
                <Button variant="outline" className="group-hover:bg-primary group-hover:text-white group-hover:border-primary transition-all">
                  View Enterprise solutions <ArrowRight className="ml-2 w-4 h-4" />
                </Button>
              </Link>
            </div>
            <div className="h-48 relative overflow-hidden mt-auto">
              <img src="/images/enterprise-bg.jpg" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" alt="Enterprise" />
              <div className="absolute inset-0 bg-gradient-to-t from-white via-transparent to-transparent" />
            </div>
          </AnimatedCard>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-24 glass-bg">
  <div className="container max-w-3xl">
        <AnimatedSection>
          <h2 className="text-3xl font-heading font-bold mb-10 text-center tracking-tight">Common Questions</h2>
          <div className="grid gap-4">
            {[
              {
                q: "What are Digiworks coworkers?",
                a: "Digiworks coworkers are AI agents that behave like digital colleagues. They sit inside your chat tools and systems, understand your workflows, and take on repeatable work so your people don't have to."
              },
              {
                q: "How are coworkers different from chatbots?",
                a: "Chatbots mostly talk. Coworkers do. They can trigger automations, update records, complete tasks, and follow your rules with full visibility, not just provide answers."
              },
              {
                q: "Where do coworkers live?",
                a: "Coworkers show up in Microsoft Teams, Slack, and the portals and applications you already use. Your team interacts with them in the same channels they use every day."
              },
              {
                q: "How long does it take to launch our first coworker?",
                a: "Most teams launch their first coworker pod in a matter of weeks, starting with a tightly scoped set of workflows and clear success metrics."
              },
              {
                q: "What is a 25K coworker pod?",
                a: "A coworker pod is a starter package focused on a specific area (like IT support or student services). For 25K, you get design, integration, configuration, guardrails, and initial optimization for a set of coworkers."
              }
            ].map((item, i) => (
              <AnimatedCard key={i} delay={i * 0.05} className="glass-card rounded-lg p-6 transition-colors cursor-pointer group">
                <h4 className="font-bold text-lg mb-2 group-hover:text-primary transition-colors">{item.q}</h4>
                <p className="text-muted-foreground text-sm leading-relaxed">{item.a}</p>
              </AnimatedCard>
            ))}
          </div>
        </AnimatedSection>
        </div>
</section>

      {/* Contact Teaser - Graphite Style Dark Section */}
      <section className="container pb-24">
        <AnimatedSection>
          <div className="bg-[#111827] rounded-2xl p-12 text-center text-white relative overflow-hidden shadow-2xl">
            {/* Abstract animated background */}
            <div className="absolute top-0 left-0 w-full h-full opacity-20">
               <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-primary via-transparent to-transparent blur-3xl" />
            </div>
            
            <div className="relative z-10 max-w-2xl mx-auto space-y-8">
              <h2 className="text-3xl lg:text-4xl font-heading font-bold tracking-tight">Ready to meet your first coworkers?</h2>
              <p className="text-gray-300 text-lg">
                Tell us where you're stuck today and we'll show you what a coworker can do in that part of your organization.
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
