import type { ReactNode } from "react";
import { cx, firstName, lastName, languages, tools, educations } from "../data.ts";

import type { SectionProps } from "../App.tsx";

import Screen from "../components/Screen.tsx";
import { P, Heading } from "../components/Typography.tsx";

const CARD =
  "[--u:clamp(5px,min(.7vw,1.2vh),16px)] text-[length:calc(var(--u)*1.8)] " +
  "min-h-0 min-w-0 h-full overflow-hidden flex flex-col " +
  "p-[1em] border-[3px] [clip-path:polygon(0_0,100%_2%,98%_100%,2%_98%)] " +
  "animate-slidein [animation-delay:.1s]";

function Stat({ label, children, big }: { label: string; children: ReactNode; big?: boolean }) {
  return (
    <div className="skew-x-[-8deg] border-[3px] border-black shadow-[.25em_.25em_0_#d92323] bg-white min-w-0 max-w-full">
      <div className="bg-black text-white font-display text-[.75em] tracking-widest px-[.5em] py-[.1em]">{label}</div>
      <div
        className={cx(
          "px-[.6em] py-[.3em] font-display leading-none text-black break-words",
          big ? "text-[2em] text-p5red [text-shadow:.08em_.08em_0_#000]" : "text-[1.1em]"
        )}
      >
        {children}
      </div>
    </div>
  );
}

function Tag({ children }: { children: ReactNode }) {
  return (
    <span className="inline-block skew-x-[-8deg] border-2 border-white bg-black px-[.5em] py-[.1em] font-body text-[1em] font-semibold tracking-wide text-white transition-colors hover:bg-p5red hover:border-black hover:text-white">
      {children}
    </span>
  );
}

function Contact({ label, href, children }: { label: string; href: string; children: ReactNode }) {
  return (
    <a
      href={href}
      className="flex items-stretch max-w-full skew-x-[-8deg] border-[3px] border-black bg-black text-white shadow-[.25em_.25em_0_#d92323] transition-transform hover:-translate-y-0.5 hover:animate-jolt focus-visible:outline-3 focus-visible:outline-p5red"
    >
      <span className="bg-p5red px-[.6em] py-[.15em] font-display text-[.85em] tracking-widest">{label}</span>
      <span className="px-[.6em] py-[.15em] font-body text-[1.05em] font-semibold tracking-wide break-all">{children}</span>
    </a>
  );
}

function Education({ name, grade }: { name: string; grade: string }) {
  return (
    <div className="mt-[.4em] skew-x-[-8deg] border-2 border-white bg-black">
      <div className="origin-left animate-fill [animation-delay:.6s] bg-p5red px-[.6em] py-[.2em] flex items-baseline justify-between gap-[.6em]">
        <span className="font-display text-[1em] tracking-widest text-white">{name}</span>
        <span className="font-display text-[1.4em] text-white [text-shadow:.08em_.08em_0_#000] shrink-0">{grade}</span>
      </div>
    </div>
  );
}

export default function Profile({ go }: SectionProps) {
  return (
    <>
      <Screen id="profile" title="PROFILE" onBack={() => go("menu")}>
        <div className={cx(CARD, "bg-white text-black border-black gap-[.7em]")}>
          <div className="font-display text-[2.2em] leading-none text-p5red skew-x-[-8deg] [text-shadow:.07em_.07em_0_#000]">
            {(firstName + " " + lastName).toUpperCase()}
          </div>

          <div className="self-start -rotate-1 bg-black px-[.8em] py-[.15em] [clip-path:polygon(0_0,100%_0,96%_100%,0_100%)]">
            <span className="font-display text-[1em] tracking-widest text-white">COMPUTER SCIENCE</span>
          </div>

          <div className="flex flex-wrap gap-[.8em]">
            <Stat label="YEAR" big>2</Stat>
            <Stat label="COURSE">BSc Computer Science</Stat>
            <Stat label="BASE">University of Bath, UK</Stat>
            <Stat label="TARGET">Placement / Grad Role 2027</Stat>
          </div>

          <P>
            I'm a second year Computer Science BSc student at the University of Bath, interested in AI, software
            development, simulations and high-performance computing. I enjoy exploring how technologies like GPU
            acceleration and multithreading can be used to build interesting and efficient applications.
          </P>

          <div className="flex flex-wrap gap-[.8em]">
            <Contact label="CALL" href="tel:+4407850448645">+44 07850 448645</Contact>
            <Contact label="MAIL" href="mailto:jjm238@bath.ac.uk">jjm238@bath.ac.uk</Contact>
          </div>
        </div>

        <div className={cx(CARD, "bg-black border-white gap-[.5em]")}>
          <Heading>LANGUAGES</Heading>
          <div className="flex flex-wrap gap-[.4em] mb-[.6em]">
            {languages.map((l) => <Tag key={l}>{l}</Tag>)}
          </div>

          <Heading>TOOLS</Heading>
          <div className="flex flex-wrap gap-[.4em] mb-[.6em]">
            {tools.map((t) => <Tag key={t}>{t}</Tag>)}
          </div>

          <Heading>EDUCATION</Heading>
          <div className="flex flex-col">
            {educations.map((e) => <Education key={e.name} name={e.name} grade={e.grade} />)}
          </div>
        </div>
      </Screen>
    </>
  );
}