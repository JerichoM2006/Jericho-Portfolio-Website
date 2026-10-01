import { useState, useEffect, useLayoutEffect, useCallback, useRef, type ReactNode } from "react";
import { cx, projects as rawProjects } from "../data.ts";

import Screen from "../components/Screen.tsx";
import type { SectionProps } from "../App.tsx";

const range = (p: { start: string; end?: string }) =>
  `${p.start} – ${p.end ? p.end : "PRESENT"}`;

const key = (date: string) => {
  const [month, year] = date.split("/");
  return `${year}-${month}`;
};
const projects = [...rawProjects].sort(
  (a, b) => Number(!!a.end) - Number(!!b.end) || key(b.start).localeCompare(key(a.start))
);

function LinkBtn({ href, children, onDark }: { href: string; children: ReactNode; onDark?: boolean }) {
  const external = href.startsWith("http");
  return (
    <a href={href} {...(external ? { target: "_blank", rel: "noopener" } : {})}
      className={cx("inline-block font-display text-[1.1em] no-underline text-black bg-white px-[1em] py-[.2em] skew-x-[-10deg] border-[.17em] transition duration-150",
        "hover:bg-p5red hover:text-white hover:scale-105 hover:-rotate-2 focus-visible:bg-p5red focus-visible:text-white focus-visible:outline-none",
        onDark ? "border-p5red" : "border-black")}>
      {children}
    </a>
  );
}

function ArrowBtn({ onClick, children, label }: { onClick: () => void; children: ReactNode; label: string }) {
  return (
    <button onClick={onClick} aria-label={label}
      className="self-center bg-white text-black font-display text-[.75em] px-[1.3em] py-[.1em] skew-x-[-10deg] border-[.17em] border-black cursor-pointer transition duration-150 hover:bg-p5red hover:text-white hover:scale-105">
      {children}
    </button>
  );
}

