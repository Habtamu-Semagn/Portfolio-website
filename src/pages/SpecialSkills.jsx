import DownloadIcon from "@mui/icons-material/Download";
function SpecialSkills() {
  return (
    <div className="bg-slate-900 px-10 md:px-20 xl:px-30 py-20 flex flex-col flex-wrap gap:25 xl:flex-row">
      <div className="xl:w-[50%] xl:flex xl:flex-col xl:justify-center mb-15">
        <h1 className="text-slate-500 text-xl flex gap-7">
          <span>||</span> <span>Special Skills</span>{" "}
        </h1>
        <h2 className="text-white text-4xl md:text-5xl lg:text-6xl mt-15 mb-20 font-serif">
          My Special Skill Field Here.
        </h2>
        <button className="w-fit self-center md:self-auto border-2 border-slate-500 text-white px-15 py-5 mt-4 rounded-4xl cursor-pointer hover:bg-slate-800 hover:border-slate-800">
          Get Resume
          <DownloadIcon />
        </button>
      </div>
      <div className="flex flex-col grow-1">
        <div className="bg-slate-800 p-7 mb-5 text-slate-300 grow-1">
          <p className="mb-5">Communication</p>
          <div className="bg-slate-500 h-2">
            <div className="bg-white w-[85%] h-full"></div>
          </div>
        </div>
        <div className="flex flex-col grow-1">
          <div className="bg-slate-800 p-7 mb-5 text-slate-300 grow-1">
            <p className="mb-5">Leadership</p>
            <div className="bg-slate-500 h-2">
              <div className="bg-white w-[90%] h-full"></div>
            </div>
          </div>
          <div className="bg-slate-800 p-7 mb-5 text-slate-300 grow-1">
            <p className="mb-5">Teamwork</p>
            <div className="bg-slate-500 h-2">
              <div className="bg-white w-[85%] h-full"></div>
            </div>
          </div>
          <div className="bg-slate-800 p-7 mb-5 text-slate-300 grow-1">
            <p className="mb-5">Flexibility</p>
            <div className="bg-slate-500 h-2">
              <div className="bg-white w-[90%] h-full"></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default SpecialSkills;
