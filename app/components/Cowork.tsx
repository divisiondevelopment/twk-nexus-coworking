import Reveal from "./Reveal";

const WA_HREF =
  "https://wa.me/5551983184368?text=Ol%C3%A1%2C%20quero%20conhecer%20o%20coworking%20da%20TWK%20Nexus.";

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

export default function Cowork() {
  return (
    <section
      id="cowork"
      className="px-6 py-16 md:py-20 lg:py-[120px]"
      style={{ backgroundColor: "rgb(255, 255, 255)" }}
    >
      <div className="max-w-[1300px] mx-auto flex flex-col items-center text-center gap-8 md:gap-10">

        {/* Label + title */}
        <Reveal>
          <div className="flex flex-col items-center gap-4">
            <span
              className="text-sm md:text-xs font-medium uppercase tracking-[0.48px]"
              style={{ color: "rgba(0,124,210,0.85)" }}
            >
              Coworking
            </span>
            <h2
              className="text-2xl md:text-3xl font-medium tracking-[-0.38px]"
              style={{
                fontFamily: "var(--font-display)",
                lineHeight: 1.2,
                letterSpacing: "-0.38px",
                color: "rgb(28,26,23)",
                margin: 0,
              }}
            >
              O que é Coworking?
            </h2>
          </div>
        </Reveal>

        {/* Paragraphs */}
        <Reveal delay={80}>
          <div
            className="flex flex-col gap-5"
            style={{ maxWidth: 680 }}
          >
            <p
              className="text-base md:text-[15px]"
              style={{
                lineHeight: 1.85,
                color: "rgba(28,26,23,0.65)",
                margin: 0,
              }}
            >
              Coworking é muito mais do que compartilhar espaço. É trabalhar em
              um ambiente profissional, colaborativo e inspirador, cercado de
              oportunidades, networking e estrutura completa para focar no que
              realmente importa: o crescimento do seu negócio.
            </p>
            <p
              className="text-base md:text-[15px]"
              style={{
                lineHeight: 1.85,
                color: "rgba(28,26,23,0.65)",
                margin: 0,
              }}
            >
              Na TWK Nexus, você encontra flexibilidade, profissionalismo e
              conexões estratégicas.
            </p>
          </div>
        </Reveal>

        {/* CTA */}
        <Reveal delay={140}>
          <a
            href={WA_HREF}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 rounded-full text-base md:text-sm font-medium transition-opacity duration-200 hover:opacity-85"
            style={{
              backgroundColor: "#007CD2",
              color: "#ffffff",
              padding: "13px 28px",
              textDecoration: "none",
            }}
          >
            <WhatsAppIcon />
            Agende uma visita
          </a>
        </Reveal>

      </div>
    </section>
  );
}
