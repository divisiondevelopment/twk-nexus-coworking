"use client";

import { useEffect, useRef, useState, useCallback } from "react";
import Image from "next/image";
import { ChevronLeft, ChevronRight } from "lucide-react";

// ─── Slide data ───────────────────────────────────────────────────────────────

const WA = "5551999999999";
const wa = (msg: string) => `https://wa.me/${WA}?text=${encodeURIComponent(msg)}`;

const slides = [
  {
    tag: "Trabalho em Equipe",
    title: "Sala Energia",
    description:
      "Ambiente dinâmico e estimulante para equipes que precisam de foco e colaboração intensa. Equipada com quadro branco, TV 4K e fibra dedicada.",
    accentColor: "#007CD2",
    imageSrc: "/images/coworking-hero-5.jpg",
    cta: "Reservar agora",
    ctaHref: wa("Olá, quero reservar a Sala Energia na TWK Nexus."),
  },
  {
    tag: "Coworking Aberto",
    title: "Sala Compartilhada",
    description:
      "Estações ergonômicas, climatização precisa e a energia certa para um dia altamente produtivo — rodeado de profissionais que pensam grande.",
    accentColor: "#007CD2",
    imageSrc: "/images/coworking-hero-1.jpg",
    cta: "Conhecer planos",
    ctaHref: wa("Olá, quero conhecer os planos da Sala Compartilhada na TWK Nexus."),
  },
  {
    tag: "Eventos & Treinamentos",
    title: "Auditório",
    description:
      "Espaço para até 80 pessoas com projeção, sonorização profissional e controle de iluminação — ideal para lançamentos, palestras e workshops.",
    accentColor: "#007CD2",
    imageSrc: "/images/coworking-hero-4.jpg",
    cta: "Ver disponibilidade",
    ctaHref: wa("Olá, quero verificar a disponibilidade do Auditório na TWK Nexus."),
  },
  {
    tag: "Gastronomia & Networking",
    title: "Cozinha Gourmet",
    description:
      "Espaço premium para confraternizações, happy hours e eventos corporativos gastronômicos. Cozinha equipada com ilha central e área de convivência.",
    accentColor: "#007CD2",
    imageSrc: "/images/coworking-hero-2.jpg",
    cta: "Agendar evento",
    ctaHref: wa("Olá, quero agendar um evento na Cozinha Gourmet da TWK Nexus."),
  },
] as const;

const AUTOPLAY_MS = 5000;

// ─── Version A (active) — full-viewport image + bottom-left overlay text ─────

