import Taskmanager from "../assets/Taskmanager.png";
import MovieListing from "../assets/MovieListing.PNG";
import KeyboardDoubleArrowLeftIcon from "@mui/icons-material/KeyboardDoubleArrowLeft";
import KeyboardDoubleArrowRightIcon from "@mui/icons-material/KeyboardDoubleArrowRight";
import LaunchIcon from "@mui/icons-material/Launch";
import { useState } from "react";
import { Link } from "react-router-dom";
function Projects() {
  const [index, setIndex] = useState(0);
  const projectImg = [
    { image: Taskmanager, link: "https://taskmanager-habtamu.vercel.app/" },
    { image: MovieListing, link: "www.google.com" },
  ];
  const handleLeft = () => {
    setIndex((index) => (index === 0 ? projectImg.length - 1 : index - 1));
  };
  const handleRight = () => {
    setIndex((index) => (index === projectImg.length - 1 ? 0 : index + 1));
  };
  return (
    <div
      id="projects"
      className="bg-slate-800 px-10 md:px-20 xl:px-30 py-20 flex flex-col flex-wrap gap:25 xl:flex-row"
    >
      <div className="flex flex-wrap justify-between mb-5">
        <div className="mb-10 lg:mb-15">
          <h1 className="text-slate-500 text-xl flex gap-7">
            <span>||</span> <span>Awesome Portfolio</span>{" "}
          </h1>
          <h2 className="text-white text-4xl md:text-5xl lg:text-6xl mt-15 mb-20 font-serif">
            My Complete Projects.
          </h2>
        </div>
        <div className="justify-center self-end flex gap-10">
          <button
            onClick={handleLeft}
            className="p-10 text-xl border-2 rounded-full text-slate-400 hover:bg-white hover:text-slate-800 cursor-pointer"
          >
            <KeyboardDoubleArrowLeftIcon fontSize="inherit" />
          </button>
          <button
            onClick={handleRight}
            className="p-10 text-xl border-2 rounded-full text-slate-400 hover:bg-white hover:text-slate-800 cursor-pointer"
          >
            <KeyboardDoubleArrowRightIcon fontSize="inherit" />
          </button>
        </div>
      </div>
      <div className="w-full h-full flex relative overflow-hidden">
        {/* slider component */}
        <div
          className="flex transition-transform delay-300 ease-out"
          style={{ translate: `${-100 * index}%` }}
        >
          {projectImg.map((proj) => (
            <div className="relative w-full shrink-0">
              <img
                src={proj.image}
                alt="Taskmanager app"
                className={`object-contain w-full h-full hover:cursor-pointer`}
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
      <div className="flex items-center justify-end w-full">
        {" "}
        <Link
          to={"/projects"}
          className="my-10 px-10 py-5 font-bold font-xl tracking-widest cursor-pointer bg-slate-800 text-white rounded-full hover:bg-slate-700 transition-colors border-4 border-slate-700"
        >
          Details
        </Link>
      </div>
    </div>
  );
}
export default Projects;
