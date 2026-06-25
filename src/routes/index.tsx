import { createFileRoute } from "@tanstack/react-router";
import { Navbar, ScrollProgress, BackToTop } from "@/components/portfolio/Navbar";
import { ParticleBackground, MouseSpotlight, FloatingShapes } from "@/components/portfolio/Background";
import { Hero } from "@/components/portfolio/Hero";
import { About } from "@/components/portfolio/About";
import { Skills } from "@/components/portfolio/Skills";
import { Projects } from "@/components/portfolio/Projects";
import { Internships } from "@/components/portfolio/Internships";
import { Certifications } from "@/components/portfolio/Certifications";
import { Contact } from "@/components/portfolio/Contact";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Eediga Shiva Prajval — Software Developer Portfolio" },
      {
        name: "description",
        content:
          "Portfolio of Eediga Shiva Prajval, CSE graduate and aspiring Software Developer. Java, SQL, HTML, CSS, JavaScript — projects, internships, and certifications.",
      },
      { property: "og:title", content: "Eediga Shiva Prajval — Software Developer" },
      {
        property: "og:description",
        content:
          "CSE graduate building clean, performant software. Explore frontend group projects, internships, and certifications.",
      },
    ],
  }),
  component: Portfolio,
});

function Portfolio() {
  return (
    <main className="relative min-h-screen overflow-x-hidden">
      <FloatingShapes />
      <ParticleBackground />
      <MouseSpotlight />
      <ScrollProgress />
      <Navbar />
      <Hero />
      <About />
      <Skills />
      <Projects />
      <Internships />
      <Certifications />
      <Contact />
      <BackToTop />
    </main>
  );
}
