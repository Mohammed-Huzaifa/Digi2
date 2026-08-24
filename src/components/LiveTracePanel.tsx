import type { LucideIcon } from "lucide-react";

interface TraceStep {
  day: string;
  desc: string;
  icon: LucideIcon;
}

export function LiveTracePanel({ steps }: { steps: TraceStep[] }) {
  const n = steps.length;
  const cycle = n * 1.7 + 1.6;

  return (
    <div className="relative w-full max-w-md">
      <style>{`
        @keyframes tracePanelGlowA {
          0%, 100% { transform: translate(-10%, -10%) scale(1); opacity: 0.55; }
          50% { transform: translate(5%, 5%) scale(1.15); opacity: 0.85; }
        }
        @keyframes tracePanelGlowB {
          0%, 100% { transform: translate(10%, 10%) scale(1); opacity: 0.45; }
          50% { transform: translate(-5%, -8%) scale(1.2); opacity: 0.75; }
        }
        @keyframes nodeCore {
          0% { background: rgba(255,255,255,0.06); box-shadow: 0 0 0 0 rgba(139,92,246,0); }
          2% { background: linear-gradient(135deg,#8B5CF6,#6C47FF); box-shadow: 0 0 0 6px rgba(139,92,246,0.25), 0 0 24px 4px rgba(139,92,246,0.55); }
          10% { background: linear-gradient(135deg,#7C5CFA,#6C47FF); box-shadow: 0 0 0 4px rgba(139,92,246,0.14), 0 0 14px 2px rgba(139,92,246,0.35); }
          88% { background: linear-gradient(135deg,#7C5CFA,#6C47FF); box-shadow: 0 0 0 4px rgba(139,92,246,0.14), 0 0 14px 2px rgba(139,92,246,0.35); }
          96%, 100% { background: rgba(255,255,255,0.06); box-shadow: 0 0 0 0 rgba(139,92,246,0); }
        }
        @keyframes nodeIcon {
          0% { color: rgba(255,255,255,0.28); }
          4% { color: #fff; }
          92% { color: #fff; }
          97%, 100% { color: rgba(255,255,255,0.28); }
        }
        @keyframes nodeLabel {
          0% { opacity: 0.32; }
          4% { opacity: 1; }
          92% { opacity: 1; }
          97%, 100% { opacity: 0.32; }
        }
        @keyframes nodeRing {
          0% { opacity: 0; transform: scale(0.6); }
          2% { opacity: 1; transform: scale(1.6); }
          16% { opacity: 0; transform: scale(2.2); }
          100% { opacity: 0; transform: scale(2.2); }
        }
        @keyframes segFill {
          0% { transform: scaleY(0); }
          8% { transform: scaleY(1); }
          95%, 100% { transform: scaleY(1); }
        }
        .trace-node { animation: nodeCore var(--cyc) ease-in-out infinite backwards; animation-delay: var(--dly); }
        .trace-icon { animation: nodeIcon var(--cyc) ease-in-out infinite backwards; animation-delay: var(--dly); }
        .trace-label { animation: nodeLabel var(--cyc) ease-in-out infinite backwards; animation-delay: var(--dly); }
        .trace-ring { animation: nodeRing var(--cyc) ease-in-out infinite backwards; animation-delay: var(--dly); }
        .trace-seg { animation: segFill var(--cyc) ease-in-out infinite backwards; animation-delay: var(--dly); transform-origin: top; }
      `}</style>

      {/* Ambient glow — fades the panel into the page instead of a hard edge */}
      <div
        className="absolute -inset-24 -z-10 rounded-full bg-[radial-gradient(circle,rgba(139,92,246,0.45),transparent_70%)] blur-3xl"
        style={{ animation: "tracePanelGlowA 7s ease-in-out infinite" }}
      />
      <div
        className="absolute -inset-24 -z-10 rounded-full bg-[radial-gradient(circle,rgba(56,189,248,0.3),transparent_70%)] blur-3xl"
        style={{ animation: "tracePanelGlowB 8s ease-in-out infinite" }}
      />
      <div className="absolute -inset-6 -z-10 rounded-[32px] bg-primary/15 blur-2xl" />

      {/* Grounding shadow beneath the card */}
      <div className="absolute left-6 right-6 -bottom-6 h-12 -z-10 rounded-full bg-[#0B0F1A]/40 blur-2xl" />

      <div className="relative rounded-2xl border border-white/10 bg-[#0B0F1A] shadow-[0_30px_60px_-15px_rgba(108,71,255,0.35),0_20px_40px_-20px_rgba(0,0,0,0.5)] overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_0%,rgba(108,71,255,0.25),transparent_55%)]" />

        <div className="relative flex items-center justify-between px-5 py-4 border-b border-white/10">
          <span className="text-[10px] font-bold uppercase tracking-widest text-white/50">Agent Pipeline</span>
          <span className="inline-flex items-center gap-1.5 text-[10px] font-bold uppercase tracking-wider text-emerald-400">
            <span className="relative flex w-1.5 h-1.5">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75" />
              <span className="relative inline-flex rounded-full w-1.5 h-1.5 bg-emerald-400" />
            </span>
            Live
          </span>
        </div>

        <div className="relative px-6 pt-6 pb-5">
          {steps.map((step, i) => {
            const vars = { ["--cyc" as string]: `${cycle}s`, ["--dly" as string]: `${i * 1.7}s` };
            return (
              <div key={i} className="flex gap-4">
                <div className="flex flex-col items-center flex-shrink-0">
                  <div className="relative w-10 h-10">
                    <span className="trace-ring absolute inset-0 rounded-full border-2 border-primary" style={vars} />
                    <div
                      className="trace-node relative w-10 h-10 rounded-full border border-white/10 flex items-center justify-center"
                      style={vars}
                    >
                      <step.icon className="trace-icon w-4 h-4" style={vars} />
                    </div>
                  </div>
                  {i < steps.length - 1 && (
                    <div className="relative w-px flex-1 my-1 bg-white/10" style={{ minHeight: "28px" }}>
                      <div
                        className="trace-seg absolute inset-0 bg-gradient-to-b from-primary to-sky-400"
                        style={{ ["--cyc" as string]: `${cycle}s`, ["--dly" as string]: `${i * 1.7 + 0.9}s` }}
                      />
                    </div>
                  )}
                </div>
                <div className={`trace-label ${i < steps.length - 1 ? "pb-6" : ""}`} style={vars}>
                  <div className="text-[10px] font-bold text-primary/90 uppercase tracking-widest mb-1">{step.day}</div>
                  <div className="text-sm text-white/90 leading-snug">{step.desc}</div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
