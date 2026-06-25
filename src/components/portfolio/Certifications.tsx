import { motion } from "motion/react";
import { Award, Globe, Code2, Coffee } from "lucide-react";
import { SectionHeader } from "./About";

import rwdUrl from "@/assets/certs/responsive_webdesign.pdf?url";
import jsUrl from "@/assets/certs/javascript_essentials.pdf?url";
import javaUrl from "@/assets/certs/basics_of_java.pdf?url";

const rwdCert = { url: rwdUrl };
const jsCert = { url: jsUrl };
const javaCert = { url: javaUrl };

const certs = [
  {
    title: "Responsive Web Design",
    issuer: "Online Certification",
    Icon: Globe,
    color: "#06b6d4",
    desc: "Modern responsive layouts, CSS techniques, accessibility, and mobile-first design.",
    href: rwdCert.url,
  },
  {
    title: "JavaScript Essentials",
    issuer: "Online Certification",
    Icon: Code2,
    color: "#f7df1e",
    desc: "Fundamentals of JavaScript: variables, control flow, functions, objects, and the DOM.",
    href: jsCert.url,
  },
  {
    title: "Basics of Java",
    issuer: "Online Certification",
    Icon: Coffee,
    color: "#f89820",
    desc: "OOP fundamentals, syntax, control structures, and Java program structure.",
    href: javaCert.url,
  },
];

export function Certifications() {
  return (
    <section id="certifications" className="relative px-5 py-24 sm:px-8">
      <div className="mx-auto max-w-6xl">
        <SectionHeader eyebrow="Certifications" title="Verified learnings" />
        <p className="mx-auto mt-4 max-w-2xl text-center text-sm text-white/60">
          Independent certifications — listed separately from my core technical skills.
        </p>

        <div className="mt-14 grid gap-6 md:grid-cols-3">
          {certs.map((c, i) => (
            <motion.div
              key={c.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1, duration: 0.5 }}
              whileHover={{ y: -8 }}
              className="group relative overflow-hidden rounded-3xl glass-strong p-7 transition-all"
              style={{ boxShadow: `0 20px 50px -30px ${c.color}88` }}
            >
              <div
                className="pointer-events-none absolute -top-20 -right-20 h-48 w-48 rounded-full opacity-20 blur-3xl transition-opacity group-hover:opacity-40"
                style={{ background: c.color }}
              />
              <div className="flex items-center gap-3">
                <span
                  className="grid h-12 w-12 place-items-center rounded-xl"
                  style={{
                    background: `${c.color}22`,
                    boxShadow: `0 0 20px ${c.color}55`,
                  }}
                >
                  <c.Icon size={22} style={{ color: c.color }} />
                </span>
                <div className="inline-flex items-center gap-1.5 rounded-full glass px-3 py-1 text-[10px] font-bold tracking-widest text-white/70 uppercase">
                  <Award size={11} /> Certified
                </div>
              </div>
              <h3 className="mt-5 font-display text-xl font-bold leading-tight">{c.title}</h3>
              <div className="mt-1 text-xs font-medium" style={{ color: c.color }}>
                {c.issuer}
              </div>
              <p className="mt-3 text-sm text-white/70 leading-relaxed">{c.desc}</p>
              <a
                href={c.href}
                target="_blank"
                rel="noreferrer"
                className="mt-6 inline-flex items-center gap-2 text-xs font-semibold transition-transform group-hover:translate-x-1"
                style={{ color: c.color }}
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
