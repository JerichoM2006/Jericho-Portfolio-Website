import { useState, useCallback, useEffect } from "react";

import { cx, type Section } from "./data.ts";

import MainMenu from "./sections/MainMenu";
import Profile from "./sections/Profile";
import Projects from "./sections/Projects";
import Links from "./sections/Links";

export type SectionProps = {
  go: (s: Section) => void
}

function App() {
  const [activeSection, setActiveSection] = useState<Section>("menu");
  const [busy, setBusy] = useState(false);
  const [wipe, setWipe] = useState(false);

  const go = useCallback((s: Section) => {
    if (busy) return;
    setBusy(true); setWipe(true);
    setTimeout(() => setActiveSection(s), 650);
    setTimeout(() => { setWipe(false); setBusy(false); }, 1300);
  }, [busy]);

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key == "Escape" && activeSection != "menu") {
        go("menu");
      }
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [go]);

  return (
    <div className="fixed inset-0 overflow-hidden bg-p5red text-white font-body">
      
      <div className="absolute inset-0 overflow-hidden">
        <div className="halftone absolute inset-0" />
        <div className="absolute left-[-10%] top-[-5%] w-[60%] h-[112%] bg-p5black [clip-path:polygon(0_0,100%_0,72%_100%,0_100%)] animate-shardx" />
        <div className="absolute right-[-5%] bottom-[-8%] w-[55%] h-[35%] bg-p5black [clip-path:polygon(30%_0,100%_20%,100%_100%,0_100%)] animate-shardy" />
        <div className="absolute right-[8%] top-[-4%] w-[16%] h-[20%] bg-white [clip-path:polygon(0_0,100%_0,60%_100%)] animate-shardy" />
        <svg viewBox="-100 -100 200 200" className="absolute right-[-10%] top-1/2 -translate-y-1/2 w-[min(70vh,60vw)] animate-spin-slow">
          <polygon points="0,-95 27,-30 95,-29 42,15 59,80 0,42 -59,80 -42,15 -95,-29 -27,-30" fill="#000" stroke="#fff" strokeWidth="3" />
        </svg>
      </div>

      <div className="absolute inset-0 z-10 overflow-hidden">
        {activeSection == "menu" && <MainMenu go={go} />}
        {activeSection == "profile" && <Profile go={go} />}
        {activeSection == "projects" && <Projects go={go} />}
        {activeSection == "links" && <Links go={go} />}
      </div>

      <div className="fixed inset-0 z-50 pointer-events-none overflow-hidden">
        {["bg-white", "bg-p5red", "bg-black"].map((c, i) => (
          <i key={c} style={{ animationDelay: `${i * 0.08}s` }}
            className={cx("absolute top-[-10%] -left-1/2 h-[120%] w-[200%] skew-x-[-20deg] translate-x-[-150%]", c, wipe && "animate-sweep")} />
        ))}
      </div>      
    </div>
  )
}

export default App