export default function Projects({ go }: SectionProps) {
  const [pi, setPi] = useState(0);
  const viaKey = useRef(false);
  const listRef = useRef<HTMLUListElement>(null);
  const panelRef = useRef<HTMLDivElement>(null);
  const p = projects[pi];
  const ongoing = !p.end;

  const step = (d: number) => {
    viaKey.current = true;
    setPi(i => (i + d + projects.length) % projects.length);
  };

  const fullyVisible = (i: number) => {
    const list = listRef.current;
    const el = document.getElementById(`project-${i}`);
    if (!list || !el) return false;
    const slack = 2;
    const top = el.offsetTop;
    const bottom = top + el.offsetHeight;
    return top >= list.scrollTop - slack && bottom <= list.scrollTop + list.clientHeight + slack;
  };

  const pick = (i: number) => {
    if (fullyVisible(i)) setPi(i);
  };

  const fit = useCallback(() => {
    const el = panelRef.current;
    if (!el) return;
    const fits = (s: number) => {
      el.style.fontSize = `${s}px`;
      return el.scrollHeight <= el.clientHeight + 1;
    };
    let lo = 8;
    let hi = Math.min(Math.max(16, Math.min(window.innerWidth * 0.017, window.innerHeight * 0.032)), 64);
    if (fits(hi)) return;
    while (hi - lo > 0.25) {
      const mid = (lo + hi) / 2;
      if (fits(mid)) lo = mid;
      else hi = mid;
    }
    el.style.fontSize = `${lo}px`;
  }, []);

  useLayoutEffect(() => {
    fit();
  }, [pi, fit]);

  useEffect(() => {
    window.addEventListener("resize", fit);
    document.fonts?.ready.then(fit);
    return () => window.removeEventListener("resize", fit);
  }, [fit]);

  useEffect(() => {
    if (viaKey.current) {
      viaKey.current = false;
      document.getElementById(`project-${pi}`)?.scrollIntoView({ behavior: "smooth", block: "nearest" });
    }
  }, [pi]);

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "ArrowDown") step(1);
      else if (e.key === "ArrowUp") step(-1);
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, []);

  return (
    <Screen id="projects" title="PROJECTS" onBack={() => go("menu")}>
      <div className="flex h-full min-h-0 flex-col gap-[.3em] text-[clamp(18px,min(2vw,3vh),56px)]">
        <ArrowBtn onClick={() => step(-1)} label="Previous project">&#9650;</ArrowBtn>

        <div className="min-h-0 flex-1 @container-size">
          <ul ref={listRef}
            className="relative list-none m-0 h-full overflow-y-auto pl-[.45em] pr-[1.2em] py-[.45em] flex flex-col gap-[.15em] text-[min(6.25cqh,8cqw)] scrollbar-none [&::-webkit-scrollbar]:hidden">
            {projects.map((x, i) => (
              <li key={`${x.name}-${i}`} id={`project-${i}`}
                style={{ animationDelay: `${0.2 + i * 0.08}s` }}
                onMouseEnter={() => pick(i)} onClick={() => pick(i)}
                className={cx("relative shrink-0 cursor-pointer font-display leading-tight border-[.12em] px-[.6em] py-[.3em] skew-x-[-8deg] transition duration-150 animate-slidein",
                  i === pi
                    ? "bg-white text-p5red border-black scale-105 translate-x-[.45em] shadow-[.2em_.2em_0_#000] z-10"
                    : cx("bg-black text-white border-white", i % 2 ? "rotate-1" : "rotate-[-1.5deg]"))}>
                {!x.end && <span aria-hidden className="mr-[.3em]">★</span>}
                {x.name}
                <small className="flex flex-wrap items-baseline justify-between gap-x-[.5em] font-body text-[.62em] font-semibold">
                  <span className="opacity-80">{x.header}</span>
                  <span className="opacity-80 tracking-wider">{range(x)}</span>
                </small>

                {!x.end && (
                  <span className="absolute right-[.3em] top-[.15em] bg-p5red text-white font-display text-[.46em] tracking-wider px-[.7em] py-[.2em] border-[.17em] border-black -rotate-3">
                    NOW
                  </span>
                )}
              </li>
            ))}
          </ul>
        </div>

        <ArrowBtn onClick={() => step(1)} label="Next project">&#9660;</ArrowBtn>
      </div>

      <div ref={panelRef} key={p.name + pi}
        className="relative min-h-0 overflow-hidden p-[1.1em] bg-white text-black border-[.17em] border-black [clip-path:polygon(0_0,100%_2%,98%_100%,2%_98%)] animate-flip">
        <span className="absolute right-[1.2em] top-[.7em] font-display text-[.9em] tracking-widest opacity-60">
          {pi + 1}/{projects.length}
        </span>

        <div className="pr-[2.5em] font-display text-[2.4em] leading-none text-p5red skew-x-[-8deg] [text-shadow:.07em_.07em_0_#000]">{p.name}</div>

        <div className="flex flex-wrap items-center gap-[.5em] mt-[.5em]">
          <span className="bg-black text-white font-display text-[.8em] tracking-wider px-[.75em] py-[.12em] skew-x-[-10deg]">
            {range(p)}
          </span>
          {ongoing && (
            <span className="bg-p5red text-white font-display text-[.8em] tracking-wider px-[.75em] py-[.12em] skew-x-[-10deg] border-[.12em] border-black">
              IN PROGRESS
            </span>
          )}
        </div>

        <p className="my-[.6em] font-body font-semibold text-[1.05em] leading-snug">{p.description}</p>

        <ul className="list-none m-0 p-0 mb-[.75em] flex flex-col gap-[.35em]">
          {p.highlights.map(h => (
            <li key={h} className="flex gap-[.5em] font-body font-semibold text-[1em] leading-snug">
              <span aria-hidden className="mt-[.45em] size-[.6em] shrink-0 rotate-45 bg-p5red border-[.06em] border-black" />
              {h}
            </li>
          ))}
        </ul>

        <div className="flex flex-wrap gap-[.5em] my-[.75em]">
          {p.stack.map(t => <span key={t} className="bg-p5red text-white font-bold text-[.9em] px-[.75em] py-[.12em] skew-x-[-10deg]">{t}</span>)}
        </div>
        {p.url && <LinkBtn href={p.url}>VIEW CODE</LinkBtn>}
      </div>
    </Screen>
  );
}