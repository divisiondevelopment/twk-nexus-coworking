import Reveal from "./Reveal";

const plans = [
  { name: "Coworking Aberto",    sub: "Hot-desk em ambiente colaborativo",    label: "Por pessoa",   price: "R$ 800",   period: "/mês"  },
  { name: "Escritório Virtual",   sub: "Endereço comercial premium",           label: "Por pessoa",   price: "R$ 390",   period: "/mês"  },
  { name: "Sala de Reunião",      sub: "Reserva por hora ou pacotes",          label: "Por hora",     price: "R$ 80",    period: "/hora" },
  { name: "Sala Privativa",       sub: "Exclusiva para a sua equipe",          label: "Para time",    price: "R$ 2.500", period: "/mês"  },
  { name: "Escritório Dedicado",  sub: "Espaço exclusivo para sua empresa",    label: "Para time",    price: "R$ 5.000", period: "/mês"  },
  { name: "Espaço para Eventos",  sub: "Auditório e espaços de convivência",   label: "Sob consulta", price: "—",        period: ""      },
];

export default function PricingTable() {
  return (
    <section className="px-6 pb-16 md:pb-20 lg:pb-[120px]" style={{ backgroundColor: "rgb(250,250,250)" }}>
      <div className="max-w-[1300px] mx-auto">

        <Reveal>
          <div className="flex flex-col gap-3 mb-12">
            <span
              className="text-xs font-medium uppercase tracking-[0.48px]"
              style={{ color: "rgba(16, 16, 15, 0.88)" }}
            >
              Planos e preços
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
              Transparência
              <br />
              desde o primeiro contato
            </h2>
          </div>
        </Reveal>

        <div>
          {plans.map((plan, i) => (
            <Reveal key={plan.name} delay={i * 50}>
              <div style={{ borderTop: "1px solid rgb(212, 212, 216)" }} />
              <div
                className="flex items-center justify-between gap-6 py-6 transition-colors duration-150 hover:bg-white rounded-xl px-5 -mx-5 group"
              >
                {/* Name + sub */}
                <div className="flex flex-col gap-0.5 min-w-0 flex-1">
                  <p className="text-sm font-semibold" style={{ color: "rgb(28, 26, 23)" }}>
                    {plan.name}
                  </p>
                  <p className="text-xs" style={{ color: "rgba(28, 26, 23, 0.45)" }}>
                    {plan.sub}
                  </p>
                </div>

                {/* Label */}
                <span
                  className="text-xs font-medium px-2.5 py-1 rounded-full whitespace-nowrap hidden sm:inline-flex"
                  style={{
                    backgroundColor: "rgb(241, 241, 241)",
                    color: "rgba(28, 26, 23, 0.56)",
                  }}
                >
                  {plan.label}
                </span>

                {/* Price */}
                <div className="flex items-baseline gap-1 w-28 justify-end">
                  <span
                    className="font-semibold"
                    style={{
                      fontFamily: "var(--font-display)",
                      fontSize: "17px",
                      color: "rgb(28, 26, 23)",
                      letterSpacing: "-0.4px",
                    }}
                  >
                    {plan.price}
                  </span>
                  {plan.period && (
                    <span className="text-xs" style={{ color: "rgba(28, 26, 23, 0.45)" }}>
                      {plan.period}
                    </span>
                  )}
                </div>

                {/* CTA */}
                <a
                  href="#contato"
                  className="rounded-full text-xs font-medium transition-opacity duration-150 hover:opacity-80 whitespace-nowrap hidden sm:inline-flex"
                  style={{
                    backgroundColor: "#007CD2",
                    color: "#ffffff",
                    padding: "8px 16px",
                    textDecoration: "none",
                  }}
                >
                  Consultar
                </a>
              </div>
            </Reveal>
          ))}

          <div style={{ borderTop: "1px solid rgb(212, 212, 216)" }} />
        </div>

      </div>
    </section>
  );
}
