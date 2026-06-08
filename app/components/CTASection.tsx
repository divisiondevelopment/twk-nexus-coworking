import Reveal from "./Reveal";

export default function CTASection() {
  return (
    <section
      id="contato"
      className="px-6 py-16 md:py-20 lg:py-[120px]"
      style={{ backgroundColor: "rgb(250, 250, 250)" }}
    >
      <div className="max-w-[1300px] mx-auto">
        <Reveal>
          <div
            className="rounded-2xl p-7 sm:p-12 lg:p-20 flex flex-col items-center text-center gap-5 sm:gap-7"
            style={{
              backgroundImage:
                "radial-gradient(81% 66% at 1.8% 1.1%, #0d4a8f 0%, #001d3d 100%)",
            }}
          >
            <span
              className="text-sm md:text-xs font-medium uppercase tracking-[0.48px]"
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

            <div className="flex gap-3 flex-wrap justify-center mt-1">
              <a
                href="https://wa.me/5551983184368"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center rounded-full text-base md:text-sm font-medium leading-5 tracking-[-0.14px] transition-all duration-200 hover:bg-[rgb(237,237,237)]"
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
                className="inline-flex items-center rounded-full text-base md:text-sm font-medium leading-5 tracking-[-0.14px] transition-opacity duration-200 hover:opacity-70"
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
          </div>
        </Reveal>

        <div className="mt-8 grid grid-cols-1 md:grid-cols-2 gap-8 items-start">
          <div className="flex flex-col gap-4">
            <a
              href="https://wa.me/5551983184368"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 text-base md:text-sm transition-opacity duration-150 hover:opacity-70"
              style={{ color: "rgb(80, 80, 80)", textDecoration: "none" }}
            >
              <svg width="15" height="15" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51a12.8 12.8 0 0 0-.57-.01c-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 0 1-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 0 1-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 0 1 2.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0 0 12.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 0 0 5.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 0 0-3.48-8.413Z" />
              </svg>
              (51) 9 8318-4368
            </a>
            <a
              href="mailto:contato@twknexus.com.br"
              className="inline-flex items-center gap-2 text-base md:text-sm transition-opacity duration-150 hover:opacity-70"
              style={{ color: "rgb(80, 80, 80)", textDecoration: "none" }}
            >
              <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                <rect x="2" y="4" width="20" height="16" rx="2" />
                <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" />
              </svg>
              contato@twknexus.com.br
            </a>
            <span
              className="inline-flex items-center gap-2 text-base md:text-sm"
              style={{ color: "rgb(80, 80, 80)" }}
            >
              <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                <path d="M20 10c0 6-8 12-8 12S4 16 4 10a8 8 0 0 1 16 0Z" />
                <circle cx="12" cy="10" r="3" />
              </svg>
              Garibaldi, 240 – Sala 305, Centro – Esteio/RS
            </span>
          </div>

          <div className="flex flex-col gap-3">
            <span
              className="text-xs font-medium uppercase tracking-[0.48px]"
              style={{ color: "rgb(80, 80, 80)" }}
            >
              Como chegar
            </span>
            <div style={{ borderRadius: "12px", overflow: "hidden" }}>
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3460.5220139066864!2d-51.17587682401353!3d-29.849215822251388!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x95196f66c73943e1%3A0x55d45c5d0c7ba164!2sR.%20Garibaldi%2C%20240%20-%20Centro%2C%20Esteio%20-%20RS%2C%2093260-060!5e0!3m2!1spt-BR!2sbr!4v1780587496343!5m2!1spt-BR!2sbr"
                width="100%"
                height="200"
                style={{ border: 0, display: "block" }}
                loading="lazy"
                allowFullScreen
                referrerPolicy="no-referrer-when-downgrade"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
