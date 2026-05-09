import Reveal from "./Reveal";

// SVG viewBox: 1200 × 500
// Outer corner radius r=40
// Notch: width NW=360 (30%), height NH=200 (40%), concave arc CR=64
// Key points:
//   NW+CR = 424  |  H-CR = 436  |  H-NH+CR = 364  |  NW-CR = 296  |  H-NH = 300
const CLIP_PATH =
  "M40,0 L1160,0 Q1200,0 1200,40 L1200,460 Q1200,500 1160,500 " +
  "L424,500 Q360,500 360,436 " +   // concave arc: bottom of notch
  "L360,364 Q360,300 296,300 " +   // concave arc: top-right of notch
  "L0,300 L0,40 Q0,0 40,0 Z";

export default function About() {
  return (
    <section
      id="sobre"
      style={{ padding: "0 24px 120px", backgroundColor: "rgb(250,250,250)" }}
    >
      <div className="max-w-[1300px] mx-auto flex flex-col gap-16">

        {/* ── Image composition ── */}
        <Reveal>
          <div style={{ position: "relative" }}>

            {/* SVG carries the clip-path and the photo — scales with width automatically */}
            <svg
              viewBox="0 0 1200 500"
              style={{ width: "100%", display: "block" }}
              aria-hidden="true"
            >
              <defs>
                <clipPath id="about-clip">
                  <path d={CLIP_PATH} />
                </clipPath>
              </defs>
              <image
                href="/images/coworking-hero-1.jpg"
                x="0" y="0" width="1200" height="500"
                preserveAspectRatio="xMidYMid slice"
                clipPath="url(#about-clip)"
              />
            </svg>

            {/* Card — sits flush in the notch cutout */}
            <div
              className="hidden sm:flex flex-col justify-end"
              style={{
                position: "absolute",
                left: 0,
                bottom: 0,
                width: "30%",          // = 360/1200
                aspectRatio: "360/200", // = NW/NH — mirrors the notch
                backgroundColor: "rgb(255, 255, 255)",
                // TL=0 (90° notch corner), TR=52 (mirrors concave arc),
                // BR=52 (mirrors bottom concave arc), BL=40 (matches image outer radius)
                borderRadius: "0 52px 52px 40px",
                padding: "0 28px 28px 28px",
                gap: "8px",
                overflow: "hidden",
              }}
            >
              <span
                style={{
                  fontSize: 10,
                  fontWeight: 500,
                  letterSpacing: "0.6px",
                  textTransform: "uppercase",
                  color: "rgba(28,26,23,0.45)",
                  fontFamily: "var(--font-body)",
                }}
              >
                Faria Lima · São Paulo · Desde 2019
              </span>
              <p
                style={{
                  fontFamily: "var(--font-display)",
                  fontSize: "clamp(13px, 1.4vw, 20px)",
                  fontWeight: 500,
                  lineHeight: 1.25,
                  letterSpacing: "-0.3px",
                  color: "rgb(28,26,23)",
                  margin: 0,
                }}
              >
                Criamos o ambiente.
                <br />
                Você cria o futuro.
              </p>
            </div>

          </div>
        </Reveal>

        {/* ── Editorial text ── */}
        <Reveal>
          <div className="flex flex-col sm:flex-row gap-8 sm:gap-20">
            <div className="flex-1">
              <span
                className="text-xs font-medium uppercase tracking-[0.48px] block mb-5"
                style={{ color: "rgba(16,16,15,0.88)" }}
              >
                Sobre o espaço
              </span>
              <h2
                style={{
                  fontFamily: "var(--font-display)",
                  fontSize: "clamp(26px, 3vw, 38px)",
                  fontWeight: 500,
                  lineHeight: 1.2,
                  letterSpacing: "-0.38px",
                  color: "rgb(28,26,23)",
                  margin: 0,
                }}
              >
                Mais do que um escritório —
                <br />
                um ecossistema vivo
              </h2>
            </div>
            <div
              className="flex-1 flex flex-col gap-4 justify-center"
              style={{ maxWidth: 520 }}
            >
              <p
                style={{
                  fontSize: 15,
                  lineHeight: 1.85,
                  color: "rgba(28,26,23,0.65)",
                  margin: 0,
                }}
              >
                Fundado em 2019, o TWK Nexus nasceu com uma missão clara: criar um
                ambiente onde profissionais e empresas pudessem não apenas trabalhar,
                mas crescer juntos.
              </p>
              <p
                style={{
                  fontSize: 15,
                  lineHeight: 1.85,
                  color: "rgba(28,26,23,0.65)",
                  margin: 0,
                }}
              >
                Com mais de 800 membros ativos e três unidades em São Paulo, somos
                hoje referência em coworking premium na Faria Lima.
              </p>
            </div>
          </div>
        </Reveal>

      </div>
    </section>
  );
}
