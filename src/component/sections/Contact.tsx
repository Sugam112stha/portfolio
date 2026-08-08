import { FiGithub, FiLinkedin, FiMail, FiMapPin } from "react-icons/fi";

const Contact = () => {
  return (
    <section id="contact" className="py-16 lg:py-24">
      <div className="max-w-7xl mx-auto px-6 md:px-10 lg:px-16">
        {/* Heading */}
        <div className="mb-14">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-slate-900">
            Let's built something together.
          </h2>

          <p className="mt-5 max-w-2xl text-base md:text-lg leading-7 md:leading-8 text-slate-500">
            Have an idea, project, or opportunity in mind? Let's turn it into
            something meaningful.
          </p>

          <div className="w-32 md:w-48 h-[2px] bg-blue-500 mt-6 rounded-full"></div>
        </div>

        {/* Contact Cards */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Left Card */}
          <div className="bg-white border border-slate-200 rounded-3xl p-8 md:p-10 shadow-lg">
            <h3 className="text-2xl md:text-3xl font-bold text-slate-900">
              Let's work together.
            </h3>

            <p className="mt-5 max-w-lg text-base md:text-lg leading-7 md:leading-8 text-slate-600">
              I'm open to opportunities, collaborations, and interesting
              projects. If you have an idea or would like to work together, feel
              free to reach out.
            </p>
          </div>

          {/* Right Card */}
          <div className="bg-white border border-slate-200 rounded-3xl p-8 md:p-10 shadow-lg">
            <h3 className="text-2xl md:text-3xl font-bold text-slate-900">
              Contact Information
            </h3>

            <div className="mt-8 space-y-6">
              {/* Email */}
              <div className="flex items-center gap-4">
                <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-blue-50 text-blue-600">
                  <FiMail className="text-xl" />
                </div>

                <div>
                  <p className="text-sm font-medium text-slate-500">Email</p>
                  <a href="mailto:your@email.com"
                    className="text-base font-semibold text-slate-900 transition-colors hover:text-blue-600">
                    sugamstha619@gmail.com
                  </a>
                </div>
              </div>

              {/* Location */}
              <div className="flex items-center gap-4">
                <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-blue-50 text-blue-600">
                  <FiMapPin className="text-xl" />
                </div>

                <div>
                  <p className="text-sm font-medium text-slate-500">Location</p>
                  <p className="text-base font-semibold text-slate-900">
                    Itahari-2, Sunsari
                  </p>
                </div>
              </div>

              {/* LinkedIn */}
              <div className="flex items-center gap-4">
                <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-blue-50 text-blue-600">
                  <FiLinkedin className="text-xl" />
                </div>

                <div>
                  <p className="text-sm font-medium text-slate-500">LinkedIn</p>
                  <a href="https://www.linkedin.com/in/sugam-shrestha-081a13362/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-base font-semibold text-slate-900 transition-colors hover:text-blue-600">
                    Connect in LinkedIn
                  </a>
                </div>
              </div>

              {/* GitHub */}
              <div className="flex items-center gap-4">
                <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-blue-50 text-blue-600">
                  <FiGithub className="text-xl" />
                </div>

                <div>
                  <p className="text-sm font-medium text-slate-500">GitHub</p>
                  <a
                    href="https://github.com/Sugam112stha"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-base font-semibold text-slate-900 transition-colors hover:text-blue-600">
                    Connect in GitHub 
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
