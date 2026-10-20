import Image from "next/image";
import { agentiq, projects, type Project } from "@/data/content";
import Reveal from "./Reveal";
import { Burst, ProjectArt } from "./Doodles";

function Links({ p }: { p: Project }) {
  return (
    <div className="mt-6 flex flex-wrap gap-3">
      {p.live && (
        <a href={p.live} target="_blank" rel="noopener noreferrer" className="btn !min-h-11 !px-5 !text-[13px]">
          Live demo <span aria-hidden>↗</span>
        </a>
      )}
      {p.repo && (
        <a href={p.repo} target="_blank" rel="noopener noreferrer" className="btn btn-light !min-h-11 !px-5 !text-[13px]">
          Code <span aria-hidden>↗</span>
        </a>
      )}
    </div>
  );
}

function Tags({ tags }: { tags: string[] }) {
  return (
    <ul className="mt-5 flex flex-wrap gap-2">
      {tags.map((t) => (
        <li key={t} className="rounded-full border-[2.5px] border-ink bg-white px-3.5 py-1 text-[14px] font-bold">
          {t}
        </li>
      ))}
    </ul>
  );
}

function Media({ p, rot }: { p: Project; rot: string }) {
  return (
    <div className={`sticker relative overflow-hidden bg-white ${rot} transition-transform duration-300 [transition-timing-function:var(--ease-out)] group-hover:rotate-0`}>
      {p.image ? (
        <Image
          src={p.image}
          alt={`${p.title} screenshot`}
          width={1400}
          height={1100}
          sizes="(min-width: 1024px) 45vw, 92vw"
          className="aspect-[4/3] w-full object-cover object-top"
        />
      ) : (
        <div className="aspect-[4/3] p-5">{p.art && <ProjectArt kind={p.art} />}</div>
      )}
    </div>
  );
}

function BigProject({ p, flip }: { p: Project; flip?: boolean }) {
  return (
    <article className={`sticker group grid items-center gap-8 p-5 sm:p-8 lg:grid-cols-2 lg:gap-14 lg:p-12 tone-${p.tone}`}>
      <div className={flip ? "lg:order-2" : ""}>
        <Media p={p} rot={flip ? "rotate-1" : "-rotate-1"} />
      </div>
      <div>
        <h3 className="display text-[clamp(2.8rem,6vw,6rem)]">{p.title}</h3>
        <p className="mt-4 text-lg font-bold">{p.date}</p>
        <p className="mt-3 max-w-[48ch] text-lg font-medium sm:text-xl">{p.blurb}</p>
        <Tags tags={p.tags} />
        <Links p={p} />
      </div>
    </article>
  );
}

function SmallProject({ p, rot }: { p: Project; rot: string }) {
  return (
    <article className={`sticker group flex flex-col p-5 sm:p-7 tone-${p.tone}`}>
      <Media p={p} rot={rot} />
      <div className="mt-6 flex flex-1 flex-col">
        <h3 className="display text-[clamp(2rem,3.4vw,3.4rem)]">{p.title}</h3>
        <p className="mt-2 text-[17px] font-bold">{p.date}</p>
        <p className="mt-3 text-lg font-medium">{p.blurb}</p>
        <Tags tags={p.tags} />
        <div className="mt-auto">
          <Links p={p} />
        </div>
      </div>
    </article>
  );
}

export default function Work() {
  const [first, second, ...rest] = projects;
  return (
    <section id="work" className="wrap py-[clamp(70px,10vw,140px)]">
      <Reveal>
        <h2 className="display text-[clamp(4rem,13vw,13rem)]">
          selected <span className="rounded-[0.2em] bg-coral px-[0.12em]">work</span>
        </h2>
      </Reveal>
      <Reveal delay={0.08} className="mt-6 max-w-[52ch] text-xl font-medium">
        <p>Newest first. Most of these run live, and every one has its code on GitHub.</p>
      </Reveal>

      {/* company case study: no public link */}
      <Reveal className="mt-14">
        <article className="sticker relative overflow-hidden bg-sky p-6 sm:p-10 lg:p-14">
          <Burst className="spin-slow absolute -right-32 -top-32 hidden w-[360px] lg:block" fill="#ffe15a" points={22} />
          <div className="relative grid gap-8 lg:grid-cols-[1.2fr_1fr]">
            <div>
              <h3 className="display text-[clamp(3.2rem,8vw,8rem)]">{agentiq.title}</h3>
              <p className="mt-4 text-lg font-bold">
                {agentiq.company}, {agentiq.date}
              </p>
              <p className="mt-3 max-w-[52ch] text-lg font-medium sm:text-xl">{agentiq.blurb}</p>
              <p className="mt-6 text-[15px] font-semibold">Company project, so there is no public repo or demo.</p>
            </div>
            <ul className="flex flex-col justify-end gap-3 self-end">
              {agentiq.points.map((pt) => (
                <li key={pt} className="rounded-2xl border-[3px] border-ink bg-white px-5 py-4 text-lg font-bold">
                  {pt}
                </li>
              ))}
            </ul>
          </div>
        </article>
      </Reveal>

      <div className="mt-10 flex flex-col gap-10">
        <Reveal><BigProject p={first} /></Reveal>
        <Reveal><BigProject p={second} flip /></Reveal>
        <div className="grid gap-10 md:grid-cols-2">
          {rest.map((p, i) => (
            <Reveal key={p.id} delay={(i % 2) * 0.08} className="flex">
              <div className="flex w-full">
                <SmallProject p={p} rot={i % 2 ? "rotate-1" : "-rotate-1"} />
              </div>
            </Reveal>
          ))}
        </div>
      </div>

      <Reveal className="mt-14 text-center">
        <a href="https://github.com/ChitrakshSuri?tab=repositories" target="_blank" rel="noopener noreferrer" className="btn">
          All repositories on GitHub <span aria-hidden>↗</span>
        </a>
      </Reveal>
    </section>
  );
}
