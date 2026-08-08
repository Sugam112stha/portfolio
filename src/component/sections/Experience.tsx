const Experience = () => {
  return (
    <section id="experience" className="py-16 lg:py-24">
      <div className="max-w-7xl mx-auto px-6 md:px-10 lg:px-16">
        <div className="mb-14">
          <h2 className="font-bold text-3xl md:text-4xl lg:text-5xl text-slate-900">
            Professional Journey
          </h2>
          <p className="mt-5 max-w-2xl text-base md:text-lg leading-7 md:leading-8 text-slate-700">
            My journey of gaining real-world experience, developing new skills,
            and growing as a frontend developer.
          </p>
          <div className="bg-blue-500 mt-5 w-32 h-[2px] lg:w-48 rounded-full"></div>
        </div>
        <div className="bg-white border border-slate-200 rounded-3xl p-6 md:p-8 lg:p-10 shadow-lg">
          <p className="text-blue-600 font-semibold text-sm md:text-base">
            June 2026
          </p>

          <h3 className="mt-3 text-2xl md:text-3xl font-bold text-slate-900">
            Frontend Developer Intern
          </h3>

          <p className="mt-2 text-lg font-semibold text-slate-600">Youth IT</p>

          <p className="mt-1 text-sm text-slate-500">
            Pragati Chowk, Itahari, Sunsari
          </p>
          <p className="mt-6 max-w-3xl text-base md:text-lg leading-7 md:leading-8 text-slate-600">
            Working on responsive and user-friendly web interfaces using React,
            Next.js, TypeScript, and Tailwind CSS. Developing reusable UI
            components, integrating APIs, implementing caching, and debugging
            frontend applications.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Experience;
