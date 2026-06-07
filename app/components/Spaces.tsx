"use client";

import { useState } from "react";
import { Zap, Users, Mic2, Lightbulb, UtensilsCrossed, Monitor } from "lucide-react";
import type { LucideIcon } from "lucide-react";
import SpaceDialog, { type DialogSpaceData } from "./SpaceDialog";

const WA = "5551999999999";
function waHref(msg: string) {
  return `https://wa.me/${WA}?text=${encodeURIComponent(msg)}`;
}

type Space = DialogSpaceData & { id: string; icon: LucideIcon };

const spaces: Space[] = [
  {
    id: "sala-energia",
    icon: Zap,
    title: "Sala Energia",
    description:
      "Ambiente estimulante desenhado para máxima concentração e produtividade, com iluminação especial e mobiliário ergonômico.",
    features: [
      "Iluminação especial para maior concentração",
      "Mobiliário ergonômico e confortável",
      "Ambiente climatizado e silencioso",
      "Internet de alta velocidade",
    ],
    ctaHref: waHref("Olá, quero mais informações sobre a Sala Energia da TWK Nexus."),
    images: [
      "/images/espacos/espacos-3.jpeg",
      "/images/espacos/espacos-4.jpeg",
    ],
  },
  {
    id: "espacos-compartilhados",
    icon: Users,
    title: "Espaços Compartilhados",
    description:
      "Espaço colaborativo com mesas e áreas de trabalho compartilhadas, ideal para profissionais que buscam uma comunidade produtiva.",
    features: [
      "Mesas e áreas de trabalho compartilhadas",
      "Ambiente colaborativo e inspirador",
      "Café e copa incluso",
      "Internet de alta velocidade",
    ],
    ctaHref: waHref("Olá, quero mais informações sobre os Espaços Compartilhados da TWK Nexus."),
    images: [
      "/images/espacos/espacos-1.jpeg",
      "/images/espacos/espacos-2.jpeg",
    ],
  },
  {
    id: "auditorio-1",
    icon: Mic2,
    title: "Auditório",
    description:
      "Espaço completo para eventos corporativos, palestras e networking empresarial de alto nível, com infraestrutura moderna e funcional.",
    features: [
      "Espaço para palestras, treinamentos e eventos corporativos",
      "Estrutura para networking empresarial",
      "Ambiente moderno e funcional",
    ],
    ctaHref: waHref("Olá, quero mais informações sobre o Auditório da TWK Nexus."),
    images: [
      "/images/coworking-hero-5.jpg",
      "/images/coworking-hero-1.jpg",
      "/images/coworking-hero-3.jpg",
    ],
  },
  {
    id: "sala-inspiracao",
    icon: Lightbulb,
    title: "Sala Inspiração",
    description:
      "Ambiente criativo com design diferenciado para estimular o pensamento inovador, ideal para brainstorming e desenvolvimento de projetos.",
    features: [
      "Ambiente criativo e estimulante",
      "Ideal para brainstorming e inovação",
      "Design diferenciado para estimular a criatividade",
      "Internet de alta velocidade",
    ],
    ctaHref: waHref("Olá, quero mais informações sobre a Sala Inspiração da TWK Nexus."),
    images: [
      "/images/espacos/espacos-5.jpeg",
    ],
  },
  {
    id: "mesa-fixa",
    icon: Monitor,
    title: "Mesa Fixa",
    description:
      "Estação de trabalho exclusiva e personalizada, com endereço fixo no espaço para você e seus pertences.",
    features: [
      "Mesa exclusiva e permanente",
      "Armário individual para guardar pertences",
      "Acesso ao espaço em horário estendido",
      "Internet de alta velocidade",
    ],
    ctaHref: waHref("Olá, quero mais informações sobre a Mesa Fixa da TWK Nexus."),
    images: [
      "/images/espacos/espacos-7.jpeg",
    ],
    imagePosition: "center 35%",
  },
  {
    id: "auditorio-2",
    icon: Mic2,
    title: "Auditório",
    description:
      "Infraestrutura completa para grandes eventos, treinamentos e experiências de networking que conectam profissionais e empresas.",
    features: [
      "Capacidade para grandes grupos",
      "Equipamentos audiovisuais inclusos",
      "Palco e área de networking",
      "Suporte técnico disponível",
    ],
    ctaHref: waHref("Olá, quero mais informações sobre o Auditório da TWK Nexus."),
    images: [
      "/images/coworking-hero-5.jpg",
      "/images/coworking-hero-3.jpg",
      "/images/coworking-hero-2.jpg",
    ],
  },
  {
    id: "cozinha-gourmet",
    icon: UtensilsCrossed,
    title: "Cozinha Gourmet",
    description:
      "Infraestrutura especializada para treinamentos gastronômicos, workshops culinários, gravações e experiências que unem profissionalismo e criatividade.",
    features: [
      "Ambiente preparado para treinamentos gastronômicos",
      "Ideal para pizzaiolos, chefs, confeiteiros e workshops",
      "Espaço para gravação de conteúdo culinário",
      "Infraestrutura para cursos, degustações e experiências gastronômicas",
    ],
    ctaHref: waHref("Olá, quero mais informações sobre a Cozinha Gourmet da TWK Nexus."),
    images: [
      "/images/espacos/espacos-6.jpeg",
      "/images/espacos/espacos-8.jpeg",
    ],
    imagePosition: "center 35%",
  },
];

