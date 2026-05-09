"use client";

import { useState } from "react";
import { Globe, Lock, Briefcase, Video, Building2, Mic2 } from "lucide-react";
import type { LucideIcon } from "lucide-react";

const categories = ["Todos", "Aberto", "Privativo", "Virtual", "Sala"];

const spaces: {
  icon: LucideIcon;
  category: string;
  title: string;
  sub: string;
  price: string;
  period: string;
  metrics: { label: string; value: string }[];
  badge: string | null;
  badgeColor: string | null;
}[] = [
  {
    icon: Globe,
    category: "Aberto",
    title: "Coworking Aberto",
    sub: "Hot-desk em ambiente colaborativo",
    price: "R$800",
    period: "/mês",
    metrics: [
      { label: "Mesas disp.", value: "120" },
      { label: "Capacidade", value: "220" },
      { label: "Avaliação", value: "4.9★" },
    ],
    badge: "Mais popular",
    badgeColor: "rgb(16, 185, 129)",
  },
  {
    icon: Lock,
    category: "Privativo",
    title: "Sala Privativa",
    sub: "Exclusiva para a sua equipe",
    price: "R$2.500",
    period: "/mês",
    metrics: [
      { label: "Capacidade", value: "1–8" },
      { label: "Salas disp.", value: "12" },
      { label: "Avaliação", value: "5.0★" },
    ],
    badge: null,
    badgeColor: null,
  },
  {
    icon: Briefcase,
    category: "Virtual",
    title: "Escritório Virtual",
    sub: "Endereço comercial premium",
    price: "R$390",
    period: "/mês",
    metrics: [
      { label: "Endereço", value: "Faria Lima" },
      { label: "Recepção", value: "24h" },
      { label: "Avaliação", value: "4.8★" },
    ],
    badge: "Novo",
    badgeColor: "rgb(65, 112, 255)",
  },
  {
    icon: Video,
    category: "Sala",
    title: "Sala de Reunião",
    sub: "Reserva por hora ou pacotes",
    price: "R$80",
    period: "/hora",
    metrics: [
      { label: "Capacidade", value: "4–20" },
      { label: "Salas disp.", value: "15" },
      { label: "Avaliação", value: "4.9★" },
    ],
    badge: null,
    badgeColor: null,
  },
  {
    icon: Building2,
    category: "Privativo",
    title: "Escritório Dedicado",
    sub: "Espaço exclusivo para sua empresa",
    price: "R$5.000",
    period: "/mês",
    metrics: [
      { label: "Tamanho", value: "30m²+" },
      { label: "Unidades", value: "3" },
      { label: "Avaliação", value: "5.0★" },
    ],
    badge: "Premium",
    badgeColor: "rgb(168, 85, 247)",
  },
  {
    icon: Mic2,
    category: "Sala",
    title: "Espaço para Eventos",
    sub: "Auditório e espaços de convivência",
    price: "Sob consulta",
    period: "",
    metrics: [
      { label: "Capacidade", value: "até 150" },
      { label: "Equipamentos", value: "Incluso" },
      { label: "Avaliação", value: "4.9★" },
    ],
    badge: null,
    badgeColor: null,
  },
];

