import { motion } from "motion/react";
import { Briefcase, Cloud, Brain, Code2 } from "lucide-react";
import { SectionHeader } from "./About";

const internships = [
  {
    title: "AWS Data Engineering Virtual Internship",
    org: "AWS Academy",
    Icon: Cloud,
    color: "#f59e0b",
    desc: "Explored data engineering fundamentals on AWS — storage, pipelines, and analytics workflows in a virtual program.",
  },
  {
    title: "Google AI-ML Virtual Internship",
    org: "Google for Developers",
    Icon: Brain,
    color: "#3b82f6",
    desc: "Introduced to core AI and Machine Learning concepts, model lifecycles, and Google's ML toolset.",
  },
  {
    title: "Full Stack Java Internship",
    org: "Industry Training",
    Icon: Code2,
    color: "#8b5cf6",
    desc: "Hands-on Java-based full stack training covering backend fundamentals and integration with web frontends.",
  },
];

export function Internships() {
  return (
    <section id="internships" className="relative px-5 py-24 sm:px-8">
      <div className="mx-auto max-w-5xl">
        <SectionHeader eyebrow="Internships" title="Where I've trained" />
        <p className="mx-auto mt-4 max-w-2xl text-center text-sm text-white/60">
          Virtual internships and training programs — separate from my project stacks and core
          skills.
        </p>

        <div className="relative mt-14">
          <div className="absolute top-0 bottom-0 left-4 w-px bg-gradient-to-b from-[#3b82f6] via-[#8b5cf6] to-[#ec4899] md:left-1/2" />

          {internships.map((it, i) => (
            <motion.div
              key={it.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1, duration: 0.5 }}
              className={`relative mb-10 grid items-center gap-4 pl-12 md:grid-cols-2 md:pl-0 ${
                i % 2 === 0 ? "md:pr-[calc(50%+2rem)]" : "md:pl-[calc(50%+2rem)] md:[&>*]:col-start-2"
              }`}
            >
              <span
                className="absolute top-6 left-[9px] grid h-4 w-4 -translate-x-1/2 place-items-center rounded-full ring-4 ring-[#050816] md:left-1/2"
                style={{ background: it.color }}
              />
              <div className="rounded-3xl glass-strong p-6 transition-all hover:-translate-y-1 hover:bg-white/[0.08]">
                <div className="flex items-start gap-4">
                  <span
                    className="grid h-12 w-12 shrink-0 place-items-center rounded-xl"
                    style={{
                      background: `${it.color}22`,
                      boxShadow: `0 0 20px ${it.color}55`,
                    }}
                  >
                    <it.Icon size={22} style={{ color: it.color }} />
                  </span>
                  <div className="min-w-0">
                    <div className="inline-flex items-center gap-1.5 text-xs font-bold tracking-wider text-white/50 uppercase">
                      <Briefcase size={12} /> Internship
                    </div>
                    <h3 className="mt-1 font-display text-lg font-bold leading-tight">
                      {it.title}
                    </h3>
                    <div className="text-sm font-medium" style={{ color: it.color }}>
                      {it.org}
                    </div>
                    <p className="mt-2 text-sm text-white/70 leading-relaxed">{it.desc}</p>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
