import { useEffect, useRef, useState } from "react";
import { motion, useInView } from "motion/react";
import { GraduationCap, FolderGit2, Briefcase, Award } from "lucide-react";

function Counter({ to, suffix = "" }: { to: number; suffix?: string }) {
  const ref = useRef<HTMLSpanElement>(null);
  const inView = useInView(ref, { once: true });
  const [n, setN] = useState(0);
  useEffect(() => {
    if (!inView) return;
    const duration = 1400;
    const start = performance.now();
    let raf = 0;
    const tick = (t: number) => {
      const p = Math.min((t - start) / duration, 1);
      setN(Math.floor(p * to));
      if (p < 1) raf = requestAnimationFrame(tick);
    };
    raf = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(raf);
  }, [inView, to]);
  return (
    <span ref={ref}>
      {n}
      {suffix}
    </span>
  );
}

const stats = [
  { icon: FolderGit2, label: "Projects", value: 3, color: "#3b82f6" },
  { icon: Briefcase, label: "Internships", value: 3, color: "#8b5cf6" },
  { icon: Award, label: "Certifications", value: 3, color: "#ec4899" },
];

const education = [
  {
    period: "2021 — 2025",
    title: "B.E. in Computer Science Engineering",
    place: "Engineering College",
    desc: "Focused on data structures, web development, databases, and software engineering fundamentals.",
  },
  {
    period: "2019 — 2021",
    title: "Pre-University Education",
    place: "MPC Stream",
    desc: "Built strong foundations in mathematics and analytical reasoning.",
  },
  {
    period: "Until 2019",
    title: "Secondary Schooling",
    place: "State Board",
    desc: "Graduated with distinction; first introduction to programming.",
  },
];

export function About() {
  return (
    <section id="about" className="relative px-5 py-24 sm:px-8">
      <div className="mx-auto max-w-6xl">
        <SectionHeader eyebrow="About Me" title="A quick introduction" />

        <div className="mt-14 grid gap-10 lg:grid-cols-[1fr_1.1fr]">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="rounded-3xl glass-strong p-8"
          >
            <h3 className="font-display text-2xl font-bold">
              Hello! I'm <span className="text-gradient">Shiva Prajval</span>
            </h3>
            <p className="mt-4 text-white/75 leading-relaxed">
              I'm a Computer Science Engineering graduate looking for entry-level Software
              Developer opportunities. I enjoy writing clean Java, designing intuitive web
              interfaces, and collaborating on team projects that solve real problems.
            </p>
            <p className="mt-4 text-white/75 leading-relaxed">
              I've worked on group projects spanning chatbots, ride-sharing platforms, and
              video streaming apps — usually owning the frontend. I value clarity, simplicity,
              and continuous learning.
            </p>
            <div className="mt-6 grid grid-cols-3 gap-3">
              {stats.map((s) => (
                <div
                  key={s.label}
                  className="rounded-2xl glass p-4 text-center transition-transform hover:-translate-y-1"
                >
                  <s.icon size={22} style={{ color: s.color }} className="mx-auto" />
                  <div
                    className="mt-2 font-display text-3xl font-extrabold"
                    style={{ color: s.color }}
                  >
                    <Counter to={s.value} suffix="+" />
                  </div>
                  <div className="mt-1 text-xs font-medium tracking-wide text-white/60 uppercase">
                    {s.label}
                  </div>
                </div>
              ))}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className="mb-6 flex items-center gap-3">
              <span className="grid h-10 w-10 place-items-center rounded-xl btn-gradient">
                <GraduationCap size={18} />
              </span>
              <h3 className="font-display text-2xl font-bold">Education Timeline</h3>
            </div>
            <ol className="relative ml-3 border-l border-white/10">
              {education.map((e, i) => (
                <motion.li
                  key={e.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1 }}
                  className="mb-8 ml-6 last:mb-0"
                >
                  <span className="absolute -left-[7px] mt-1.5 h-3 w-3 rounded-full bg-gradient-to-br from-[#3b82f6] to-[#ec4899] ring-4 ring-[#050816]" />
                  <div className="rounded-2xl glass p-5 transition-all hover:bg-white/10">
                    <div className="text-xs font-semibold tracking-wider text-[#06b6d4] uppercase">
                      {e.period}
                    </div>
                    <div className="mt-1 font-display text-lg font-bold">{e.title}</div>
                    <div className="text-sm text-white/60">{e.place}</div>
                    <p className="mt-2 text-sm text-white/70">{e.desc}</p>
                  </div>
                </motion.li>
              ))}
            </ol>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

export function SectionHeader({ eyebrow, title }: { eyebrow: string; title: string }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      className="text-center"
    >
      <div className="inline-flex items-center gap-2 rounded-full glass px-4 py-1.5 text-xs font-semibold tracking-widest text-white/80 uppercase">
        <span className="h-1.5 w-1.5 rounded-full bg-[#ec4899]" /> {eyebrow}
      </div>
      <h2 className="mt-4 text-3xl font-extrabold sm:text-5xl">
        <span className="text-gradient">{title}</span>
      </h2>
      <div className="mx-auto mt-4 h-1 w-24 rounded-full bg-gradient-to-r from-[#3b82f6] via-[#8b5cf6] to-[#ec4899]" />
    </motion.div>
  );
}
