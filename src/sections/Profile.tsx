import { useState, useEffect, type ReactNode } from "react";
import { menu, cx } from "../data.ts";

import type { SectionProps } from "../App.tsx";

import Screen from "../components/Screen.tsx";
import { P, Heading } from "../components/Typography.tsx";

const CARD = "p-5 overflow-auto border-[3px] [clip-path:polygon(0_0,100%_2%,98%_100%,2%_98%)] animate-slidein [animation-delay:.1s]";

export default function Profile({ go }: SectionProps) {
  return (
    <>
      <Screen id="profile" title="PROFILE" onBack={() => go("menu")}>
        <div className={cx(CARD, "bg-white text-black border-black")}>
          <div className={cx("font-display text-[clamp(26px,3.4vw,42px)] leading-none text-p5red skew-x-[-8deg] [text-shadow:3px_3px_0_#000]")}>JERICHO JOHN MENDOZA</div>
          <P>BSc Computer Science, Year 2<br />University of Bath, United Kingdom</P>
          <P>Software developer who loves building tools that are interesting. Currently focused on web apps, algorithms and machine learning. Looking for a placement or graduate role for 2027.</P>
          <div className="flex flex-wrap gap-3 mt-1"></div>
        </div>

        <div className={cx(CARD, "bg-black border-white")}>
          <Heading>SKILLS</Heading> <P>Python, TypeScript, Java, C, SQL, Rust</P>
          <Heading>LANGUAGES</Heading><P>Python, TypeScript, Java, C, SQL, Rust (learning)</P>
          <Heading>EDUCATION</Heading><P>Year 1 to 3: Data Structures, Operating Systems, Databases, Machine Learning, Software Engineering. Predicted First.</P>
        </div>
      </Screen>
    </>
  )
}