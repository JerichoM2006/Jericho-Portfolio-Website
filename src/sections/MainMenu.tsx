import { useState, useEffect } from "react";
import { menu, cx, firstName, lastName } from "../data.ts";

import type { SectionProps } from "../App.tsx";

export default function MainMenu({ go }: SectionProps) {
  const indent = ["ml-0", "ml-[4vw]", "ml-[1vw]", "ml-[5vw]"];
  const [mi, setMi] = useState(0);

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key == "ArrowDown") {
        setMi((mi + 1) % menu.length);
      } else if (e.key == "ArrowUp") {
        setMi((mi - 1 + menu.length) % menu.length);
      } else if (e.key == "Enter") {
        go(menu[mi].section);
      }
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [mi]);

  return (
    <>
      <div className="absolute right-[6vw] top-[8vh] text-right -rotate-6 z-10 animate-pop">
        <b className="inline-block font-display font-normal text-[clamp(30px,6vw,76px)] leading-[.9] bg-black px-[.2em] py-[.05em] skew-x-[-8deg] shadow-[6px_6px_0_#fff]">{firstName.toUpperCase()}<br />{lastName.toUpperCase()}</b><br />
        <span className="inline-block mt-3 bg-white text-black font-display text-[clamp(13px,1.8vw,22px)] px-4 py-1 skew-x-[-8deg]">CS PORTFOLIO</span>
      </div>

      <ul className="absolute left-[5vw] top-1/2 -translate-y-1/2 w-[min(8.5em,86vw)] text-[clamp(26px,min(3.6vw,8vh),96px)] list-none p-0 m-0">
        {menu.map((m, i) => (
          <li key={m.name} style={{ animationDelay: `${0.25 + i * 0.1}s` }}
            className={cx("relative -my-1 cursor-pointer animate-slidein", indent[i],
              i == mi && "before:content-[''] before:absolute before:left-[-0.7em] before:top-[75%] before:mt-[-0.4em] before:border-[0.4em] before:border-transparent before:border-l-[0.65em] before:border-l-p5red before:border-r-0 before:filter-[drop-shadow(-3px_0_0_var(--color-white))] before:z-10 before:animate-nudge")}
            onMouseEnter={() => setMi(i)} onClick={() => { go(m.section); }}>

            <span className={cx("block border-[0.06em] pl-[.6em] pr-[.9em] pt-[.12em] pb-[.06em] font-display leading-[1.05] skew-x-[-8deg] [clip-path:polygon(0_8%,96%_0,100%_90%,4%_100%)] transition duration-150",
              i == mi ? "bg-white text-p5red border-white -rotate-3 scale-[1.1] translate-x-[0.4em] animate-jolt [text-shadow:3px_3px_0_#000]"
                : cx("bg-black text-white border-black", i % 2 ? "rotate-2" : "-rotate-3"))}>
              {m.name}
            </span>
          </li>
        ))}
      </ul>

      <div className="absolute right-[6vw] bottom-[9vh] max-w-[min(360px,44vw)] hidden sm:block bg-white text-black font-bold text-[clamp(15px,1.5vw,20px)] leading-tight px-4 py-2.5 rotate-2 -skew-x-6 border-l-8 border-p5red shadow-[6px_6px_0_#000]">{menu[mi].description}</div>
      <div className="absolute left-[5vw] bottom-[4vh] bg-black px-3 py-1 text-base font-bold tracking-wider skew-x-[-10deg]">&#9650;&#9660; SELECT &nbsp; ENTER CONFIRM &nbsp; ESC BACK</div>
    </>
  )
}