import { Building2, Mic, Sparkles, Mail, Award } from "lucide-react";

interface RecordSample {
  kind: "record";
  system: string;
  heading: string;
  name: string;
  role: string;
  score: { label: string; value: string };
  fields: { label: string; value: string }[];
}

interface CallSample {
  kind: "call";
  system: string;
  heading: string;
  duration: string;
  lines: { speaker: "ai" | "candidate"; text: string }[];
}

interface EmailSample {
  kind: "email";
  system: string;
  heading: string;
  from: string;
  subject: string;
  points: string[];
}

interface SummarySample {
  kind: "summary";
  system: string;
  heading: string;
  recommendation: string;
  points: string[];
}

export type UISample = RecordSample | CallSample | EmailSample | SummarySample;

function MockWindow({
  system,
  heading,
  children,
}: {
  system: string;
  heading: string;
  children: React.ReactNode;
}) {
  return (
    <div className="rounded-2xl border border-border bg-white shadow-lg overflow-hidden w-full max-w-md">
      <div className="flex items-center justify-between px-5 py-3 border-b border-border bg-secondary/40">
        <div className="flex items-center gap-2">
          <span className="w-2.5 h-2.5 rounded-full bg-rose-300" />
          <span className="w-2.5 h-2.5 rounded-full bg-amber-300" />
          <span className="w-2.5 h-2.5 rounded-full bg-emerald-300" />
        </div>
        <span className="text-xs font-medium text-muted-foreground">{heading}</span>
        <span className="inline-flex items-center gap-1 text-[10px] font-semibold uppercase tracking-wider text-muted-foreground/70">
          {system === "Digiworks" ? <Sparkles className="w-3 h-3" /> : <Building2 className="w-3 h-3" />}
          {system}
        </span>
      </div>
      <div className="p-5">{children}</div>
    </div>
  );
}

function RecordMockup({ sample }: { sample: RecordSample }) {
  return (
    <MockWindow system={sample.system} heading={sample.heading}>
      <div className="flex items-start justify-between mb-4">
        <div>
          <div className="font-bold text-foreground">{sample.name}</div>
          <div className="text-xs text-muted-foreground">{sample.role}</div>
        </div>
        <div className="text-right flex-shrink-0">
          <div className="text-2xl font-heading font-bold text-primary leading-none">{sample.score.value}</div>
          <div className="text-[10px] text-muted-foreground uppercase tracking-wider mt-1">{sample.score.label}</div>
        </div>
      </div>
      <div className="space-y-2.5">
        {sample.fields.map((f, i) => (
          <div key={i} className="p-2.5 rounded-lg bg-secondary/50 border border-border text-xs">
            <span className="font-semibold text-foreground/70 block mb-0.5">{f.label}</span>
            <span className="text-muted-foreground">{f.value}</span>
          </div>
        ))}
      </div>
    </MockWindow>
  );
}

function CallMockup({ sample }: { sample: CallSample }) {
  return (
    <MockWindow system={sample.system} heading={sample.heading}>
      <div className="flex items-center gap-3 mb-4">
        <div className="w-9 h-9 rounded-full bg-primary/10 flex items-center justify-center text-primary flex-shrink-0">
          <Mic className="w-4 h-4" />
        </div>
        <div className="flex items-end gap-0.5 flex-1 h-6">
          {[6, 12, 18, 10, 20, 14, 8, 16, 11, 22, 9, 13].map((h, i) => (
            <span key={i} className="w-1 rounded-full bg-primary/30" style={{ height: `${h}px` }} />
          ))}
        </div>
        <span className="text-xs font-medium text-muted-foreground flex-shrink-0">{sample.duration}</span>
      </div>
      <div className="space-y-2">
        {sample.lines.map((line, i) => (
          <div
            key={i}
            className={`text-xs p-2.5 rounded-lg max-w-[85%] ${
              line.speaker === "ai"
                ? "bg-secondary/60 text-foreground/80"
                : "bg-primary/10 text-foreground/80 ml-auto"
            }`}
          >
            {line.text}
          </div>
        ))}
      </div>
    </MockWindow>
  );
}

function EmailMockup({ sample }: { sample: EmailSample }) {
  return (
    <MockWindow system={sample.system} heading={sample.heading}>
      <div className="flex items-center gap-2 mb-3 pb-3 border-b border-border">
        <div className="w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center text-primary flex-shrink-0">
          <Mail className="w-3.5 h-3.5" />
        </div>
        <div className="min-w-0">
          <div className="text-xs font-semibold text-foreground truncate">{sample.from}</div>
          <div className="text-xs text-muted-foreground truncate">{sample.subject}</div>
        </div>
      </div>
      <ol className="space-y-2">
        {sample.points.map((p, i) => (
          <li key={i} className="flex gap-2 text-xs text-foreground/80">
            <span className="font-semibold text-primary flex-shrink-0">{i + 1}.</span>
            {p}
          </li>
        ))}
      </ol>
    </MockWindow>
  );
}

function SummaryMockup({ sample }: { sample: SummarySample }) {
  return (
    <MockWindow system={sample.system} heading={sample.heading}>
      <div className="flex items-center gap-2 mb-4">
        <div className="w-9 h-9 rounded-full bg-emerald-100 text-emerald-600 flex items-center justify-center flex-shrink-0">
          <Award className="w-4 h-4" />
        </div>
        <span className="px-3 py-1 rounded-full bg-emerald-100 text-emerald-700 text-xs font-bold uppercase tracking-wider">
          {sample.recommendation}
        </span>
      </div>
      <ul className="space-y-2">
        {sample.points.map((p, i) => (
          <li key={i} className="flex gap-2 text-xs text-foreground/80">
            <span className="mt-1.5 w-1 h-1 rounded-full bg-primary flex-shrink-0" />
            {p}
          </li>
        ))}
      </ul>
    </MockWindow>
  );
}

export function UsecaseUIMockup({ sample }: { sample: UISample }) {
  switch (sample.kind) {
    case "record":
      return <RecordMockup sample={sample} />;
    case "call":
      return <CallMockup sample={sample} />;
    case "email":
      return <EmailMockup sample={sample} />;
    case "summary":
      return <SummaryMockup sample={sample} />;
  }
}
