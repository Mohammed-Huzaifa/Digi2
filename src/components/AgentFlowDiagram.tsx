import { Bot, ChevronRight, Code2, Globe, PhoneCall, PlayCircle, Workflow } from "lucide-react";

export type FlowNodeType = "trigger" | "function" | "llm" | "http" | "voice" | "outcome";

export interface FlowNode {
  label: string;
  type: FlowNodeType;
  detail: string;
}

const NODE_STYLES: Record<
  FlowNodeType,
  { icon: typeof Bot; badge: string; ring: string }
> = {
  trigger: {
    icon: PlayCircle,
    badge: "bg-rose-100 text-rose-600 border-rose-200",
    ring: "ring-rose-100",
  },
  function: {
    icon: Code2,
    badge: "bg-slate-100 text-slate-600 border-slate-200",
    ring: "ring-slate-100",
  },
  llm: {
    icon: Bot,
    badge: "bg-violet-100 text-violet-600 border-violet-200",
    ring: "ring-violet-100",
  },
  http: {
    icon: Globe,
    badge: "bg-orange-100 text-orange-600 border-orange-200",
    ring: "ring-orange-100",
  },
  voice: {
    icon: PhoneCall,
    badge: "bg-blue-100 text-blue-600 border-blue-200",
    ring: "ring-blue-100",
  },
  outcome: {
    icon: Workflow,
    badge: "bg-emerald-100 text-emerald-600 border-emerald-200",
    ring: "ring-emerald-100",
  },
};

export function AgentFlowDiagram({ nodes }: { nodes: FlowNode[] }) {
  return (
    <div className="flex flex-wrap items-center gap-2 md:gap-1">
      {nodes.map((node, i) => {
        const style = NODE_STYLES[node.type];
        const Icon = style.icon;
        return (
          <div key={i} className="flex items-center gap-2 md:gap-1">
            <div
              className={`flex items-center gap-2 rounded-xl border px-3 py-2 shadow-sm ring-4 ring-inset ${style.badge} ${style.ring}`}
            >
              <Icon className="w-4 h-4 flex-shrink-0" />
              <span className="text-xs font-semibold whitespace-nowrap">{node.label}</span>
            </div>
            {i < nodes.length - 1 && (
              <ChevronRight className="w-4 h-4 text-muted-foreground/40 flex-shrink-0" />
            )}
          </div>
        );
      })}
    </div>
  );
}
