import Image from "next/image";
import { Globe, CalendarCheck, Star, MapPin, Building2, Layers } from "lucide-react";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "TWK Nexus — Links",
  description: "Coworking, networking e ecossistema de negócios em Esteio/RS. Conectando empresas, profissionais e oportunidades de negócios.",
};

function InstagramIcon({ size, color }: { size: number; color: string }) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      stroke={color}
      strokeWidth={1.75}
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
      style={{ flexShrink: 0 }}
    >
      <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
      <circle cx="12" cy="12" r="4" />
      <circle cx="17.5" cy="6.5" r="0.5" fill={color} stroke="none" />
    </svg>
  );
}

type LinkItem =
  | { kind: "lucide"; Icon: React.ComponentType<{ size: number; strokeWidth: number; style: React.CSSProperties }>; label: string; subtitle: string; href: string }
  | { kind: "custom"; Icon: React.ComponentType<{ size: number; color: string }>; label: string; subtitle: string; href: string };

const links: LinkItem[] = [
  {
    kind: "lucide",
    Icon: Building2,
    label: "Conheça nossos espaços",
    subtitle: "Salas, auditório e ambientes colaborativos",
    href: "https://www.twknexus.com.br/#espacos",
  },
  {
    kind: "lucide",
    Icon: CalendarCheck,
    label: "Agendar visita",
    subtitle: "Via WhatsApp, sem burocracia",
    href: "https://wa.me/5551983184368?text=Ol%C3%A1%2C%20gostaria%20de%20agendar%20uma%20visita%20%C3%A0%20TWK%20Nexus.",
  },
  {
    kind: "lucide",
    Icon: Globe,
    label: "Acesse nosso site",
    subtitle: "twknexus.com.br",
    href: "https://www.twknexus.com.br/",
  },
  {
    kind: "custom",
    Icon: InstagramIcon,
    label: "Instagram @twknexus",
    subtitle: "@twknexus",
    href: "https://instagram.com/twknexus",
  },
  {
    kind: "lucide",
    Icon: Layers,
    label: "Conheça nossos espaços, eventos e conexões",
    subtitle: "twknexus.com.br",
    href: "https://www.twknexus.com.br/",
  },
  {
    kind: "lucide",
    Icon: Star,
    label: "Avalie-nos no Google",
    subtitle: "Sua opinião faz a diferença",
    href: "https://share.google/cb9oP63LxfPJEhq1C",
  },
  {
    kind: "lucide",
    Icon: MapPin,
    label: "Como chegar — Rua Garibaldi 240, sala 305, Centro / Esteio RS",
    subtitle: "Ver no Google Maps",
    href: "https://maps.google.com/?q=R.+Garibaldi,+240,+Sala+305,+Centro,+Esteio,+RS",
  },
];

export default function TreePage() {
  return (
    <main
      className="flex min-h-screen items-center justify-center px-5 py-20"
      style={{ backgroundColor: "rgb(250, 250, 250)" }}
    >
      <style>{`
        .tree-link { transition: background-color 0.2s, box-shadow 0.2s; }
        .tree-link:hover { background-color: #0070be; box-shadow: 0 4px 20px rgba(0,124,210,0.35); }
      `}</style>

      <div className="w-full max-w-sm flex flex-col items-center gap-10">

        {/* Avatar */}
        <div
          className="flex items-center justify-center rounded-full overflow-hidden"
          style={{
            width: 84,
            height: 84,
            padding: 14,
            backgroundColor: "rgb(255,255,255)",
            border: "2px solid #007CD2",
            boxShadow: "0 0 0 6px rgba(0,124,210,0.10)",
          }}
        >
          <Image
            src="/logo-twk-nexus.png"
            alt="TWK Nexus"
            width={80}
            height={38}
            priority
            style={{ width: "100%", height: "auto", objectFit: "contain" }}
          />
        </div>

        {/* Identity */}
        <div className="flex flex-col items-center gap-2 text-center">
          <h1
            className="text-xl font-bold tracking-[-0.4px]"
            style={{ fontFamily: "var(--font-display)", color: "rgb(28, 26, 23)" }}
          >
            TWK Nexus
          </h1>
          <p
            className="text-sm leading-5"
            style={{ color: "rgba(28,26,23,0.56)" }}
          >
            Coworking, networking e ecossistema de negócios em Esteio/RS. Conectando empresas, profissionais e oportunidades de negócios.
          </p>
        </div>

        {/* Links */}
        <div className="w-full flex flex-col gap-4">
          {links.map((link) => (
            <a
              key={link.href + link.label}
              href={link.href}
              target="_blank"
              rel="noopener noreferrer"
              className="tree-link flex items-center gap-4 w-full rounded-xl px-5 py-4 tracking-[-0.14px]"
              style={{
                backgroundColor: "#007CD2",
                color: "#ffffff",
                textDecoration: "none",
                boxShadow: "0 2px 12px rgba(0,124,210,0.25)",
              }}
            >
              <div style={{ flexShrink: 0 }}>
                {link.kind === "lucide" ? (
                  <link.Icon
                    size={18}
                    strokeWidth={1.75}
                    style={{ color: "rgba(255,255,255,0.80)" }}
                  />
                ) : (
                  <link.Icon size={18} color="rgba(255,255,255,0.80)" />
                )}
              </div>
              <div className="flex flex-col gap-0.5">
                <span className="text-sm font-semibold leading-5">{link.label}</span>
                <span className="text-xs leading-4" style={{ color: "rgba(255,255,255,0.65)" }}>
                  {link.subtitle}
                </span>
              </div>
            </a>
          ))}
        </div>

        {/* Fale conosco */}
        <div className="flex flex-col items-center gap-1 text-center">
          <p className="text-xs font-semibold" style={{ color: "rgba(28,26,23,0.50)" }}>
            Fale conosco
          </p>
          <a
            href="https://wa.me/5551983184368"
            target="_blank"
            rel="noopener noreferrer"
            className="text-sm font-medium"
            style={{ color: "#007CD2", textDecoration: "none" }}
          >
            (51) 98318-4368
          </a>
        </div>

        {/* Footer */}
        <p
          className="text-xs mt-1"
          style={{ color: "rgba(28,26,23,0.35)" }}
        >
          © TWK Nexus
        </p>
      </div>
    </main>
  );
}
