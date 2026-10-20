import type { CSSProperties } from "react";

const INK = "#1b1918";
const sw = { stroke: INK, strokeWidth: 3, strokeLinejoin: "round" as const, strokeLinecap: "round" as const };

type P = { className?: string; style?: CSSProperties };

export function Sparkle({ className, style, fill = "#fff" }: P & { fill?: string }) {
  return (
    <svg viewBox="0 0 100 100" className={className} style={style} aria-hidden>
      <path d="M50 4C54 34 66 46 96 50 66 54 54 66 50 96 46 66 34 54 4 50 34 46 46 34 50 4Z" fill={fill} {...sw} />
    </svg>
  );
}

export function ShootingStar({ className, style }: P) {
  return (
    <svg viewBox="0 0 220 110" className={className} style={style} aria-hidden>
      <path d="M95 55C135 55 175 60 205 100" fill="none" {...sw} />
      <path d="M92 38C140 36 185 42 212 84" fill="none" {...sw} />
      <path d="M96 72C132 74 165 78 192 108" fill="none" {...sw} />
      <path
        d="M50 6l12 27 29 3-22 19 7 29-26-15-26 15 7-29L9 36l29-3z"
        fill="#ffe15a"
        {...sw}
      />
    </svg>
  );
}

export function Eye({ className, style }: P) {
  return (
    <svg viewBox="0 0 160 110" className={className} style={style} aria-hidden>
      <path d="M8 70C20 30 70 14 138 36 108 40 70 52 52 74" fill="#ffe15a" {...sw} />
      <circle cx="80" cy="66" r="26" fill={INK} />
      <path d="M26 86l-6 14M46 92l-3 15M66 94l0 15M86 94l3 15M104 90l8 13M120 82l12 11" fill="none" {...sw} />
    </svg>
  );
}

export function Bubble({ className, style, children }: P & { children: React.ReactNode }) {
  return (
    <div className={`relative ${className ?? ""}`} style={style}>
      <div className="sticker bg-white px-5 py-3 font-bold leading-tight">{children}</div>
      <svg viewBox="0 0 40 30" className="absolute -bottom-[22px] left-8 h-6 w-8" aria-hidden>
        <path d="M2 0C6 18 16 26 34 28 22 20 20 10 22 0" fill="#fff" stroke={INK} strokeWidth="3" strokeLinejoin="round" />
        <path d="M5 0H22" stroke="#fff" strokeWidth="6" />
      </svg>
    </div>
  );
}

export function Brackets({ className, style }: P) {
  return (
    <svg viewBox="0 0 110 110" className={className} style={style} aria-hidden>
      <rect x="6" y="6" width="98" height="98" rx="26" fill="#a8e0d2" {...sw} />
      <path d="M44 38 26 55l18 17M66 38l18 17-18 17M60 32 50 78" fill="none" {...sw} strokeWidth={5} />
    </svg>
  );
}

export function Wave({ className, style }: P) {
  const bars = [14, 34, 52, 26, 60, 38, 18];
  return (
    <svg viewBox="0 0 170 90" className={className} style={style} aria-hidden>
      <rect x="4" y="4" width="162" height="82" rx="41" fill="#9cc8ff" {...sw} />
      {bars.map((h, i) => (
        <line key={i} x1={28 + i * 19} x2={28 + i * 19} y1={45 - h / 2} y2={45 + h / 2} stroke={INK} strokeWidth="7" strokeLinecap="round" />
      ))}
    </svg>
  );
}

export function Burst({ className, style, fill = "#fff", points = 28 }: P & { fill?: string; points?: number }) {
  const pts: string[] = [];
  for (let i = 0; i < points * 2; i++) {
    const a = (Math.PI * i) / points;
    const r = i % 2 ? 44 : 50;
    pts.push(`${(50 + r * Math.cos(a)).toFixed(2)},${(50 + r * Math.sin(a)).toFixed(2)}`);
  }
  return (
    <svg viewBox="0 0 100 100" className={className} style={style} aria-hidden>
      <polygon points={pts.join(" ")} fill={fill} stroke={INK} strokeWidth="0.9" strokeLinejoin="round" />
    </svg>
  );
}

export function Squiggle({ className, style }: P) {
  return (
    <svg viewBox="0 0 160 40" className={className} style={style} aria-hidden>
      <path d="M6 20c14-24 24-24 38 0s24 24 38 0 24-24 38 0 14 14 34 0" fill="none" {...sw} strokeWidth={5} />
    </svg>
  );
}

export function Ampersand({ className, style }: P) {
  return (
    <span className={`display ${className ?? ""}`} style={{ color: "var(--coral)", WebkitTextStroke: "3px var(--ink)", ...style }} aria-hidden>
      &amp;
    </span>
  );
}

