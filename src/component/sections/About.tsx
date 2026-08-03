const About = () => {
  return (
    <section id="about" className="py-24">
      <div className="max-w-7xl mx-auto px-6">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="text-6xl font-black text-slate-900 leading-tight mt-6">
            THE STORY <br />
            BEHIND <br />
            THE CODE
          </h2>
          <div className="w-150 h-0.5 bg-slate-300 my-8"></div>
        </div>
        <div className="grid grid-cols-2 gap-16 items-start">
          <div>
            <p className="text-slate-600 leading-9">
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
          <div className="bg-slate-50 rounded-3xl p-8 shadow-lg">
            <h3 className="text-2xl font-bold mb-8">Education</h3>

            <div className="space-y-8">
              <div>
                <p className="text-blue-600 font-semibold">2024 - Present</p>

                <h4 className="text-xl font-semibold">
                  BSc (Hons) Information Technology
                </h4>

                <p className="text-slate-600">Itahari International College</p>
              </div>

              <div>
                <p className="text-blue-600 font-semibold">2021 - 2023</p>

                <h4 className="text-xl font-semibold">+2 Management</h4>

                <p className="text-slate-600"> Koshi st James</p>
              </div>

              <div>
                <p className="text-blue-600 font-semibold">Completed</p>

                <h4 className="text-xl font-semibold">SEE</h4>

                <p className="text-slate-600"> Secondary Boarding School</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
