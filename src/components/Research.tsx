import Reveal from "./Reveal";
import { Burst } from "./Doodles";
import { profile } from "@/data/content";

function Card({ href, children }: { href: string; children: React.ReactNode }) {
  const cls =
    "sticker relative block overflow-hidden bg-lilac p-6 sm:p-10 lg:p-16 transition-transform duration-200 [transition-timing-function:var(--ease-out)]";
  if (!href) return <article className={cls}>{children}</article>;
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Read the paper: Advances in Emotion-Aware AI Agents for Mental & Emotional Health"
      className={`${cls} active:scale-[0.99] [@media(hover:hover)]:hover:-translate-y-1`}
    >
      {children}
    </a>
  );
}

export default function Research() {
  return (
    <section id="research" className="wrap py-[clamp(70px,10vw,140px)]">
      <Reveal>
        <Card href={profile.paper}>
          <div className="grid items-center gap-10 lg:grid-cols-[1.5fr_1fr]">
            <div>
              <h2 className="display text-[clamp(3rem,8vw,8rem)]">emotion-aware agents</h2>
              <p className="mt-6 max-w-[40ch] text-2xl font-bold leading-snug">
                Advances in Emotion-Aware AI Agents for Mental &amp; Emotional Health
              </p>
              <p className="mt-4 max-w-[52ch] text-xl font-medium">
                A multimodal agent that reads text, speech and facial emotion together, to support people through hard
                conversations. Published at IEEE SCEECS 2026.
              </p>
              {profile.paper && <p className="mt-6 text-lg font-bold">Read the paper ↗</p>}
            </div>
            <div className="relative mx-auto grid aspect-square w-full max-w-[360px] place-items-center">
              <Burst className="spin-slow absolute inset-0" fill="#ffe15a" points={20} />
              <p className="display relative text-center text-[clamp(1.6rem,2.4vw,2.2rem)]">
                IEEE SCEECS
                <br />
                2026
              </p>
            </div>
          </div>
        </Card>
      </Reveal>
    </section>
  );
}
