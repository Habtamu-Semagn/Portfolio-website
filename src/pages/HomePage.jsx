import Contact from "../components/Contact";
import Home from "../components/Home";
import Projects from "../components/Projects";
import Service from "../components/Service";
import Skills from "../components/Skills";
import SpecialSkills from "../components/Specialskills";

function HomePage() {
  return (
    <div className="select-none scroll-smooth">
      <Home />
      <Service />
      <SpecialSkills />
      <Projects />
      <Skills />
      <Contact />
    </div>
  );
}

export default HomePage;
