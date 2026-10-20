import Reveal from "./Reveal";
import { Squiggle } from "./Doodles";

const facts = [
  { label: "Now", text: "Software engineer at Prismberry, building AgentIQ", tone: "yellow", rot: "-rotate-2" },
  { label: "Studied", text: "B.Tech in Computer Science, ABES Engineering College, 2022 to 2026", tone: "sky", rot: "rotate-1" },
  { label: "Research", text: "IEEE SCEECS 2026 paper on emotion-aware AI agents", tone: "mint", rot: "-rotate-1" },
  { label: "Freelance", text: "Rising Talent on Upwork: AI agents, RAG pipelines and voice AI for clients", tone: "pink", rot: "rotate-2" },
] as const;

export default function About() {
  return (
    <section id="about" className="wrap py-[clamp(90px,14vw,200px)]">
      <div className="grid gap-12 lg:grid-cols-[1.35fr_1fr] lg:gap-20">
        <div>
          <Reveal>
            <h2 className="display text-[clamp(3.5rem,9vw,9rem)]">
              hi, I&apos;m
              <br />
              Chitraksh
            </h2>
          </Reveal>
          <Reveal delay={0.1} className="mt-10 max-w-[34ch] text-[clamp(22px,2.2vw,32px)] font-semibold leading-snug">
            <p>
              I like the part of AI that has to survive production: retrieval that is actually relevant, SQL that is
              actually valid, a voice that answers before you lose patience.
            </p>
          </Reveal>
          <Reveal delay={0.18} className="mt-6 max-w-[58ch] text-xl">
            <p>
              I started in automation, wiring n8n workflows and voice agents for sales teams, then moved to the backend
              side of AI engineering. Today that means LangGraph state machines, hybrid retrieval, streaming APIs and the guardrails
              that keep them honest.
            </p>
          </Reveal>
          <Squiggle className="mt-10 w-40" />
        </div>

        <ul className="flex flex-col gap-6 lg:pt-10">
          {facts.map((f, i) => (
            <Reveal key={f.label} as="li" delay={i * 0.08}>
              <div className={`sticker ${f.rot} p-6 transition-transform duration-200 [transition-timing-function:var(--ease-out)] hover:-translate-y-1 tone-${f.tone}`}>
                <p className="display text-4xl">{f.label}</p>
                <p className="mt-2 text-xl font-semibold leading-snug">{f.text}</p>
              </div>
            </Reveal>
          ))}
        </ul>
      </div>
    </section>
  );
}
