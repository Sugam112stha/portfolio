const Hero = () => {
  return (
    <section className="flex p-10 min-h-screen flex items-center">
      <div className="max-w-7xl pt-16">
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
        </div>

      </div>
    </section>
  );
};

export default Hero;
