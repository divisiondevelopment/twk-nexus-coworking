"use client";

import { useState, useEffect, useCallback } from "react";
import Image from "next/image";
import { ChevronLeft, ChevronRight, X } from "lucide-react";

export interface DialogSpaceData {
  title: string;
  description: string;
  features: string[];
  ctaHref: string;
  images: string[];
  imagePosition?: string;
}

function CheckIcon() {
  return (
    <span
      style={{
        width: 18,
        height: 18,
        borderRadius: "50%",
        backgroundColor: "rgba(0,124,210,0.10)",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        flexShrink: 0,
        marginTop: 1,
      }}
    >
      <svg width="9" height="9" viewBox="0 0 9 9" fill="none">
        <path
          d="M1.5 4.5L3.5 6.5L7.5 2.5"
          stroke="#007CD2"
          strokeWidth="1.6"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    </span>
  );
}

function WhatsAppIcon() {
  return (
    <svg
      width="15"
      height="15"
      viewBox="0 0 24 24"
      fill="currentColor"
      style={{ flexShrink: 0 }}
    >
      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51a12.8 12.8 0 0 0-.57-.01c-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 0 1-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 0 1-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 0 1 2.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0 0 12.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 0 0 5.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 0 0-3.48-8.413Z" />
    </svg>
  );
}

