import Reveal from "./Reveal";

const metrics = [
  { label: "Membros ativos", value: "800+" },
  { label: "Salas de reunião", value: "15" },
  { label: "Unidades em SP", value: "3" },
];

export default function Stats() {
  return (
    <section className="px-6 py-16 md:py-20 lg:py-[120px]">
      <div className="max-w-[1300px] mx-auto flex flex-col gap-3">

        <Reveal>
          <div
            className="grid gap-0 rounded-2xl overflow-hidden grid-cols-1 md:grid-cols-2"
          >
            <div
              className="p-12 flex flex-col justify-between"
              style={{
                backgroundImage:
                  "radial-gradient(81% 66% at 1.8% 1.1%, #0d4a8f 0%, #001d3d 100%)",
                minHeight: "320px",
              }}
            >
              <div>
                <span
                  className="text-xs font-medium uppercase tracking-[0.48px] block mb-5"
                  style={{ color: "rgba(255,255,255,0.56)" }}
                >
                  Números reais
                </span>
                <p
                  className="text-3xl font-medium leading-tight tracking-[-0.5px]"
                  style={{
                    color: "#ffffff",
                    fontFamily: "var(--font-display)",
                    maxWidth: "340px",
                    lineHeight: "1.2",
                  }}
                >
                  Não é só discurso — são os números de quem está aqui todo dia
                </p>
              </div>
              <div className="flex items-center gap-2 mt-10">
                <div
                  className="w-2 h-2 rounded-full"
                  style={{ backgroundColor: "rgb(16, 185, 129)" }}
                />
                <span className="text-xs" style={{ color: "rgba(255,255,255,0.56)" }}>
                  98% voltaria a recomendar
                </span>
              </div>
            </div>

            <div className="grid" style={{ gridTemplateRows: "1fr 1fr" }}>
              {metrics.slice(0, 2).map((m) => (
                <div
                  key={m.label}
                  className="p-10 flex flex-col justify-end"
                  style={{ backgroundColor: "rgb(237, 237, 237)" }}
                >
                  <p
                    className="text-sm leading-5 mb-2"
                    style={{ color: "rgba(28, 26, 23, 0.72)" }}
                  >
                    {m.label}
                  </p>
                  <p
                    className="font-bold leading-none"
                    style={{
                      fontFamily: "var(--font-display)",
                      fontSize: "56px",
                      letterSpacing: "-1.68px",
                      color: "rgb(28, 26, 23)",
                    }}
                  >
                    {m.value}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </Reveal>

        <div
          className="grid grid-cols-1 sm:grid-cols-3"
        >
          {[
            { label: "Taxa de renovação", value: "92%", bg: "rgb(250,250,250)", border: true },
            { label: "NPS médio", value: "74", bg: "rgb(255,255,255)", border: true },
            { label: "Eventos por mês", value: "20+", bg: "rgb(237,237,237)", border: false },
          ].map((m, i) => (
            <Reveal key={m.label} delay={i * 80}>
              <div
                className="p-10 flex flex-col justify-end h-full"
                style={{
                  backgroundColor: m.bg,
                  borderTop: m.border ? "1px solid rgb(241, 241, 241)" : "none",
                }}
              >
                <p
                  className="text-sm leading-5 mb-1"
                  style={{ color: "rgba(28, 26, 23, 0.72)" }}
                >
                  {m.label}
                </p>
                <p
                  className="font-bold leading-none"
                  style={{
                    fontFamily: "var(--font-display)",
                    fontSize: "40px",
                    letterSpacing: "-1.2px",
                    color: "rgb(28, 26, 23)",
                  }}
                >
                  {m.value}
                </p>
              </div>
            </Reveal>
          ))}
        </div>

      </div>
    </section>
  );
}
