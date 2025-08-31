import { useEffect, useState } from "react";
import KeyboardDoubleArrowRightIcon from "@mui/icons-material/KeyboardDoubleArrowRight";
const SECTIONS = ["home", "service", "projects"];

function HumburgerMenu() {
  const [isOpen, setIsOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("home");
  const [isSticky, setIsSticky] = useState(false);

  const onHireMe = () => {
    window.open(
      "https://mail.google.com/mail/?view=cm&fs=1&to=habtamusemagn1@gmail.com&su=Hire%20Me&body=Hello%20Habtamu,",
      "_blank"
    );
  };
  // Sticky logic
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 100) {
        setIsSticky(true);
      } else {
        setIsSticky(false);
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    const handleIntersect = (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          setActiveSection(entry.target.id);
        }
      });
    };

    const observer = new window.IntersectionObserver(handleIntersect, {
      threshold: 0.2, // Adjust as needed
    });

    SECTIONS.forEach((id) => {
      const el = document.getElementById(id);
      if (el) observer.observe(el);
    });

    return () => observer.disconnect();
  }, []);

  const handleClick = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div
      className={`${
        isSticky ? "fixed top-0 left-0 w-full z-50 shadow-lg" : ""
      } flex justify-between items-center py-8 px-10 bg-slate-900 text-slate-300 text-sm md:px-20 xl:px-30 transition-all duration-300`}
    >
      <span className="text-white text-xl flex gap-2">
        <span className="text-xl font-bold">🚀 Habtamu</span>
      </span>
      <ul className="hidden md:flex  md:gap-8 lg:gap-25 sm:justify-center sm:items-center">
        {SECTIONS.map((section) => (
          <li
            key={section}
            onClick={() => {
              const el = document.getElementById(section);
              if (el) el.scrollIntoView({ behavior: "smooth" });
            }}
            className={`cursor-pointer hidden md:block text-xl ${
              activeSection === section ? "text-white" : "text-slate-500"
            }`}
          >
            <a className="hover:text-white">
              {section.charAt(0).toUpperCase() + section.slice(1)}
            </a>
          </li>
        ))}
      </ul>
      {!isOpen && (
        <button
          onClick={onHireMe}
          className="hire-me-btn cursor-pointer font-bold text-white text-xl border-2 border-slate-300 md:px-4 lg:px-7 py-3 rounded-3xl hidden md:flex lg:gap-3 hover:bg-slate-800 hover:border-slate-800"
        >
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
          className={`fixed right-0 top-0 h-full w-full bg-slate-800 text-text p-4 shadow-[0_4px_6px_-2px_rgba(0,0,0,0.3)] z-40`}
        >
          <ul className="tracking-widest flex flex-col space-y-10 items-center pt-40">
            {SECTIONS.map((section) => (
              <li
                key={section}
                className={`cursor-pointer text-xl ${
                  activeSection === section ? "text-white" : "text-slate-500"
                }`}
              >
                <a
                  className="hover:text-white"
                  href={`#${section}`}
                  onClick={() => {
                    setActiveSection(section);
                    setIsOpen(false); // Optionally close menu on click
                  }}
                >
                  {section.charAt(0).toUpperCase() + section.slice(1)}
                </a>
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
}

export default HumburgerMenu;
