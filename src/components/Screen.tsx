import { type ReactNode } from "react";
import { cx } from "../data.ts";

export default function Screen({ id, title, onBack, children }: { id: string; title: string; onBack: () => void; children: ReactNode; }) {
  return (
    <>
      <div id={id} className="flex items-center gap-4 mb-[2vh]">
        <button onClick={onBack} className="font-display text-base bg-white text-black px-4 py-1 skew-x-[-10deg] border-[3px] border-black cursor-pointer hover:bg-black hover:text-white focus-visible:outline-2 focus-visible:outline-white">
          &#9664; BACK
        </button>
        <h2 className="font-display text-[clamp(30px,4.5vw,56px)] leading-none bg-black pl-[.25em] pr-[.35em] py-[.05em] skew-x-[-10deg] rotate-[-1.5deg] shadow-[5px_5px_0_#fff] animate-slidein">{title}</h2>
      </div>

      <div className={cx("absolute inset-x-[5vw] top-[16vh] bottom-[4vh] min-h-0 overflow-hidden grid gap-[3vw] grid-cols-1 md:grid-cols-[1fr_1.25fr] md:overflow-visible")}>
        {children}
      </div>
    </>
  );
}