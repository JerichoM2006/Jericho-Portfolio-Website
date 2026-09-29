import { type ReactNode } from "react"
import { cx } from "../data"

const Skewed = ({ className, children }: { className?: string; children: ReactNode }) => (
  <span className={cx("inline-block skew-x-[-10deg]", className)}>{children}</span>
);

export function Heading({ children, dark }: { children: ReactNode; dark?: boolean }) {
  return (
    <h3 className="mt-3 mb-2">
      <Skewed className={cx("font-display text-xl px-3 py-0.5 text-white", dark ? "bg-black" : "bg-p5red")}>{children}</Skewed>
    </h3>
  );
}

export function P({ children }: { children: ReactNode }) {
  return <p className="mt-2 text-[clamp(16px,1.4vw,20px)] font-semibold leading-tight">{children}</p>;
}