import { useRef } from "react";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { RecruitingUIMockup } from "./RecruitingUIMockup";
import type { Scenario } from "@/data/agentUsecases";

gsap.registerPlugin(ScrollTrigger);

interface Props {
  scenarios: Scenario[];
  podIntro: string;
}

export function HorizontalAgentCarousel({ scenarios, podIntro }: Props) {
  const sectionRef = useRef<HTMLDivElement>(null);
  const trackRef = useRef<HTMLDivElement>(null);
  const progressRef = useRef<HTMLDivElement>(null);

  useGSAP(
    () => {
      const section = sectionRef.current;
      const track = trackRef.current;
      if (!section || !track) return;

      const getDistance = () => track.scrollWidth - section.offsetWidth;

      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: section,
          start: "top top",
          end: () => `+=${getDistance()}`,
          pin: true,
          scrub: 1.2,
          invalidateOnRefresh: true,
          onUpdate: (self) => {
            if (progressRef.current) {
              progressRef.current.style.width = `${self.progress * 100}%`;
            }
          },
        },
      });

      tl.to(track, {
        x: () => -getDistance(),
        ease: "none",
      });
    },
    { scope: sectionRef }
  );

  return (
    <div ref={sectionRef} className="relative h-screen overflow-hidden bg-background">
      {/* Section header — pinned at top while cards slide */}
      <div className="container pt-10 pb-6 flex items-end justify-between">
        <div>
          <p className="text-xs font-bold uppercase tracking-wider text-muted-foreground mb-2">
            The Recruiting Pod
          </p>
          <h2 className="text-3xl lg:text-4xl font-heading font-bold tracking-tight mb-1">
            Seven agents, one complete pipeline.
          </h2>
          <p className="text-muted-foreground max-w-xl text-sm">{podIntro}</p>
        </div>
        <p className="hidden md:flex items-center gap-2 text-xs text-muted-foreground shrink-0 ml-8">
          keep scrolling
          <svg
            width="20"
            height="10"
            viewBox="0 0 20 10"
            fill="none"
            aria-hidden="true"
          >
            <path
              d="M1 5h18M14 1l5 4-5 4"
              stroke="currentColor"
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </p>
      </div>

      {/* Horizontal track */}
      <div
        ref={trackRef}
        className="flex items-stretch h-[calc(100vh-140px)] will-change-transform"
      >
        {/* Left edge padding card */}
        <div className="min-w-[4vw] shrink-0" aria-hidden="true" />

        {scenarios.map((s, i) => (
          <div
            key={s.id}
            className="min-w-[85vw] sm:min-w-[420px] lg:min-w-[480px] shrink-0 pr-6 h-full flex items-center"
          >
            <div className="glass-card rounded-2xl overflow-hidden w-full h-[540px] flex flex-col">
              {/* Top: framed mockup, with index badge like a screenshot header */}
              <div className="relative shrink-0 bg-secondary/40 border-b border-border/60 h-[220px] flex items-center justify-center px-6 py-4">
                <span className="absolute top-3 left-4 text-xs font-bold text-muted-foreground tabular-nums">
                  {s.number} / {String(scenarios.length).padStart(2, "0")}
                </span>
                <div className="absolute top-3 right-4 w-8 h-8 rounded-full bg-primary/10 border border-primary/20 flex items-center justify-center text-primary">
                  <s.icon className="w-4 h-4" aria-hidden="true" />
                </div>
                <div className="w-full max-w-[280px] scale-90">
                  <RecruitingUIMockup sample={s.uiSample} />
                </div>
              </div>

              {/* Bottom: text */}
              <div className="flex flex-col flex-1 min-h-0 p-6">
                <p className="text-xs font-bold uppercase tracking-wider text-primary mb-1 line-clamp-1">
                  {s.headline}
                </p>
                <h3 className="text-xl font-heading font-bold mb-2 tracking-tight">
                  {s.title}
                </h3>
                <p className="text-muted-foreground leading-relaxed text-sm line-clamp-3 mb-4">
                  {s.description}
                </p>

                <div className="mt-auto pt-3 border-t border-border/60 space-y-1">
                  <p className="text-xs text-muted-foreground line-clamp-1">
                    <span className="font-semibold text-foreground/70">Before:</span> {s.before}
                  </p>
                  <p className="text-xs text-foreground/80 line-clamp-1">
                    <span className="font-semibold text-primary">After:</span> {s.after}
                  </p>
                </div>
              </div>
            </div>
          </div>
        ))}

        {/* Right edge padding */}
        <div className="min-w-[4vw] shrink-0" aria-hidden="true" />
      </div>

      {/* Progress bar */}
      <div className="absolute bottom-0 left-0 w-full h-[2px] bg-border/40">
        <div
          ref={progressRef}
          className="h-full bg-primary transition-none"
          style={{ width: "0%" }}
        />
      </div>
    </div>
  );
}
