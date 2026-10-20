import { marquee } from "@/data/content";
import { Sparkle } from "./Doodles";

export default function Marquee() {
  const row = (key: string) => (
    <div key={key} className="flex shrink-0 items-center" aria-hidden={key === "b"}>
      {marquee.map((w) => (
        <div key={w} className="flex items-center">
          <span className="display px-8 text-[clamp(3rem,7vw,6.5rem)]">{w}</span>
          <Sparkle className="h-[clamp(28px,3.4vw,52px)] w-[clamp(28px,3.4vw,52px)]" fill="#ffe15a" />
        </div>
      ))}
    </div>
  );
  return (
    <section aria-label="Stack I work with" className="marquee overflow-hidden border-y-[3px] border-ink bg-coral py-6">
      <div className="marquee-track">
        {row("a")}
        {row("b")}
      </div>
    </section>
  );
}