export default function HeroCarousel() {
  const [active, setActive] = useState(0);
  const [progress, setProgress] = useState(0);
  const [animKey, setAnimKey] = useState(0);
  const intervalRef = useRef<ReturnType<typeof setInterval> | null>(null);
  const progressRef = useRef<ReturnType<typeof setInterval> | null>(null);

  const goTo = useCallback((index: number) => {
    setActive(index);
    setAnimKey((k) => k + 1);
    setProgress(0);
  }, []);

  const prev = useCallback(() => {
    goTo((active - 1 + slides.length) % slides.length);
  }, [active, goTo]);

  const next = useCallback(() => {
    goTo((active + 1) % slides.length);
  }, [active, goTo]);

  // Autoplay
  useEffect(() => {
    intervalRef.current = setInterval(() => {
      setActive((a) => (a + 1) % slides.length);
      setAnimKey((k) => k + 1);
      setProgress(0);
    }, AUTOPLAY_MS);
    return () => clearInterval(intervalRef.current!);
  }, [active]);

  // Progress bar tick (100 steps over AUTOPLAY_MS)
  useEffect(() => {
    setProgress(0);
    const step = 100 / (AUTOPLAY_MS / 50);
    progressRef.current = setInterval(() => {
      setProgress((p) => Math.min(p + step, 100));
    }, 50);
    return () => clearInterval(progressRef.current!);
  }, [active]);

  const slide = slides[active];

  const touchStartX = useRef<number | null>(null);

  const handleTouchStart = (e: React.TouchEvent) => {
    touchStartX.current = e.touches[0].clientX;
  };

  const handleTouchEnd = (e: React.TouchEvent) => {
    if (touchStartX.current === null) return;
    const delta = touchStartX.current - e.changedTouches[0].clientX;
    if (Math.abs(delta) < 40) return;
    delta > 0 ? next() : prev();
    touchStartX.current = null;
  };

  return (
    <section
      className="relative w-full overflow-hidden"
      style={{ height: "100svh", minHeight: 520 }}
      onTouchStart={handleTouchStart}
      onTouchEnd={handleTouchEnd}
    >
      {/* ── Background images (preloaded, cross-fade) ── */}
      {slides.map((s, i) => (
        <div
          key={s.imageSrc}
          className="absolute inset-0 transition-opacity duration-700 ease-in-out"
          style={{ opacity: i === active ? 1 : 0 }}
        >
          <Image
            src={s.imageSrc}
            alt={s.title}
            fill
            priority={i === 0}
            sizes="100vw"
            style={{ objectFit: "cover", objectPosition: "center" }}
          />
        </div>
      ))}

      {/* ── Gradient overlay — global scrim ── */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            "linear-gradient(to top, rgba(0,0,0,0.82) 0%, rgba(0,0,0,0.30) 45%, rgba(0,0,0,0.08) 100%)",
        }}
      />

      {/* ── Text-area scrim — dense bottom band guarantees legibility ── */}
      <div
        className="absolute left-0 right-0 bottom-0 pointer-events-none"
        style={{
          height: "55%",
          background:
            "linear-gradient(to top, rgba(0,0,0,0.78) 0%, rgba(0,0,0,0.60) 35%, rgba(0,0,0,0) 100%)",
        }}
      />

      {/* ── Bottom-left text block ── */}
      <div className="absolute left-0 right-0 bottom-0 flex flex-col px-6 sm:px-10 lg:px-16 pb-10 sm:pb-12 lg:pb-14">
        {/* Staggered text */}
        <div key={animKey} className="flex flex-col gap-2 sm:gap-3 max-w-2xl">
          {/* Tag */}
          <span
            className="inline-block text-xs font-medium uppercase animate-slide-up self-start"
            style={{
              color: "#ffffff",
              backgroundColor: slide.accentColor,
              padding: "4px 10px",
              borderRadius: 999,
              animationDelay: "0ms",
              fontFamily: "var(--font-body)",
              letterSpacing: "0.8px",
            }}
          >
            {slide.tag}
          </span>

          {/* Title */}
          <h2
            className="animate-slide-up"
            style={{
              fontFamily: "var(--font-display)",
              fontSize: "clamp(30px, 5vw, 66px)",
              fontWeight: 500,
              lineHeight: 1.06,
              letterSpacing: "-0.5px",
              color: "#ffffff",
              margin: 0,
              animationDelay: "80ms",
            }}
          >
            {slide.title}
          </h2>

          {/* Description */}
          <p
            className="animate-slide-up"
            style={{
              color: "rgba(255,255,255,0.72)",
              fontFamily: "var(--font-body)",
              fontSize: "clamp(13px, 1.4vw, 16px)",
              fontWeight: 400,
              lineHeight: 1.72,
              margin: 0,
              maxWidth: 480,
              animationDelay: "160ms",
            }}
          >
            {slide.description}
          </p>

          {/* CTA */}
          <div className="animate-slide-up mt-1 sm:mt-2" style={{ animationDelay: "240ms" }}>
            <a
              href={slide.ctaHref}
              target="_blank"
              rel="noopener noreferrer"
              style={{
                display: "inline-flex",
                alignItems: "center",
                backgroundColor: slide.accentColor,
                color: "#ffffff",
                padding: "11px 24px",
                borderRadius: 999,
                fontFamily: "var(--font-body)",
                fontSize: 14,
                fontWeight: 500,
                letterSpacing: "-0.1px",
                textDecoration: "none",
                transition: "opacity 0.2s",
              }}
              onMouseEnter={(e) => (e.currentTarget.style.opacity = "0.88")}
              onMouseLeave={(e) => (e.currentTarget.style.opacity = "1")}
            >
              {slide.cta}
            </a>
          </div>
        </div>

        {/* Progress bars */}
        <div className="flex gap-2 mt-5 sm:mt-7">
          {slides.map((s, i) => (
            <button
              key={s.imageSrc}
              aria-label={`Ir para ${s.title}`}
              onClick={() => goTo(i)}
              className="h-[3px] flex-1 rounded-full overflow-hidden cursor-pointer"
              style={{ backgroundColor: "rgba(255,255,255,0.25)" }}
            >
              <div
                className="h-full rounded-full transition-none"
                style={{
                  backgroundColor: i === active ? slide.accentColor : "transparent",
                  width: i === active ? `${progress}%` : i < active ? "100%" : "0%",
                  transition: i === active ? "none" : "width 0.3s ease",
                }}
              />
            </button>
          ))}
        </div>
      </div>

      {/* ── Arrow navigation (hidden on mobile — progress bars handle navigation) ── */}
      <button
        onClick={prev}
        aria-label="Slide anterior"
        className="hidden sm:flex absolute left-6 lg:left-10 top-1/2 -translate-y-1/2 items-center justify-center rounded-full transition-all"
        style={{
          width: 44,
          height: 44,
          backgroundColor: "rgba(255,255,255,0.12)",
          border: "1px solid rgba(255,255,255,0.18)",
          backdropFilter: "blur(6px)",
          color: "#ffffff",
          cursor: "pointer",
        }}
        onMouseEnter={(e) =>
          (e.currentTarget.style.backgroundColor = "rgba(255,255,255,0.22)")
        }
        onMouseLeave={(e) =>
          (e.currentTarget.style.backgroundColor = "rgba(255,255,255,0.12)")
        }
      >
        <ChevronLeft size={20} />
      </button>

      <button
        onClick={next}
        aria-label="Próximo slide"
        className="hidden sm:flex absolute right-6 lg:right-10 top-1/2 -translate-y-1/2 items-center justify-center rounded-full transition-all"
        style={{
          width: 44,
          height: 44,
          backgroundColor: "rgba(255,255,255,0.12)",
          border: "1px solid rgba(255,255,255,0.18)",
          backdropFilter: "blur(6px)",
          color: "#ffffff",
          cursor: "pointer",
        }}
        onMouseEnter={(e) =>
          (e.currentTarget.style.backgroundColor = "rgba(255,255,255,0.22)")
        }
        onMouseLeave={(e) =>
          (e.currentTarget.style.backgroundColor = "rgba(255,255,255,0.12)")
        }
      >
        <ChevronRight size={20} />
      </button>

      {/* ── Keyframes injected once ── */}
      <style>{`
        @keyframes slideUp {
          from { opacity: 0; transform: translateY(22px); }
          to   { opacity: 1; transform: translateY(0); }
        }
        .animate-slide-up {
          opacity: 0;
          animation: slideUp 0.55s cubic-bezier(0.22, 1, 0.36, 1) forwards;
        }
      `}</style>
    </section>
  );
}

