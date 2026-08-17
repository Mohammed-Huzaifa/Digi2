import React, { useState, useMemo } from "react";
import { motion, AnimatePresence } from "motion/react";
import { 
  ArrowRight, 
  Search, 
  X, 
  ChevronRight, 
  CheckCircle2, 
  Download, 
  FileText, 
  Layout, 
  ShieldCheck, 
  Zap, 
  Users, 
  Database, 
  Plus, 
  Minus,
  Compass,
  ClipboardCheck,
  BookOpen,
  ArrowUpRight,
  Monitor,
  Workflow
} from "lucide-react";
import { Header } from "./components/Header";
import { Footer } from "./components/Footer";

// Resource Data
const resources = [
  {
    id: 1,
    title: "The AI Operating Layer Playbook",
    teaser: "A clear model for deploying AI as an operating layer across teams.",
    format: "Playbook",
    phase: ["Assess", "Deploy"],
    topic: "Readiness",
    featured: true,
  },
  {
    id: 2,
    title: "AI Readiness Assessment",
    teaser: "A structured assessment that highlights your strongest opportunities and key gaps.",
    format: "Assessment",
    phase: ["Assess"],
    topic: "Readiness",
    featured: true,
  },
  {
    id: 3,
    title: "KnowledgeStack Preparation Checklist",
    teaser: "A checklist to prepare internal knowledge for retrieval and accuracy.",
    format: "Checklist",
    phase: ["Capture", "Structure"],
    topic: "KnowledgeStack",
  },
  {
    id: 4,
    title: "Governance Starter Kit",
    teaser: "A governance starter kit for responsible AI adoption and access control.",
    format: "Guide",
    phase: ["Assess", "Deploy"],
    topic: "Governance",
  },
  {
    id: 5,
    title: "Impact & Feasibility Prioritization Matrix",
    teaser: "A structured worksheet to map use cases and prioritize by impact and feasibility.",
    format: "Template",
    phase: ["Assess"],
    topic: "Readiness",
  },
  {
    id: 6,
    title: "AEO Page Structure Template",
    teaser: "A page template designed to capture answer intent and improve AI discovery.",
    format: "Template",
    phase: ["Maintain"],
    topic: "AEO",
  },
  {
    id: 7,
    title: "Agent Scope Definition Worksheet",
    teaser: "Define the specific guardrails and data access for your task-ready assistants.",
    format: "Workshop",
    phase: ["Structure", "Deploy"],
    topic: "Agents",
  },
  {
    id: 8,
    title: "AI Adoption Readiness Survey",
    teaser: "Measure team sentiment and technical comfort levels before scaling AI tools.",
    format: "Guide",
    phase: ["Assess"],
    topic: "Enablement",
  },
  {
    id: 9,
    title: "Maintenance & Drift Monitoring Guide",
    teaser: "How to set up ongoing performance checks for your deployed agents.",
    format: "Guide",
    phase: ["Maintain"],
    topic: "Maintenance",
  }
];

const filterOptions = {
  Phase: ["Assess", "Capture", "Structure", "Deploy", "Maintain"],
  Format: ["Playbook", "Template", "Checklist", "Workshop", "Guide"],
  Topic: ["Readiness", "KnowledgeStack", "Agents", "Governance", "Enablement", "Training", "ContentEngine", "AEO", "VisualAI"]
};