function CheckIcon() {
  return (
    <span
      style={{
        width: 18,
        height: 18,
        borderRadius: "50%",
        backgroundColor: "rgba(0,124,210,0.10)",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        flexShrink: 0,
        marginTop: 1,
      }}
    >
      <svg width="9" height="9" viewBox="0 0 9 9" fill="none">
        <path
          d="M1.5 4.5L3.5 6.5L7.5 2.5"
          stroke="#007CD2"
          strokeWidth="1.6"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    </span>
  );
}

function SpaceCard({ space, onOpen }: { space: Space; onOpen: () => void }) {
  const Icon = space.icon;
  return (
    <div
      // Mobile: ~1 card + peek. Tablet: 2+ cards. Desktop: 3+ cards.
      className="rounded-2xl flex flex-col flex-shrink-0 w-[calc(100vw-84px)] md:w-[300px] lg:w-[360px]"
      style={{
        backgroundColor: "rgb(255, 255, 255)",
        border: "1px solid rgb(235, 235, 235)",
        padding: "32px",
        gap: "24px",
        scrollSnapAlign: "start",
      }}
    >
      <div className="flex flex-col gap-4">
        <div
          style={{
            width: 44,
            height: 44,
            borderRadius: 12,
            backgroundColor: "rgba(0,124,210,0.08)",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <Icon size={20} strokeWidth={1.75} style={{ color: "#007CD2" }} />
        </div>
        <h3
          className="font-medium tracking-[-0.2px]"
          style={{
            fontFamily: "var(--font-display)",
            fontSize: 20,
            lineHeight: 1.2,
            color: "rgb(28, 26, 23)",
            margin: 0,
          }}
        >
          {space.title}
        </h3>
      </div>

      <ul
        style={{
          margin: 0,
          padding: 0,
          listStyle: "none",
          display: "flex",
          flexDirection: "column",
          gap: 10,
          flex: 1,
        }}
      >
        {space.features.map((feat) => (
          <li
            key={feat}
            className="text-base md:text-[14px]"
            style={{
              display: "flex",
              alignItems: "flex-start",
              gap: 9,
              color: "rgba(28,26,23,0.72)",
              fontFamily: "var(--font-body)",
              lineHeight: 1.55,
            }}
          >
            <CheckIcon />
            {feat}
          </li>
        ))}
      </ul>

      <div style={{ height: 1, backgroundColor: "rgb(241,241,241)" }} />

      <button
        onClick={onOpen}
        className="flex items-center justify-center gap-2 rounded-full text-base md:text-sm font-medium w-full transition-opacity duration-200 hover:opacity-85"
        style={{
          backgroundColor: "#007CD2",
          color: "#ffffff",
          padding: "11px 20px",
          border: "none",
          cursor: "pointer",
          minHeight: 44,
        }}
      >
        Saiba mais
      </button>
    </div>
  );
}

export default function Spaces() {
  const [activeSpace, setActiveSpace] = useState<Space | null>(null);

  return (
    <section
      id="espacos"
      className="px-6 py-16 md:py-20 lg:py-[120px]"
      style={{ backgroundColor: "rgb(250, 250, 250)" }}
    >
      {/* Header — constrained */}
      <div className="max-w-[1300px] mx-auto">
        <div className="flex flex-col gap-4 mb-10 md:mb-16">
          <span
            className="text-sm md:text-xs font-medium uppercase tracking-[0.48px]"
            style={{ color: "rgba(0,124,210,0.85)" }}
          >
            Nossos espaços
          </span>
          <h2
            className="font-medium tracking-[-0.38px]"
            style={{
              fontFamily: "var(--font-display)",
              fontSize: "clamp(30px, 3.5vw, 42px)",
              lineHeight: 1.15,
              color: "rgb(28, 26, 23)",
              maxWidth: 520,
            }}
          >
            Ambientes feitos para quem leva o trabalho a sério.
          </h2>
        </div>
      </div>

      {/* Carousel — full bleed on all screen sizes */}
      <div
        className="-mx-6"
        style={{
          maskImage:
            "linear-gradient(to right, transparent 0px, black 24px, black calc(100% - 60px), transparent 100%)",
          WebkitMaskImage:
            "linear-gradient(to right, transparent 0px, black 24px, black calc(100% - 60px), transparent 100%)",
        }}
      >
        <div
          className="flex gap-5 overflow-x-auto pl-6 [&::-webkit-scrollbar]:hidden"
          style={{
            scrollSnapType: "x mandatory",
            scrollbarWidth: "none",
          }}
        >
          {spaces.map((space) => (
            <SpaceCard
              key={space.id}
              space={space}
              onOpen={() => setActiveSpace(space)}
            />
          ))}
          {/* trailing spacer so last card isn't flush to the right edge */}
          <div className="flex-shrink-0 w-6" aria-hidden="true" />
        </div>
      </div>

      {activeSpace && (
        <SpaceDialog space={activeSpace} onClose={() => setActiveSpace(null)} />
      )}
    </section>
  );
}