export default function SpaceDialog({
  space,
  onClose,
}: {
  space: DialogSpaceData;
  onClose: () => void;
}) {
  const [imgIdx, setImgIdx] = useState(0);
  const [mounted, setMounted] = useState(false);
  const count = space.images.length;
  const isSalaProgresso = space.title === "Sala Progresso";

  const prev = useCallback(
    () => setImgIdx((i) => (i - 1 + count) % count),
    [count]
  );
  const next = useCallback(
    () => setImgIdx((i) => (i + 1) % count),
    [count]
  );

  // Trigger enter animation on next paint
  useEffect(() => {
    const id = requestAnimationFrame(() => setMounted(true));
    return () => cancelAnimationFrame(id);
  }, []);

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
      if (e.key === "ArrowLeft") prev();
      if (e.key === "ArrowRight") next();
    };
    document.addEventListener("keydown", onKey);
    document.body.style.overflow = "hidden";
    return () => {
      document.removeEventListener("keydown", onKey);
      document.body.style.overflow = "";
    };
  }, [onClose, prev, next]);

  return (
    <div
      className="fixed inset-0 z-[200] flex items-end sm:items-center justify-center p-0 sm:p-6"
      style={{
        backgroundColor: "rgba(0,0,0,0.52)",
        opacity: mounted ? 1 : 0,
        transition: "opacity 220ms ease",
      }}
      onClick={onClose}
    >
      <div
        role="dialog"
        aria-modal="true"
        aria-label={space.title}
        className="w-full sm:max-w-[800px] flex flex-col overflow-hidden rounded-t-[24px] sm:rounded-[24px]"
        style={{
          backgroundColor: "rgb(255, 255, 255)",
          maxHeight: "90vh",
          boxShadow: "0 24px 64px rgba(0,0,0,0.22)",
          opacity: mounted ? 1 : 0,
          transform: mounted ? "translateY(0)" : "translateY(28px)",
          transition:
            "opacity 300ms cubic-bezier(0.22,1,0.36,1), transform 340ms cubic-bezier(0.22,1,0.36,1)",
        }}
        onClick={(e) => e.stopPropagation()}
      >
        {/* Gallery */}
        <div className="relative h-[240px] sm:h-[min(380px,42vh)] flex-shrink-0 overflow-hidden">
          {space.images.map((src, i) => (
            <div
              key={src}
              style={{
                position: "absolute",
                inset: 0,
                opacity: i === imgIdx ? 1 : 0,
                transition: "opacity 350ms ease",
              }}
            >
              <Image
                src={src}
                alt={space.title}
                fill
                sizes="(max-width: 800px) 100vw, 800px"
                style={{
                  objectFit: "cover",
                  objectPosition: isSalaProgresso ? "center 60%" : space.imagePosition ?? "center",
                }}
              />
            </div>
          ))}

          {/* Close */}
          <button
            onClick={onClose}
            aria-label="Fechar"
            className="absolute top-3 right-3 z-10 flex items-center justify-center rounded-full transition-opacity duration-150 hover:opacity-80"
            style={{
              width: 36,
              height: 36,
              backgroundColor: "rgba(0,0,0,0.48)",
              backdropFilter: "blur(6px)",
              WebkitBackdropFilter: "blur(6px)",
              border: "none",
              cursor: "pointer",
            }}
          >
            <X size={16} color="white" strokeWidth={2.5} />
          </button>

          {/* Prev / Next */}
          {count > 1 && (
            <>
              <button
                onClick={prev}
                aria-label="Imagem anterior"
                className="absolute left-3 top-1/2 -translate-y-1/2 z-10 flex items-center justify-center rounded-full transition-opacity duration-150 hover:opacity-80"
                style={{
                  width: 36,
                  height: 36,
                  backgroundColor: "rgba(0,0,0,0.35)",
                  backdropFilter: "blur(6px)",
                  WebkitBackdropFilter: "blur(6px)",
                  border: "none",
                  cursor: "pointer",
                }}
              >
                <ChevronLeft size={18} color="white" strokeWidth={2} />
              </button>
              <button
                onClick={next}
                aria-label="Próxima imagem"
                className="absolute right-3 top-1/2 -translate-y-1/2 z-10 flex items-center justify-center rounded-full transition-opacity duration-150 hover:opacity-80"
                style={{
                  width: 36,
                  height: 36,
                  backgroundColor: "rgba(0,0,0,0.35)",
                  backdropFilter: "blur(6px)",
                  WebkitBackdropFilter: "blur(6px)",
                  border: "none",
                  cursor: "pointer",
                }}
              >
                <ChevronRight size={18} color="white" strokeWidth={2} />
              </button>
            </>
          )}

          {/* Dots */}
          {count > 1 && (
            <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex items-center gap-1.5 z-10">
              {space.images.map((_, i) => (
                <button
                  key={i}
                  onClick={() => setImgIdx(i)}
                  aria-label={`Imagem ${i + 1}`}
                  style={{
                    height: 6,
                    width: i === imgIdx ? 20 : 6,
                    borderRadius: 999,
                    backgroundColor:
                      i === imgIdx ? "white" : "rgba(255,255,255,0.5)",
                    transition: "all 300ms ease",
                    border: "none",
                    cursor: "pointer",
                    padding: 0,
                  }}
                />
              ))}
            </div>
          )}
        </div>

        {/* Scrollable content */}
        <div className="overflow-y-auto flex-1 min-h-0 p-6 sm:p-8 flex flex-col gap-5">
          <div className="flex flex-col gap-2">
            <h3
              style={{
                fontFamily: "var(--font-display)",
                fontSize: "clamp(20px, 2.5vw, 26px)",
                fontWeight: 500,
                lineHeight: 1.2,
                letterSpacing: "-0.3px",
                color: "rgb(28,26,23)",
                margin: 0,
              }}
            >
              {space.title}
            </h3>
            <p
              className="text-base md:text-[15px]"
              style={{
                lineHeight: 1.75,
                color: "rgba(28,26,23,0.65)",
                margin: 0,
              }}
            >
              {space.description}
            </p>
          </div>

          <ul
            style={{
              margin: 0,
              padding: 0,
              listStyle: "none",
              display: "flex",
              flexDirection: "column",
              gap: 10,
            }}
          >
            {space.features.map((feat) => (
              <li
                key={feat}
                className="text-base md:text-[14px]"
                style={{
                  display: "flex",
                  alignItems: "flex-start",
                  gap: 9,
                  color: "rgba(28,26,23,0.72)",
                  fontFamily: "var(--font-body)",
                  lineHeight: 1.55,
                }}
              >
                <CheckIcon />
                {feat}
              </li>
            ))}
          </ul>
        </div>

        {/* Footer CTA */}
        <div
          className="flex-shrink-0 px-6 sm:px-8 py-5"
          style={{ borderTop: "1px solid rgb(241,241,241)" }}
        >
          <a
            href={space.ctaHref}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center justify-center gap-2 w-full rounded-full text-base md:text-sm font-medium transition-opacity duration-200 hover:opacity-85"
            style={{
              backgroundColor: "#007CD2",
              color: "#ffffff",
              padding: "13px 24px",
              textDecoration: "none",
            }}
          >
            <WhatsAppIcon />
            Quero saber mais
          </a>
        </div>
      </div>
    </div>
  );
}
