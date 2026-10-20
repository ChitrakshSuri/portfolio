import { hire, profile } from "@/data/content";
import Reveal from "./Reveal";
import { Sparkle } from "./Doodles";

export default function Hire() {
  return (
    <section id="hire" className="wrap py-[clamp(70px,10vw,140px)]">
      <Reveal>
        <h2 className="display text-[clamp(4rem,13vw,13rem)]">
          hire <span className="rounded-[0.2em] bg-yellow px-[0.12em]">me</span>
        </h2>
      </Reveal>
      <Reveal delay={0.08} className="mt-6 max-w-[52ch] text-xl font-medium">
        <p>I take on freelance projects through Upwork or direct. Here is what I have done for clients, and what I can do for you.</p>
      </Reveal>

      {/* results */}
      <ul className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
        {hire.results.map((r, i) => (
          <Reveal key={r.big} as="li" delay={i * 0.06}>
            <div className={`sticker h-full p-6 tone-${r.tone} ${i % 2 ? "rotate-1" : "-rotate-1"}`}>
              <p className="display text-[clamp(3rem,5vw,5rem)]">{r.big}</p>
              <p className="mt-3 text-lg font-semibold leading-snug">{r.text}</p>
            </div>
          </Reveal>
        ))}
      </ul>

      {/* offers */}
      <div className="mt-10 grid gap-6 lg:grid-cols-3">
        {hire.offers.map((o, i) => (
          <Reveal key={o.title} delay={i * 0.06}>
            <article className={`sticker h-full p-6 sm:p-8 tone-${o.tone}`}>
              <h3 className="display text-[clamp(2rem,3.2vw,3.2rem)]">{o.title}</h3>
              <p className="mt-4 text-lg font-medium">{o.text}</p>
            </article>
          </Reveal>
        ))}
      </div>

      {/* production-ready */}
      <Reveal className="mt-10">
        <article className="sticker relative overflow-hidden bg-white p-6 sm:p-10 lg:p-14">
          <div className="grid gap-10 lg:grid-cols-[1.1fr_1fr] lg:items-center">
            <div>
              <h3 className="display text-[clamp(2.6rem,4.8vw,4.8rem)]">{hire.production.title}</h3>
              <p className="mt-5 max-w-[44ch] text-xl font-semibold leading-snug">{hire.production.text}</p>
              <div className="mt-8 flex flex-wrap gap-3">
                <a href={profile.upwork} target="_blank" rel="noopener noreferrer" className="btn">
                  Hire me on Upwork <span aria-hidden>↗</span>
                </a>
                <a
                  href={`mailto:${profile.email}?subject=${encodeURIComponent("Project enquiry")}`}
                  className="btn btn-light"
                >
                  Email me
                </a>
              </div>
            </div>
            <ul className="grid gap-3 sm:grid-cols-2">
              {hire.production.checks.map((c) => (
                <li key={c} className="flex items-start gap-3 rounded-2xl border-[3px] border-ink bg-mint px-4 py-3 text-lg font-bold leading-snug">
                  <Sparkle className="mt-1 h-5 w-5 shrink-0" fill="#fff" />
                  <span>{c}</span>
                </li>
              ))}
            </ul>
          </div>
        </article>
      </Reveal>

      {/* trust + quote */}
      <div className="mt-10 grid gap-6 lg:grid-cols-[1fr_1.1fr]">
        <Reveal>
          <ul className="flex h-full flex-wrap content-start gap-3">
            {hire.trust.map((t) => (
              <li key={t} className="rounded-full border-[3px] border-ink bg-white px-5 py-2 text-lg font-bold">
                {t}
              </li>
            ))}
          </ul>
        </Reveal>
        <Reveal delay={0.08}>
          <figure className="sticker bg-pink p-6 sm:p-8">
            <blockquote className="text-xl font-semibold leading-snug sm:text-2xl">&ldquo;{hire.quote.text}&rdquo;</blockquote>
            <figcaption className="mt-4 text-[17px] font-bold">{hire.quote.by}</figcaption>
          </figure>
        </Reveal>
      </div>
    </section>
  );
}
