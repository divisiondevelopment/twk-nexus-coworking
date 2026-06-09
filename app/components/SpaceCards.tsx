"use client";

import { useState, useRef, useEffect } from "react";
import Image from "next/image";
import { ArrowUpRight } from "lucide-react";
import Reveal from "./Reveal";
import SpaceDialog, { type DialogSpaceData } from "./SpaceDialog";

const WA = "5551983184368";
function waHref(msg: string) {
  return `https://wa.me/${WA}?text=${encodeURIComponent(msg)}`;
}

type SpaceCardData = {
  src: string;
  alt: string;
  title: string;
  description: string;
} & DialogSpaceData;

const spaces: SpaceCardData[] = [
  {
    src: "/images/espacos/sala-energia-1.jpeg",
    alt: "Sala Energia TWK Nexus",
    title: "Sala Energia",
    description: "Ambiente estimulante com iluminação especial para máxima concentração.",
    images: [
      "/images/espacos/sala-energia-1.jpeg",
      "/images/espacos/sala-energia-2.jpeg",
      "/images/espacos/sala-energia-3.jpeg",
      "/images/espacos/sala-energia-4.jpeg",
      "/images/espacos/sala-energia-5.jpeg",
      "/images/espacos/sala-energia-6.jpeg",
      "/images/espacos/sala-energia-7.jpeg",
    ],
    features: [
      "Iluminação especial para maior concentração",
      "Mobiliário ergonômico e confortável",
      "Ambiente climatizado e silencioso",
      "Internet de alta velocidade",
    ],
    ctaHref: waHref("Olá, quero mais informações sobre a Sala Energia da TWK Nexus."),
  },
  {
    src: "/images/espacos/espacos-1.jpeg",
    alt: "Espaços Compartilhados TWK Nexus",
    title: "Espaços Compartilhados",
    description: "Espaço colaborativo com mesas compartilhadas e comunidade produtiva.",
    images: ["/images/espacos/espacos-1.jpeg", "/images/espacos/espacos-2.jpeg"],
    features: [
      "Mesas e áreas de trabalho compartilhadas",
      "Ambiente colaborativo e inspirador",
      "Café e copa incluso",
      "Internet de alta velocidade",
    ],
    ctaHref: waHref("Olá, quero mais informações sobre os Espaços Compartilhados da TWK Nexus."),
  },
  {
    src: "/images/coworking-hero-5.jpg",
    alt: "Auditório TWK Nexus",
    title: "Auditório",
    description: "Espaço completo para eventos corporativos, palestras e networking.",
    images: ["/images/coworking-hero-5.jpg", "/images/coworking-hero-1.jpg", "/images/coworking-hero-3.jpg", "/images/coworking-hero-2.jpg"],
    features: [
      "Espaço para palestras, treinamentos e eventos corporativos",
      "Capacidade para grandes grupos",
      "Equipamentos audiovisuais inclusos",
      "Palco e área de networking",
    ],
    ctaHref: waHref("Olá, quero mais informações sobre o Auditório da TWK Nexus."),
  },
  {
    src: "/images/espacos/espacos-5.jpeg",
    alt: "Sala Inspiração TWK Nexus",
    title: "Sala Inspiração",
    description: "Ambiente criativo para brainstorming, inovação e desenvolvimento de projetos.",
    images: ["/images/espacos/espacos-5.jpeg"],
    features: [
      "Ambiente criativo e estimulante",
      "Ideal para brainstorming e inovação",
      "Design diferenciado para estimular a criatividade",
      "Internet de alta velocidade",
    ],
    ctaHref: waHref("Olá, quero mais informações sobre a Sala Inspiração da TWK Nexus."),
  },
  {
    src: "/images/espacos/espacos-7.jpeg",
    alt: "Mesa Fixa TWK Nexus",
    title: "Mesa Fixa",
    description: "Estação de trabalho exclusiva e personalizada, com endereço fixo no espaço.",
    images: ["/images/espacos/espacos-7.jpeg"],
    features: [
      "Mesa exclusiva e permanente",
      "Armário individual para guardar pertences",
      "Acesso ao espaço em horário estendido",
      "Internet de alta velocidade",
    ],
    ctaHref: waHref("Olá, quero mais informações sobre a Mesa Fixa da TWK Nexus."),
    imagePosition: "center 35%",
  },
  {
    src: "/images/espacos/espacos-6.jpeg",
    alt: "Cozinha Gourmet TWK Nexus",
    title: "Cozinha Gourmet",
    description: "Infraestrutura para treinamentos gastronômicos, workshops e gravações culinárias.",
    images: ["/images/espacos/espacos-6.jpeg", "/images/espacos/espacos-8.jpeg"],
    features: [
      "Ambiente preparado para treinamentos gastronômicos",
      "Ideal para pizzaiolos, chefs, confeiteiros e workshops",
      "Espaço para gravação de conteúdo culinário",
      "Infraestrutura para cursos, degustações e experiências gastronômicas",
    ],
    ctaHref: waHref("Olá, quero mais informações sobre a Cozinha Gourmet da TWK Nexus."),
    imagePosition: "center 35%",
  },
];

