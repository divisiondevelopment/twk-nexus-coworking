import Image from "next/image";

const LinkedInIcon = () => (
  <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor">
    <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
    <rect x="2" y="9" width="4" height="12" />
    <circle cx="4" cy="4" r="2" />
  </svg>
);

const InstagramIcon = () => (
  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round">
    <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
    <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
    <line x1="17.5" y1="6.5" x2="17.51" y2="6.5" />
  </svg>
);

const YouTubeIcon = () => (
  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round">
    <path d="M22.54 6.42a2.78 2.78 0 0 0-1.95-1.96C18.88 4 12 4 12 4s-6.88 0-8.59.46a2.78 2.78 0 0 0-1.95 1.96A29 29 0 0 0 1 12a29 29 0 0 0 .46 5.57A2.78 2.78 0 0 0 3.41 19.6C5.12 20 12 20 12 20s6.88 0 8.59-.46a2.78 2.78 0 0 0 1.95-1.95A29 29 0 0 0 23 12a29 29 0 0 0-.46-5.58z" />
    <polygon points="9.75 15.02 15.5 12 9.75 8.98 9.75 15.02" />
  </svg>
);

const socialLinks = [
  { icon: LinkedInIcon, href: "#", label: "LinkedIn" },
  { icon: InstagramIcon, href: "#", label: "Instagram" },
  { icon: YouTubeIcon, href: "#", label: "YouTube" },
];

const footerLinks: Record<string, { label: string; href?: string }[]> = {
  Espaços: [
    { label: "Salas de Reunião" },
    { label: "Auditório" },
    { label: "Cozinha para treinamentos de gastronomia" },
    { label: "Espaços rotativos" },
    { label: "Espaços compartilhados" },
    { label: "Mesa fixa" },
    { label: "Salas privativas" },
    { label: "Espaço para eventos" },
    { label: "Cozinha para refeições e convivência" },
  ],
  Empresa: [
    { label: "Sobre nós", href: "#historia" },
    { label: "História",  href: "#historia" },
    { label: "Eventos",   href: "#eventos"  },
  ],
  Contato: [
    { label: "(51) 9 8318-4368",        href: "https://wa.me/5551983184368" },
    { label: "twknexus@gmail.com", href: "mailto:twknexus@gmail.com" },
    { label: "Garibaldi, 240 – Sala 305\nCentro – Esteio/RS", href: "#contato" },
  ],
};

export default function Footer() {
  return (
    <footer
      className="px-6 pt-12 pb-10 md:pt-[88px] md:pb-14"
      style={{ backgroundColor: "#001d3d" }}
    >
      <div className="max-w-[1300px] mx-auto">
        <div
          className="grid gap-8 md:gap-10 mb-10 md:mb-16 grid-cols-1 sm:grid-cols-[repeat(2,minmax(220px,1fr))] lg:grid-cols-[repeat(4,minmax(200px,1fr))]"
        >
          <div className="flex flex-col gap-4">
            <Image
              src="/logo-twk-nexus.png"
              alt="TWK Nexus"
              width={1024}
              height={487}
              style={{ height: 32, width: "auto", alignSelf: "flex-start" }}
            />
            <p
              className="text-base md:text-sm leading-6 max-w-xs"
              style={{ color: "rgba(255,255,255,0.56)" }}
            >
              Um lugar onde trabalhar é bom. De verdade.
            </p>
            <div className="flex gap-3 mt-2">
              {socialLinks.map(({ icon: Icon, href, label }) => (
                <a
                  key={label}
                  href={href}
                  aria-label={label}
                  className="w-8 h-8 rounded-full flex items-center justify-center transition-opacity duration-150 hover:opacity-70"
                  style={{
                    backgroundColor: "rgba(255,255,255,0.12)",
                    color: "rgba(255,255,255,0.72)",
                    textDecoration: "none",
                  }}
                >
                  <Icon />
                </a>
              ))}
            </div>
            <address
              className="text-sm md:text-xs not-italic mt-2"
              style={{ color: "rgba(255,255,255,0.45)" }}
            >
              Garibaldi, 240 – Sala 305
              <br />
              Centro – Esteio/RS
            </address>
          </div>

          {Object.entries(footerLinks).map(([section, links]) => (
            <div key={section} className="flex flex-col gap-3">
              <p
                className="text-sm md:text-xs font-medium uppercase tracking-[0.48px] mb-1"
                style={{ color: "rgba(255,255,255,0.45)" }}
              >
                {section}
              </p>
              {links.map((link) =>
                link.href ? (
                  <a
                    key={link.label}
                    href={link.href}
                    className="text-base md:text-sm font-medium transition-opacity duration-150 hover:opacity-70"
                    style={{
                      color: "rgba(255,255,255,0.72)",
                      textDecoration: "none",
                      whiteSpace: "pre-line",
                    }}
                  >
                    {link.label}
                  </a>
                ) : (
                  <span
                    key={link.label}
                    className="text-base md:text-sm font-medium"
                    style={{
                      color: "rgba(255,255,255,0.72)",
                      whiteSpace: "pre-line",
                      overflowWrap: "break-word",
                      wordBreak: "break-word",
                    }}
                  >
                    {link.label}
                  </span>
                )
              )}
            </div>
          ))}
        </div>

        <div
          className="flex items-center justify-between flex-wrap gap-4 pt-8"
          style={{ borderTop: "1px solid rgba(255,255,255,0.12)" }}
        >
          <p
            className="text-sm md:text-xs"
            style={{ color: "rgba(255,255,255,0.45)" }}
          >
            © 2026 TWK Nexus Coworking. Todos os direitos reservados.
          </p>
          <div className="flex items-center gap-4">
            <a
              href="#"
              className="text-sm md:text-xs transition-opacity duration-150 hover:opacity-70"
              style={{
                color: "rgba(255,255,255,0.45)",
                textDecoration: "none",
              }}
            >
              Termos
            </a>
            <a
              href="#"
              className="text-sm md:text-xs transition-opacity duration-150 hover:opacity-70"
              style={{
                color: "rgba(255,255,255,0.45)",
                textDecoration: "none",
              }}
            >
              Privacidade
            </a>
          </div>
        </div>

        <p className="text-xs text-center mt-6" style={{ color: "rgba(255,255,255,0.3)" }}>
          Desenvolvido por{" "}
          <a
            href="https://divisiondev.com.br"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:underline"
            style={{ color: "rgba(255,255,255,0.3)", textDecoration: "none" }}
          >
            Division Development
          </a>
        </p>
      </div>
    </footer>
  );
}
