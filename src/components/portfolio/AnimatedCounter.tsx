import { useRef } from "react";
import { motion, useInView } from "framer-motion";

interface RollingDigitProps {
  digit: number;
  delay?: number;
}

// 20-digit rolling reel for a kinetic spin before landing on the final number
const REEL_SET = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
const REEL = [...REEL_SET, ...REEL_SET]; // 20 digits: spins through set 1 and lands on set 2

function RollingDigit({ digit, delay = 0 }: RollingDigitProps) {
  // Target index in the second half of the reel
  const targetIndex = 10 + digit;

  return (
    <span className="relative inline-block h-[1.15em] w-[0.66em] overflow-hidden align-baseline">
      <motion.span
        initial={{ y: "0%" }}
        animate={{ y: `-${(targetIndex / 20) * 100}%` }}
        transition={{
          duration: 1.6,
          delay: 0.15 + delay,
          ease: [0.16, 1, 0.3, 1], // Apple-style fluid deceleration
        }}
        className="absolute inset-x-0 top-0 flex flex-col items-center"
      >
        {REEL.map((d, idx) => (
          <span
            key={`${idx}-${d}`}
            className="text-gradient flex h-[1.15em] items-center justify-center font-display font-semibold leading-none select-none"
          >
            {d}
          </span>
        ))}
      </motion.span>
    </span>
  );
}

interface KineticCounterProps {
  value: string; // e.g. "1.5M+", "5+ yrs", "<3 min", "99.9%"
  delay?: number;
}

export function KineticCounter({ value, delay = 0 }: KineticCounterProps) {
  const ref = useRef<HTMLSpanElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-20px" });

  const chars = value.split("");

  return (
    <span
      ref={ref}
      className="inline-flex items-baseline font-display font-semibold tracking-tight"
    >
      {chars.map((char, index) => {
        const parsed = parseInt(char, 10);
        const isDigit = !isNaN(parsed);

        if (isDigit && isInView) {
          return (
            <RollingDigit key={`${index}-${char}`} digit={parsed} delay={delay + index * 0.08} />
          );
        }

        if (isDigit && !isInView) {
          return (
            <span
              key={`${index}-${char}`}
              className="inline-block h-[1.15em] w-[0.66em] overflow-hidden align-baseline"
            >
              <span className="text-gradient flex h-[1.15em] items-center justify-center leading-none">
                0
              </span>
            </span>
          );
        }

        // Static symbols (. + % < M yrs min)
        return (
          <span
            key={`${index}-${char}`}
            className="text-gradient inline-block align-baseline whitespace-pre"
          >
            {char}
          </span>
        );
      })}
    </span>
  );
}
