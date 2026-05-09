import Reveal from "./Reveal";

export default function CTASection() {
  return (
    <section
      id="contato"
      style={{ padding: "120px 24px", backgroundColor: "rgb(250, 250, 250)" }}
    >
      <div className="max-w-[1300px] mx-auto">
        <Reveal>
          <div
            className="rounded-2xl p-12 sm:p-20 flex flex-col items-center text-center gap-7"
            style={{
              backgroundImage:
                "radial-gradient(81% 66% at 1.8% 1.1%, #0d4a8f 0%, #001d3d 100%)",
            }}
          >
            <span
              className="text-xs font-medium uppercase tracking-[0.48px]"
              style={{ color: "rgba(255,255,255,0.56)" }}
            >
              Vamos começar?
            </span>

            <h2
              className="font-medium tracking-[-1.28px] max-w-xl"
              style={{
                fontFamily: "var(--font-display)",
                fontSize: "clamp(28px, 5vw, 48px)",
                lineHeight: "1.1",
                color: "#ffffff",
              }}
            >
              Venha tomar um café e conhecer o espaço
            </h2>

            <p
              className="text-base leading-7 max-w-md"
              style={{ color: "rgba(255,255,255,0.72)" }}
            >
              Sem burocracia, sem compromisso. Apareça aqui, a gente mostra tudo pessoalmente — o café é por nossa conta.
            </p>

            <div className="flex gap-3 flex-wrap justify-center mt-2">
              <a
                href="https://wa.me/5511999999999"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center rounded-full text-sm font-medium leading-5 tracking-[-0.14px] transition-all duration-200 hover:bg-[rgb(237,237,237)]"
                style={{
                  backgroundColor: "rgb(255, 255, 255)",
                  color: "rgb(28, 26, 23)",
                  padding: "12px 24px",
                  textDecoration: "none",
                }}
              >
                Agendar pelo WhatsApp
              </a>
              <a
                href="mailto:contato@twknexus.com.br"
                className="inline-flex items-center rounded-full text-sm font-medium leading-5 tracking-[-0.14px] transition-opacity duration-200 hover:opacity-70"
                style={{
                  color: "rgba(255,255,255,0.72)",
                  padding: "12px 24px",
                  textDecoration: "none",
                  border: "1px solid rgba(255,255,255,0.24)",
                }}
              >
                Enviar e-mail
              </a>
            </div>

            <div className="flex items-center gap-8 mt-2 flex-wrap justify-center">
              {["Visita gratuita", "Sem burocracia", "Cancele quando quiser"].map(
                (item) => (
                  <div key={item} className="flex items-center gap-2">
                    <div
                      className="w-1.5 h-1.5 rounded-full"
                      style={{ backgroundColor: "rgb(16, 185, 129)" }}
                    />
                    <span
                      className="text-sm"
                      style={{ color: "rgba(255,255,255,0.72)" }}
                    >
                      {item}
                    </span>
                  </div>
                )
              )}
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
