import KeyboardDoubleArrowLeftIcon from "@mui/icons-material/KeyboardDoubleArrowLeft";
import KeyboardDoubleArrowRightIcon from "@mui/icons-material/KeyboardDoubleArrowRight";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faHtml5,
  faCss3Alt,
  faJsSquare,
  faReact,
  faNodeJs,
  faGitAlt,
  faGithub,
} from "@fortawesome/free-brands-svg-icons";
import { faDatabase, faServer } from "@fortawesome/free-solid-svg-icons";
import { useRef } from "react";

function Skills() {
  const scrollRef = useRef(null);
  const skills = [
    { name: "HTML", icon: faHtml5, color: "#E34F26" },
    { name: "CSS", icon: faCss3Alt, color: "#1572B6" },
    { name: "JavaScript", icon: faJsSquare, color: "#F7DF1E" },
    { name: "React", icon: faReact, color: "#61DBFB" },
    { name: "Tailwind CSS", icon: faCss3Alt, color: "#38BDF8" },
    { name: "Node.js", icon: faNodeJs, color: "#68A063" },
    { name: "Express.js", icon: faServer, color: "#fff" },
    { name: "Git", icon: faGitAlt, color: "#F1502F" },
    { name: "GitHub", icon: faGithub, color: "#fff" },
    { name: "MongoDB", icon: faDatabase, color: "#4DB33D" },
    { name: "SQL", icon: faDatabase, color: "#00758F" },
  ];

  const handleLeft = () => {
    scrollRef.current.scrollBy({ left: -300, behavior: "smooth" });
  };
  const handleRight = () => {
    scrollRef.current.scrollBy({ left: 300, behavior: "smooth" });
  };
  return (
    <div className="bg-slate-900 px-10 md:px-20 xl:px-30 py-20 flex flex-col">
      <h2 className="text-center text-slate-400 text-2xl mb-10">Tech Stack</h2>
      <div className="bg-slate-900 w-full flex gap-10  overflow-hidden relative">
        <div className="flex overflow-hidden scroll-smooth" ref={scrollRef}>
          {skills.map((skill, i) => (
            <div
              key={i}
              className="flex flex-col items-center group text-9xl mx-7"
            >
              <FontAwesomeIcon
                icon={skill.icon}
                style={{ color: skill.color }}
                className="text-9xl mb-3 group-hover:scale-110 transition-transform duration-300"
              />
              <p className="text-slate-300 text-sm">{skill.name}</p>
            </div>
          ))}
          <p
            className="absolute left-0 top-1/3 text-4xl text-slate-400 hover:cursor-pointer hover:bg-black/30"
            onClick={handleLeft}
          >
            <KeyboardDoubleArrowLeftIcon fontSize="inherit" />
          </p>
          <p
            className="absolute right-0 top-1/3 text-4xl text-slate-400 hover:cursor-pointer hover:bg-black/30"
            onClick={handleRight}
          >
            <KeyboardDoubleArrowRightIcon fontSize="inherit" />
          </p>
        </div>
      </div>
    </div>
  );
}

export default Skills;
