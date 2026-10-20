import { jobs } from "@/data/content";
import Reveal from "./Reveal";

export default function Experience() {
  return (
    <section id="experience" className="wrap py-[clamp(70px,10vw,140px)]">
      <Reveal>
        <h2 className="display text-[clamp(4rem,13vw,13rem)]">
          where I&apos;ve
          <br />
          shipped
        </h2>
      </Reveal>

      <ol className="mt-14 flex flex-col gap-6">
        {jobs.map((j, i) => (
          <li key={j.company} className="sticky" style={{ top: `${108 + i * 22}px` }}>
            <article className={`sticker grid gap-6 p-6 sm:p-10 lg:grid-cols-[1fr_1.2fr] lg:gap-14 lg:p-12 tone-${j.tone}`}>
              <div>
                <h3 className="display text-[clamp(2.6rem,5vw,5rem)]">{j.company}</h3>
                <p className="mt-3 text-xl font-bold">{j.role}</p>
                <p className="text-lg font-medium">
                  {j.when} · {j.where}
                </p>
              </div>
              <ul className="flex flex-col gap-4 text-lg font-medium sm:text-xl">
                {j.points.map((pt) => (
                  <li key={pt} className="flex gap-3">
                    <span className="mt-[0.6em] h-3 w-3 shrink-0 rounded-full border-[2.5px] border-ink bg-white" aria-hidden />
                    <span>{pt}</span>
                  </li>
                ))}
              </ul>
            </article>
          </li>
        ))}
      </ol>
    </section>
  );
}
