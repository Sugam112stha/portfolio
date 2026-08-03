import { FiDownload } from "react-icons/fi";
import ProfileImage from "../../assets/images/pic1.jpeg";

const Home = () => {
  return (
    <section id="home" className="flex flex-1 p-10 min-h-screen items-center">
      <div className="max-w-7xl mx-auto pt-16">
        <div className="space-y-6">
          <p className="text-lg text-blue-400 font-medium"> Hello, I'm</p>

          <h1 className="text-6xl font-bold">Sugam Shrestha</h1>

          <h2 className="text-3xl font-semibold text-slate-300">
            Frontend Developer
          </h2>

          <p className="max-w-lg text-lg leading-8 text-slate-400">
            I create modern, responsive, and user-friendly web applications
            using React, TypeScript, and Tailwind CSS. I enjoy transforming
            ideas into clean, interactive, and visually appealing digital
            experiences while continuously learning new technologies.
          </p>

          <div className="flex items-center gap-5">

            <button className="px-6 py-3 rounded-lg bg-blue-600 font-medium text-white transition-all duration-500 hover:bg-blue-500 hover:scale-105">
                Hire me 
            </button>
            <button className="flex items-center gap-2 px-6 py-3 rounded-lg bg-blue-600 font-medium text-white transition-all duration-500 hover:bg-blue-500 hover:scale-105"> <FiDownload /> 
                Download CV 
            </button>
            
          </div>
        </div>
      </div>

      <div className="h-125 w-95 flex overflow-hidden rounded-3xl shadow-2xl transition-all duration-500 hover:scale-105">
        <img src={ProfileImage} alt="Sugam Shrestha" className="h-full w-full object-cover"/>
      </div>
    </section>
  );
};

export default Home;
