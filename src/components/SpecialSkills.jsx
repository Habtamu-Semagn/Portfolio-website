import DownloadIcon from "@mui/icons-material/Download";
import { useEffect, useRef, useState } from "react";

const TARGETS = [90, 85, 90, 85];

function SpecialSkills() {
  const [values, setValues] = useState([0, 0, 0, 0]);
  const [started, setStarted] = useState(false);
  const sectionRef = useRef(null);

  const onButtonClick = () => {
    const pdfUrl = "frontend_resume.pdf";
    const link = document.createElement("a");
    link.href = pdfUrl;
    link.download = "frontend_resume.pdf";
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  useEffect(() => {
    const observer = new window.IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setStarted(true);
        }
      },
      { threshold: 0.3 } // Adjust threshold as needed
    );
    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }
    return () => {
      if (sectionRef.current) observer.unobserve(sectionRef.current);
    };
  }, []);

  useEffect(() => {
    if (!started) return;
    const interval = setInterval(() => {
      setValues((prev) =>
        prev.map((val, idx) => (val < TARGETS[idx] ? val + 1 : val))
      );
    }, 15);

    if (values.every((val, idx) => val >= TARGETS[idx])) {
      clearInterval(interval);
    }

    return () => clearInterval(interval);
  }, [started, values]);

  return (
    <div
      ref={sectionRef}
      className="bg-slate-900 px-10 md:px-20 xl:px-30 py-20 flex flex-col flex-wrap gap:25 xl:flex-row"
    >
      <div className="xl:w-[50%] xl:flex xl:flex-col xl:justify-center mb-15">
        <h1 className="text-slate-500 text-xl flex gap-7">
          <span>||</span> <span>Special Skills</span>{" "}
        </h1>
        <h2 className="text-white text-4xl md:text-5xl lg:text-6xl mt-15 mb-20 font-serif">
          My Special Skill Field Here.
        </h2>
        <button
          onClick={onButtonClick}
          className="w-fit self-center md:self-auto border-2 border-slate-500 text-white px-15 py-5 mt-4 rounded-4xl cursor-pointer hover:bg-slate-800 hover:border-slate-800"
        >
          Get Resume
          <DownloadIcon />
        </button>
      </div>
      <div className="flex flex-col grow-1">
        <div className="bg-slate-800 p-7 mb-5 text-slate-300 grow-1">
          <p className="mb-5 flex justify-between">
            <span>Communication</span>
            <span>{values[0]}%</span>
          </p>
          <div className="bg-slate-500 h-2">
            <div
              className={`bg-white h-full`}
              style={{ width: `${values[0]}%` }}
            ></div>
          </div>
        </div>
        <div className="flex flex-col grow-1">
          <div className="bg-slate-800 p-7 mb-5 text-slate-300 grow-1">
            <p className="mb-5 flex justify-between">
              <span>Leadership</span>
              <span>{values[1]}%</span>
            </p>
            <div className="bg-slate-500 h-2">
              <div
                className={`bg-white h-full`}
                style={{ width: `${values[1]}%` }}
              ></div>
            </div>
          </div>
          <div className="bg-slate-800 p-7 mb-5 text-slate-300 grow-1">
            <p className="mb-5 flex justify-between">
              <span>Teamwork</span>
              <span>{values[2]}%</span>
            </p>
            <div className="bg-slate-500 h-2">
              <div
                className={`bg-white h-full`}
                style={{ width: `${values[2]}%` }}
              ></div>
            </div>
          </div>
          <div className="bg-slate-800 p-7 mb-5 text-slate-300 grow-1">
            <p className="mb-5 flex justify-between">
              <span>Flexibility</span>
              <span>{values[3]}%</span>
            </p>
            <div className="bg-slate-500 h-2">
              <div
                className={`bg-white h-full`}
                style={{ width: `${values[3]}%` }}
              ></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default SpecialSkills;
