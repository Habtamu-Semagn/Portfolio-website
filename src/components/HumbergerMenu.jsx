import { useState } from "react";
import KeyboardDoubleArrowRightIcon from "@mui/icons-material/KeyboardDoubleArrowRight";
function HumburgerMenu() {
  const [isOpen, setIsOpen] = useState(false);

  const handleClick = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="flex justify-between items-center py-8 px-10 bg-slate-900 text-slate-300 text-sm md:px-20 xl:px-30">
      <span className="text-slate-500 text-xl">Logo</span>
      <ul className="hidden md:flex  md:gap-8 lg:gap-25 sm:justify-center sm:items-center">
        <li className="cursor-pointer hidden md:block text-slate-500 text-xl">
          <a className="hover:text-white" href="#home">
            Home
          </a>
        </li>
        <li className="cursor-pointer hidden md:block text-slate-500 text-xl">
          <a className="hover:text-white" href="#service">
            Service
          </a>
        </li>
        <li className="cursor-pointer hidden md:block text-slate-500 text-xl">
          <a className="hover:text-white" href="#projects">
            Projects
          </a>
        </li>
      </ul>
      {!isOpen && (
        <button className="cursor-pointer font-bold text-white text-xl border-2 border-slate-300 md:px-4 lg:px-7 py-3 rounded-3xl hidden md:flex lg:gap-3 hover:bg-slate-800 hover:border-slate-800">
          <span>Hire Me</span>
          <KeyboardDoubleArrowRightIcon />
        </button>
      )}
      <div
        className="flex flex-col justify-between w-[30px] h-[21px] cursor-pointer z-50 sm:w-[40px] sm:h-[28px] md:hidden"
        onClick={handleClick}
      >
        <span
          className={`bg-black h-[3px] w-full rounded transition-all duration-300 ease sm:h-[4px] ${
            isOpen
              ? "rotate-45 translate-y-[9px] sm:translate-y-[12px]"
              : "rotate-0"
          }`}
        ></span>
        <span
          className={`bg-black h-[3px] w-full rounded transition-all duration-300 ease sm:h-[4px] ${
            isOpen ? "opacity-0" : "opacity-100"
          }`}
        ></span>
        <span
          className={`bg-black h-[3px] w-full rounded transition-all duration-300 ease sm:h-[4px] ${
            isOpen
              ? "-rotate-45 -translate-y-[9px] sm:-translate-y-[12px]"
              : "rotate-0"
          }`}
        ></span>
      </div>
      {isOpen && (
        <div
          className={`fixed right-0 top-0 h-full bg-slate-700 text-text p-4 w-64 sm:w-72 shadow-[0_4px_6px_-2px_rgba(0,0,0,0.3)] z-40 sm:top-16`}
        >
          <ul className="tracking-widest space-y-5 md:flex">
            <li>
              <a
                href="#"
                className="block cursor-pointer transition-colors duration-300 ease text-text hover:text-white no-underline"
              >
                Home
              </a>
            </li>
            <li>
              <a
                href="#"
                className="block cursor-pointer transition-colors duration-300 ease text-text hover:text-white no-underline"
              >
                Service
              </a>
            </li>
            <li>
              <a
                href="#"
                className="block cursor-pointer transition-colors duration-300 ease text-text hover:text-white no-underline"
              >
                Skills
              </a>
            </li>
          </ul>
        </div>
      )}
    </div>
  );
}

export default HumburgerMenu;
