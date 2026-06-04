import Reveal from "./Reveal";

const testimonials = [
  {
    name: "Marina Alves",
    role: "Fundadora · Fintech",
    avatar: "MA",
    color: "rgb(16, 185, 129)",
    quote:
      "O TWK Nexus mudou minha forma de trabalhar. A comunidade é incrível — já fechei duas parcerias importantes através de conexões que fiz aqui no coworking.",
    metric: "3 parcerias fechadas",
  },
  {
    name: "Rafael Costa",
    role: "CTO · SaaS",
    avatar: "RC",
    color: "rgb(65, 112, 255)",
    quote:
      "Contratei 4 pessoas nos últimos 6 meses e 3 delas conheci no TWK Nexus. A concentração de talento aqui é absurda. Sem contar a internet que nunca cai.",
    metric: "4 contratações",
  },
  {
    name: "Beatriz Santos",
    role: "Designer · Autônoma",
    avatar: "BS",
    color: "rgb(168, 85, 247)",
    quote:
      "Trabalhar de casa me deixava improdutiva. No TWK Nexus encontrei o ambiente perfeito: silêncio quando preciso, colaboração quando quero. A melhor decisão que tomei.",
    metric: "3× mais produtiva",
  },
];

export default function Testimonials() {
  return (
    <section
      id="comunidade"
      className="px-6 py-16 md:py-20 lg:py-[120px]"
      style={{ backgroundColor: "rgb(250, 250, 250)" }}
    >
      <div className="max-w-[1300px] mx-auto">

        <Reveal>
          <div className="flex flex-col gap-5 mb-16 max-w-2xl">
            <span
              className="text-xs font-medium uppercase tracking-[0.48px]"
              style={{ color: "rgba(16, 16, 15, 0.88)" }}
            >
              Comunidade
            </span>
            <h2
              className="font-medium tracking-[-0.38px]"
              style={{
                fontFamily: "var(--font-display)",
                fontSize: "clamp(24px, 3.5vw, 38px)",
                lineHeight: "1.2",
                color: "rgb(28, 26, 23)",
              }}
            >
              Quem já está
              <br />
              aqui conta
            </h2>
          </div>
        </Reveal>

        <div
          className="grid gap-6"
          style={{ gridTemplateColumns: "repeat(auto-fill, minmax(300px, 1fr))" }}
        >
          {testimonials.map((t, i) => (
            <Reveal key={t.name} delay={i * 100}>
              <div
                className="rounded-xl p-7 flex flex-col gap-5 h-full"
                style={{
                  backgroundColor: "rgb(255, 255, 255)",
                  border: "1px solid rgb(241, 241, 241)",
                }}
              >
                <div className="flex items-center gap-3">
                  <div
                    className="w-10 h-10 rounded-full flex items-center justify-center text-sm font-bold text-white flex-shrink-0"
                    style={{ backgroundColor: t.color }}
                  >
                    {t.avatar}
                  </div>
                  <div>
                    <p
                      className="text-sm font-bold"
                      style={{ color: "rgb(28, 26, 23)" }}
                    >
                      {t.name}
                    </p>
                    <p
                      className="text-xs"
                      style={{ color: "rgba(28, 26, 23, 0.56)" }}
                    >
                      {t.role}
                    </p>
                  </div>
                </div>

                <p
                  className="text-sm leading-7 flex-1"
                  style={{ color: "rgba(28, 26, 23, 0.72)" }}
                >
                  &ldquo;{t.quote}&rdquo;
                </p>

                <div
                  className="flex items-center gap-2 pt-4"
                  style={{ borderTop: "1px solid rgb(241, 241, 241)" }}
                >
                  <div
                    className="w-2 h-2 rounded-full flex-shrink-0"
                    style={{ backgroundColor: t.color }}
                  />
                  <span
                    className="text-xs font-medium"
                    style={{ color: "rgba(28, 26, 23, 0.72)" }}
                  >
                    {t.metric}
                  </span>
                </div>
              </div>
            </Reveal>
          ))}
        </div>

      </div>
    </section>
  );
}
