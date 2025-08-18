import HumburgerMenu from "../components/HumbergerMenu";
import DownloadIcon from "@mui/icons-material/Download";
import profileImg from "../assets/portfolio.png";
import GitHubIcon from "@mui/icons-material/GitHub";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import TelegramIcon from "@mui/icons-material/Telegram";
import EmailButton from "../components/EmailButton";
import Button from "../components/Button";

function Home() {
  return (
    <div id="home">
      <HumburgerMenu />
      <section className="bg-slate-900 text-slate-100 px-10 md:px-20 xl:px-30 py-25">
        <div className="flex flex-col md:flex-row items-center gap-14">
          <div className="flex-1 text-center md:text-left  flex flex-col gap-10">
            <h1 className="text-5xl mb-4 font-serif flex flex-col gap-13">
              <span>Hello!, I'm</span>{" "}
              <span className="font-medium text-6xl">Habtamu Semagn</span>
            </h1>
            <h2 className="text-2xl text-slate-400 mb-6">
              Frontend Developer specializing in React
            </h2>
            <button className="w-fit self-center md:self-auto border-2 border-slate-500 text-white px-15 py-5 mt-4 rounded-4xl cursor-pointer hover:bg-slate-800 hover:border-slate-800">
              Get Resume
              <DownloadIcon />
            </button>
          </div>

          <div className="flex-1 -order-1 md:order-1">
            <div className="flex w-fit justify-center items-center p-3 rounded-full border-7 border-double border-slate-700 relative">
              <img
                src={profileImg}
                alt="Habtamu Semagn"
                className="w-64 h-64 object-cover rounded-full shadow-lg"
              />
              <div className="absolute inset-0 grid grid-cols-3 grid-rows-3 rounded-full">
                {/* Position buttons using grid placement */}
                <a
                  href="mailto:you@example.com"
                  className="col-start-1 row-start-1 flex justify-start items-start p-2"
                >
                  <EmailButton />
                </a>
                <a
                  href="https://github.com/Habtamu-Semagn"
                  className="col-start-3 row-start-1 flex justify-end items-start p-2"
                >
                  <Button>
                    <GitHubIcon />
                  </Button>
                </a>
                <a
                  href="https://www.linkedin.com/in/habtamu-semagn-9a1136320/"
                  className="col-start-1 row-start-3 flex justify-start items-end p-2"
                >
                  <Button>
                    <LinkedInIcon />
                  </Button>
                </a>
                <a
                  href="https://twitter.com"
                  className="col-start-3 row-start-3 flex justify-end items-end p-2"
                >
                  <Button>
                    <TelegramIcon />
                  </Button>
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
export default Home;
