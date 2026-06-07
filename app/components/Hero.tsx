import Image from "next/image";

const col1 = [
  { src: "/images/espacos/espacos-1.jpeg", alt: "Espaços Compartilhados TWK Nexus", label: "Espaços Compartilhados", flex: "1.75" },
  { src: "/images/espacos/espacos-3.jpeg", alt: "Sala Energia TWK Nexus",           label: "Sala Energia",           flex: "1"    },
];

const col2 = [
  { src: "/images/espacos/espacos-5.jpeg", alt: "Sala Inspiração TWK Nexus",  label: "Sala Inspiração",  flex: "0.7"  },
  { src: "/images/espacos/espacos-7.jpeg", alt: "Mesa Fixa TWK Nexus",        label: "Mesa Fixa",        flex: "1.55" },
  { src: "/images/espacos/espacos-6.jpeg", alt: "Cozinha Gourmet TWK Nexus",  label: "Cozinha Gourmet",  flex: "0.75" },
];


function PhotoCard({
  src, alt, label, flex, priority = false,
}: {
  src: string; alt: string; label: string; flex: string; priority?: boolean;
}) {
  return (
    <div style={{ flex, borderRadius: "26px", position: "relative", overflow: "hidden" }}>
      <Image
        src={src}
        alt={alt}
        fill
        priority={priority}
        style={{ objectFit: "cover", objectPosition: "center" }}
      />
      <div
        style={{
          position: "absolute", bottom: 0, left: 0, right: 0,
          background: "linear-gradient(to top, rgba(0,0,0,0.62) 0%, transparent 55%)",
          padding: "30px 20px 18px",
          pointerEvents: "none",
        }}
      />
      <span
        style={{
          position: "absolute", bottom: 18, left: 20,
          color: "rgba(255,255,255,0.75)",
          fontSize: 11, fontWeight: 500,
          letterSpacing: "0.8px",
          textTransform: "uppercase",
        }}
      >
        {label}
      </span>
    </div>
  );
}

export default function Hero() {
  return (
    <section
      style={{ minHeight: "100vh" }}
      className="flex flex-col lg:flex-row gap-8 sm:gap-12 lg:gap-24 items-center px-5 sm:px-8 pt-[124px] sm:pt-[140px] lg:pt-[150px] pb-16 lg:pb-[110px]"
    >
      {/* ── LEFT ~45% — Masonry gallery ── */}
      <div
        className="w-full lg:w-[45%] flex-shrink-0 order-2 lg:order-1 h-[280px] sm:h-[420px] lg:h-[700px]"
        style={{ display: "flex", gap: "16px" }}
      >
        <div style={{ flex: "0 0 calc(48% - 7px)", display: "flex", flexDirection: "column", gap: "16px" }}>
          {col1.map((p, i) => (
            <PhotoCard key={p.src} {...p} priority={i === 0} />
          ))}
        </div>
        <div style={{ flex: "1", display: "flex", flexDirection: "column", gap: "16px" }}>
          {col2.map((p) => (
            <PhotoCard key={p.src} {...p} />
          ))}
        </div>
      </div>

      {/* ── RIGHT ~55% — Institutional content ── */}
      <div className="flex flex-col gap-6 lg:gap-9 flex-1 order-1 lg:order-2" style={{ maxWidth: 600 }}>
        <span
          className="text-sm md:text-[12px]"
          style={{
            color: "rgba(28,26,23,0.56)", fontWeight: 500,
            letterSpacing: "0.6px", textTransform: "uppercase",
            fontFamily: "var(--font-body)",
          }}
        >
          Coworking · Esteio, Rio Grande do Sul
        </span>

        <h1
          style={{
            fontFamily: "var(--font-display)",
            fontSize: "clamp(40px, 5vw, 66px)",
            fontWeight: 500, lineHeight: 1.06,
            letterSpacing: "-0.5px",
            color: "rgb(28,26,23)", margin: 0,
          }}
        >
          Onde grandes ideias
          <br />
          se encontram.
        </h1>

        <p
          style={{
            color: "rgba(28,26,23,0.65)", fontFamily: "var(--font-body)",
            fontSize: 17, fontWeight: 400, lineHeight: 1.72, margin: 0,
          }}
        >
          A TWK Nexus é mais do que um coworking. Somos um ecossistema completo
          para profissionais, empresas e empreendedores que buscam infraestrutura
          premium, networking estratégico e ambientes preparados para crescimento.
        </p>

        <ul
          style={{
            margin: 0, padding: 0,
            listStyle: "none",
            display: "flex", flexDirection: "column", gap: 10,
          }}
        >
          {[
            "Networking real entre empresários e profissionais",
            "Infraestrutura moderna e profissional",
            "Localização estratégica no centro de Esteio",
            "Ambientes versáteis para trabalho, reuniões, treinamentos e eventos",
            "Comunidade colaborativa e inovadora",
          ].map((item) => (
            <li
              key={item}
              className="text-base md:text-[14px]"
              style={{
                display: "flex", alignItems: "flex-start", gap: 10,
                color: "rgba(28,26,23,0.72)",
                fontFamily: "var(--font-body)", lineHeight: 1.55,
              }}
            >
              <span
                style={{
                  width: 18, height: 18, borderRadius: "50%",
                  backgroundColor: "rgba(0,124,210,0.10)",
                  display: "flex", alignItems: "center", justifyContent: "center",
                  flexShrink: 0, marginTop: 1,
                }}
              >
                <svg width="9" height="9" viewBox="0 0 9 9" fill="none">
                  <path d="M1.5 4.5L3.5 6.5L7.5 2.5" stroke="#007CD2" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </span>
              {item}
            </li>
          ))}
        </ul>

        <div className="flex flex-wrap items-center gap-2.5 justify-center md:justify-start">
          <a
            href="#contato"
            className="text-base md:text-[14px]"
            style={{
              backgroundColor: "#007CD2", color: "#ffffff",
              padding: "13px 26px", borderRadius: 999,
              fontWeight: 400, letterSpacing: "-0.14px",
              textDecoration: "none", display: "inline-flex", alignItems: "center",
            }}
          >
            Agende uma visita
          </a>
          <a
            href="#espacos"
            className="text-base md:text-[14px]"
            style={{
              backgroundColor: "transparent", color: "rgb(28,26,23)",
              padding: "12px 26px", borderRadius: 999,
              fontWeight: 400, letterSpacing: "-0.14px",
              textDecoration: "none", display: "inline-flex", alignItems: "center",
              border: "1px solid rgba(28,26,23,0.18)",
            }}
          >
            Conheça nossos espaços
          </a>
        </div>
      </div>
    </section>
  );
}
