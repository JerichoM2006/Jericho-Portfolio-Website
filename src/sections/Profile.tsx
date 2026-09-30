import type { ReactNode } from "react";
import { cx } from "../data.ts";

import type { SectionProps } from "../App.tsx";

import Screen from "../components/Screen.tsx";
import { P, Heading } from "../components/Typography.tsx";

const CARD = "p-5 overflow-auto border-[3px] [clip-path:polygon(0_0,100%_2%,98%_100%,2%_98%)] animate-slidein [animation-delay:.1s]";

const LANGUAGES = [
  "C++ (OpenGL, CUDA)", "Python (NumPy, Pandas, PyTorch, OpenCV, PyQt5)", "C# (Unity)", "C", "Haskell", "Java",
  "GDScript (Godot)", "TypeScript (React)", "HTML", "JavaScript", "CSS", "GLSL", "HLSL",
];
const TOOLS = ["Git", "SQLite", "PostgreSQL", "CMake", "pip", "poetry", "npm"];

function Stat({ label, children, big }: { label: string; children: ReactNode; big?: boolean }) {
  return (
    <div className="skew-x-[-8deg] border-[3px] border-black shadow-[4px_4px_0_#d92323] bg-white min-w-30">
      <div className="bg-black text-white font-display text-xs tracking-widest px-2 py-0.5">{label}</div>
      <div className={cx("px-3 py-1 font-display leading-none text-black", big ? "text-3xl text-p5red [text-shadow:2px_2px_0_#000]" : "text-lg pt-2 pb-2")}>
        {children}
      </div>
    </div>
  );
}

function Tag({ children }: { children: ReactNode }) {
  return (
    <span className="inline-block skew-x-[-8deg] border-2 border-white bg-black px-2 py-0.5 font-body text-base font-semibold tracking-wide text-white transition-colors hover:bg-p5red hover:border-black hover:text-white">
      {children}
    </span>
  );
}

function Contact({ label, href, children }: { label: string; href: string; children: ReactNode }) {
  return (
    <a
      href={href}
      className="flex items-stretch skew-x-[-8deg] border-[3px] border-black bg-black text-white shadow-[4px_4px_0_#d92323] transition-transform hover:-translate-y-0.5 hover:animate-jolt focus-visible:outline-3 focus-visible:outline-p5red"
    >
      <span className="bg-p5red px-3 py-1 font-display text-sm tracking-widest">{label}</span>
      <span className="px-3 py-1 font-body text-lg font-semibold tracking-wide">{children}</span>
    </a>
  );
}

function Education({name, grade}: {name: string; grade: string}) {
  return (
    <div className="mt-2 skew-x-[-8deg] border-2 border-white bg-black">
      <div className="origin-left animate-fill [animation-delay:.6s] bg-p5red px-3 py-1 flex items-baseline justify-between">
        <span className="font-display text-lg tracking-widest text-white">{name}</span>
        <span className="font-display text-2xl text-white [text-shadow:2px_2px_0_#000]">{grade}</span>
      </div>
    </div>
  );
}

export default function Profile({ go }: SectionProps) {
  return (
    <>
      <Screen id="profile" title="PROFILE" onBack={() => go("menu")}>
        <div className={cx(CARD, "bg-white text-black border-black")}>
          <div className="font-display text-[clamp(26px,3.4vw,42px)] leading-none text-p5red skew-x-[-8deg] [text-shadow:3px_3px_0_#000]">
            JERICHO JOHN MENDOZA
          </div>

          <div className="mt-3 inline-block -rotate-1 bg-black px-4 py-1 [clip-path:polygon(0_0,100%_0,96%_100%,0_100%)]">
            <span className="font-display text-lg tracking-widest text-white">COMPUTER SCIENCE</span>
          </div>

          <div className="flex flex-wrap gap-4 mt-5">
            <Stat label="YEAR" big>2</Stat>
            <Stat label="COURSE">BSc Computer Science</Stat>
            <Stat label="BASE">University of Bath, UK</Stat>
            <Stat label="TARGET">Placement / Grad Role 2027</Stat>
          </div>

          <P>I'm a second year Computer Science BSc student at the University of Bath, interested in AI, software development, simulations and high-performance computing. I enjoy exploring how technologies like GPU acceleration and multithreading can be used to build interesting and efficient applications.</P>

          <div className="flex flex-wrap gap-4 mt-3">
            <Contact label="CALL" href="tel:+4407850448645">+44 07850 448645</Contact>
            <Contact label="MAIL" href="mailto:jjm238@bath.ac.uk">jjm238@bath.ac.uk</Contact>
          </div>
        </div>

        <div className={cx(CARD, "bg-black border-white")}>
          <Heading>LANGUAGES</Heading>
          <div className="flex flex-wrap gap-2 mt-2 mb-4">
            {LANGUAGES.map((l) => <Tag key={l}>{l}</Tag>)}
          </div>

          <Heading>TOOLS</Heading>
          <div className="flex flex-wrap gap-2 mt-2 mb-4">
            {TOOLS.map((t) => <Tag key={t}>{t}</Tag>)}
          </div>

          <Heading>EDUCATION</Heading>
          <Education name="A Levels (Maths, Further Maths, Physics, CS)" grade="A*A*A*A" />
          <Education name="BSc Computer Science Year 1" grade="First" />
        </div>
      </Screen>
    </>
  )
}