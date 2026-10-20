import { profile } from "@/data/content";

const links = [
  ["Work", "#work"],
  ["Experience", "#experience"],
  ["Skills", "#skills"],
  ["Research", "#research"],
  ["Hire", "#hire"],
  ["Contact", "#contact"],
];

export default function Nav() {
  return (
    <header className="fixed inset-x-0 top-0 z-50 px-[var(--gutter)] pt-4">
      <nav
        aria-label="Main"
        className="mx-auto flex h-16 max-w-[1600px] items-center justify-between rounded-full border-[3px] border-ink bg-white pl-3 pr-3"
      >
        <a href="#top" className="flex items-center gap-3 rounded-full pr-3 font-bold" aria-label={`${profile.name}, back to top`}>
          <span className="grid h-10 w-10 place-items-center rounded-full bg-ink text-bg">
            <svg viewBox="0 0 100 100" className="h-5 w-5" aria-hidden>
              <path d="M50 4C54 34 66 46 96 50 66 54 54 66 50 96 46 66 34 54 4 50 34 46 46 34 50 4Z" fill="currentColor" />
            </svg>
          </span>
          <span className="display text-xl tracking-tight">chitraksh</span>
        </a>

        <ul className="hidden items-center gap-5 sm:flex text-[14px] font-bold uppercase tracking-wide lg:gap-9 lg:text-[15px]">
          {links.map(([label, href]) => (
            <li key={href} className={href === "#work" || href === "#hire" || href === "#contact" ? "" : "hidden lg:block"}>
              <a href={href} className="py-2 transition-colors duration-150 hover:text-coral">
                {label}
              </a>
            </li>
          ))}
        </ul>

        <a href={profile.resume} target="_blank" rel="noopener noreferrer" className="btn !min-h-10 !px-5 !text-[13px]">
          Resume
        </a>
      </nav>
    </header>
  );
}
