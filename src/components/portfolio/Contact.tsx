import { useState, type FormEvent } from "react";
import { motion } from "motion/react";
import { Send, Mail, MapPin, Phone, Github, Linkedin, Check } from "lucide-react";
import { SectionHeader } from "./About";

const LINKEDIN_URL = "https://www.linkedin.com/in/eediga-shiva-prajval-417b97382?utm_source=share_via&utm_content=profile&utm_medium=member_ios";
const GITHUB_URL = "https://github.com/shivaprajval";

export function Contact() {
  const [sent, setSent] = useState(false);
  const [loading, setLoading] = useState(false);

  const submit = (e: FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      setSent(true);
      setTimeout(() => setSent(false), 3500);
      (e.target as HTMLFormElement).reset();
    }, 1100);
  };

  return (
    <section id="contact" className="relative px-5 py-24 sm:px-8">
      <div className="mx-auto max-w-6xl">
        <SectionHeader eyebrow="Get in Touch" title="Let's build something" />

        <div className="mt-14 grid gap-8 lg:grid-cols-[1fr_1.4fr]">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="rounded-3xl glass-strong p-8"
          >
            <h3 className="font-display text-2xl font-bold">
              <span className="text-gradient">Contact Info</span>
            </h3>
            <p className="mt-3 text-sm text-white/70">
              Open to entry-level Software Developer roles, internships, and collaborations.
            </p>

            <div className="mt-6 space-y-4">
              {[
                { Icon: Mail, label: "Email", value: "shivaprajval10@gmail.com", color: "#3b82f6" },
                { Icon: Phone, label: "Phone", value: "+91 94418 27639", color: "#8b5cf6" },
                { Icon: MapPin, label: "Location", value: "Puttaparthi, Sri Sathya Sai (dist)", color: "#ec4899" },
              ].map((c) => (
                <div key={c.label} className="flex items-start gap-3">
                  <span
                    className="grid h-10 w-10 shrink-0 place-items-center rounded-xl"
                    style={{ background: `${c.color}22`, boxShadow: `0 0 15px ${c.color}55` }}
                  >
                    <c.Icon size={16} style={{ color: c.color }} />
                  </span>
                  <div className="min-w-0">
                    <div className="text-xs font-bold tracking-wider text-white/50 uppercase">
                      {c.label}
                    </div>
                    <div className="truncate text-sm text-white/85">{c.value}</div>
                  </div>
                </div>
              ))}
            </div>

            <div className="mt-8">
              <div className="text-xs font-bold tracking-wider text-white/50 uppercase">
                Find me online
              </div>
              <div className="mt-3 flex flex-wrap gap-3">
                <a
                  href={LINKEDIN_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex h-11 items-center gap-2 rounded-xl glass px-4 text-sm font-semibold text-white/85 transition-all hover:-translate-y-1 hover:bg-white/10 hover:text-white"
                >
                  <Linkedin size={17} className="text-[#0a66c2]" />
                  Connect on LinkedIn
                </a>
                <a
                  href={GITHUB_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="GitHub"
                  className="grid h-11 w-11 place-items-center rounded-xl glass transition-all hover:-translate-y-1 hover:bg-white/10"
                >
                  <Github size={17} />
                </a>
              </div>
            </div>
          </motion.div>

          <motion.form
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            onSubmit={submit}
            className="rounded-3xl glass-strong p-8"
          >
            <div className="grid gap-4 sm:grid-cols-2">
              <Field label="Name" name="name" placeholder="Your name" />
              <Field label="Email" name="email" type="email" placeholder="you@email.com" />
            </div>
            <div className="mt-4">
              <Field label="Subject" name="subject" placeholder="What's this about?" />
            </div>
            <div className="mt-4">
              <label className="mb-2 block text-xs font-bold tracking-wider text-white/60 uppercase">
                Message
              </label>
              <textarea
                name="message"
                required
                rows={5}
                placeholder="Tell me about the role or project..."
                className="w-full rounded-2xl border border-white/10 bg-white/[0.04] px-4 py-3 text-sm text-white placeholder:text-white/40 outline-none transition-all focus:border-[#8b5cf6] focus:bg-white/[0.07]"
              />
            </div>
            <button
              type="submit"
              disabled={loading || sent}
              className="group mt-6 inline-flex w-full items-center justify-center gap-2 rounded-full btn-gradient px-6 py-3.5 font-semibold text-white disabled:opacity-70 sm:w-auto"
            >
              {sent ? (
                <>
                  <Check size={18} /> Message sent!
                </>
              ) : loading ? (
                <>
                  <span className="h-4 w-4 animate-spin rounded-full border-2 border-white/40 border-t-white" />
                  Sending...
                </>
              ) : (
                <>
                  Send Message
                  <Send size={16} className="transition-transform group-hover:translate-x-1" />
                </>
              )}
            </button>
          </motion.form>
        </div>
      </div>

      <footer className="mx-auto mt-24 max-w-6xl border-t border-white/10 pt-8 text-center text-sm text-white/50">
        © {new Date().getFullYear()} Eediga Shiva Prajval. Crafted with care.
      </footer>
    </section>
  );
}

function Field({
  label,
  name,
  type = "text",
  placeholder,
}: {
  label: string;
  name: string;
  type?: string;
  placeholder?: string;
}) {
  return (
    <div>
      <label className="mb-2 block text-xs font-bold tracking-wider text-white/60 uppercase">
        {label}
      </label>
      <input
        name={name}
        type={type}
        required
        placeholder={placeholder}
        className="w-full rounded-2xl border border-white/10 bg-white/[0.04] px-4 py-3 text-sm text-white placeholder:text-white/40 outline-none transition-all focus:border-[#8b5cf6] focus:bg-white/[0.07]"
      />
    </div>
  );
}
