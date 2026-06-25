import { motion } from "motion/react";
import { Briefcase, Cloud, Brain, Code2 } from "lucide-react";
import { SectionHeader } from "./About";

const internships = [
  {
    title: "AWS Data Engineering Virtual Internship",
    org: "EduSkills",
    Icon: Cloud,
    color: "#f59e0b",
    desc: "Explored data engineering fundamentals on AWS — storage, pipelines, and analytics workflows in a virtual program.",
    href: "#",
  },
  {
    title: "Google AI-ML Virtual Internship",
    org: "EduSkills",
    Icon: Brain,
    color: "#3b82f6",
    desc: "Introduced to core AI and Machine Learning concepts, model lifecycles, and Google's ML toolset.",
    href: "#",
  },
  {
    title: "Full Stack Java Internship",
    org: "SkillDzire",
    Icon: Code2,
    color: "#8b5cf6",
    desc: "Hands-on Java-based full stack training covering backend fundamentals and integration with web frontends.",
    href: "#",
  },
];

export function Internships() {
  return (
    <section id="internships" className="relative px-5 py-24 sm:px-8">
      <div className="mx-auto max-w-6xl">
        <SectionHeader eyebrow="Internships" title="Where I've trained" />
        <p className="mx-auto mt-4 max-w-2xl text-center text-sm text-white/60">
          Virtual internships and training programs — separate from my project stacks and core
          skills.
        </p>

        <div className="mt-14 grid gap-6 md:grid-cols-3">
          {internships.map((it, i) => (
            <motion.div
              key={it.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1, duration: 0.5 }}
              whileHover={{ y: -8 }}
              className="group relative overflow-hidden rounded-3xl glass-strong p-7 transition-all"
              style={{ boxShadow: `0 20px 50px -30px ${it.color}88` }}
            >
              <div
                className="pointer-events-none absolute -top-20 -right-20 h-48 w-48 rounded-full opacity-20 blur-3xl transition-opacity group-hover:opacity-40"
                style={{ background: it.color }}
              />
              <div className="flex items-center gap-3">
                <span
                  className="grid h-12 w-12 place-items-center rounded-xl"
                  style={{
                    background: `${it.color}22`,
                    boxShadow: `0 0 20px ${it.color}55`,
                  }}
                >
                  <it.Icon size={22} style={{ color: it.color }} />
                </span>
                <div className="inline-flex items-center gap-1.5 rounded-full glass px-3 py-1 text-[10px] font-bold tracking-widest text-white/70 uppercase">
                  <Briefcase size={11} /> Internship
                </div>
              </div>
              <h3 className="mt-5 font-display text-xl font-bold leading-tight">{it.title}</h3>
              <div className="mt-1 text-xs font-medium" style={{ color: it.color }}>
                {it.org}
              </div>
              <p className="mt-3 text-sm text-white/70 leading-relaxed">{it.desc}</p>
              <a
                href={it.href}
                target="_blank"
                rel="noreferrer"
                className="mt-6 inline-flex items-center gap-2 text-xs font-semibold transition-transform group-hover:translate-x-1"
                style={{ color: it.color }}
              >
                View Certificate →
              </a>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
