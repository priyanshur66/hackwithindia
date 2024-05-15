"use client";
import { motion } from "framer-motion";
import { HeroHighlight, Highlight } from "../app/ui/herohighlight";

export function HeroHighlightDemo() {
  return (
    <HeroHighlight>
      <motion.h1
        initial={{
          opacity: 0,
          y: 20,
        }}
        animate={{
          opacity: 1,
          y: [20, -5, 0],
        }}
        transition={{
          duration: 0.5,
          ease: [0.4, 0.0, 0.2, 1],
        }}
        className="text-4xl px-4 mt-12 mx-20 font-Anta font-bold text-neutral-700  max-w-4xl leading-relaxed lg:leading-snug text-center "
      >
        Addressing the challenge of renewable energy integration, our project incentivizes individual contributions to the grid, {" "}
        <Highlight className="text-black rounded-md">
        making sustainable energy more accessible and rewarding.
        </Highlight>
      </motion.h1>
    </HeroHighlight>
  );
}
