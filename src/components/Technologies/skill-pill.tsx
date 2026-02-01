import type { SkillPillProps } from "./types";

export function SkillPill({ icon, name }: SkillPillProps) {
  return (
    <div className="flex items-center gap-2 px-4 py-2 rounded-full
    bg-primary/10
    border border-primary/30     
    backdrop-blur-sm
    transition-colors
    hover:bg-primary/15">
      <div className="icon-slot flex items-center justify-center text-[initial]">
        {icon}
      </div>
      <span className="font-body text-sm text-[#120f0f]">{name}</span>
    </div>
  );
}