export default function Spaces() {
  const [active, setActive] = useState("Todos");

  const filtered =
    active === "Todos" ? spaces : spaces.filter((s) => s.category === active);

  return (
    <section
      id="planos"
      style={{ backgroundColor: "rgb(255, 255, 255)", padding: "120px 24px" }}
    >
      <div className="max-w-[1300px] mx-auto">
        <div className="flex flex-col gap-5 mb-16">
          <span
            className="text-xs font-medium uppercase tracking-[0.48px]"
            style={{ color: "rgba(16, 16, 15, 0.88)" }}
          >
            Nossos espaços
          </span>
          <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-4">
            <h2
              className="font-medium tracking-[-0.38px]"
              style={{
                fontFamily: "var(--font-display)",
                fontSize: "38px",
                lineHeight: "1.2",
                color: "rgb(28, 26, 23)",
              }}
            >
              Um espaço para
              <br />
              cada tipo de dia
            </h2>
            <div className="flex gap-2 flex-wrap">
              {categories.map((cat) => (
                <button
                  key={cat}
                  onClick={() => setActive(cat)}
                  className="rounded-[20px] text-sm font-medium transition-all duration-150"
                  style={{
                    padding: "8px 16px",
                    backgroundColor:
                      active === cat ? "#007CD2" : "transparent",
                    color:
                      active === cat
                        ? "#ffffff"
                        : "rgba(28, 26, 23, 0.72)",
                    border:
                      active === cat
                        ? "1px solid #007CD2"
                        : "1px solid rgba(0, 0, 0, 0.12)",
                    cursor: "pointer",
                  }}
                >
                  {cat}
                </button>
              ))}
            </div>
          </div>
        </div>

        <div
          className="grid gap-5"
          style={{
            gridTemplateColumns: "repeat(auto-fill, minmax(300px, 1fr))",
          }}
        >
          {filtered.map((space) => {
            const Icon = space.icon;
            return (
              <div
                key={space.title}
                className="rounded-xl p-7 flex flex-col gap-5 transition-all duration-300 hover:shadow-lg hover:-translate-y-0.5 cursor-pointer"
                style={{
                  backgroundColor: "rgb(255, 255, 255)",
                  border: "1px solid rgb(241, 241, 241)",
                }}
              >
                <div className="flex items-start gap-3">
                  <div
                    className="w-10 h-10 rounded-xl flex items-center justify-center flex-shrink-0"
                    style={{
                      backgroundColor: "rgb(250, 250, 250)",
                      border: "1px solid rgb(244, 244, 245)",
                    }}
                  >
                    <Icon size={18} style={{ color: "rgb(28, 26, 23)" }} strokeWidth={1.75} />
                  </div>
                  <div className="flex-1 min-w-0">
                    <div className="flex items-center gap-2 flex-wrap">
                      <p
                        className="text-sm font-bold"
                        style={{ color: "rgb(28, 26, 23)" }}
                      >
                        {space.title}
                      </p>
                      {space.badge && (
                        <span
                          className="text-xs font-medium rounded-full px-2 py-0.5 text-white"
                          style={{ backgroundColor: space.badgeColor! }}
                        >
                          {space.badge}
                        </span>
                      )}
                    </div>
                    <p
                      className="text-xs mt-0.5"
                      style={{ color: "rgba(28, 26, 23, 0.56)" }}
                    >
                      {space.sub}
                    </p>
                  </div>
                </div>

                <div
                  className="grid gap-2 pt-4"
                  style={{
                    gridTemplateColumns: "repeat(3, 1fr)",
                    borderTop: "1px solid rgb(241, 241, 241)",
                  }}
                >
                  {space.metrics.map((m) => (
                    <div key={m.label} className="flex flex-col gap-0.5">
                      <p
                        className="text-xs"
                        style={{ color: "rgba(28, 26, 23, 0.56)" }}
                      >
                        {m.label}
                      </p>
                      <p
                        className="text-sm font-bold"
                        style={{ color: "rgb(28, 26, 23)" }}
                      >
                        {m.value}
                      </p>
                    </div>
                  ))}
                </div>

                <div className="flex items-center justify-between pt-1">
                  <div className="flex items-baseline gap-1">
                    <span
                      className="text-lg font-bold"
                      style={{
                        fontFamily: "var(--font-display)",
                        color: "rgb(28, 26, 23)",
                      }}
                    >
                      {space.price}
                    </span>
                    {space.period && (
                      <span
                        className="text-xs"
                        style={{ color: "rgba(28, 26, 23, 0.56)" }}
                      >
                        {space.period}
                      </span>
                    )}
                  </div>
                  <a
                    href="#contato"
                    className="rounded-full text-xs font-medium transition-opacity duration-200 hover:opacity-85"
                    style={{
                      backgroundColor: "#007CD2",
                      color: "#ffffff",
                      padding: "6px 12px",
                      textDecoration: "none",
                    }}
                  >
                    Consultar
                  </a>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
