import { useState, useEffect, useRef } from "react";
import { cx, linkItems, type LinkItem} from "../data.ts";
import type { SectionProps } from "../App.tsx";
import Screen from "../components/Screen.tsx";

function LinkCard({ item, setKi: setKi, index, isSelected }: { item: LinkItem; setKi: (index: number) => void; index: number; isSelected: boolean }) {
  return (
    <a key={item.name} id={`link-${index}`} href={item.url} target="_blank" rel="noopener" onMouseEnter={() => setKi(index)} onFocus={() => setKi(index)}
      style={{ animationDelay: `${0.3 + Math.min(index, 4) * 0.15}s` }}
      className={cx("relative block flex-none snap-center w-[min(250px,60vw)] bg-white text-black no-underline border-[3px] border-black transition duration-200 animate-drop focus-visible:outline-none",
        isSelected ? "scale-110 rotate-0 z-10 shadow-[10px_10px_0_#e60012]" : cx("shadow-[6px_6px_0_#000]", ["-rotate-6", "rotate-3 md:translate-y-6", "-rotate-3"][index % 3]))}>
      <div className="bg-black text-white flex items-center gap-2 px-3 py-1.5">
        <svg viewBox="-100 -100 200 200" className={cx("w-6 h-6", isSelected && "animate-spin-fast")}>
          <polygon points="0,-95 27,-30 95,-29 42,15 59,80 0,42 -59,80 -42,15 -95,-29 -27,-30" fill="#e60012" stroke="#fff" strokeWidth="8" />
        </svg>
      </div>

      <div className="px-4 pt-4 pb-3">
        <div className={cx("font-display text-[clamp(26px,3.6vw,42px)] leading-none text-p5red -skew-x-[8deg] [text-shadow:3px_3px_0_#000]")}>{item.name}</div>
        <div className="mt-2 inline-block bg-black text-white font-display text-base px-2 -skew-x-[10deg]">{item.handle}</div>
        <p className="mt-2 text-[clamp(14px,1.3vw,18px)] font-semibold leading-tight">{item.description}</p>
      </div>

      <div className="bg-p5red text-white font-display text-center py-1 text-lg tracking-wider">{isSelected ? "\u25B6 OPEN" : "TAKE A LOOK"}</div>
    </a>
  );
}

export default function Links({ go }: SectionProps) {
  const [ki, setKi] = useState(0);
  const viaKey = useRef(false);

  useEffect(() => {
    if (viaKey.current) {
      viaKey.current = false;
      document.getElementById(`link-${ki}`)?.scrollIntoView({ behavior: "smooth", inline: "center", block: "nearest" });
    }

    const onKey = (e: KeyboardEvent) => {
      if (e.key == "Enter") {
        window.open(linkItems[ki].url, "_blank", "noopener");
      }
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [ki]);

  const step = (d: number) => { viaKey.current = true; setKi(i => (i + d + linkItems.length) % linkItems.length); };

  return (
    <Screen id="links" title="LINKS" onBack={() => go("menu")}>
      <div className="flex h-full w-full flex-col items-center justify-center gap-6">
        <div className="relative w-full">
          <div onWheel={e => { if (Math.abs(e.deltaY) > Math.abs(e.deltaX)) e.currentTarget.scrollLeft += e.deltaY; }}
            className="relative flex gap-[3vw] overflow-x-auto snap-x px-[8vw] py-10 scrollbar-none [&::-webkit-scrollbar]:hidden">
          {linkItems.map((x, i) => {
            const sel = i === ki;
            return (
              <LinkCard key={x.name} setKi={setKi} item={x} index={i} isSelected={sel} />
            );
          })}
          </div>
        </div>
        
        <div className="relative mt-2 flex items-center gap-3 font-display text-lg">
          <button onClick={() => step(-1)} className="bg-white text-black px-4 py-1 skew-x-[-10deg] border-[3px] border-black cursor-pointer hover:bg-p5red hover:text-white">&#9664; PREV</button>
          <span className="bg-black px-4 py-1 skew-x-[-10deg] border-[3px] border-white">{String(ki + 1).padStart(2, "0")} / {String(linkItems.length).padStart(2, "0")}</span>
          <button onClick={() => step(1)} className="bg-white text-black px-4 py-1 skew-x-[-10deg] border-[3px] border-black cursor-pointer hover:bg-p5red hover:text-white">NEXT &#9654;</button>
        </div>
      </div>
    </Screen>
  )
}