const CIRCLE_SIZE = 148;
const ZOOM_TRANSITION = "transform 1.6s cubic-bezier(0.16, 1, 0.3, 1)";

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

function SpaceCard({
  space,
  delay,
  onOpen,
}: {
  space: SpaceCardData;
  delay: number;
  onOpen: () => void;
}) {
  const outerRef        = useRef<HTMLDivElement>(null);
  const clipRef         = useRef<HTMLDivElement>(null);
  const imageWrapperRef = useRef<HTMLDivElement>(null);
  const circleRef       = useRef<HTMLDivElement>(null);

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
      <button
        onClick={onOpen}
        className="flex flex-col gap-4 w-full text-left"
        style={{ background: "none", border: "none", padding: 0, cursor: "pointer" }}
      >
        <div
          ref={outerRef}
          style={{ position: "relative", aspectRatio: "3/4", cursor: "none" }}
          onMouseMove={handleMouseMove}
          onMouseEnter={handleMouseEnter}
          onMouseLeave={handleMouseLeave}
        >
          {/* Image layer */}
          <div ref={clipRef} style={{ position: "absolute", inset: 0 }}>
            <div
              ref={imageWrapperRef}
              style={{ position: "absolute", inset: 0, transition: ZOOM_TRANSITION, transform: "scale(1)" }}
            >
              <Image
                src={space.src}
                alt={space.alt}
                fill
                style={{ objectFit: "cover", objectPosition: space.imagePosition ?? "center" }}
              />
            </div>
          </div>

          {/* Arrow badge */}
          <div
            className="absolute top-3.5 right-3.5 w-10 h-10 rounded-full flex items-center justify-center z-10"
            style={{
              backgroundColor: "rgb(255,255,255)",
              border: "1px solid rgba(28,26,23,0.10)",
            }}
          >
            <ArrowUpRight size={18} style={{ color: "rgb(28,26,23)" }} strokeWidth={1.75} />
          </div>

          {/* Cursor-following circle */}
          <div
            ref={circleRef}
            className="absolute top-0 left-0 pointer-events-none flex items-center justify-center text-center"
            style={{
              width: CIRCLE_SIZE,
              height: CIRCLE_SIZE,
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
            <span
              className="text-xs font-medium leading-[1.45]"
              style={{ color: "rgb(28,26,23)" }}
            >
              Ver mais detalhes
            </span>
          </div>
        </div>

        <div className="flex flex-col gap-1.5">
          <p className="text-sm font-semibold" style={{ color: "rgb(28,26,23)" }}>
            {space.title}
          </p>
          <p className="text-sm md:text-xs leading-[1.6]" style={{ color: "rgba(28,26,23,0.56)" }}>
            {space.description}
          </p>
          <span
            className="text-base md:text-xs font-medium inline-flex items-center gap-1 mt-0.5"
            style={{ color: "#007CD2" }}
          >
            Ver detalhes
            <svg width="11" height="11" viewBox="0 0 12 12" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M2.5 6h7M6.5 3l3 3-3 3" />
            </svg>
          </span>
        </div>
      </button>
    </Reveal>
  );
}

export default function SpaceCards() {
  const [activeSpace, setActiveSpace] = useState<SpaceCardData | null>(null);

  return (
    <section id="espacos" className="px-6 pb-16 md:pb-[120px]" style={{ backgroundColor: "rgb(250,250,250)" }}>
      <div className="max-w-[1300px] mx-auto">
        <Reveal>
          <div className="flex flex-col gap-3 mb-12">
            <span
              className="text-sm md:text-xs font-medium uppercase tracking-[0.48px]"
              style={{ color: "rgba(16,16,15,0.88)" }}
            >
              Explore nossos espaços
            </span>
            <h2
              className="font-medium tracking-[-0.38px]"
              style={{
                fontFamily: "var(--font-display)",
                fontSize: "38px",
                lineHeight: "1.2",
                color: "rgb(28,26,23)",
              }}
            >
              Cada espaço pensado
              <br />
              para um propósito
            </h2>
          </div>
        </Reveal>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {spaces.map((space, i) => (
            <SpaceCard
              key={space.title}
              space={space}
              delay={i * 70}
              onOpen={() => setActiveSpace(space)}
            />
          ))}
        </div>
      </div>

      {activeSpace && (
        <SpaceDialog
          space={activeSpace}
          onClose={() => setActiveSpace(null)}
        />
      )}
    </section>
  );
}
