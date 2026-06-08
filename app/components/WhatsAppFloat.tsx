"use client";

import { useState } from "react";
import { usePathname } from "next/navigation";

const HREF =
  "https://wa.me/5551983184368?text=Ol%C3%A1%2C%20vim%20pelo%20site%20e%20quero%20saber%20mais%20sobre%20a%20TWK%20Nexus.";

const WhatsAppIcon = ({ size = 28 }: { size?: number }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="white" aria-hidden="true">
    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51a12.8 12.8 0 0 0-.57-.01c-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 0 1-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 0 1-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 0 1 2.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0 0 12.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 0 0 5.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 0 0-3.48-8.413Z" />
  </svg>
);

export default function WhatsAppFloat() {
  const [open, setOpen] = useState(false);
  const pathname = usePathname();
  if (pathname === "/tree") return null;

  return (
    <div
      style={{
        position: "fixed",
        bottom: "max(28px, calc(env(safe-area-inset-bottom) + 16px))",
        right: 28,
        zIndex: 9999,
        display: "flex",
        flexDirection: "column",
        alignItems: "flex-end",
      }}
    >
      {/* Chat card */}
      <div
        style={{
          marginBottom: 16,
          width: 300,
          borderRadius: 16,
          overflow: "hidden",
          backgroundColor: "#1a1a1a",
          boxShadow: "0 8px 40px rgba(0,0,0,0.45), 0 2px 12px rgba(0,0,0,0.3)",
          transformOrigin: "bottom right",
          transition: "opacity 220ms ease, transform 220ms ease",
          opacity: open ? 1 : 0,
          transform: open ? "translateY(0) scale(1)" : "translateY(16px) scale(0.96)",
          pointerEvents: open ? "auto" : "none",
        }}
        aria-hidden={!open}
      >
        {/* Header */}
        <div
          style={{
            backgroundColor: "#25D366",
            padding: "14px 16px",
            display: "flex",
            alignItems: "center",
            gap: 12,
          }}
        >
          <div
            style={{
              width: 40,
              height: 40,
              borderRadius: "50%",
              backgroundColor: "rgba(255,255,255,0.2)",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              flexShrink: 0,
            }}
          >
            <WhatsAppIcon size={22} />
          </div>

          <div style={{ flex: 1, minWidth: 0 }}>
            <p style={{ margin: 0, color: "#fff", fontWeight: 600, fontSize: 15, lineHeight: 1.2 }}>
              TWK Nexus
            </p>
            <p style={{ margin: 0, color: "rgba(255,255,255,0.85)", fontSize: 12, marginTop: 2, display: "flex", alignItems: "center", gap: 5 }}>
              <span
                style={{
                  display: "inline-block",
                  width: 7,
                  height: 7,
                  borderRadius: "50%",
                  backgroundColor: "#fff",
                  flexShrink: 0,
                }}
              />
              Online agora
            </p>
          </div>

          <button
            onClick={() => setOpen(false)}
            aria-label="Fechar chat"
            style={{
              background: "none",
              border: "none",
              cursor: "pointer",
              color: "rgba(255,255,255,0.85)",
              padding: 4,
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              borderRadius: 6,
              flexShrink: 0,
            }}
          >
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round">
              <line x1="18" y1="6" x2="6" y2="18" />
              <line x1="6" y1="6" x2="18" y2="18" />
            </svg>
          </button>
        </div>

        {/* Body */}
        <div style={{ padding: "20px 16px 16px" }}>
          <div
            style={{
              backgroundColor: "#2a2a2a",
              borderRadius: 12,
              borderTopLeftRadius: 4,
              padding: "12px 14px",
              marginBottom: 20,
            }}
          >
            <p style={{ margin: 0, color: "#f0f0f0", fontSize: 14, lineHeight: 1.5 }}>
              Olá! Qual a sua necessidade hoje?
            </p>
            <p style={{ margin: "8px 0 0", color: "rgba(255,255,255,0.45)", fontSize: 12, lineHeight: 1.4 }}>
              Normalmente respondemos em alguns minutos...
            </p>
          </div>

          <a
            href={HREF}
            target="_blank"
            rel="noopener noreferrer"
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              gap: 8,
              width: "100%",
              padding: "11px 0",
              borderRadius: 10,
              backgroundColor: "#25D366",
              color: "#fff",
              fontWeight: 600,
              fontSize: 15,
              textDecoration: "none",
              boxSizing: "border-box",
              transition: "background-color 150ms ease",
            }}
            onMouseEnter={(e) => (e.currentTarget.style.backgroundColor = "#1ebe5d")}
            onMouseLeave={(e) => (e.currentTarget.style.backgroundColor = "#25D366")}
          >
            <WhatsAppIcon size={18} />
            Fale Conosco
          </a>

          <p style={{ margin: "10px 0 0", color: "rgba(255,255,255,0.35)", fontSize: 11, textAlign: "center" }}>
            Você será redirecionado para o WhatsApp
          </p>
        </div>
      </div>

      {/* Floating button */}
      <div style={{ position: "relative", display: "flex", alignItems: "center", justifyContent: "center" }}>
        {!open && (
          <span
            className="animate-ping"
            style={{
              position: "absolute",
              inset: 0,
              borderRadius: "50%",
              backgroundColor: "#25D366",
              opacity: 0.3,
            }}
          />
        )}

        <button
          onClick={() => setOpen((v) => !v)}
          aria-label={open ? "Fechar chat do WhatsApp" : "Abrir chat do WhatsApp"}
          className="transition-transform duration-200 hover:scale-110"
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            width: 56,
            height: 56,
            borderRadius: "50%",
            backgroundColor: "#25D366",
            boxShadow: "0 4px 16px rgba(37,211,102,0.40), 0 2px 6px rgba(0,0,0,0.18)",
            border: "none",
            cursor: "pointer",
            position: "relative",
            transition: "transform 200ms ease",
          }}
        >
          {open ? (
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2.5" strokeLinecap="round">
              <line x1="18" y1="6" x2="6" y2="18" />
              <line x1="6" y1="6" x2="18" y2="18" />
            </svg>
          ) : (
            <WhatsAppIcon size={28} />
          )}
        </button>
      </div>
    </div>
  );
}