const FAQItem = ({ question, answer }: { question: string; answer: string }) => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <div className="border-b border-gray-100 py-6 last:border-0">
      <button 
        onClick={() => setIsOpen(!isOpen)}
        className="flex items-center justify-between w-full text-left group"
      >
        <span className="text-lg font-semibold text-[#1F2328] group-hover:text-[#14B8A6] transition-colors">{question}</span>
        {isOpen ? <Minus className="w-5 h-5 text-[#6B7280]" /> : <Plus className="w-5 h-5 text-[#6B7280]" />}
      </button>
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            className="overflow-hidden"
          >
            <p className="pt-4 text-[#6B7280] leading-relaxed max-w-3xl text-sm">
              {answer}
            </p>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default function ResourcesPage() {
  const [searchQuery, setSearchQuery] = useState("");
  const [activeFilters, setActiveFilters] = useState<Record<string, string | null>>({
    Phase: null,
    Format: null,
    Topic: null
  });

  const filteredResources = useMemo(() => {
    return resources.filter(res => {
      const matchesSearch = res.title.toLowerCase().includes(searchQuery.toLowerCase()) || 
                           res.teaser.toLowerCase().includes(searchQuery.toLowerCase());
      
      const matchesPhase = !activeFilters.Phase || res.phase.includes(activeFilters.Phase);
      const matchesFormat = !activeFilters.Format || res.format === activeFilters.Format;
      const matchesTopic = !activeFilters.Topic || res.topic === activeFilters.Topic;

      return matchesSearch && matchesPhase && matchesFormat && matchesTopic;
    });
  }, [searchQuery, activeFilters]);

  const toggleFilter = (category: string, value: string) => {
    setActiveFilters(prev => ({
      ...prev,
      [category]: prev[category] === value ? null : value
    }));
  };

  const clearFilters = () => {
    setSearchQuery("");
    setActiveFilters({
      Phase: null,
      Format: null,
      Topic: null
    });
  };

  return (
    <div className="min-h-screen bg-[#F8F9FB] text-[#1F2328] font-sans selection:bg-[#14B8A6]/20">
      <Header />

      <main>
        {/* Hero Section */}
        <section className="relative pt-32 pb-24 md:pt-48 md:pb-40 overflow-hidden bg-white border-b border-gray-100">
          <div className="absolute inset-0 pointer-events-none opacity-[0.03]" style={{ backgroundImage: "url('https://www.transparenttextures.com/patterns/graphy.png')" }}></div>
          
          <div className="max-w-[1200px] mx-auto px-6 relative z-10 grid lg:grid-cols-12 gap-12 items-center">
            <div className="lg:col-span-7">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
              >
                <span className="text-xs font-bold text-[#14B8A6] tracking-[0.2em] uppercase mb-4 block">Resources</span>
                <h1 className="text-5xl md:text-7xl font-bold leading-[1.05] tracking-tight mb-8">
                  Tools, playbooks, and <br />templates you can use.
                </h1>
                <p className="text-xl md:text-2xl text-[#6B7280] leading-relaxed mb-10 max-w-2xl">
                  A curated library of practical resources to help you move from AI curiosity to structured deployment. Built for leaders who want clarity and momentum.
                </p>
                <div className="flex flex-col sm:flex-row gap-4">
                  <button className="px-10 py-5 bg-[#14B8A6] text-white font-bold rounded-lg hover:bg-[#0D9488] transition-all transform hover:-translate-y-0.5 shadow-lg shadow-[#14B8A6]/20">
                    Download the Playbook
                  </button>
                  <button className="px-10 py-5 bg-white text-[#1F2328] font-bold rounded-lg border border-gray-200 hover:border-[#1F2328] transition-all">
                    Take the Assessment
                  </button>
                </div>
              </motion.div>
            </div>

            <div className="lg:col-span-5 hidden lg:block relative">
              <svg width="400" height="400" viewBox="0 0 400 400" fill="none" className="mx-auto opacity-10">
                <rect x="50" y="50" width="300" height="300" stroke="#1F2328" strokeWidth="0.5" />
                <path d="M100 50V350" stroke="#1F2328" strokeWidth="0.5" />
                <path d="M200 50V350" stroke="#1F2328" strokeWidth="0.5" />
                <path d="M300 50V350" stroke="#1F2328" strokeWidth="0.5" />
                <path d="M50 100H350" stroke="#1F2328" strokeWidth="0.5" />
                <path d="M50 200H350" stroke="#1F2328" strokeWidth="0.5" />
                <path d="M50 300H350" stroke="#1F2328" strokeWidth="0.5" />
                
                {/* Document motifs */}
                <rect x="120" y="120" width="60" height="80" rx="4" fill="white" stroke="#14B8A6" strokeWidth="1" />
                <rect x="220" y="220" width="60" height="80" rx="4" fill="white" stroke="#1F2328" strokeWidth="0.5" />
                <circle cx="150" cy="300" r="10" fill="#14B8A6" fillOpacity="0.2" />
                <circle cx="250" cy="100" r="10" fill="#6366F1" fillOpacity="0.2" />
              </svg>
            </div>
          </div>
        </section>

        {/* Intro Strip */}
        <section className="py-12 bg-white border-b border-gray-100">
          <div className="max-w-[1200px] mx-auto px-6 flex items-center justify-center text-center">
            <div className="flex items-center gap-3">
              <Compass className="w-5 h-5 text-[#14B8A6]" />
              <p className="text-[#6B7280] font-medium">Start simple: Explore our structured toolkit designed to help you build an AI operating layer.</p>
            </div>
          </div>
        </section>

        {/* Featured Resources Section */}
        <section className="py-24 bg-[#EEF4FF]/50 border-b border-gray-100">
          <div className="max-w-[1200px] mx-auto px-6">
            <div className="grid md:grid-cols-2 gap-8">
              {/* Card 1: Playbook */}
              <motion.div 
                whileHover={{ y: -8 }}
                className="bg-white p-12 rounded-[32px] border border-gray-100 shadow-sm hover:shadow-xl transition-all flex flex-col group"
              >
                <div className="mb-8">
                  <span className="text-[10px] font-bold text-[#14B8A6] uppercase tracking-[0.2em] bg-[#14B8A6]/5 px-3 py-1 rounded">
                    Featured / Playbook
                  </span>
                </div>
                <h3 className="text-3xl font-bold mb-6 tracking-tight group-hover:text-[#14B8A6] transition-colors">
                  Download the Playbook
                </h3>
                <p className="text-lg text-[#6B7280] mb-12 grow leading-relaxed">
                  A practical guide to deploying AI across teams with structure, governance, and a clear rollout path. Built for leaders who want results, not pilots.
                </p>
                <div className="space-y-4">
                  <button className="w-full py-5 bg-[#1F2328] text-white font-bold rounded-xl hover:bg-black transition-colors flex items-center justify-center gap-3">
                    <Download className="w-5 h-5" /> Download the Playbook
                  </button>
                  <p className="text-center text-xs text-[#6B7280]">Frameworks, examples, and next steps. No noise.</p>
                </div>
              </motion.div>

              {/* Card 2: Assessment */}
              <motion.div 
                whileHover={{ y: -8 }}
                className="bg-white p-12 rounded-[32px] border border-gray-100 shadow-sm hover:shadow-xl transition-all flex flex-col group"
              >
                <div className="mb-8">
                  <span className="text-[10px] font-bold text-[#6366F1] uppercase tracking-[0.2em] bg-[#6366F1]/5 px-3 py-1 rounded">
                    Featured / Assessment
                  </span>
                </div>
                <h3 className="text-3xl font-bold mb-6 tracking-tight group-hover:text-[#6366F1] transition-colors">
                  Take the AI Readiness Assessment
                </h3>
                <p className="text-lg text-[#6B7280] mb-12 grow leading-relaxed">
                  A structured assessment that highlights your strongest opportunities, key gaps, and what to do next across people, process, data, and governance.
                </p>
                <div className="space-y-4">
                  <button className="w-full py-5 bg-[#14B8A6] text-white font-bold rounded-xl hover:bg-[#0D9488] transition-all flex items-center justify-center gap-3 shadow-lg shadow-[#14B8A6]/20">
                    <ClipboardCheck className="w-5 h-5" /> Take the Assessment
                  </button>
                  <p className="text-center text-xs text-[#6B7280]">Takes 5 to 8 minutes. Instant results.</p>
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Filter & Search Bar */}
        <section className="sticky top-[88px] z-30 bg-[#F8F9FB]/95 backdrop-blur-md py-6 border-b border-gray-200">
          <div className="max-w-[1200px] mx-auto px-6">
            <div className="flex flex-col lg:flex-row gap-6 items-start lg:items-center justify-between">
              <div className="flex flex-wrap gap-2 items-center grow">
                {Object.entries(filterOptions).map(([category, options]) => (
                  <div key={category} className="relative group">
                    <select 
                      value={activeFilters[category] || ""} 
                      onChange={(e) => toggleFilter(category, e.target.value)}
                      className="appearance-none bg-white border border-gray-200 px-4 py-2 pr-10 rounded-lg text-sm font-medium focus:outline-none focus:ring-2 focus:ring-[#14B8A6]/20 focus:border-[#14B8A6] cursor-pointer"
                    >
                      <option value="">{category}</option>
                      {options.map(opt => <option key={opt} value={opt}>{opt}</option>)}
                    </select>
                    <ChevronRight className="w-4 h-4 absolute right-3 top-1/2 -translate-y-1/2 rotate-90 text-[#6B7280] pointer-events-none" />
                  </div>
                ))}

                {(Object.values(activeFilters).some(v => v !== null) || searchQuery) && (
                  <button 
                    onClick={clearFilters}
                    className="text-xs font-bold text-[#14B8A6] hover:text-[#0D9488] flex items-center gap-1 transition-colors ml-2"
                  >
                    <X className="w-3 h-3" /> Clear all
                  </button>
                )}
              </div>

              <div className="relative w-full lg:w-72">
                <Search className="w-4 h-4 absolute left-3 top-1/2 -translate-y-1/2 text-[#6B7280]" />
                <input 
                  type="text" 
                  placeholder="Search resources..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="w-full bg-white border border-gray-200 pl-10 pr-4 py-2 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-[#14B8A6]/20 focus:border-[#14B8A6]"
                />
              </div>
            </div>
          </div>
        </section>

        {/* Library Grid */}
        <section className="py-24 md:py-32">
          <div className="max-w-[1200px] mx-auto px-6">
            <div className="max-w-2xl mb-16">
              <span className="text-xs font-bold text-[#6B7280] tracking-[0.2em] uppercase mb-4 block">Library</span>
              <h2 className="text-4xl font-bold tracking-tight mb-6">Browse the full resource set</h2>
              <p className="text-lg text-[#6B7280]">
                Filter by format or phase to find what you need quickly.
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              <AnimatePresence mode="popLayout">
                {filteredResources.length > 0 ? (
                  filteredResources.map((res) => (
                    <motion.div 
                      key={res.id}
                      layout
                      initial={{ opacity: 0, scale: 0.95 }}
                      animate={{ opacity: 1, scale: 1 }}
                      exit={{ opacity: 0, scale: 0.95 }}
                      whileHover={{ y: -4 }}
                      className="bg-white p-8 rounded-2xl border border-gray-100 shadow-sm hover:shadow-md transition-all flex flex-col h-full group"
                    >
                      <div className="flex justify-between items-start mb-6">
                        <div className="flex flex-wrap gap-2">
                          <span className="text-[9px] font-bold text-[#14B8A6] uppercase tracking-widest bg-[#14B8A6]/5 px-2 py-0.5 rounded border border-[#14B8A6]/10">
                            {res.format}
                          </span>
                          {res.phase.map(p => (
                            <span key={p} className="text-[9px] font-bold text-[#6B7280] uppercase tracking-widest bg-gray-50 px-2 py-0.5 rounded">
                              {p}
                            </span>
                          ))}
                        </div>
                        {res.format === "Template" && <Layout className="w-4 h-4 text-gray-300" />}
                        {res.format === "Checklist" && <CheckCircle2 className="w-4 h-4 text-gray-300" />}
                        {res.format === "Guide" && <BookOpen className="w-4 h-4 text-gray-300" />}
                        {res.format === "Workshop" && <Users className="w-4 h-4 text-gray-300" />}
                      </div>
                      <h3 className="text-lg font-bold mb-3 tracking-tight group-hover:text-[#14B8A6] transition-colors leading-snug grow">
                        {res.title}
                      </h3>
                      <p className="text-[#6B7280] text-sm leading-relaxed mb-8">
                        {res.teaser}
                      </p>
                      <button className="flex items-center gap-2 font-bold text-sm text-[#1F2328] group/btn pt-6 border-t border-gray-50">
                        Get resource <ArrowUpRight className="w-4 h-4 group-hover/btn:translate-x-0.5 group-hover/btn:-translate-y-0.5 transition-transform text-[#14B8A6]" />
                      </button>
                    </motion.div>
                  ))
                ) : (
                  <div className="col-span-full py-24 text-center">
                    <Search className="w-12 h-12 text-gray-200 mx-auto mb-4" />
                    <h3 className="text-xl font-bold mb-2">No resources match your filters.</h3>
                    <p className="text-[#6B7280]">Try adjusting your search or filter selection.</p>
                  </div>
                )}
              </AnimatePresence>
            </div>
          </div>
        </section>

        {/* How to Use These Resources */}
        <section className="py-24 md:py-32 bg-white border-y border-gray-100">
          <div className="max-w-[1200px] mx-auto px-6">
            <div className="text-center max-w-2xl mx-auto mb-20">
              <h2 className="text-4xl font-bold tracking-tight mb-6">How to use these resources</h2>
              <p className="text-[#6B7280]">These tools are designed to be used in sequence to build a reliable AI operating layer.</p>
            </div>

            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-12 relative">
              <div className="absolute top-8 left-0 right-0 h-px bg-gray-100 hidden lg:block z-0" />
              {[
                { title: "Run readiness", desc: "Identify impact and risks first.", icon: Monitor },
                { title: "Build knowledge foundation", desc: "Structure your data for retrieval.", icon: Database },
                { title: "Deploy agents with guardrails", desc: "Release scoped tools to teams.", icon: ShieldCheck },
                { title: "Maintain and iterate", desc: "Ongoing performance improvements.", icon: Zap }
              ].map((step, i) => (
                <div key={i} className="relative z-10 flex flex-col items-center text-center">
                  <div className="w-16 h-16 rounded-full bg-white border-2 border-[#14B8A6] flex items-center justify-center text-[#14B8A6] font-bold text-xl mb-6 shadow-sm">
                    {i + 1}
                  </div>
                  <h4 className="font-bold mb-2">{step.title}</h4>
                  <p className="text-sm text-[#6B7280]">{step.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Strip */}
        <section className="py-24 bg-[#F8F9FB]">
          <div className="max-w-[1200px] mx-auto px-6">
            <div className="bg-[#1F2328] p-12 md:p-20 rounded-[40px] shadow-2xl relative overflow-hidden flex flex-col lg:flex-row items-center justify-between gap-12 text-white">
              <div className="absolute inset-0 opacity-10 pointer-events-none" style={{ backgroundImage: "linear-gradient(#fff 1px, transparent 1px), linear-gradient(90deg, #fff 1px, transparent 1px)", backgroundSize: "40px 40px" }} />
              
              <div className="relative z-10 max-w-2xl text-center lg:text-left">
                <h2 className="text-4xl md:text-5xl font-bold tracking-tight mb-6">Want help applying this inside?</h2>
                <p className="text-xl text-gray-400">
                  If you want a clear roadmap and hands-on support, start with AI Readiness. We’ll help you prioritize and scale.
                </p>
              </div>
              <div className="relative z-10 flex flex-col sm:flex-row gap-4 whitespace-nowrap">
                <button className="px-10 py-5 bg-[#14B8A6] text-white font-bold rounded-lg hover:bg-[#0D9488] transition-all shadow-lg shadow-[#14B8A6]/20">
                  Run AI Readiness
                </button>
                <button className="px-10 py-5 bg-transparent text-white font-bold rounded-lg border border-white/20 hover:bg-white hover:text-[#1F2328] transition-all">
                  Talk to FieldSignal
                </button>
              </div>
            </div>
          </div>
        </section>

        {/* FAQ Section */}
        <section className="py-24 md:py-32 bg-white">
          <div className="max-w-[1200px] mx-auto px-6">
            <div className="grid lg:grid-cols-12 gap-16">
              <div className="lg:col-span-4">
                <span className="text-xs font-bold text-[#14B8A6] tracking-[0.2em] uppercase mb-4 block">Toolkit FAQ</span>
                <h2 className="text-3xl md:text-4xl font-bold leading-tight mb-6 tracking-tight">Resources FAQs</h2>
                <div className="inline-flex items-center gap-2 px-3 py-1 bg-[#F8F9FB] border border-gray-200 rounded text-[10px] font-bold text-[#6B7280]">
                  <Workflow className="w-3 h-3 text-[#14B8A6]" /> PRACTICAL SYSTEMS
                </div>
              </div>
              <div className="lg:col-span-8">
                <div className="divide-y divide-gray-100">
                  <FAQItem 
                    question="Are these resources free?"
                    answer="Many are free, and some may be gated to keep the library high-quality and relevant. The featured playbook and readiness assessment are the best starting points."
                  />
                  <FAQItem 
                    question="How do I know which resource to start with?"
                    answer="Start with the AI Readiness Assessment if you want a direct roadmap. Start with the playbook if you want the full framework and examples first."
                  />
                  <FAQItem 
                    question="Can you customize these for our organization?"
                    answer="Yes. We use these resources as starting points, then tailor the implementation based on your people, workflows, risk profile, and goals."
                  />
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Page Close */}
        <section className="py-24 md:py-40 bg-[#F8F9FB]">
          <div className="max-w-[1200px] mx-auto px-6 text-center">
            <h2 className="text-5xl md:text-7xl font-bold leading-[1.05] tracking-tight mb-8">
              Start with clarity.
            </h2>
            <p className="text-xl md:text-2xl text-[#6B7280] max-w-2xl mx-auto mb-12 leading-relaxed">
              Tools are useful. Structure is what makes them work. FieldSignal helps teams deploy AI with governance and measurable outcomes.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
              <button className="w-full sm:w-auto px-10 py-5 bg-[#14B8A6] text-white font-bold rounded-lg hover:bg-[#0D9488] transition-all transform hover:-translate-y-0.5 shadow-lg shadow-[#14B8A6]/20">
                Take the Assessment
              </button>
              <button className="w-full sm:w-auto px-10 py-5 bg-white text-[#1F2328] font-bold rounded-lg border border-gray-200 hover:border-[#1F2328] transition-all">
                Download the Playbook
              </button>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
