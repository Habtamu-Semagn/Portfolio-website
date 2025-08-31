import KeyboardDoubleArrowLeftIcon from "@mui/icons-material/KeyboardDoubleArrowLeft";
import KeyboardDoubleArrowRightIcon from "@mui/icons-material/KeyboardDoubleArrowRight";
import LaunchIcon from "@mui/icons-material/Launch";
import { projectInfo } from "../data/projectsdata";
import { useState } from "react";
import { Link } from "react-router-dom";
function Projects() {
  const [index, setIndex] = useState(0);

  const handleLeft = () => {
    setIndex((index) => (index === 0 ? projectInfo.length - 1 : index - 1));
  };
  const handleRight = () => {
    setIndex((index) => (index === projectInfo.length - 1 ? 0 : index + 1));
  };

  return (
    <div
      id="projects"
      className="bg-slate-800 px-10 md:px-20 xl:px-30 py-20 flex flex-col flex-wrap xl:flex-row"
    >
      <div className="flex flex-wrap justify-between mb-5">
        <div className="mb-3 lg:mb-5">
          <h1 className="text-slate-500 text-xl flex gap-7">
            <span>||</span> <span>Awesome Portfolio</span>{" "}
          </h1>
          <h2 className="text-white text-4xl md:text-5xl lg:text-6xl mt-15 mb-5 sm:mb-20 font-serif">
            My Complete Projects.
          </h2>
        </div>
      </div>
      <div className="w-full h-full  md:h-[500px] flex relative overflow-hidden">
        {/* slider component */}
        <div
          className="flex transition-transform delay-300 ease-out"
          style={{ translate: `${-100 * index}%` }}
        >
          {projectInfo.map((proj) => (
            <div className="relative w-full h-[250px] sm:h-full shrink-0">
              <img
                src={proj.src}
                alt="Taskmanager app"
                className={`object-fill w-full h-full hover:cursor-pointer`}
              />
              <a
                href={proj.link}
                className="absolute inset-0 flex justify-center items-center bg-black/50 opacity-0 hover:opacity-100 transition-opacity duration-300"
              >
                <LaunchIcon fontSize="large" />
              </a>
            </div>
          ))}
        </div>
      </div>
      <div className="mt-10 flex w-full relative">
        <div className=" md:m-auto flex gap-10">
          <button
            onClick={handleLeft}
            className="p-3 sm:p-10 text-xl border-2 rounded-full text-slate-400 hover:bg-white hover:text-slate-800 cursor-pointer"
          >
            <KeyboardDoubleArrowLeftIcon fontSize="inherit" />
          </button>
          <button
            onClick={handleRight}
            className="p-3 sm:p-10 text-xl border-2 rounded-full text-slate-400 hover:bg-white hover:text-slate-800 cursor-pointer"
          >
            <KeyboardDoubleArrowRightIcon fontSize="inherit" />
          </button>
        </div>{" "}
        <Link
          to={"/projects"}
          className="absolute top-0 right-0 my-3 px-3 py-2 sm:my-10 sm:px-10 sm:py-5 font-bold font-xl tracking-widest cursor-pointer  text-white rounded-full bg-emerald-500 hover:bg-emerald-600 transition-colors border-4 border-slate-700" //bg-slate-800
        >
          Details
        </Link>
      </div>
    </div>
  );
}
export default Projects;
