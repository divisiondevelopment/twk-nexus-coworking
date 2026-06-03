"use client";

import { useState, useEffect, useRef } from "react";
import { ChevronDown } from "lucide-react";
import Image from "next/image";

const spacesSubmenu = [
  { label: "Salas de Reunião", href: "#salas-de-reuniao" },
  { label: "Auditório", href: "#auditorio" },
  { label: "Cozinha Gourmet", href: "#cozinha-gourmet" },
];

const links = [
  { label: "Home", href: "#" },
  { label: "Espaços", href: "#espacos", hasDropdown: true },
  { label: "História", href: "#historia" },
  { label: "Cowork", href: "#cowork" },
  { label: "Eventos e Networking", href: "#eventos" },
  { label: "Contato", href: "#contato" },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const [mobileSpacesOpen, setMobileSpacesOpen] = useState(false);
  const hoverTimeout = useRef<ReturnType<typeof setTimeout> | null>(null);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  function openDropdown() {
    if (hoverTimeout.current) clearTimeout(hoverTimeout.current);
    setDropdownOpen(true);
  }

  function closeDropdown() {
    hoverTimeout.current = setTimeout(() => setDropdownOpen(false), 80);
  }

  function closeMobile() {
    setOpen(false);
    setMobileSpacesOpen(false);
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
          style={{ height: 36, width: "auto" }}
        />
      </a>

      {/* Desktop nav */}
      <div className="hidden lg:flex items-center gap-5">
        {links.map((link) =>
          link.hasDropdown ? (
            <div
              key={link.href}
              className="relative"
              onMouseEnter={openDropdown}
              onMouseLeave={closeDropdown}
            >
              <a
                href={link.href}
                className="flex items-center gap-1 text-sm leading-5 tracking-[-0.14px] transition-opacity duration-150 hover:opacity-70"
                style={{ color: "rgb(28, 26, 23)", textDecoration: "none" }}
              >
                {link.label}
                <ChevronDown
                  size={13}
                  strokeWidth={2}
                  style={{
                    transition: "transform 200ms ease",
                    transform: dropdownOpen ? "rotate(180deg)" : "rotate(0deg)",
                  }}
                />
              </a>

              {/* Dropdown panel */}
              <div
                className="absolute left-1/2"
                style={{
                  top: "calc(100% + 4px)",
                  transform: `translateX(-50%) translateY(${dropdownOpen ? "0px" : "-4px"})`,
                  opacity: dropdownOpen ? 1 : 0,
                  pointerEvents: dropdownOpen ? "auto" : "none",
                  transition: "opacity 160ms ease, transform 160ms ease",
                }}
                onMouseEnter={openDropdown}
                onMouseLeave={closeDropdown}
              >
                <div
                  className="flex flex-col"
                  style={{
                    backgroundColor: "rgb(250, 250, 250)",
                    border: "1px solid rgb(230, 230, 230)",
                    borderRadius: "12px",
                    boxShadow: "0 8px 24px rgba(0,0,0,0.09)",
                    padding: "6px",
                    minWidth: "196px",
                  }}
                >
                  {spacesSubmenu.map((item) => (
                    <a
                      key={item.href}
                      href={item.href}
                      className="text-sm leading-5 tracking-[-0.14px] rounded-lg transition-colors duration-120"
                      style={{
                        color: "rgb(28, 26, 23)",
                        textDecoration: "none",
                        padding: "9px 13px",
                        display: "block",
                      }}
                      onMouseEnter={(e) =>
                        (e.currentTarget.style.backgroundColor =
                          "rgb(241, 241, 241)")
                      }
                      onMouseLeave={(e) =>
                        (e.currentTarget.style.backgroundColor = "transparent")
                      }
                    >
                      {item.label}
                    </a>
                  ))}
                </div>
              </div>
            </div>
          ) : (
            <a
              key={link.href}
              href={link.href}
              className="text-sm leading-5 tracking-[-0.14px] transition-opacity duration-150 hover:opacity-70 whitespace-nowrap"
              style={{ color: "rgb(28, 26, 23)", textDecoration: "none" }}
            >
              {link.label}
            </a>
          )
        )}
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
        className="lg:hidden flex flex-col gap-1.5 p-2"
        onClick={() => setOpen(!open)}
        aria-label={open ? "Fechar menu" : "Abrir menu"}
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
          {links.map((link) =>
            link.hasDropdown ? (
              <div key={link.href}>
                <button
                  onClick={() => setMobileSpacesOpen(!mobileSpacesOpen)}
                  className="w-full flex items-center justify-between text-base leading-5 tracking-[-0.14px]"
                  style={{
                    color: "rgb(28, 26, 23)",
                    background: "none",
                    border: "none",
                    cursor: "pointer",
                    padding: "12px 0",
                    textAlign: "left",
                  }}
                >
                  {link.label}
                  <ChevronDown
                    size={14}
                    strokeWidth={2}
                    style={{
                      transition: "transform 220ms ease",
                      transform: mobileSpacesOpen
                        ? "rotate(180deg)"
                        : "rotate(0deg)",
                      color: "rgba(28,26,23,0.5)",
                    }}
                  />
                </button>

                {/* Mobile submenu — max-height accordion */}
                <div
                  style={{
                    overflow: "hidden",
                    maxHeight: mobileSpacesOpen ? "180px" : "0",
                    transition: "max-height 240ms ease",
                  }}
                >
                  <div
                    className="flex flex-col pb-2 pl-3"
                    style={{
                      borderLeft: "2px solid rgba(0,124,210,0.18)",
                      marginLeft: "2px",
                    }}
                  >
                    {spacesSubmenu.map((item) => (
                      <a
                        key={item.href}
                        href={item.href}
                        onClick={closeMobile}
                        className="text-base leading-5 tracking-[-0.14px]"
                        style={{
                          color: "rgba(28, 26, 23, 0.72)",
                          textDecoration: "none",
                          display: "block",
                          padding: "9px 10px",
                        }}
                      >
                        {item.label}
                      </a>
                    ))}
                  </div>
                </div>
              </div>
            ) : (
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
            )
          )}

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