/* Illustrations for project cards that have no screenshot. */
export function ProjectArt({ kind }: { kind: NonNullable<import("@/data/content").Project["art"]> }) {
  const box = (x: number, y: number, w: number, h: number, fill = "#fff", rx = 12) => (
    <rect x={x} y={y} width={w} height={h} rx={rx} fill={fill} {...sw} />
  );
  const common = { viewBox: "0 0 360 240", className: "h-full w-full", "aria-hidden": true } as const;

  if (kind === "pipeline") {
    const nodes = ["analyze", "extract", "tickets", "review", "push", "summary"];
    return (
      <svg {...common}>
        {nodes.map((n, i) => {
          const x = 14 + (i % 3) * 116;
          const y = i < 3 ? 34 : 140;
          const paused = n === "review";
          return (
            <g key={n}>
              {box(x, y, 100, 56, paused ? "#ffe15a" : "#fff")}
              <text x={x + 50} y={y + 34} textAnchor="middle" fontWeight="800" fontSize="16" fill={INK} fontFamily="var(--font-body)">
                {n}
              </text>
            </g>
          );
        })}
        <path d="M114 62h16M230 62h16M296 90v26l-250 0 0 24" fill="none" {...sw} />
        <path d="M114 168h16M230 168h16" fill="none" {...sw} />
        <circle cx="180" cy="206" r="14" fill="#ffc4d6" {...sw} />
        <path d="M175 200v12M185 200v12" {...sw} />
      </svg>
    );
  }
  if (kind === "blog") {
    return (
      <svg {...common}>
        {box(70, 20, 220, 200)}
        <path d="M94 56h120M94 80h172M94 100h150M94 120h172" fill="none" {...sw} />
        {box(94, 142, 70, 54, "#9cc8ff", 8)}
        <path d="M94 188l24-24 18 14 12-10 16 20" fill="none" {...sw} />
        <path d="M180 150h86M180 172h60" fill="none" {...sw} />
        <path d="M300 40l8 16 18 2-13 12 4 18-17-9-17 9 4-18-13-12 18-2z" fill="#ffe15a" {...sw} />
      </svg>
    );
  }
  if (kind === "mind") {
    return (
      <svg {...common}>
        <circle cx="180" cy="120" r="82" fill="#fff" {...sw} />
        <path d="M130 108c6-24 24-30 50-30s44 6 50 30M138 110v18M222 110v18" fill="none" {...sw} />
        <path d="M150 156c20 20 40 20 60 0" fill="none" {...sw} />
        <circle cx="152" cy="116" r="6" fill={INK} />
        <circle cx="208" cy="116" r="6" fill={INK} />
        <path d="M300 54c0-14 22-14 22 0 0 12-11 20-11 28 0-8-11-16-11-28z" fill="#ffc4d6" {...sw} />
        <path d="M52 60c0 12 18 12 18 0S52 48 52 60z" fill="#ffe15a" {...sw} />
        <path d="M44 190c10 20 24 20 34 0" fill="none" {...sw} />
      </svg>
    );
  }
  if (kind === "support") {
    return (
      <svg {...common}>
        {box(30, 30, 110, 140, "#fff")}
        <path d="M50 66h70M50 90h70M50 114h46" fill="none" {...sw} />
        <path d="M60 20h40v26" fill="#ffe15a" {...sw} />
        {box(170, 40, 160, 56, "#fff", 22)}
        <path d="M190 68h80" fill="none" {...sw} />
        {box(150, 120, 180, 70, "#a8e0d2", 22)}
        <path d="M172 146h120M172 166h80" fill="none" {...sw} />
        <path d="M140 100l18-10M140 150h10" fill="none" {...sw} />
      </svg>
    );
  }
  if (kind === "avatar") {
    return (
      <svg {...common}>
        {box(40, 30, 280, 180, "#fff", 18)}
        <circle cx="180" cy="104" r="38" fill="#ffe15a" {...sw} />
        <circle cx="166" cy="98" r="5" fill={INK} />
        <circle cx="194" cy="98" r="5" fill={INK} />
        <path d="M164 118c10 10 22 10 32 0" fill="none" {...sw} />
        <path d="M120 200c8-34 30-44 60-44s52 10 60 44" fill="#9cc8ff" {...sw} />
        <circle cx="70" cy="56" r="8" fill="#f6906f" {...sw} />
        <path d="M262 52h36M262 70h24" fill="none" {...sw} />
      </svg>
    );
  }
  if (kind === "rag") {
    return (
      <svg {...common}>
        {box(24, 22, 92, 50, "#9cc8ff")}
        {box(24, 94, 92, 50, "#ffc4d6")}
        {box(24, 166, 92, 50, "#a8e0d2")}
        <text x="70" y="53" textAnchor="middle" fontWeight="800" fontSize="15" fill={INK} fontFamily="var(--font-body)">wiki</text>
        <text x="70" y="125" textAnchor="middle" fontWeight="800" fontSize="15" fill={INK} fontFamily="var(--font-body)">arxiv</text>
        <text x="70" y="197" textAnchor="middle" fontWeight="800" fontSize="15" fill={INK} fontFamily="var(--font-body)">docs</text>
        <path d="M116 47C170 47 150 120 196 120M116 119h80M116 191C170 191 150 120 196 120" fill="none" {...sw} />
        <circle cx="240" cy="120" r="44" fill="#ffe15a" {...sw} />
        <path d="M222 108h36M222 126h22" fill="none" {...sw} />
        <path d="M290 120h36M314 106l14 14-14 14" fill="none" {...sw} />
      </svg>
    );
  }
  return null;
}
