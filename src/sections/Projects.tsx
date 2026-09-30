import { useState, useEffect, useRef, type ReactNode } from "react";
import { cx, projects as rawProjects } from "../data.ts";

import { P } from "../components/Typography.tsx";
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
      className={cx("font-display text-lg no-underline text-black bg-white px-4 py-1 skew-x-[-10deg] border-[3px] transition duration-150",
        "hover:bg-p5red hover:text-white hover:scale-105 hover:-rotate-2 focus-visible:bg-p5red focus-visible:text-white focus-visible:outline-none",
        onDark ? "border-p5red" : "border-black")}>
      {children}
    </a>
  );
}

function ArrowBtn({ onClick, children, label }: { onClick: () => void; children: ReactNode; label: string }) {
  return (
    <button onClick={onClick} aria-label={label}
      className="self-center bg-white text-black font-display text-lg px-6 py-0.5 skew-x-[-10deg] border-[3px] border-black cursor-pointer transition duration-150 hover:bg-p5red hover:text-white hover:scale-105">
      {children}
    </button>
  );
}

export default function Projects({ go }: SectionProps) {
  const [pi, setPi] = useState(0);
  const viaKey = useRef(false);
  const listRef = useRef<HTMLUListElement>(null);
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
      <div className="flex h-full min-h-0 flex-col gap-2">
        <ArrowBtn onClick={() => step(-1)} label="Previous project">&#9650;</ArrowBtn>

        <ul ref={listRef}
          className="relative list-none m-0 min-h-0 flex-1 overflow-y-auto pl-3 pr-8 py-3 flex flex-col gap-1 scrollbar-width-none [&::-webkit-scrollbar]:hidden">
          {projects.map((x, i) => (
            <li key={`${x.name}-${i}`} id={`project-${i}`}
              style={{ animationDelay: `${0.2 + i * 0.08}s` }}
              onMouseEnter={() => pick(i)} onClick={() => pick(i)}
              className={cx("relative cursor-pointer font-display text-[clamp(18px,2vw,26px)] leading-tight border-[3px] px-4 py-2 skew-x-[-8deg] transition duration-150 animate-slidein",
                i === pi
                  ? "bg-white text-p5red border-black scale-105 translate-x-3 shadow-[5px_5px_0_#000] z-10"
                  : cx("bg-black text-white border-white", i % 2 ? "rotate-1" : "rotate-[-1.5deg]"))}>
              {!x.end && <span aria-hidden className="mr-2">★</span>}
              {x.name}
              <small className="flex flex-wrap items-baseline justify-between gap-x-3 font-body text-base font-semibold">
                <span className="opacity-80">{x.header}</span>
                <span className="text-base opacity-80 tracking-wider">{range(x)}</span>
              </small>

              {!x.end && (
                <span className="absolute right-2 top-1 bg-p5red text-white font-display text-xs tracking-wider px-2 py-0.5 border-2 border-black -rotate-3">
                  NOW
                </span>
              )}
            </li>
          ))}
        </ul>

        <ArrowBtn onClick={() => step(1)} label="Next project">&#9660;</ArrowBtn>
      </div>

      <div key={p.name + pi} className="relative p-5 bg-white text-black border-[3px] border-black [clip-path:polygon(0_0,100%_2%,98%_100%,2%_98%)] animate-flip">
        <span className="absolute right-6 top-3 font-display text-base tracking-widest opacity-60">
          {pi + 1}/{projects.length}
        </span>

        <div className="font-display text-[clamp(26px,3.4vw,42px)] leading-none text-p5red skew-x-[-8deg] [text-shadow:3px_3px_0_#000]">{p.name}</div>

        <div className="flex flex-wrap items-center gap-2 mt-2">
          <span className="bg-black text-white font-display text-sm tracking-wider px-3 py-0.5 skew-x-[-10deg]">
            {range(p)}
          </span>
          {ongoing && (
            <span className="bg-p5red text-white font-display text-sm tracking-wider px-3 py-0.5 skew-x-[-10deg] border-2 border-black">
              IN PROGRESS
            </span>
          )}
        </div>

        <P>{p.description}</P>

        <ul className="list-none m-0 p-0 mb-3 flex flex-col gap-1.5">
          {p.highlights.map(h => (
            <li key={h} className="flex gap-2 font-body font-semibold text-lg leading-snug">
              <span aria-hidden className="mt-2 size-2.5 shrink-0 rotate-45 bg-p5red border border-black" />
              {h}
            </li>
          ))}
        </ul>

        <div className="flex flex-wrap gap-2 my-3">
          {p.stack.map(t => <span key={t} className="bg-p5red text-white font-bold text-base px-3 py-0.5 skew-x-[-10deg]">{t}</span>)}
        </div>
        {p.url && <LinkBtn href={p.url}>VIEW CODE</LinkBtn>}
      </div>
    </Screen>
  );
}