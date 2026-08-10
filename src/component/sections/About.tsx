const About = () => {
  return (
    <section id="about" className="py-16 lg:py-24 lg:mt-30">
      <div className="max-w-7xl mx-auto px-6 md:px-10 lg:px-16">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="text-4xl md:text-5xl lg:text-7xl font-bold leading-tight">
            THE STORY <br className="hidden lg:block" />
            BEHIND <br className="hidden lg:block" />
            THE CODE
          </h2>
          <div className="w-52 h-0.5 bg-slate-200"></div>
        </div>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-24 items-start">
          <div>
            <p className="max-w-xl text-base md:text-lg text-slate-600 leading-9">
              I am Sugam Shrestha, a passionate Frontend Developer from Nepal
              currently pursuing a BSc (Hons) in Information Technology at
              Itahari International College. I enjoy building modern,
              responsive, and user-friendly web applications using React,
              TypeScript, and Tailwind CSS. Every project I create helps me
              improve my problem-solving skills and become a better developer.
              My goal is to continuously learn new technologies and eventually
              become a Full Stack Developer while creating meaningful digital
              experiences.
            </p>
          </div>
          <div className="bg-slate-50 rounded-3xl p-6 lg:p-10 shadow-lg transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl">
            <h3 className="text-2xl md:text-3xl font-bold mb-8">Education</h3>

            <div className="space-y-8">
              <div className="space-y-2">
                <p className="text-blue-600 font-semibold border-l-4 border-blue-600 pl-5">
                    2024 - Present
                </p>
                <h4 className="text-xl font-semibold">
                  BSc (Hons) Information Technology
                </h4>
                <p className="text-slate-600">
                    Itahari International College(IIC)
                </p>
              </div>

              <div>
                <p className="text-blue-600 font-semibold border-l-4 border-blue-600 pl-5">
                    2021 - 2023
                </p>
                <h4 className="text-xl font-semibold">
                    +2 Management
                </h4>
                <p className="text-slate-600">
                    Koshi st James
                </p>
              </div>

              <div>
                <p className="text-blue-600 font-semibold border-l-4 border-blue-600 pl-5">
                    Completed
                </p>
                <h4 className="text-xl font-semibold">
                    SEE
                </h4>
                <p className="text-slate-600"> 
                    Secondary Boarding School
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
