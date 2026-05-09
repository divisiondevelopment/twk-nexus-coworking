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

const footerLinks = {
  Espaços: ["Coworking Aberto", "Sala Privativa", "Escritório Virtual", "Salas de Reunião", "Eventos"],
  Empresa: ["Sobre nós", "Comunidade", "Blog", "Imprensa", "Trabalhe conosco"],
  Suporte: ["Central de ajuda", "Fale conosco", "Termos de uso", "Privacidade"],
};

export default function Footer() {
  return (
    <footer
      style={{ backgroundColor: "#001d3d", padding: "88px 24px 56px" }}
    >
      <div className="max-w-[1300px] mx-auto">
        <div
          className="grid gap-10 mb-16"
          style={{ gridTemplateColumns: "2fr repeat(3, 1fr)" }}
        >
          <div className="flex flex-col gap-4">
            <div className="flex items-center gap-2">
              <span
                className="text-base font-bold tracking-[-0.5px] text-white"
                style={{ fontFamily: "var(--font-display)" }}
              >
                TWK
              </span>
              <span
                className="text-base font-bold tracking-[-0.5px]"
                style={{
                  color: "rgba(255,255,255,0.45)",
                  fontFamily: "var(--font-display)",
                }}
              >
                NEXUS
              </span>
            </div>
            <p
              className="text-sm leading-6 max-w-xs"
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
              className="text-xs not-italic mt-2"
              style={{ color: "rgba(255,255,255,0.45)" }}
            >
              Av. Brigadeiro Faria Lima, 3477
              <br />
              Itaim Bibi, São Paulo — SP
              <br />
              04538-133
            </address>
          </div>

          {Object.entries(footerLinks).map(([section, links]) => (
            <div key={section} className="flex flex-col gap-3">
              <p
                className="text-xs font-medium uppercase tracking-[0.48px] mb-1"
                style={{ color: "rgba(255,255,255,0.45)" }}
              >
                {section}
              </p>
              {links.map((link) => (
                <a
                  key={link}
                  href="#"
                  className="text-sm font-medium transition-opacity duration-150 hover:opacity-70"
                  style={{
                    color: "rgba(255,255,255,0.72)",
                    textDecoration: "none",
                  }}
                >
                  {link}
                </a>
              ))}
            </div>
          ))}
        </div>

        <div
          className="flex items-center justify-between flex-wrap gap-4 pt-8"
          style={{ borderTop: "1px solid rgba(255,255,255,0.12)" }}
        >
          <p
            className="text-xs"
            style={{ color: "rgba(255,255,255,0.45)" }}
          >
            © 2026 TWK Nexus Coworking. Todos os direitos reservados.
          </p>
          <div className="flex items-center gap-4">
            <a
              href="#"
              className="text-xs transition-opacity duration-150 hover:opacity-70"
              style={{
                color: "rgba(255,255,255,0.45)",
                textDecoration: "none",
              }}
            >
              Termos
            </a>
            <a
              href="#"
              className="text-xs transition-opacity duration-150 hover:opacity-70"
              style={{
                color: "rgba(255,255,255,0.45)",
                textDecoration: "none",
              }}
            >
              Privacidade
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
