"use client";

import { useState, useEffect } from "react";

const links = [
  { label: "Espaços", href: "#espacos" },
  { label: "Planos", href: "#planos" },
  { label: "Comunidade", href: "#comunidade" },
  { label: "Blog", href: "#blog" },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <nav
      className="fixed left-0 w-full z-40 flex items-center justify-between px-6 transition-all duration-200"
      style={{
        top: "44px",
        height: "70px",
        backgroundColor: scrolled ? "rgb(250, 250, 250)" : "transparent",
        borderBottom: scrolled ? "1px solid rgb(241, 241, 241)" : "1px solid transparent",
        boxShadow: scrolled ? "0 1px 12px rgba(0,0,0,0.06)" : "none",
      }}
    >
      <a
        href="#"
        className="flex items-center gap-1.5"
        style={{ fontFamily: "var(--font-display)", textDecoration: "none" }}
      >
        <span
          className="text-base font-bold tracking-[-0.5px]"
          style={{ color: "#007CD2" }}
        >
          TWK
        </span>
        <span
          className="text-base font-bold tracking-[-0.5px]"
          style={{ color: "rgb(28, 26, 23)", opacity: 0.45 }}
        >
          NEXUS
        </span>
      </a>

      <div className="hidden md:flex items-center gap-6">
        {links.map((link) => (
          <a
            key={link.href}
            href={link.href}
            className="text-sm leading-5 tracking-[-0.14px] transition-opacity duration-150 hover:opacity-70"
            style={{ color: "rgb(28, 26, 23)", textDecoration: "none" }}
          >
            {link.label}
          </a>
        ))}
      </div>

      <div className="hidden md:flex items-center gap-3">
        <a
          href="#contato"
          className="rounded-full text-sm leading-5 tracking-[-0.14px] transition-opacity duration-200 hover:opacity-85"
          style={{
            backgroundColor: "#007CD2",
            color: "#ffffff",
            padding: "7px 14px",
            textDecoration: "none",
          }}
        >
          Agendar Visita
        </a>
      </div>

      <button
        className="md:hidden flex flex-col gap-1.5 p-2"
        onClick={() => setOpen(!open)}
        aria-label="Menu"
      >
        <span
          className="block w-5 h-0.5 transition-all duration-200"
          style={{
            backgroundColor: "rgb(28, 26, 23)",
            transform: open ? "rotate(45deg) translate(3px, 5px)" : "none",
          }}
        />
        <span
          className="block w-5 h-0.5 transition-all duration-200"
          style={{
            backgroundColor: "rgb(28, 26, 23)",
            opacity: open ? 0 : 1,
          }}
        />
        <span
          className="block w-5 h-0.5 transition-all duration-200"
          style={{
            backgroundColor: "rgb(28, 26, 23)",
            transform: open ? "rotate(-45deg) translate(3px, -5px)" : "none",
          }}
        />
      </button>

      {open && (
        <div
          className="absolute top-full left-0 w-full py-4 px-6 flex flex-col gap-3 md:hidden"
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
              onClick={() => setOpen(false)}
              className="text-sm leading-5 tracking-[-0.14px]"
              style={{ color: "rgb(28, 26, 23)", textDecoration: "none" }}
            >
              {link.label}
            </a>
          ))}
          <a
            href="#contato"
            onClick={() => setOpen(false)}
            className="rounded-full text-sm text-center leading-5 tracking-[-0.14px] mt-2"
            style={{
              backgroundColor: "#007CD2",
              color: "#ffffff",
              padding: "10px 14px",
              textDecoration: "none",
            }}
          >
            Agendar Visita
          </a>
        </div>
      )}
    </nav>
  );
}
