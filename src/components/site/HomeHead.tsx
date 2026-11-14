// Home section header used by the regional sections (Global presence, AptaCloud
// India, ...): the About layout. Pill tag | heading whose words fill from grey
// to ink as it scrolls + muted lead, over two of three columns.

import { motion, useScroll, useTransform, type MotionValue } from "@/lib/motion";
import { Fragment, useRef, type ReactNode } from "react";
import { Reveal } from "@/components/ui/Reveal";
import s from "./HomeHead.module.css";

function Word({ word, i, n, progress }: { word: string; i: number; n: number; progress: MotionValue<number> }) {
  const color = useTransform(progress, [i / n, (i + 1) / n], ["var(--fill-from)", "var(--fill-to)"]);
  return (
    <motion.span className={s.word} style={{ color }}>
      {word}
    </motion.span>
  );
}

function FillHeading({ text }: { text: string }) {
  const ref = useRef<HTMLHeadingElement>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start 0.95", "end 0.7"] });
  const words = text.split(" ");
  return (
    <h2 ref={ref} className={s.heading} aria-label={text}>
      {words.map((w, i) => (
        <Fragment key={i}>
          <Word word={w} i={i} n={words.length} progress={scrollYProgress} />{" "}
        </Fragment>
      ))}
    </h2>
  );
}

export function HomeHead({ tag, icon, heading, lead }: { tag: string; icon: ReactNode; heading: string; lead: string }) {
  return (
    <div className={s.content}>
      <Reveal y={30} duration={1} amount={0.3} className={s.tagCol}>
        <p className={s.tag}>
          <span className={s.tagIcon}>{icon}</span>
          <span>{tag}</span>
        </p>
      </Reveal>
      <div className={s.copy}>
        <FillHeading text={heading} />
        <Reveal y={30} duration={1} delay={0.1} amount={0.3}>
          <p className={s.lead}>{lead}</p>
        </Reveal>
      </div>
    </div>
  );
}
