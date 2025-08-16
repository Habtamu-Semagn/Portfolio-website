import Contact from "./pages/Contact";
import Home from "./pages/Home";
import Projects from "./pages/Projects";
import Service from "./pages/Service";
import Skills from "./pages/Skills";
import SpecialSkills from "./pages/Specialskills";

function App() {
  return (
    <div className="select-none">
      <Home />
      <Service />
      <SpecialSkills />
      <Projects />
      <Skills />
      <Contact />
    </div>
  );
}

export default App;