/*
// ─── Version B (commented) — split layout: text 55% left / image 45% right ──

"use client";

import { useEffect, useRef, useState, useCallback } from "react";
import Image from "next/image";
import { ChevronLeft, ChevronRight } from "lucide-react";

const slides = [
  {
    tag: "Trabalho em Equipe",
    title: "Sala Energia",
    description:
      "Ambiente dinâmico e estimulante para equipes que precisam de foco e colaboração intensa. Equipada com quadro branco, TV 4K e fibra dedicada.",
    accentColor: "#007CD2",
    imageSrc: "/images/coworking-hero-5.jpg",
    cta: "Reservar agora",
  },
  {
    tag: "Coworking Aberto",
    title: "Sala Compartilhada",
    description:
      "Estações ergonômicas, climatização precisa e a energia certa para um dia altamente produtivo — rodeado de profissionais que pensam grande.",
    accentColor: "#007CD2",
    imageSrc: "/images/coworking-hero-1.jpg",
    cta: "Conhecer planos",
  },
  {
    tag: "Eventos & Treinamentos",
    title: "Auditório",
    description:
      "Espaço para até 80 pessoas com projeção, sonorização profissional e controle de iluminação — ideal para lançamentos, palestras e workshops.",
    accentColor: "#007CD2",
    imageSrc: "/images/coworking-hero-4.jpg",
    cta: "Ver disponibilidade",
  },
  {
    tag: "Gastronomia & Networking",
    title: "Cozinha Gourmet",
    description:
      "Espaço premium para confraternizações, happy hours e eventos corporativos gastronômicos. Cozinha equipada com ilha central e área de convivência.",
    accentColor: "#007CD2",
    imageSrc: "/images/coworking-hero-2.jpg",
    cta: "Agendar evento",
  },
];

const AUTOPLAY_MS = 5000;

export default function HeroCarousel() {
  const [active, setActive] = useState(0);
  const [progress, setProgress] = useState(0);
  const [animKey, setAnimKey] = useState(0);
  const intervalRef = useRef<ReturnType<typeof setInterval> | null>(null);
  const progressRef = useRef<ReturnType<typeof setInterval> | null>(null);

  const goTo = useCallback((index: number) => {
    setActive(index);
    setAnimKey((k) => k + 1);
    setProgress(0);
  }, []);

  const prev = () => goTo((active - 1 + slides.length) % slides.length);
  const next = () => goTo((active + 1) % slides.length);

  useEffect(() => {
    intervalRef.current = setInterval(() => {
      setActive((a) => (a + 1) % slides.length);
      setAnimKey((k) => k + 1);
      setProgress(0);
    }, AUTOPLAY_MS);
    return () => clearInterval(intervalRef.current!);
  }, [active]);

  useEffect(() => {
    setProgress(0);
    const step = 100 / (AUTOPLAY_MS / 50);
    progressRef.current = setInterval(() => {
      setProgress((p) => Math.min(p + step, 100));
    }, 50);
    return () => clearInterval(progressRef.current!);
  }, [active]);

  const slide = slides[active];

  return (
    <section
      className="relative w-full flex flex-col lg:flex-row overflow-hidden"
      style={{ minHeight: "100svh" }}
    >
      style injected once
      <style>{`
        @keyframes slideUp {
          from { opacity: 0; transform: translateY(22px); }
          to   { opacity: 1; transform: translateY(0); }
        }
        .animate-slide-up {
          opacity: 0;
          animation: slideUp 0.55s cubic-bezier(0.22, 1, 0.36, 1) forwards;
        }
      `}</style>

      // Text column — 55%
      <div
        className="relative z-10 flex flex-col justify-center order-2 lg:order-1"
        style={{
          flex: "0 0 55%",
          padding: "80px 5vw 80px calc(5vw + 16px)",
          backgroundColor: "rgb(250,250,250)",
        }}
      >
        // Progress bars
        <div className="flex gap-2 mb-10">
          {slides.map((s, i) => (
            <button
              key={s.imageSrc}
              aria-label={`Ir para ${s.title}`}
              onClick={() => goTo(i)}
              className="h-[3px] flex-1 rounded-full overflow-hidden cursor-pointer"
              style={{ backgroundColor: "rgba(28,26,23,0.12)" }}
            >
              <div
                className="h-full rounded-full"
                style={{
                  backgroundColor:
                    i === active ? slide.accentColor : "transparent",
                  width:
                    i === active
                      ? `${progress}%`
                      : i < active
                      ? "100%"
                      : "0%",
                  transition: i === active ? "none" : "width 0.3s ease",
                }}
              />
            </button>
          ))}
        </div>

        // Staggered text
        <div key={animKey} className="flex flex-col gap-4 max-w-lg">
          <span
            className="inline-block text-xs font-medium uppercase tracking-widest animate-slide-up"
            style={{
              color: slide.accentColor,
              animationDelay: "0ms",
              fontFamily: "var(--font-body)",
              letterSpacing: "1.4px",
            }}
          >
            {slide.tag}
          </span>

          <h2
            className="animate-slide-up"
            style={{
              fontFamily: "var(--font-display)",
              fontSize: "clamp(40px, 4.5vw, 68px)",
              fontWeight: 500,
              lineHeight: 1.04,
              letterSpacing: "-0.5px",
              color: "rgb(28,26,23)",
              margin: 0,
              animationDelay: "80ms",
            }}
          >
            {slide.title}
          </h2>

          <p
            className="animate-slide-up"
            style={{
              color: "rgba(28,26,23,0.65)",
              fontFamily: "var(--font-body)",
              fontSize: "clamp(14px, 1.4vw, 16px)",
              lineHeight: 1.72,
              margin: 0,
              animationDelay: "160ms",
            }}
          >
            {slide.description}
          </p>

          <div className="animate-slide-up mt-1" style={{ animationDelay: "240ms" }}>
            <a
              href="#contato"
              style={{
                display: "inline-flex",
                alignItems: "center",
                backgroundColor: slide.accentColor,
                color: "#ffffff",
                padding: "13px 28px",
                borderRadius: 999,
                fontFamily: "var(--font-body)",
                fontSize: 14,
                fontWeight: 500,
                textDecoration: "none",
                transition: "opacity 0.2s",
              }}
              onMouseEnter={(e) => (e.currentTarget.style.opacity = "0.88")}
              onMouseLeave={(e) => (e.currentTarget.style.opacity = "1")}
            >
              {slide.cta}
            </a>
          </div>
        </div>

        // Arrows
        <div className="flex gap-3 mt-12">
          <button
            onClick={prev}
            aria-label="Slide anterior"
            className="flex items-center justify-center rounded-full transition-all"
            style={{
              width: 44,
              height: 44,
              backgroundColor: "rgba(28,26,23,0.06)",
              border: "1px solid rgba(28,26,23,0.12)",
              color: "rgb(28,26,23)",
              cursor: "pointer",
            }}
          >
            <ChevronLeft size={20} />
          </button>
          <button
            onClick={next}
            aria-label="Próximo slide"
            className="flex items-center justify-center rounded-full transition-all"
            style={{
              width: 44,
              height: 44,
              backgroundColor: "rgba(28,26,23,0.06)",
              border: "1px solid rgba(28,26,23,0.12)",
              color: "rgb(28,26,23)",
              cursor: "pointer",
            }}
          >
            <ChevronRight size={20} />
          </button>
        </div>
      </div>

      // Image column — 45%
      <div
        className="relative order-1 lg:order-2 lg:flex-1"
        style={{
          minHeight: "300px",
          backgroundColor: slide.accentColor + "18",
          transition: "background-color 0.6s ease",
          padding: "32px 32px 32px 0",
        }}
      >
        {slides.map((s, i) => (
          <div
            key={s.imageSrc}
            className="absolute inset-8 transition-opacity duration-700 ease-in-out"
            style={{
              opacity: i === active ? 1 : 0,
              borderRadius: 24,
              overflow: "hidden",
            }}
          >
            <Image
              src={s.imageSrc}
              alt={s.title}
              fill
              priority={i === 0}
              sizes="45vw"
              style={{ objectFit: "cover" }}
            />
          </div>
        ))}
      </div>
    </section>
  );
}
*/
