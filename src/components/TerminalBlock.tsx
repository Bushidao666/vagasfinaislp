"use client";
import React from "react";

const ALPHABET =
  "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789!@#$%^&*()_+-=[]{};:,.<>/?|";

/** Conjunto de caracteres que NÃO devem ser embaralhados (estabilidade de layout) */
const STABLE_SET = new Set([
  " ", "\n", "\t",
  ".", ",", "!", "?", ":", ";",
  "-", "—", "–", "(", ")", "[", "]", "{", "}", "'", '"', "…"
]);

function useInViewOnce<T extends HTMLElement>(offset = 0) {
  const ref = React.useRef<T | null>(null);
  const [inView, setInView] = React.useState(false);

  React.useEffect(() => {
    if (!ref.current || inView) return;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setInView(true);
          observer.disconnect();
        }
      },
      { root: null, rootMargin: `0px 0px -${offset}px 0px`, threshold: 0.1 }
    );
    observer.observe(ref.current);
    return () => observer.disconnect();
  }, [inView, offset]);

  return { ref, inView };
}

/** Scramble que mantém espaços/linha/pontuação intactos (sem reflow) */
function useScramble(target: string, play: boolean, durationMs: number) {
  const [output, setOutput] = React.useState<string>("");

  React.useEffect(() => {
    if (!play) return;

    const start = performance.now();
    const length = target.length;

    const lockTimes = Array.from({ length }, (_, i) => {
      const t = (i / Math.max(1, length - 1)) * durationMs;
      return t * 0.9 + Math.random() * (durationMs * 0.1);
    });

    let raf = 0;
    const tick = (now: number) => {
      const elapsed = now - start;
      const chars = Array.from(target).map((ch, i) => {
        // Nunca embaralhar caracteres estáveis (preserva quebra de linha/word wrap)
        if (STABLE_SET.has(ch)) return ch;

        const lockAt = lockTimes[i];
        if (elapsed >= durationMs) return ch;
        if (elapsed < lockAt) {
          return ALPHABET[Math.floor(Math.random() * ALPHABET.length)];
        }
        const progress = Math.min(1, (elapsed - lockAt) / (durationMs * 0.15));
        return Math.random() < progress ? ch : ALPHABET[Math.floor(Math.random() * ALPHABET.length)];
      });

      setOutput(chars.join(""));
      if (elapsed < durationMs) {
        raf = requestAnimationFrame(tick);
      } else {
        setOutput(target);
      }
    };

    raf = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(raf);
  }, [target, play, durationMs]);

  return output;
}

type TerminalBlockProps = {
  text: string;
  durationMs?: number;
  className?: string;
  avatarSrc?: string;
  avatarAlt?: string;
  avatarSide?: "left" | "right";
  avatarWidth?: number; // px
  textColor?: string;   // NOVO: cor do texto
};

