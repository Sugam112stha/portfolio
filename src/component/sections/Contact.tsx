const Contact = () => {
  return (
    <section id="contact" className="py-16 lg:py-24">

      <div className="max-w-7xl mx-auto px-6 md:px-10 lg:px-16">

        {/* Heading */}
        <div className="mb-14">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-slate-900">
            Let's Connect
          </h2>

          <p className="mt-5 max-w-2xl text-base md:text-lg leading-7 md:leading-8 text-slate-500">
            Have a project idea, opportunity, or just want to say hello?
            I'd love to hear from you.
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
              I'm open to opportunities, collaborations, and interesting projects.
              If you have an idea or would like to work together, feel free to reach out.
            </p>

          </div>


          {/* Right Card */}
          <div className="bg-white border border-slate-200 rounded-3xl p-8 md:p-10 shadow-lg">

            <h3 className="text-2xl md:text-3xl font-bold text-slate-900">
              Contact Information
            </h3>

          </div>

        </div>

      </div>

    </section>
  );
};

export default Contact;