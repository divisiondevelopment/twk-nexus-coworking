import { Coffee, Mic, BookOpen, Handshake, ChefHat } from "lucide-react";
import type { LucideIcon } from "lucide-react";
import Reveal from "./Reveal";

const WA_HREF =
  "https://wa.me/5551999999999?text=Ol%C3%A1%2C%20quero%20saber%20mais%20sobre%20os%20eventos%20da%20TWK%20Nexus.";

const events: { icon: LucideIcon; title: string; description: string }[] = [
  {
    icon: Coffee,
    title: "Cafés de Negócios",
    description:
      "Encontros informais para trocar experiências, ampliar a rede e gerar oportunidades reais.",
  },
  {
    icon: Mic,
    title: "Palestras",
    description:
      "Conteúdo relevante com especialistas para desenvolver visão estratégica e conhecimento aplicado.",
  },
  {
    icon: BookOpen,
    title: "Workshops",
    description:
      "Experiências práticas e colaborativas para desenvolver habilidades e impulsionar resultados.",
  },
  {
    icon: Handshake,
    title: "Encontros Empresariais",
    description:
      "Espaço estruturado para networking estratégico entre empresários e tomadores de decisão.",
  },
  {
    icon: ChefHat,
    title: "Experiências Gastronômicas",
    description:
      "Eventos que unem gastronomia, networking e conexões em um ambiente descontraído e memorável.",
  },
];

function WhatsAppIcon() {
  return (
    <svg
      width="15"
      height="15"
      viewBox="0 0 24 24"
      fill="currentColor"
      style={{ flexShrink: 0 }}
    >
      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51a12.8 12.8 0 0 0-.57-.01c-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 0 1-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 0 1-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 0 1 2.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0 0 12.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 0 0 5.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 0 0-3.48-8.413Z" />
    </svg>
  );
}

export default function Eventos() {
  return (
    <section
      id="eventos"
      className="px-6 py-16 md:py-20 lg:py-[120px]"
      style={{ backgroundColor: "#001d3d" }}
    >
      {/* ── Border beam styles ── */}
      <style>{`
        @keyframes evento-beam-rotate {
          from { transform: translate(-50%, -50%) rotate(0deg); }
          to   { transform: translate(-50%, -50%) rotate(360deg); }
        }

        /* Card base */
        .evento-card {
          position: relative;
          overflow: hidden;
          border: 1px solid rgba(255,255,255,0.10);
          transition: border-color 0.35s ease;
        }

        /* Rotating conic-gradient beam */
        .evento-card::before {
          content: '';
          position: absolute;
          top: 50%;
          left: 50%;
          width: 220%;
          height: 220%;
          transform: translate(-50%, -50%);
          background: conic-gradient(
            from 0deg,
            transparent 0deg,
            rgba(0, 124, 210, 0.95) 40deg,
            transparent 80deg
          );
          opacity: 0;
          transition: opacity 0.4s ease;
          z-index: 0;
          pointer-events: none;
        }

        /* Inner fill — hides beam except the 1px border strip */
        /* rgb(13,40,71) = #001d3d + rgba(255,255,255,0.05) blended */
        .evento-card::after {
          content: '';
          position: absolute;
          inset: 1px;
          border-radius: 11px;
          background: rgb(13, 40, 71);
          z-index: 1;
          pointer-events: none;
        }

        /* Content sits above both pseudo-elements */
        .evento-card-content {
          position: relative;
          z-index: 2;
        }

        /* On hover: hide static border, reveal beam */
        .evento-card:hover {
          border-color: transparent;
        }
        .evento-card:hover::before {
          opacity: 1;
          animation: evento-beam-rotate 2s linear infinite;
        }
      `}</style>

      <div className="max-w-[1300px] mx-auto flex flex-col gap-14">

        {/* Header + body */}
        <Reveal>
          <div className="flex flex-col sm:flex-row gap-10 sm:gap-20">

            <div className="flex flex-col gap-4 sm:w-[38%] shrink-0">
              <span
                className="text-sm md:text-xs font-medium uppercase tracking-[0.48px]"
                style={{ color: "rgba(255,255,255,0.45)" }}
              >
                Eventos e Networking
              </span>
              <h2
                style={{
                  fontFamily: "var(--font-display)",
                  fontSize: "clamp(26px, 3vw, 42px)",
                  fontWeight: 500,
                  lineHeight: 1.15,
                  letterSpacing: "-0.38px",
                  color: "#ffffff",
                  margin: 0,
                }}
              >
                Conexões que geram negócios.
              </h2>
            </div>

            <div className="flex flex-col gap-4 flex-1 justify-center">
              <p
                className="text-base md:text-[15px]"
                style={{ lineHeight: 1.85, color: "rgba(255,255,255,0.62)", margin: 0 }}
              >
                A TWK Nexus promove conexões reais através de encontros empresariais,
                cafés de negócios, palestras, workshops e experiências que aproximam
                profissionais e empresas.
              </p>
              <p
                className="text-base md:text-[15px]"
                style={{ lineHeight: 1.85, color: "rgba(255,255,255,0.62)", margin: 0 }}
              >
                Nosso objetivo é criar oportunidades que gerem negócios.
              </p>
            </div>

          </div>
        </Reveal>

        {/* Event cards */}
        <Reveal delay={80}>
          <div
            className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4 pt-8 md:pt-10"
            style={{ borderTop: "1px solid rgba(255,255,255,0.1)" }}
          >
            {events.map(({ icon: Icon, title, description }) => (
              <div
                key={title}
                className="evento-card rounded-xl"
                style={{
                  backgroundColor: "rgba(255,255,255,0.05)",
                  padding: "22px 20px",
                }}
              >
                <div className="evento-card-content flex flex-col gap-4">
                  <div
                    style={{
                      width: 44,
                      height: 44,
                      borderRadius: "50%",
                      backgroundColor: "rgba(255,255,255,0.10)",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      flexShrink: 0,
                    }}
                  >
                    <Icon
                      size={19}
                      strokeWidth={1.75}
                      style={{ color: "rgba(255,255,255,0.82)" }}
                    />
                  </div>

                  <p
                    className="text-sm font-semibold"
                    style={{ color: "#ffffff", margin: 0, lineHeight: 1.3 }}
                  >
                    {title}
                  </p>

                  <p
                    className="text-sm"
                    style={{ color: "rgba(255,255,255,0.52)", margin: 0, lineHeight: 1.65 }}
                  >
                    {description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </Reveal>

        {/* CTA */}
        <Reveal delay={140} className="flex justify-center sm:justify-start">
          <a
            href={WA_HREF}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 rounded-full text-base md:text-sm font-medium transition-all duration-200 hover:bg-[rgb(237,237,237)]"
            style={{
              backgroundColor: "rgb(255,255,255)",
              color: "rgb(28,26,23)",
              padding: "13px 24px",
              textDecoration: "none",
            }}
          >
            <WhatsAppIcon />
            Fale com nossa equipe
          </a>
        </Reveal>

      </div>
    </section>
  );
}
