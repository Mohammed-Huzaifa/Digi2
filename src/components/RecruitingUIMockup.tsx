import { Building2, Sparkles, Mic, Mail, CalendarCheck, LayoutDashboard, ShieldAlert, Check, Award } from "lucide-react";

interface InboxSample {
  kind: "inbox";
  system: string;
  heading: string;
  threads: { sender: string; text: string; time: string }[];
}

interface ChatSample {
  kind: "chat";
  system: string;
  heading: string;
  bubbles: { from: "agent" | "user"; text: string; label?: string }[];
  confirm?: string;
}

interface SplitSample {
  kind: "split";
  system: string;
  heading: string;
  raw: string;
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
  tags: string[];
}

interface CalendarSample {
  kind: "calendar";
  system: string;
  heading: string;
  time: string;
  title: string;
  subtitle: string;
  skipped: string[];
}

interface EmailSample {
  kind: "email";
  system: string;
  heading: string;
  from: string;
  subject: string;
  points: string[];
}

interface DashboardSample {
  kind: "dashboard";
  system: string;
  heading: string;
  stats: { value: string; label: string }[];
  log: { text: string; time: string }[];
}

interface ApprovalSample {
  kind: "approval";
  system: string;
  heading: string;
  request: string;
  detail: string;
  log: { text: string; time: string }[];
}

interface SummarySample {
  kind: "summary";
  system: string;
  heading: string;
  recommendation: string;
  points: string[];
}

export type RecruitingSample =
  | InboxSample
  | ChatSample
  | SplitSample
  | CallSample
  | CalendarSample
  | EmailSample
  | DashboardSample
  | ApprovalSample
  | SummarySample;

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
          {system === "Digiworks" ? <Sparkles className="w-3 h-3" aria-hidden="true" /> : <Building2 className="w-3 h-3" aria-hidden="true" />}
          {system}
        </span>
      </div>
      <div className="p-5">{children}</div>
    </div>
  );
}

function InboxMockup({ sample }: { sample: InboxSample }) {
  return (
    <MockWindow system={sample.system} heading={sample.heading}>
      <div className="flex flex-col -mx-1">
        {sample.threads.map((t, i) => (
          <div key={i} className="flex items-center gap-3 px-1 py-2.5 border-b border-secondary last:border-0">
            <span className="w-2 h-2 rounded-full bg-red-500 flex-shrink-0" />
            <div className="flex-1 min-w-0">
              <div className="text-xs font-bold text-foreground">{t.sender}</div>
              <div className="text-xs text-muted-foreground truncate">{t.text}</div>
            </div>
            <span className="text-[10px] text-muted-foreground/60 flex-shrink-0">{t.time}</span>
          </div>
        ))}
      </div>
    </MockWindow>
  );
}

function ChatMockup({ sample }: { sample: ChatSample }) {
  return (
    <MockWindow system={sample.system} heading={sample.heading}>
      <div className="flex flex-col gap-2.5">
        {sample.bubbles.map((b, i) => (
          <div
            key={i}
            className={`max-w-[82%] text-xs leading-relaxed px-3.5 py-2.5 rounded-2xl ${
              b.from === "user"
                ? "self-end bg-primary text-white rounded-br-md"
                : "self-start bg-secondary text-foreground rounded-bl-md"
            }`}
          >
            {b.label && <div className="font-bold text-primary mb-1">{b.label}</div>}
            {b.text}
          </div>
        ))}
        {sample.confirm && (
          <div className="self-start max-w-[82%] bg-emerald-50 border border-emerald-200 text-emerald-800 text-xs font-semibold px-3.5 py-2.5 rounded-xl flex items-center gap-2">
            <Check className="w-3.5 h-3.5" aria-hidden="true" />
            {sample.confirm}
          </div>
        )}
      </div>
    </MockWindow>
  );
}

