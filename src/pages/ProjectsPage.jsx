import SimonGame from "../assets/simongame.png";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import LaunchIcon from "@mui/icons-material/Launch";
import ProjectCard from "../components/projectCard";
import { useNavigate } from "react-router-dom";
function Projects() {
  let navigate = useNavigate();
  const handleClick = () => {
    navigate(-1);
  };
  const projectInfo = [
    {
      name: "Simon Game",
      src: SimonGame,
      link: "https://simon-game-umber-theta.vercel.app/",
      description:
        "Simon Game is a classic memory game that challenges players to remember and replicate sequences of colors and sounds. The game starts with a single color, and with each successful round, an additional color is added to the sequence. Players must click the colors in the correct order to progress. The game tests memory skills and concentration, providing an engaging and fun experience for users of all ages.",
      technologies: ["HTML", "CSS", "JavaScript", "JQuery"],
    },
    {
      name: "Simon Game",
      src: SimonGame,
      link: "https://simon-game-umber-theta.vercel.app/",
      description:
        "Simon Game is a classic memory game that challenges players to remember and replicate sequences of colors and sounds. The game starts with a single color, and with each successful round, an additional color is added to the sequence. Players must click the colors in the correct order to progress. The game tests memory skills and concentration, providing an engaging and fun experience for users of all ages.",
      technologies: ["HTML", "CSS", "JavaScript", "JQuery"],
    },
  ];
  return (
    <div className="px-3 sm:px-10 md:px-20 xl:px-30 py-20 bg-slate-800">
      <span
        onClick={handleClick}
        className="absolute top-5 sm:left-5 text-white rounded-2xl p-2 bg-slate-900 hover:bg-slate-700 hover:cursor-pointer"
      >
        <ArrowBackIcon />
      </span>
      <h1 className="text-slate-500 text-xl flex gap-7">
        <span>||</span> <span>My Projects</span>{" "}
      </h1>
      <h2 className="text-white  text-4xl md:text-5xl lg:text-6xl mt-15 mb-20 font-serif">
        My Complete Projects.
      </h2>
      {projectInfo.map((projects, index) => (
        <ProjectCard
          key={index}
          name={projects.name}
          src={projects.src}
          link={projects.link}
          description={projects.description}
          technologies={projects.technologies}
        />
      ))}
    </div>
  );
}
export default Projects;
{
  /* <div className="flex flex-wrap gap-10 xl:gap-20 text-white">
  <div className="relative shrink-0">
    <img
      src={SimonGame}
      alt="Taskmanager app"
      className={`object-fill w-full h-full hover:cursor-pointer`}
    />
    <a
      href={"https://simon-game-umber-theta.vercel.app/"}
      className="absolute inset-0 flex justify-center items-center bg-black/50 opacity-0 hover:opacity-100 transition-opacity duration-300"
    >
      <LaunchIcon fontSize="large" />
    </a>
  </div>
  <div className="bg-slate-900 px-10 md:30 py-15 grow-1 lg:w-100"></div>
</div> */
}
