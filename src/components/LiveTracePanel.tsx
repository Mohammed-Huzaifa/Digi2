interface TraceStep {
  day: string;
  desc: string;
}

export function LiveTracePanel({ steps }: { steps: TraceStep[] }) {
  const cycleSeconds = steps.length * 1.4 + 1.5;

  return (
    <div className="w-full max-w-md rounded-2xl border border-border bg-white shadow-xl overflow-hidden">
      <style>{`
        @keyframes tracePop {
          0% { background: #F3F4F6; border-color: #E5E7EB; transform: scale(1); }
          4% { background: #6C47FF; border-color: #6C47FF; transform: scale(1.15); }
          10% { background: #6C47FF; border-color: #6C47FF; transform: scale(1); }
          86% { background: #6C47FF; border-color: #6C47FF; transform: scale(1); }
          92% { background: #F3F4F6; border-color: #E5E7EB; transform: scale(1); }
          100% { background: #F3F4F6; border-color: #E5E7EB; transform: scale(1); }
        }
        @keyframes traceCheck {
          0%, 8% { opacity: 0; transform: scale(0.5); }
          12% { opacity: 1; transform: scale(1); }
          86% { opacity: 1; transform: scale(1); }
          92%, 100% { opacity: 0; transform: scale(0.5); }
        }
        @keyframes traceTextIn {
          0%, 6% { opacity: 0.35; }
          12% { opacity: 1; }
          92%, 100% { opacity: 0.35; }
        }
        .trace-dot { animation: tracePop var(--trace-duration) ease-in-out infinite; animation-delay: var(--trace-delay); }
        .trace-check { animation: traceCheck var(--trace-duration) ease-in-out infinite; animation-delay: var(--trace-delay); }
        .trace-text { animation: traceTextIn var(--trace-duration) ease-in-out infinite; animation-delay: var(--trace-delay); }
      `}</style>

      <div className="flex items-center justify-between px-5 py-3 border-b border-border bg-secondary/40">
        <div className="flex items-center gap-2">
          <span className="w-2.5 h-2.5 rounded-full bg-rose-300" />
          <span className="w-2.5 h-2.5 rounded-full bg-amber-300" />
          <span className="w-2.5 h-2.5 rounded-full bg-emerald-300" />
        </div>
        <span className="text-xs font-medium text-muted-foreground">This week, live</span>
        <span className="inline-flex items-center gap-1.5 text-[10px] font-bold uppercase tracking-wider text-emerald-600">
          <span className="relative flex w-1.5 h-1.5">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75" />
            <span className="relative inline-flex rounded-full w-1.5 h-1.5 bg-emerald-500" />
          </span>
          Live
        </span>
      </div>

      <div className="p-6">
        {steps.map((step, i) => (
          <div key={i} className="flex gap-4">
            <div className="flex flex-col items-center flex-shrink-0">
              <div
                className="trace-dot relative w-6 h-6 rounded-full border-2 flex items-center justify-center"
                style={{ ["--trace-duration" as string]: `${cycleSeconds}s`, ["--trace-delay" as string]: `${i * 1.4}s` }}
              >
                <svg className="trace-check w-3 h-3" style={{ ["--trace-duration" as string]: `${cycleSeconds}s`, ["--trace-delay" as string]: `${i * 1.4}s` }} viewBox="0 0 24 24" fill="none" stroke="#fff" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
                  <polyline points="20 6 9 17 4 12" />
                </svg>
              </div>
              {i < steps.length - 1 && <div className="w-px flex-1 bg-border my-1" style={{ minHeight: "20px" }} />}
            </div>
            <div className={`trace-text ${i < steps.length - 1 ? "pb-5" : ""}`} style={{ ["--trace-duration" as string]: `${cycleSeconds}s`, ["--trace-delay" as string]: `${i * 1.4}s` }}>
              <div className="text-[11px] font-bold text-primary uppercase tracking-wider mb-0.5">{step.day}</div>
              <div className="text-sm text-foreground/80 leading-snug">{step.desc}</div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
