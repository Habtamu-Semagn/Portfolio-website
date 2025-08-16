function Contact() {
  return (
    <div className="px-10 md:px-20 xl:px-30 py-20 bg-slate-800">
      <h1 className="text-slate-500 text-xl flex gap-7">
        <span>||</span> <span>Contact</span>{" "}
      </h1>
      <h2 className="text-white  text-4xl md:text-5xl lg:text-6xl mt-15 mb-20 font-serif">
        Get in Touch With Me.
      </h2>
      <div className="text-slate-300 flex flex-col text-2xl xl:flex-row">
        <div className="xl:w-1/2 flex flex-col gap-5 mb-5">
          <p className="font-bold tracking-wide">
            📧 Email:{" "}
            <a
              href="mailto:habtamusemagn1@gmail.com"
              className="text-blue-400 hover:underline"
            >
              habtamusemagn1@gmail.com
            </a>
          </p>
          <p className="font-bold tracking-wide">
            🔗 GitHub:{" "}
            <a
              href="https://github.com/Habtamu-Semagn"
              className="text-blue-400 hover:underline"
              target="_blank"
            >
              github.com/Habtamu-Semagn
            </a>
          </p>
        </div>
        <div className="xl:w-1/2 flex flex-col gap-5">
          <p className="font-bold tracking-wide">
            🔗 Telegram:{" "}
            <a
              href="https://t.me/@hab435"
              className="text-blue-400 hover:underline"
              target="_blank"
            >
              @hab435
            </a>
          </p>
          <p className="font-bold tracking-wide">
            🔗 LinkedIn:{" "}
            <a
              href="https://www.linkedin.com/in/habtamu-semagn-9a1136320/"
              className="text-blue-400 hover:underline"
              target="_blank"
            >
              https://www.linkedin.com/in/habtamu-semagn-9a1136320/
            </a>
          </p>
        </div>
      </div>
      <p className="text-white text-2xl font-bold tracking-wide text-center mt-5">
        📍 Bahir Dar, Ethiopia
      </p>
    </div>
  );
}
//  className="text-blue-400 hover:underline"
export default Contact;
