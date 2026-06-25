import { motion, useInView } from "motion/react";
import { useEffect, useRef, useState } from "react";
import { FaJava, FaHtml5, FaCss3Alt, FaJsSquare, FaDatabase } from "react-icons/fa";
import { SectionHeader } from "./About";

const SKILLS = [
  { name: "Java", level: 60, color: "#f89820", Icon: FaJava, note: "Working Knowledge" },
  { name: "SQL", level: 55, color: "#22c55e", Icon: FaDatabase, note: "Fundamentals & basic queries" },
  { name: "HTML", level: 65, color: "#e34c26", Icon: FaHtml5, note: "Foundational knowledge" },
  { name: "CSS", level: 60, color: "#3b82f6", Icon: FaCss3Alt, note: "Foundational knowledge" },
  { name: "JavaScript", level: 50, color: "#f7df1e", Icon: FaJsSquare, note: "Foundational knowledge" },
];

function CircularProgress({ value, color }: { value: number; color: string }) {
  const ref = useRef<SVGCircleElement>(null);
  const inView = useInView(ref, { once: true });
  const [pct, setPct] = useState(0);
  useEffect(() => {
    if (!inView) return;
    const start = performance.now();
    let raf = 0;
    const tick = (t: number) => {
      const p = Math.min((t - start) / 1400, 1);
      setPct(Math.floor(p * value));
      if (p < 1) raf = requestAnimationFrame(tick);
    };
    raf = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(raf);
  }, [inView, value]);
  const r = 42;
  const c = 2 * Math.PI * r;
  const offset = c - (pct / 100) * c;
  return (
    <div className="relative grid h-28 w-28 place-items-center">
      <svg className="-rotate-90" width="112" height="112" viewBox="0 0 100 100">
        <circle cx="50" cy="50" r={r} stroke="rgba(255,255,255,0.08)" strokeWidth="8" fill="none" />
        <circle
          ref={ref}
          cx="50"
          cy="50"
          r={r}
          stroke={color}
          strokeWidth="8"
          fill="none"
          strokeDasharray={c}
          strokeDashoffset={offset}
          strokeLinecap="round"
          style={{
            transition: "stroke-dashoffset 0.1s linear",
            filter: `drop-shadow(0 0 6px ${color})`,
          }}
        />
      </svg>
      <div className="absolute font-display text-xl font-extrabold" style={{ color }}>
        {pct}%
      </div>
    </div>
  );
}

export function Skills() {
  return (
    <section id="skills" className="relative px-5 py-24 sm:px-8">
      <div className="mx-auto max-w-6xl">
        <SectionHeader eyebrow="Technical Skills" title="What I work with" />
        <p className="mx-auto mt-4 max-w-2xl text-center text-sm text-white/60">
          Core technologies I've learned and applied. (Other tools listed under Projects are
          team-project stacks, not personal skill claims.)
        </p>

        <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5">
          {SKILLS.map((s, i) => (
            <motion.div
              key={s.name}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.08, duration: 0.5 }}
              whileHover={{ y: -6 }}
              className="group relative overflow-hidden rounded-3xl glass-strong p-6 text-center transition-all hover:shadow-2xl"
              style={{
                boxShadow: `0 0 0 1px rgba(255,255,255,0.06)`,
              }}
            >
              <div
                className="pointer-events-none absolute inset-0 -z-10 opacity-0 transition-opacity group-hover:opacity-100"
                style={{
                  background: `radial-gradient(circle at 50% 0%, ${s.color}33, transparent 70%)`,
                }}
              />
              <s.Icon size={42} style={{ color: s.color }} className="mx-auto" />
              <h3 className="mt-4 font-display text-lg font-bold">{s.name}</h3>
              <p className="mt-1 text-xs text-white/55">{s.note}</p>
              <div className="mt-5 flex justify-center">
                <CircularProgress value={s.level} color={s.color} />
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
