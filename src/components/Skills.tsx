import { skills } from "@/data/content";
import Reveal from "./Reveal";

export default function Skills() {
  return (
    <section id="skills" className="wrap py-[clamp(70px,10vw,140px)]">
      <Reveal>
        <h2 className="display text-[clamp(4rem,13vw,13rem)]">toolbox</h2>
      </Reveal>
      <div className="mt-14 grid gap-6 md:grid-cols-2 lg:grid-cols-6">
        {skills.map((s, i) => (
          <Reveal
            key={s.group}
            delay={i * 0.06}
            className={["lg:col-span-2", "lg:col-span-4", "lg:col-span-3", "lg:col-span-3", "lg:col-span-4", "lg:col-span-2", "lg:col-span-6"][i]}
          >
            <div className={`sticker h-full p-6 sm:p-8 tone-${s.tone}`}>
              <h3 className="display text-[clamp(2rem,3.4vw,3.4rem)]">{s.group}</h3>
              <ul className="mt-6 flex flex-wrap gap-3">
                {s.items.map((it) => (
                  <li
                    key={it}
                    className="cursor-default rounded-full border-[3px] border-ink bg-white px-5 py-2 text-lg font-bold transition-transform duration-200 [transition-timing-function:var(--ease-out)] hover:-translate-y-1 hover:-rotate-2"
                  >
                    {it}
                  </li>
                ))}
              </ul>
            </div>
          </Reveal>
        ))}
      </div>
    </section>
  );
}
