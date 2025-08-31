import Contact from "../components/Contact";
import Hero from "../components/Hero";
import Projects from "../components/Projects";
import Service from "../components/Service";
import Skills from "../components/Skills";
import SpecialSkills from "../components/SpecialSkills";

function HomePage() {
  return (
    <div className="select-none scroll-smooth">
      <Hero />
      <Service />
      <SpecialSkills />
      <Projects />
      <Skills />
      <Contact />
    </div>
  );
}

export default HomePage;
