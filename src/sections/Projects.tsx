import { useState, useEffect, type ReactNode } from "react";
import { cx, PROJECTS } from "../data.ts";

import { P } from "../components/Typography.tsx";
import Screen from "../components/Screen.tsx";
import type { SectionProps } from "../App.tsx";

function LinkBtn({ href, children, onDark }: { href: string; children: ReactNode; onDark?: boolean }) {
  const external = href.startsWith("http");
  return (
    <a href={href} {...(external ? { target: "_blank", rel: "noopener" } : {})}
      className={cx("font-display text-lg no-underline text-black bg-white px-4 py-1 -skew-x-[10deg] border-[3px] transition duration-150",
        "hover:bg-p5red hover:text-white hover:scale-105 hover:-rotate-2 focus-visible:bg-p5red focus-visible:text-white focus-visible:outline-none",
        onDark ? "border-p5red" : "border-black")}>
      {children}
    </a>
  );
}

export default function Projects({ go }: SectionProps) {
  const [pi, setPi] = useState(0);
  const p = PROJECTS[pi];

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key == "ArrowDown") {
        setPi((pi + 1) % PROJECTS.length);
      } else if (e.key == "ArrowUp") {
        setPi((pi - 1 + PROJECTS.length) % PROJECTS.length);
      } 
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [pi]);

  return (
      <Screen id="projects" title="PROJECTS" onBack={() => go("menu")}>
        <ul className="list-none m-0 p-0 pr-4 py-2 flex flex-col gap-1">
          {PROJECTS.map((x, i) => (
            <li key={x.name} style={{ animationDelay: `${0.2 + i * 0.08}s` }} onMouseEnter={() => setPi(i)} onClick={() => setPi(i)}
              className={cx("cursor-pointer font-display text-[clamp(18px,2vw,26px)] leading-tight border-[3px] px-4 py-2 -skew-x-[8deg] transition duration-150 animate-slidein",
                i === pi ? "bg-white text-p5red border-black scale-105 translate-x-3 shadow-[5px_5px_0_#000] z-10" : cx("bg-black text-white border-white", i % 2 ? "rotate-1" : "-rotate-[1.5deg]"))}>
              {x.name}<small className="block font-body text-base font-semibold opacity-80">{x.header}</small>
            </li>
          ))}
        </ul>

        <div key={p.name} className="p-5 bg-white text-black border-[3px] border-black [clip-path:polygon(0_0,100%_2%,98%_100%,2%_98%)] animate-flip">
          <div className={cx("font-display text-[clamp(26px,3.4vw,42px)] leading-none text-p5red -skew-x-[8deg] [text-shadow:3px_3px_0_#000]")}>{p.name}</div>
          <P>{p.description}</P>
          <div className="flex flex-wrap gap-2 my-3">
            {p.stack.map(t => <span key={t} className="bg-p5red text-white font-bold text-base px-3 py-0.5 -skew-x-[10deg]">{t}</span>)}
          </div>
          <LinkBtn href={p.url}>VIEW CODE</LinkBtn>
        </div>
      </Screen>
    )
}