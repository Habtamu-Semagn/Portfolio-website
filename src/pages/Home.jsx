import HumburgerMenu from "../components/HumbergerMenu";
import DownloadIcon from "@mui/icons-material/Download";
import profileImg from "../assets/portfolio.png";
function Home() {
  return (
    <div>
      <HumburgerMenu />
      <section className="bg-slate-900 text-slate-100 px-10 md:px-20 xl:px-30 py-25">
        <div class="flex flex-col md:flex-row items-center gap-14">
          <div class="flex-1 text-center md:text-left  flex flex-col gap-10">
            <h1 class="text-5xl mb-4 font-serif flex flex-col gap-13">
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

          <div class="flex-1 -order-1 md:order-1">
            <img
              src={profileImg}
              alt="Habtamu Semagn"
              class="w-64 h-64 object-cover rounded-full shadow-lg border-4 border-slate-700"
            />
          </div>
        </div>
      </section>
    </div>
  );
}
export default Home;
