import { useEffect, useState } from "react";
import { motion } from "motion/react";
import { Download, Mail, Github, Linkedin } from "lucide-react";

const ROLES = ["Software Developer", "Java Developer", "Frontend Developer", "Problem Solver"];

function Typewriter() {
  const [idx, setIdx] = useState(0);
  const [text, setText] = useState("");
  const [del, setDel] = useState(false);

  useEffect(() => {
    const current = ROLES[idx];
    const speed = del ? 50 : 100;
    const timer = setTimeout(() => {
      if (!del && text === current) {
        setTimeout(() => setDel(true), 1400);
        return;
      }
      if (del && text === "") {
        setDel(false);
        setIdx((i) => (i + 1) % ROLES.length);
        return;
      }
      setText(del ? current.slice(0, text.length - 1) : current.slice(0, text.length + 1));
    }, speed);
    return () => clearTimeout(timer);
  }, [text, del, idx]);

  return (
    <span className="text-gradient-cyan">
      {text}
      <span className="animate-blink ml-1 inline-block h-[1em] w-[2px] translate-y-1 bg-[#06b6d4]" />
    </span>
  );
}

export function Hero() {
  return (
    <section
      id="home"
      className="relative flex min-h-screen items-center justify-center px-5 pt-28 pb-16 sm:px-8"
    >
      <div className="mx-auto grid max-w-6xl gap-12 lg:grid-cols-[1.4fr_1fr] lg:items-center">
        <div>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="inline-flex items-center gap-2 rounded-full glass px-4 py-2 text-xs font-medium text-white/80"
          >
            <span className="relative flex h-2 w-2">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-[#22c55e] opacity-75" />
              <span className="relative inline-flex h-2 w-2 rounded-full bg-[#22c55e]" />
            </span>
            Available for Entry-Level Opportunities
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="mt-6 text-4xl leading-[1.05] font-extrabold sm:text-6xl lg:text-7xl"
          >
            <span className="block text-white/70">Hi, I'm</span>
            <span className="mt-2 block text-gradient animate-gradient">
              Eediga Shiva Prajval
            </span>
          </motion.h1>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            className="mt-5 text-xl font-semibold sm:text-3xl"
          >
            <Typewriter />
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
            className="mt-6 max-w-xl text-base leading-relaxed text-white/70 sm:text-lg"
          >
            Computer Science Engineering graduate passionate about building clean, performant
            software. I write Java, craft responsive web interfaces, and love turning
            real-world problems into elegant code.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5 }}
            className="mt-8 flex flex-wrap items-center gap-4"
          >
            <a
              href="/resume.pdf"
              download
              className="group inline-flex items-center gap-2 rounded-full btn-gradient px-6 py-3 font-semibold text-white"
            >
              <Download size={18} className="transition-transform group-hover:translate-y-0.5" />
              Download Resume
            </a>
            <a
              href="#contact"
              className="inline-flex items-center gap-2 rounded-full glass-strong px-6 py-3 font-semibold text-white transition-all hover:bg-white/10"
            >
              <Mail size={18} />
              Contact Me
            </a>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.7 }}
            className="mt-8 flex items-center gap-3"
          >
            {[
              { Icon: Linkedin, href: "https://linkedin.com", label: "LinkedIn" },
              { Icon: Github, href: "https://github.com", label: "GitHub" },
              { Icon: Mail, href: "mailto:shivaprajval@example.com", label: "Email" },
            ].map(({ Icon, href, label }) => (
              <a
                key={label}
                href={href}
                target="_blank"
                rel="noreferrer"
                aria-label={label}
                className="group grid h-11 w-11 place-items-center rounded-full glass transition-all hover:scale-110 hover:bg-white/10 neon-glow"
              >
                <Icon size={18} className="text-white/80 group-hover:text-white" />
              </a>
            ))}
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, scale: 0.85 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.3, duration: 0.8 }}
          className="relative mx-auto aspect-square w-full max-w-md"
        >
          <div className="absolute inset-0 animate-gradient rounded-full bg-[conic-gradient(from_0deg,#3b82f6,#8b5cf6,#ec4899,#06b6d4,#3b82f6)] opacity-40 blur-3xl" />
          <div className="absolute inset-6 rounded-[2.5rem] glass-strong p-6 neon-glow">
            <div className="relative h-full w-full overflow-hidden rounded-[2rem] bg-gradient-to-br from-[#3b82f6]/30 via-[#8b5cf6]/30 to-[#ec4899]/30">
              <div className="grid h-full w-full place-items-center font-display text-[10rem] font-black text-white/90">
                S
              </div>
              <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/60 to-transparent p-5">
                <div className="text-xs font-semibold tracking-widest text-[#06b6d4] uppercase">
                  CSE Graduate
                </div>
                <div className="mt-1 font-display text-lg font-bold">Building the web,</div>
                <div className="text-sm text-white/70">one component at a time.</div>
              </div>
            </div>
          </div>

          {/* Floating chips */}
          <motion.div
            animate={{ y: [0, -10, 0] }}
            transition={{ duration: 4, repeat: Infinity }}
            className="absolute -top-2 -left-2 rounded-2xl glass-strong px-4 py-2 text-sm font-semibold text-[#06b6d4]"
          >
            { } Java
          </motion.div>
          <motion.div
            animate={{ y: [0, 10, 0] }}
            transition={{ duration: 5, repeat: Infinity }}
            className="absolute -right-2 top-1/3 rounded-2xl glass-strong px-4 py-2 text-sm font-semibold text-[#ec4899]"
          >
            ⚡ Frontend
          </motion.div>
          <motion.div
            animate={{ y: [0, -8, 0] }}
            transition={{ duration: 6, repeat: Infinity }}
            className="absolute -bottom-2 left-1/4 rounded-2xl glass-strong px-4 py-2 text-sm font-semibold text-[#22c55e]"
          >
            ⌘ Problem Solver
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