function SplitMockup({ sample }: { sample: SplitSample }) {
  return (
    <MockWindow system={sample.system} heading={sample.heading}>
      <div className="grid grid-cols-2 gap-4 -m-5 p-0">
        <div className="p-5 bg-secondary/30 border-r border-border">
          <div className="text-[10px] font-bold uppercase tracking-wider text-muted-foreground/70 mb-2">Raw resume</div>
          <div className="font-mono text-[10px] text-muted-foreground leading-relaxed whitespace-pre-line">{sample.raw}</div>
        </div>
        <div className="p-5">
          <div className="flex items-start justify-between mb-3">
            <div>
              <div className="text-sm font-bold text-foreground">{sample.name}</div>
              <div className="text-[10px] text-muted-foreground">{sample.role}</div>
            </div>
            <div className="text-right flex-shrink-0">
              <div className="text-lg font-heading font-bold text-primary leading-none">{sample.score.value}</div>
              <div className="text-[8px] text-muted-foreground uppercase tracking-wider mt-1">{sample.score.label}</div>
            </div>
          </div>
          <div className="space-y-1.5">
            {sample.fields.map((f, i) => (
              <div key={i} className="p-1.5 rounded-md bg-secondary/50 text-[10px]">
                <span className="font-semibold text-foreground/70">{f.label}: </span>
                <span className="text-muted-foreground">{f.value}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </MockWindow>
  );
}

function CallMockup({ sample }: { sample: CallSample }) {
  return (
    <MockWindow system={sample.system} heading={sample.heading}>
      <div className="flex items-center gap-3 mb-4">
        <div className="w-9 h-9 rounded-full bg-primary/10 flex items-center justify-center text-primary flex-shrink-0">
          <Mic className="w-4 h-4" aria-hidden="true" />
        </div>
        <div className="flex items-end gap-0.5 flex-1 h-6">
          {[6, 12, 18, 10, 20, 14, 8, 16, 11, 22, 9, 13].map((h, i) => (
            <span key={i} className="w-1 rounded-full bg-primary/30" style={{ height: `${h}px` }} />
          ))}
        </div>
        <span className="text-xs font-medium text-muted-foreground flex-shrink-0">{sample.duration}</span>
      </div>
      <div className="space-y-2 mb-3">
        {sample.lines.map((line, i) => (
          <div
            key={i}
            className={`text-xs p-2.5 rounded-lg max-w-[85%] ${
              line.speaker === "ai" ? "bg-secondary/60 text-foreground/80" : "bg-primary/10 text-foreground/80 ml-auto"
            }`}
          >
            {line.text}
          </div>
        ))}
      </div>
      <div className="flex gap-2 flex-wrap">
        {sample.tags.map((tag, i) => (
          <span key={i} className="px-2.5 py-1 rounded-full bg-secondary text-[10px] font-semibold text-foreground/70">
            {tag}
          </span>
        ))}
      </div>
    </MockWindow>
  );
}

function CalendarMockup({ sample }: { sample: CalendarSample }) {
  return (
    <MockWindow system={sample.system} heading={sample.heading}>
      <div className="flex items-center justify-between mb-3">
        <div className="text-sm font-bold text-foreground">{sample.time}</div>
        <div className="flex -space-x-1.5">
          <span className="w-6 h-6 rounded-full bg-primary text-white text-[9px] font-bold flex items-center justify-center border-2 border-white">MR</span>
          <span className="w-6 h-6 rounded-full bg-sky-500 text-white text-[9px] font-bold flex items-center justify-center border-2 border-white">RJ</span>
          <span className="w-6 h-6 rounded-full bg-amber-500 text-white text-[9px] font-bold flex items-center justify-center border-2 border-white">PS</span>
        </div>
      </div>
      <div className="p-3.5 bg-primary/5 border border-primary/20 rounded-xl flex items-center justify-between mb-3">
        <div>
          <div className="text-xs font-bold text-primary">{sample.title}</div>
          <div className="text-[10px] text-primary/70 mt-0.5">{sample.subtitle}</div>
        </div>
        <CalendarCheck className="w-4 h-4 text-primary flex-shrink-0" aria-hidden="true" />
      </div>
      <div className="space-y-1">
        {sample.skipped.map((s, i) => (
          <div key={i} className="flex items-center gap-2 text-[10px] text-muted-foreground/60">
            <span className="w-1.5 h-1.5 rounded-full bg-border" />
            {s}
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
          <Mail className="w-3.5 h-3.5" aria-hidden="true" />
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

function DashboardMockup({ sample }: { sample: DashboardSample }) {
  return (
    <MockWindow system={sample.system} heading={sample.heading}>
      <div className="grid grid-cols-3 gap-2 mb-4">
        {sample.stats.map((s, i) => (
          <div key={i} className="p-3 bg-secondary/50 rounded-lg">
            <div className="text-lg font-heading font-bold text-primary">{s.value}</div>
            <div className="text-[9px] text-muted-foreground mt-0.5 leading-tight">{s.label}</div>
          </div>
        ))}
      </div>
      <div className="text-[10px] font-bold uppercase tracking-wider text-muted-foreground/70 mb-2 flex items-center gap-1.5">
        <LayoutDashboard className="w-3 h-3" aria-hidden="true" />
        Audit log
      </div>
      <div className="space-y-1.5">
        {sample.log.map((l, i) => (
          <div key={i} className="flex justify-between text-[10px] text-muted-foreground py-1 border-b border-secondary last:border-0">
            <span>{l.text}</span>
            <span className="flex-shrink-0 ml-2">{l.time}</span>
          </div>
        ))}
      </div>
    </MockWindow>
  );
}

function ApprovalMockup({ sample }: { sample: ApprovalSample }) {
  return (
    <MockWindow system={sample.system} heading={sample.heading}>
      <div className="p-3.5 bg-amber-50 border border-amber-200 rounded-xl mb-3">
        <div className="text-xs font-bold text-amber-900">{sample.request}</div>
        <div className="text-[10px] text-amber-700 mt-0.5">{sample.detail}</div>
      </div>
      <div className="flex gap-2 mb-4">
        <button className="flex-1 py-2.5 rounded-lg bg-primary text-white text-xs font-bold">Approve</button>
        <button className="flex-1 py-2.5 rounded-lg bg-white border border-border text-muted-foreground text-xs font-bold">Decline</button>
      </div>
      <div className="text-[10px] font-bold uppercase tracking-wider text-muted-foreground/70 mb-2 flex items-center gap-1.5">
        <ShieldAlert className="w-3 h-3" aria-hidden="true" />
        Audit trail
      </div>
      <div className="space-y-1.5">
        {sample.log.map((l, i) => (
          <div key={i} className="flex justify-between text-[10px] text-muted-foreground py-1 border-b border-secondary last:border-0">
            <span>{l.text}</span>
            <span className="flex-shrink-0 ml-2">{l.time}</span>
          </div>
        ))}
      </div>
    </MockWindow>
  );
}

function SummaryMockup({ sample }: { sample: SummarySample }) {
  return (
    <MockWindow system={sample.system} heading={sample.heading}>
      <div className="flex items-center gap-2 mb-4">
        <div className="w-9 h-9 rounded-full bg-emerald-100 text-emerald-600 flex items-center justify-center flex-shrink-0">
          <Award className="w-4 h-4" aria-hidden="true" />
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

export function RecruitingUIMockup({ sample }: { sample: RecruitingSample }) {
  switch (sample.kind) {
    case "inbox":
      return <InboxMockup sample={sample} />;
    case "chat":
      return <ChatMockup sample={sample} />;
    case "split":
      return <SplitMockup sample={sample} />;
    case "call":
      return <CallMockup sample={sample} />;
    case "calendar":
      return <CalendarMockup sample={sample} />;
    case "email":
      return <EmailMockup sample={sample} />;
    case "dashboard":
      return <DashboardMockup sample={sample} />;
    case "approval":
      return <ApprovalMockup sample={sample} />;
    case "summary":
      return <SummaryMockup sample={sample} />;
  }
}