export default function TerminalBlock({
  text,
  durationMs = 8000,
  className = "",
  avatarSrc,
  avatarAlt = "BlackSider Agent",
  avatarSide = "right",
  avatarWidth = 220,
  textColor = "#7bfb4e", // verde solicitado
}: TerminalBlockProps) {
  const { ref, inView } = useInViewOnce<HTMLDivElement>(0);
  const scrambled = useScramble(text, inView, durationMs);

  const hasAvatar = Boolean(avatarSrc);
  const isRight = avatarSide !== "left";

  // --- GHOST: mede altura final para travar o minHeight (evita jump)
  const ghostRef = React.useRef<HTMLDivElement | null>(null);
  const [minH, setMinH] = React.useState<number | undefined>(undefined);
  React.useLayoutEffect(() => {
    if (!ghostRef.current) return;
    const resize = () => setMinH(ghostRef.current!.getBoundingClientRect().height);
    resize();
    const ro = new ResizeObserver(resize);
    ro.observe(ghostRef.current!);
    return () => ro.disconnect();
  }, [text]);

  return (
    <div
      ref={ref}
      className={`terminal-contain mono-stable mx-auto my-8 w-full max-w-5xl rounded-2xl border border-[#6a5acd] bg-black/90 shadow-[0_0_30px_rgba(106,90,205,0.25)] ${className}`}
      style={{
        fontFamily: `'IBM Plex Mono', ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, "Liberation Mono", "Courier New", monospace`,
        position: "relative",
        overflow: "hidden",
      }}
      aria-label={text}
    >
      {/* Barra macOS */}
      <div
        className="flex items-center gap-2 px-3 py-2 border-b border-[#6a5acd]/40"
        style={{
          background: "linear-gradient(180deg, rgba(106,90,205,0.15), rgba(0,0,0,0))",
        }}
      >
        <span aria-hidden style={{ width: 12, height: 12, borderRadius: 9999, backgroundColor: "#ff5f57", boxShadow: "0 0 8px rgba(255,95,87,0.6)" }} />
        <span aria-hidden style={{ width: 12, height: 12, borderRadius: 9999, backgroundColor: "#febc2e", boxShadow: "0 0 8px rgba(254,188,46,0.6)" }} />
        <span aria-hidden style={{ width: 12, height: 12, borderRadius: 9999, backgroundColor: "#28c840", boxShadow: "0 0 8px rgba(40,200,64,0.6)" }} />
        <div className="ml-2 text-xs text-[#a99ff7] select-none">
          terminal://blackSider/log.txt
        </div>
      </div>

      {/* Scanlines */}
      <div
        aria-hidden
        style={{
          position: "absolute",
          inset: 0,
          backgroundImage:
            `linear-gradient(to bottom, var(--scanline-color) 1px, transparent 1px),
             radial-gradient(600px 200px at 50% -20%, rgba(106,90,205,0.25), transparent 60%)`,
          backgroundSize: "auto 8px, 100% 100%",
          animation: "scanlines-move 900ms linear infinite",
          pointerEvents: "none",
          mixBlendMode: "screen",
        }}
      />

      {/* Layout */}
      <div
        className={[
          "relative z-10 p-4 md:p-6",
          hasAvatar
            ? (isRight
                ? "flex flex-col md:grid md:grid-cols-[1fr_auto] gap-4 md:gap-6"
                : "flex flex-col md:grid md:grid-cols-[auto_1fr] gap-4 md:gap-6")
            : ""
        ].join(" ")}
      >
        {/* AVATAR - Mostrar primeiro no mobile */}
        {hasAvatar && (
          <div className={`${isRight ? "md:order-2" : "md:order-1"} order-1 flex justify-center md:justify-${isRight ? 'end' : 'start'}`}>
            <div
              className="neon-frame"
              style={{
                width: Math.min(avatarWidth, 280), // Limitar tamanho no mobile
                maxWidth: "90vw",
                background: "#021b0f",
                borderRadius: 18,
              }}
            >
              <img
                src={avatarSrc!}
                alt={avatarAlt}
                style={{
                  display: "block",
                  width: "100%",
                  height: "auto",
                  borderRadius: 18,
                }}
              />
            </div>
          </div>
        )}

        {/* TEXTO com minHeight lockado */}
        <div
          className={`whitespace-pre-wrap leading-6 md:leading-7 text-sm md:text-base ${isRight ? "md:order-1" : "md:order-2"} order-2`}
          style={{ color: textColor, minHeight: minH }}
        >
          {scrambled}
        </div>

        {/* GHOST invisível para medir altura final (texto alvo) */}
        <div
          ref={ghostRef}
          className="absolute opacity-0 pointer-events-none select-none whitespace-pre-wrap text-sm md:text-base leading-6 md:leading-7"
          style={{ 
            inset: "-9999px auto auto -9999px", 
            width: hasAvatar ? "calc(100% - 40px)" : "100%",
            maxWidth: hasAvatar ? "calc(100vw - 80px)" : "100vw"
          }}
          aria-hidden
        >
          {text}
        </div>
      </div>
    </div>
  );
}