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

function PodCard({ s }: { s: Scenario }) {
  return (
    <div className="glass-card rounded-2xl p-8 md:p-10 grid lg:grid-cols-[1.2fr_1fr] gap-10 items-center">
      <div className="min-w-0">
        <div className="flex items-center gap-3 mb-3">
          <div className="w-11 h-11 rounded-xl bg-primary/10 border border-primary/20 flex items-center justify-center text-primary flex-shrink-0">
            <s.icon className="w-5 h-5" aria-hidden="true" />
          </div>
          <span className="text-xs font-bold text-muted-foreground">{s.number}</span>
        </div>
        <p className="text-xs font-bold uppercase tracking-wider text-primary mb-1">
          {s.headline}
        </p>
        <h3 className="text-2xl md:text-3xl font-heading font-bold mb-3 tracking-tight">
          {s.title}
        </h3>
        <p className="text-muted-foreground leading-relaxed mb-6">
          {s.description}
        </p>

        <div className="grid sm:grid-cols-2 gap-3">
          <div className="p-3 rounded-lg bg-secondary/50 border border-border text-sm">
            <span className="font-semibold text-foreground/70 block mb-1">Before</span>
            <span className="text-muted-foreground">{s.before}</span>
          </div>
          <div className="p-3 rounded-lg bg-primary/5 border border-primary/10 text-sm">
            <span className="font-semibold text-primary block mb-1">After</span>
            <span className="text-foreground/80">{s.after}</span>
          </div>
        </div>
      </div>

      <div className="flex flex-col items-center gap-3 min-w-0 w-full">
        <RecruitingUIMockup sample={s.uiSample} />
        <span className="text-xs text-muted-foreground italic">{s.caption}</span>
      </div>
    </div>
  );
}

export function PodCarousel({ scenarios, podIntro }: Props) {
  const sectionRef = useRef<HTMLDivElement>(null);
  const trackRef = useRef<HTMLDivElement>(null);
  const progressRef = useRef<HTMLDivElement>(null);

  useGSAP(
    () => {
      // Only pin/scrub horizontally on desktop — on touch devices this
      // fights the browser's native vertical scroll, so mobile/tablet
      // get a normal vertical stack instead (rendered below, no GSAP).
      const mm = gsap.matchMedia();

      mm.add("(min-width: 1024px)", () => {
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
      });
    },
    { scope: sectionRef }
  );

  return (
    <>
      {/* Desktop: horizontal pinned carousel, one card at a time */}
      <div ref={sectionRef} className="hidden lg:block relative overflow-hidden bg-background">
        <div className="container pt-10 pb-6 flex items-end justify-between">
          <div>
            <p className="text-xs font-bold uppercase tracking-wider text-muted-foreground mb-3">
              The Recruiting Pod
            </p>
            <h2 className="text-4xl font-heading font-bold tracking-tight mb-4">
              Seven agents, one complete pipeline.
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl">{podIntro}</p>
          </div>
          <p className="hidden md:flex items-center gap-2 text-xs text-muted-foreground shrink-0 ml-8 mb-1">
            keep scrolling
            <svg width="20" height="10" viewBox="0 0 20 10" fill="none" aria-hidden="true">
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

        <div ref={trackRef} className="flex will-change-transform">
          {scenarios.map((s) => (
            <div key={s.id} className="w-full shrink-0 container pb-16 pt-2">
              <PodCard s={s} />
            </div>
          ))}
        </div>

        <div className="absolute bottom-0 left-0 w-full h-[2px] bg-border/40">
          <div ref={progressRef} className="h-full bg-primary transition-none" style={{ width: "0%" }} />
        </div>
      </div>

      {/* Mobile & tablet: normal vertical scroll */}
      <div className="lg:hidden container py-16">
        <div className="mb-10">
          <p className="text-xs font-bold uppercase tracking-wider text-muted-foreground mb-3">
            The Recruiting Pod
          </p>
          <h2 className="text-3xl font-heading font-bold tracking-tight mb-4">
            Seven agents, one complete pipeline.
          </h2>
          <p className="text-lg text-muted-foreground">{podIntro}</p>
        </div>

        <div className="flex flex-col gap-8">
          {scenarios.map((s) => (
            <PodCard key={s.id} s={s} />
          ))}
        </div>
      </div>
    </>
  );
}
