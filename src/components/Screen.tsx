import { type ReactNode } from "react";
import { cx } from "../data.ts";

export default function Screen({ id, title, onBack, children }: { id: string; title: string; onBack: () => void; children: ReactNode; }) {
  return (
    <>
      <div id={id} className="flex items-center gap-[1em] mb-[2vh] text-[clamp(16px,min(1.4vw,2.8vh),60px)]">
        <button onClick={onBack} className="font-display text-[1em] bg-white text-black px-[1em] py-[.25em] skew-x-[-10deg] border-[.19em] border-black cursor-pointer hover:bg-black hover:text-white focus-visible:outline-[.125em] focus-visible:outline-white">
          &#9664; BACK
        </button>
        <h2 className="font-display text-[3em] leading-none bg-black pl-[.25em] pr-[.35em] py-[.05em] skew-x-[-10deg] rotate-[-1.5deg] shadow-[.07em_.07em_0_#fff] animate-slidein">{title}</h2>
      </div>

      <div className={cx("absolute inset-x-[5vw] top-[16vh] bottom-[4vh] min-h-0 overflow-hidden grid gap-[3vw] grid-cols-1 md:grid-cols-[1fr_1.25fr] md:overflow-visible")}>
        {children}
      </div>
    </>
  );
}