"use client";

import Image from "next/image";
import { ArrowUpRight } from "lucide-react";
import { useRef, useEffect } from "react";
import Reveal from "./Reveal";

const spaces = [
  { src: "/images/coworking-hero-1.jpg", alt: "Área aberta TWK Nexus",     title: "Coworking Aberto",    description: "Hot-desk em ambiente colaborativo, com 120 mesas disponíveis."         },
  { src: "/images/coworking-hero-4.jpg", alt: "Sala privativa TWK Nexus",   title: "Sala Privativa",      description: "Espaço exclusivo para sua equipe, com capacidade de até 8 pessoas."  },
  { src: "/images/coworking-hero-2.jpg", alt: "Lounge TWK Nexus",           title: "Lounge & Networking", description: "Área de convivência ideal para pausas, conversas e conexões."         },
  { src: "/images/coworking-hero-5.jpg", alt: "Espaço de eventos TWK Nexus",title: "Espaço para Eventos", description: "Auditório equipado para até 150 pessoas, com infraestrutura completa."},
];

const CIRCLE_SIZE = 148;
const ZOOM_TRANSITION = "transform 1.6s cubic-bezier(0.16, 1, 0.3, 1)";

// Concave notch at top-right, all other outer corners rounded
function buildPath(W: number, H: number): string {
  const r  = Math.round(Math.min(W, H) * 0.055);
  const NW = 62;
  const NH = 62;
  const CR = Math.round(Math.min(NW, NH) * 0.36);
  return [
    `M${r},0`,
    `L${W - NW - CR},0 Q${W - NW},0 ${W - NW},${CR}`,
    `L${W - NW},${NH - CR} Q${W - NW},${NH} ${W - NW + CR},${NH}`,
    `L${W},${NH}`,
    `L${W},${H - r} Q${W},${H} ${W - r},${H}`,
    `L${r},${H} Q0,${H} 0,${H - r}`,
    `L0,${r} Q0,0 ${r},0 Z`,
  ].join(" ");
}

function SpaceCard({ space, delay }: { space: (typeof spaces)[0]; delay: number }) {
  const outerRef        = useRef<HTMLDivElement>(null);
  const clipRef         = useRef<HTMLDivElement>(null);
  const imageWrapperRef = useRef<HTMLDivElement>(null);
  const circleRef       = useRef<HTMLDivElement>(null);

  // Apply clip-path only to the image layer; measure from outer div
  useEffect(() => {
    const outer = outerRef.current;
    const clip  = clipRef.current;
    if (!outer || !clip) return;
    const apply = () => {
      clip.style.clipPath = `path('${buildPath(outer.offsetWidth, outer.offsetHeight)}')`;
    };
    const ro = new ResizeObserver(apply);
    ro.observe(outer);
    return () => ro.disconnect();
  }, []);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!outerRef.current || !circleRef.current) return;
    const rect = outerRef.current.getBoundingClientRect();
    circleRef.current.style.transform = `translate(${e.clientX - rect.left - CIRCLE_SIZE / 2}px, ${e.clientY - rect.top - CIRCLE_SIZE / 2}px)`;
  };

  const handleMouseEnter = () => {
    if (imageWrapperRef.current) imageWrapperRef.current.style.transform = "scale(1.08)";
    if (circleRef.current)       circleRef.current.style.opacity = "1";
  };

  const handleMouseLeave = () => {
    if (imageWrapperRef.current) imageWrapperRef.current.style.transform = "scale(1)";
    if (circleRef.current)       circleRef.current.style.opacity = "0";
  };

  return (
    <Reveal delay={delay}>
      <a href="#planos" className="flex flex-col gap-4" style={{ textDecoration: "none", cursor: "none" }}>
        {/* Outer div: full card area, handles mouse events, not clipped */}
        <div
          ref={outerRef}
          style={{ position: "relative", aspectRatio: "3/4", cursor: "none" }}
          onMouseMove={handleMouseMove}
          onMouseEnter={handleMouseEnter}
          onMouseLeave={handleMouseLeave}
        >
          {/* Image layer — clip-path applied here only */}
          <div ref={clipRef} style={{ position: "absolute", inset: 0 }}>
            <div
              ref={imageWrapperRef}
              style={{ position: "absolute", inset: 0, transition: ZOOM_TRANSITION, transform: "scale(1)" }}
            >
              <Image src={space.src} alt={space.alt} fill style={{ objectFit: "cover", objectPosition: "center" }} />
            </div>
          </div>

          {/* Arrow — outside clip layer, floats in the notch space */}
          <div
            className="absolute top-3.5 right-3.5 w-10 h-10 rounded-full flex items-center justify-center z-10"
            style={{
              backgroundColor: "rgb(255,255,255)",
              border: "1px solid rgba(28,26,23,0.10)",
            }}
          >
            <ArrowUpRight size={18} style={{ color: "rgb(28,26,23)" }} strokeWidth={1.75} />
          </div>

          {/* Cursor-following circle — outside clip layer */}
          <div
            ref={circleRef}
            className="absolute top-0 left-0 pointer-events-none flex items-center justify-center text-center"
            style={{
              width: CIRCLE_SIZE, height: CIRCLE_SIZE,
              borderRadius: "50%",
              backgroundColor: "rgba(255,255,255,0.92)",
              backdropFilter: "blur(8px)",
              boxShadow: "0 4px 24px rgba(0,0,0,0.14)",
              padding: "16px",
              opacity: 0,
              transition: "opacity 0.18s ease",
              transform: "translate(0px,0px)",
              zIndex: 20,
            }}
          >
            <span className="text-xs font-medium leading-[1.45]" style={{ color: "rgb(28,26,23)" }}>
              Ver datas disponíveis
            </span>
          </div>
        </div>

        <div className="flex flex-col gap-1">
          <p className="text-sm font-semibold" style={{ color: "rgb(28,26,23)" }}>{space.title}</p>
          <p className="text-xs leading-[1.6]" style={{ color: "rgba(28,26,23,0.56)" }}>{space.description}</p>
        </div>
      </a>
    </Reveal>
  );
}

export default function SpaceCards() {
  return (
    <section style={{ backgroundColor: "rgb(250,250,250)", padding: "0 24px 120px" }}>
      <div className="max-w-[1300px] mx-auto">
        <Reveal>
          <div className="flex flex-col gap-3 mb-12">
            <span className="text-xs font-medium uppercase tracking-[0.48px]" style={{ color: "rgba(16,16,15,0.88)" }}>
              Explore nossos espaços
            </span>
            <h2 className="font-medium tracking-[-0.38px]" style={{ fontFamily: "var(--font-display)", fontSize: "38px", lineHeight: "1.2", color: "rgb(28,26,23)" }}>
              Cada espaço pensado
              <br />
              para um propósito
            </h2>
          </div>
        </Reveal>
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-5">
          {spaces.map((space, i) => (
            <SpaceCard key={space.title} space={space} delay={i * 70} />
          ))}
        </div>
      </div>
    </section>
  );
}
