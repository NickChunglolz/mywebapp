import Hero from "@/components/Hero";
import AskNick from "@/components/AskNick";
import About from "@/components/About";
import Work from "@/components/Work";
import Projects from "@/components/Projects";
import Skills from "@/components/Skills";
import Education from "@/components/Education";
import Contact from "@/components/Contact";

export default function Home() {
  return (
    <>
      <Hero />
      <AskNick />
      <About />
      <Work />
      <Projects />
      <Skills />
      <Education />
      <Contact />
    </>
  );
}
