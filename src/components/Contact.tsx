"use client";

import { useState } from "react";
import { profile } from "@/data/content";
import Reveal from "./Reveal";
import { Sparkle } from "./Doodles";

export default function Contact() {
  const [copied, setCopied] = useState(false);

  const copy = async () => {
    try {
      await navigator.clipboard.writeText(profile.email);
      setCopied(true);
      setTimeout(() => setCopied(false), 1800);
    } catch {
      window.location.href = `mailto:${profile.email}`;
    }
  };

  return (
    <footer id="contact" className="mt-10 border-t-[3px] border-ink bg-yellow">
      <div className="wrap pb-6 pt-[clamp(70px,10vw,140px)]">
        <Reveal>
          <h2 className="display text-[clamp(4.5rem,17vw,18rem)]">
            say hi
            <Sparkle className="ml-[0.1em] inline-block h-[0.6em] w-[0.6em] align-baseline" fill="#fff" />
          </h2>
        </Reveal>
        <Reveal delay={0.08} className="mt-8 max-w-[44ch] text-2xl font-semibold leading-snug">
          <p>Building something with agents, retrieval or voice? Email me, or hire me for a freelance project on Upwork.</p>
        </Reveal>

        <Reveal delay={0.14} className="mt-10 flex flex-wrap gap-3">
          <a href={`mailto:${profile.email}`} className="btn">
            {profile.email}
          </a>
          <button type="button" onClick={copy} className="btn btn-light" aria-live="polite">
            {copied ? "Copied" : "Copy email"}
          </button>
          <a href={profile.linkedin} target="_blank" rel="noopener noreferrer" className="btn btn-light">
            LinkedIn <span aria-hidden>↗</span>
          </a>
          <a href={profile.github} target="_blank" rel="noopener noreferrer" className="btn btn-light">
            GitHub <span aria-hidden>↗</span>
          </a>
          <a href={profile.upwork} target="_blank" rel="noopener noreferrer" className="btn btn-light">
            Hire me on Upwork <span aria-hidden>↗</span>
          </a>
          <a href={profile.resume} target="_blank" rel="noopener noreferrer" className="btn btn-light">
            Resume <span aria-hidden>↗</span>
          </a>
        </Reveal>

        <p className="display mt-[clamp(60px,9vw,130px)] whitespace-nowrap text-center text-[clamp(2.5rem,12.4vw,17rem)] leading-[0.8]">
          chitraksh suri
        </p>
        <p className="mt-6 text-center text-[15px] font-semibold">
          Designed and built by me. Next.js, Tailwind and Framer Motion.
        </p>
      </div>
    </footer>
  );
}
