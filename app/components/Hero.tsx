import Image from "next/image";

const col1 = [
  { src: "/images/coworking-hero-1.jpg", alt: "Área aberta TWK Nexus",     label: "Área Aberta",      flex: "1.75" },
  { src: "/images/coworking-hero-2.jpg", alt: "Lounge TWK Nexus",           label: "Lounge",           flex: "1"    },
];

const col2 = [
  { src: "/images/coworking-hero-3.jpg", alt: "Copa TWK Nexus",             label: "Copa & Café",      flex: "0.7"  },
  { src: "/images/coworking-hero-4.jpg", alt: "Sala privativa TWK Nexus",   label: "Sala Privativa",   flex: "1.55" },
  { src: "/images/coworking-hero-5.jpg", alt: "Espaço de eventos TWK Nexus",label: "Espaço de Eventos",flex: "0.75" },
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
      style={{ minHeight: "100vh", padding: "150px 32px 110px" }}
      className="flex flex-col lg:flex-row gap-16 lg:gap-24 items-center"
    >
      {/* ── LEFT ~45% — Masonry gallery ── */}
      <div
        className="w-full lg:w-[45%] flex-shrink-0 order-2 lg:order-1"
        style={{ height: "700px", display: "flex", gap: "16px" }}
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
      <div className="flex flex-col gap-9 flex-1 order-1 lg:order-2" style={{ maxWidth: 600 }}>
        <span
          style={{
            color: "rgba(28,26,23,0.56)", fontSize: 12, fontWeight: 500,
            letterSpacing: "0.6px", textTransform: "uppercase",
            fontFamily: "var(--font-body)",
          }}
        >
          Coworking · Faria Lima, São Paulo
        </span>

        <h1
          style={{
            fontFamily: "var(--font-display)",
            fontSize: "clamp(44px, 5vw, 68px)",
            fontWeight: 500, lineHeight: 1.05,
            letterSpacing: "-0.5px",
            color: "rgb(28,26,23)", margin: 0,
          }}
        >
          Onde trabalhar bem
          <br />
          virou rotina
        </h1>

        <p
          style={{
            color: "rgba(28,26,23,0.65)", fontFamily: "var(--font-body)",
            fontSize: 18, fontWeight: 400, lineHeight: 1.7, margin: 0,
          }}
        >
          Internet confiável, café de qualidade e pessoas que inspiram. Tudo que você precisa, num só lugar.
        </p>

        <div style={{ display: "flex", gap: 10, flexWrap: "wrap", alignItems: "center" }}>
          <a
            href="#contato"
            style={{
              backgroundColor: "#007CD2", color: "#ffffff",
              padding: "13px 26px", borderRadius: 999,
              fontSize: 14, fontWeight: 400, letterSpacing: "-0.14px",
              textDecoration: "none", display: "inline-flex", alignItems: "center",
            }}
          >
            Agendar Visita
          </a>
          <a
            href="#planos"
            style={{
              backgroundColor: "rgb(255,255,255)", color: "rgb(28,26,23)",
              padding: "13px 26px", borderRadius: 999,
              fontSize: 14, fontWeight: 400, letterSpacing: "-0.14px",
              textDecoration: "none", display: "inline-flex", alignItems: "center",
              border: "1px solid rgba(28,26,23,0.12)",
            }}
          >
            Ver Planos
          </a>
        </div>

        <div style={{ display: "flex", alignItems: "center", gap: 14, paddingTop: 4 }}>
          <div style={{ display: "flex" }}>
            {["M", "A", "R", "B"].map((l, i) => (
              <div
                key={i}
                style={{
                  width: 34, height: 34, borderRadius: "50%",
                  display: "flex", alignItems: "center", justifyContent: "center",
                  fontSize: 11, fontWeight: 600, color: "white",
                  border: "2px solid rgb(250,250,250)",
                  marginLeft: i === 0 ? 0 : -8,
                  backgroundColor: ["rgb(16,185,129)", "rgb(65,112,255)", "rgb(168,85,247)", "rgb(245,158,11)"][i],
                }}
              >
                {l}
              </div>
            ))}
          </div>
          <span style={{ fontSize: 13, color: "rgba(28,26,23,0.65)", lineHeight: 1.4 }}>
            <strong style={{ color: "rgb(28,26,23)", fontWeight: 600 }}>800+</strong>{" "}
            membros que já trabalham aqui
          </span>
        </div>
      </div>
    </section>
  );
}
