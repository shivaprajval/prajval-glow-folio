import { motion } from "motion/react";
import { Github, ExternalLink, Users, User } from "lucide-react";
import { SectionHeader } from "./About";
import chatbotImg from "@/assets/project-chatbot.jpg";
import carpoolImg from "@/assets/project-carpool.jpg";
import streamhubImg from "@/assets/project-streamhub.jpg";

type Project = {
  title: string;
  description: string;
  role: string;
  tech: string[];
  features: string[];
  image: string;
  github: string;
  demo?: string;
  accent: string;
};

const projects: Project[] = [
  {
    title: "College FAQ Chatbot",
    description:
      "Developed user interface components for a rule-based chatbot that handles student queries regarding admissions, courses, and facilities.",
    role: "Frontend Developer",
    tech: ["Python", "HTML", "CSS", "JavaScript"],
    features: [
      "Rule-based query matching",
      "Clean conversational UI",
      "Admissions, courses & facility info",
      "Responsive chat layout",
    ],
    image: chatbotImg,
    github: "https://github.com",
    accent: "#3b82f6",
  },
  {
    title: "Car Pooling System",
    description:
      "Worked as a frontend developer in a team to design a ride-sharing platform for registering users and searching available carpools.",
    role: "Frontend Developer",
    tech: ["React 18", "Vite", "React Router", "Axios", "Node.js", "MongoDB", "JWT"],
    features: [
      "User registration & auth",
      "Search & filter carpools",
      "Route-based listings",
      "Token-based session handling",
    ],
    image: carpoolImg,
    github: "https://github.com",
    accent: "#8b5cf6",
  },
  {
    title: "Stream Hub",
    description:
      "Worked as a frontend developer in a team to build a modern video streaming platform with search functionality and responsive user interface.",
    role: "Frontend Developer",
    tech: ["React.js", "JavaScript", "CSS", "YouTube Data API", "React Router DOM", "Context API"],
    features: [
      "Video search with YouTube API",
      "Responsive grid layout",
      "Global state via Context API",
      "Smooth route transitions",
    ],
    image: streamhubImg,
    github: "https://github.com",
    accent: "#ec4899",
  },
];

export function Projects() {
  return (
    <section id="projects" className="relative px-5 py-24 sm:px-8">
      <div className="mx-auto max-w-6xl">
        <SectionHeader eyebrow="Group Projects" title="Things I've helped build" />
        <p className="mx-auto mt-4 max-w-2xl text-center text-sm text-white/60">
          All projects below are <span className="font-semibold text-[#ec4899]">team efforts</span>.
          My role on each is highlighted clearly.
        </p>

        <div className="mt-14 flex flex-col gap-10">
          {projects.map((p, i) => (
            <motion.article
              key={p.title}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.6 }}
              className={`group grid gap-8 overflow-hidden rounded-3xl glass-strong p-6 transition-all hover:bg-white/[0.07] sm:p-8 lg:grid-cols-2 lg:items-center ${
                i % 2 === 1 ? "lg:[&>div:first-child]:order-2" : ""
              }`}
              style={{
                boxShadow: `0 30px 80px -40px ${p.accent}66`,
              }}
            >
              <div className="relative overflow-hidden rounded-2xl">
                <div
                  className="absolute inset-0 -z-10 opacity-50 blur-2xl"
                  style={{ background: p.accent }}
                />
                <img
                  src={p.image}
                  alt={`${p.title} preview`}
                  width={1280}
                  height={800}
                  loading="lazy"
                  className="aspect-[16/10] w-full rounded-2xl object-cover transition-transform duration-700 group-hover:scale-105"
                />
              </div>

              <div className="min-w-0">
                <div className="flex flex-wrap items-center gap-2">
                  <span className="inline-flex items-center gap-1.5 rounded-full bg-[#ec4899]/15 px-3 py-1 text-xs font-bold tracking-wider text-[#ec4899] uppercase">
                    <Users size={12} /> Team Project
                  </span>
                  <span className="inline-flex items-center gap-1.5 rounded-full bg-[#06b6d4]/15 px-3 py-1 text-xs font-bold tracking-wider text-[#06b6d4] uppercase">
                    <User size={12} /> My Role: {p.role}
                  </span>
                </div>

                <h3 className="mt-4 font-display text-2xl font-extrabold sm:text-3xl">
                  <span style={{ color: p.accent }}>{p.title}</span>
                </h3>
                <p className="mt-3 text-white/70 leading-relaxed">{p.description}</p>

                <div className="mt-5">
                  <div className="text-xs font-bold tracking-widest text-white/50 uppercase">
                    Key Features
                  </div>
                  <ul className="mt-2 grid gap-1.5 sm:grid-cols-2">
                    {p.features.map((f) => (
                      <li
                        key={f}
                        className="flex items-start gap-2 text-sm text-white/75"
                      >
                        <span
                          className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full"
                          style={{ background: p.accent }}
                        />
                        {f}
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="mt-5">
                  <div className="text-xs font-bold tracking-widest text-white/50 uppercase">
                    Technologies Used
                  </div>
                  <div className="mt-2 flex flex-wrap gap-2">
                    {p.tech.map((t) => (
                      <span
                        key={t}
                        className="rounded-full glass px-3 py-1 text-xs font-medium text-white/85"
                      >
                        {t}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="mt-6 flex flex-wrap gap-3">
                  <a
                    href={p.github}
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex items-center gap-2 rounded-full glass px-5 py-2.5 text-sm font-semibold transition-all hover:bg-white/10"
                  >
                    <Github size={16} /> GitHub
                  </a>
                  {p.demo && (
                    <a
                      href={p.demo}
                      target="_blank"
                      rel="noreferrer"
                      className="inline-flex items-center gap-2 rounded-full btn-gradient px-5 py-2.5 text-sm font-semibold text-white"
                    >
                      <ExternalLink size={16} /> Live Demo
                    </a>
                  )}
                </div>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}
