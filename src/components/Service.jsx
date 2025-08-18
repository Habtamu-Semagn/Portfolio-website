import KeyboardDoubleArrowRightIcon from "@mui/icons-material/KeyboardDoubleArrowRight";
import IntegrationInstructionsIcon from "@mui/icons-material/IntegrationInstructions";
import DesignServicesIcon from "@mui/icons-material/DesignServices";
import CodeIcon from "@mui/icons-material/Code";
function Service() {
  return (
    <div id="service" className="px-10 md:px-20 xl:px-30 py-20 bg-slate-800">
      <h1 className="text-slate-500 text-xl flex gap-7">
        <span>||</span> <span>My Services</span>{" "}
      </h1>
      <h2 className="text-white  text-4xl md:text-5xl lg:text-6xl mt-15 mb-20 font-serif">
        Service Provide For My Clients.
      </h2>
      <div className="flex flex-wrap gap-10 xl:gap-20 text-white">
        <div className="bg-slate-900 px-10 md:30 py-15 grow-1 lg:w-100">
          <p className="text-center text-[64px] mb-10">
            <CodeIcon fontSize="inherit" />
          </p>
          <h1 className="font-bold text-2xl text-white tracking-wide mb-7">
            Custom Frontend development
          </h1>
          <li className="list-none text-slate-500 text-xl mb-3">
            <KeyboardDoubleArrowRightIcon className="mr-2" />
            Build reusable React components
          </li>
          <li className="list-none text-slate-500 text-xl mb-3">
            <KeyboardDoubleArrowRightIcon className="mr-2" />
            Fully responsive layout with Tailwind CSS
          </li>
          <li className="list-none text-slate-500 text-xl mb-3">
            <KeyboardDoubleArrowRightIcon className="mr-2" />
            Optimized and clean code structure
          </li>
        </div>
        <div className="bg-slate-900 px-10 md:30 py-15 grow-1 lg:w-100">
          <p className="text-center text-[64px] mb-10">
            <IntegrationInstructionsIcon fontSize="inherit" />
          </p>
          <h1 className="font-bold text-2xl text-white tracking-wide mb-7">
            React Web App Development
          </h1>
          <li className="list-none text-slate-500 text-xl mb-3">
            <KeyboardDoubleArrowRightIcon className="mr-2" />
            State management using React Context
          </li>
          <li className="list-none text-slate-500 text-xl mb-3">
            <KeyboardDoubleArrowRightIcon className="mr-2" />
            Dynamic routing with React Router
          </li>
          <li className="list-none text-slate-500 text-xl mb-3">
            <KeyboardDoubleArrowRightIcon className="mr-2" />
            Form handling and validation
          </li>
          <li className="list-none text-slate-500 text-xl mb-3">
            <KeyboardDoubleArrowRightIcon className="mr-2" />
            Client-side rendering
          </li>
        </div>
        <div className="bg-slate-900 px-10 md:30 py-15 grow-1 lg:w-100">
          <p className="text-center text-[64px] mb-10">
            <DesignServicesIcon fontSize="inherit" />
          </p>
          <h1 className="font-bold text-2xl text-white tracking-wide mb-7">
            UI/UX Implementation
          </h1>
          <li className="list-none text-slate-500 text-xl mb-3">
            <KeyboardDoubleArrowRightIcon className="mr-2" />
            Convert Figma or design files to code
          </li>
          <li className="list-none text-slate-500 text-xl mb-3">
            <KeyboardDoubleArrowRightIcon className="mr-2" />
            Pixel-perfect component implementation
          </li>
          <li className="list-none text-slate-500 text-xl mb-3">
            <KeyboardDoubleArrowRightIcon className="mr-2" />
            Responsive design across devices
          </li>
          <li className="list-none text-slate-500 text-xl mb-3">
            <KeyboardDoubleArrowRightIcon className="mr-2" />
            Maintain consistent spacing & visual hierarchy
          </li>
        </div>
      </div>
    </div>
  );
}

export default Service;
