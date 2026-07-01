"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import { Menu, X } from "lucide-react";

const links = [
  { label: "Home", href: "#" },
  { label: "Espaços", href: "#espacos" },
  { label: "História", href: "#historia" },
  { label: "Coworking", href: "#cowork" },
  { label: "Eventos e Networking", href: "#eventos" },
  { label: "Contato", href: "#contato" },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  function closeMobile() {
    setOpen(false);
  }

  return (
    <nav
      className="fixed left-0 w-full z-40 flex items-center justify-between px-6 transition-all duration-200"
      style={{
        top: "44px",
        height: "70px",
        backgroundColor: scrolled ? "rgb(250, 250, 250)" : "transparent",
        borderBottom: scrolled
          ? "1px solid rgb(241, 241, 241)"
          : "1px solid transparent",
        boxShadow: scrolled ? "0 1px 12px rgba(0,0,0,0.06)" : "none",
      }}
    >
      {/* Logo */}
      <a href="#" className="shrink-0" style={{ textDecoration: "none" }}>
        <Image
          src="/logo-twk-nexus.png"
          alt="TWK Nexus"
          width={1024}
          height={487}
          priority
          style={{
            height: 36,
            width: "auto",
            filter: scrolled ? "none" : "brightness(0) invert(1)",
            transition: "filter 0.2s",
          }}
        />
      </a>

      {/* Desktop nav */}
      <div className="hidden lg:flex items-center gap-5">
        {links.map((link) => (
          <a
            key={link.href}
            href={link.href}
            className="text-sm leading-5 tracking-[-0.14px] transition-opacity duration-150 hover:opacity-70 whitespace-nowrap"
            style={{
              color: scrolled ? "rgb(28, 26, 23)" : "#ffffff",
              textDecoration: "none",
              transition: "color 0.2s",
            }}
          >
            {link.label}
          </a>
        ))}
      </div>

      {/* Desktop CTA */}
      <div className="hidden lg:flex items-center">
        <a
          href="#contato"
          className="rounded-full text-sm leading-5 tracking-[-0.14px] transition-opacity duration-200 hover:opacity-85"
          style={{
            backgroundColor: "#007CD2",
            color: "#ffffff",
            padding: "7px 16px",
            textDecoration: "none",
          }}
        >
          Agendar Visita
        </a>
      </div>

      {/* Hamburger (mobile) */}
      <button
        className="lg:hidden flex items-center justify-center p-2"
        onClick={() => setOpen(!open)}
        aria-label={open ? "Fechar menu" : "Abrir menu"}
      >
        {open
          ? <X size={22} strokeWidth={2} style={{ color: scrolled ? "rgb(28, 26, 23)" : "#ffffff" }} />
          : <Menu size={22} strokeWidth={2} style={{ color: scrolled ? "rgb(28, 26, 23)" : "#ffffff" }} />
        }
      </button>

      {/* Mobile drawer */}
      {open && (
        <div
          className="absolute top-full left-0 w-full py-3 px-6 flex flex-col lg:hidden"
          style={{
            backgroundColor: "rgb(250, 250, 250)",
            borderBottom: "1px solid rgb(241, 241, 241)",
            boxShadow: "0 4px 12px rgba(0,0,0,0.06)",
          }}
        >
          {links.map((link) => (
            <a
              key={link.href}
              href={link.href}
              onClick={closeMobile}
              className="text-base leading-5 tracking-[-0.14px]"
              style={{
                color: "rgb(28, 26, 23)",
                textDecoration: "none",
                display: "block",
                padding: "12px 0",
              }}
            >
              {link.label}
            </a>
          ))}

          <a
            href="#contato"
            onClick={closeMobile}
            className="rounded-full text-base text-center leading-5 tracking-[-0.14px] mt-3"
            style={{
              backgroundColor: "#007CD2",
              color: "#ffffff",
              padding: "11px 16px",
              textDecoration: "none",
              display: "block",
            }}
          >
            Agendar Visita
          </a>
        </div>
      )}
    </nav>
  );
}
