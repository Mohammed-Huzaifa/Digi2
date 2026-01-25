import { cn } from "@/lib/utils";

interface GlassCardProps extends React.HTMLAttributes<HTMLDivElement> {
  children: React.ReactNode;
  gradient?: boolean;
}

export function GlassCard({ children, className, gradient = false, ...props }: GlassCardProps) {
  return (
    <div 
      className={cn(
        "glass-card rounded-2xl p-6 relative overflow-hidden group",
        gradient && "before:absolute before:inset-0 before:bg-gradient-to-br before:from-white/40 before:to-white/10 before:z-0",
        className
      )} 
      {...props}
    >
      <div className="relative z-10">
        {children}
      </div>
      
      {/* Subtle hover glow effect */}
      <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-1000 pointer-events-none" />
    </div>
  );
}
