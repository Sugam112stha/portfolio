import { FaEnvelope, FaGithub, FaInstagram, FaLinkedin } from "react-icons/fa";
import logo1 from "../../assets/images/logo1.png"

const Footer = () => {
  const navItems = [
    { name: "Home", href: "#home" },
    { name: "About", href: "#about" },
    { name: "Skills", href: "#skills" },
    { name: "Projects", href: "#projects" },
    { name: "Experience", href: "#experience" },
    { name: "Contact", href: "#contact" },
  ];
  return (
    <footer className="bg-slate-950 text-white">
      <div className="mx-auto max-w-7xl px-6 py-10 md:px-10 lg:px-16">

        <div className="flex flex-col items-center justify-between gap-8 md:flex-row">

          {/* Logo */}
          <div>
            <img src={logo1} alt="" className="w-24"/>

            <p className="mt-2 text-sm text-slate-400">
              Frontend Developer
            </p>
          </div>

          {/* Navigation */}
          <div className="flex flex-wrap justify-center gap-6 text-sm text-slate-400">
             {navItems.map((item) => (
              <a
                key={item.name}
                href={item.href}
                className="cursor-pointer text-slate-300 transition-all duration-300 hover:scale-105 hover:text-blue-500"
              >
                {item.name}
              </a>
            ))}
          </div>

          {/* Social Links */}
          <div className="flex items-center gap-4">

            <a
              href="https://github.com/Sugam112stha"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="GitHub"
              className="flex h-10 w-10 items-center justify-center rounded-full bg-slate-800 text-slate-300 transition hover:bg-blue-500 hover:text-white">
              <FaGithub size={20} />
            </a>

            <a
              href="https://www.linkedin.com/in/sugam-shrestha-081a13362/"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn"
              className="flex h-10 w-10 items-center justify-center rounded-full bg-slate-800 text-slate-300 transition hover:bg-blue-500 hover:text-white">
              <FaLinkedin size={20} />
            </a>

            <a
              href="mailto:sugamstha619@gmail.com"
              aria-label="Email"
              className="flex h-10 w-10 items-center justify-center rounded-full bg-slate-800 text-slate-300 transition hover:bg-blue-500 hover:text-white">
              <FaEnvelope size={18} />
            </a>

            <a
              href="https://www.instagram.com/suga.m44/"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Instagram"
              className="flex h-10 w-10 items-center justify-center rounded-full bg-slate-800 text-slate-300 transition hover:bg-blue-500 hover:text-white">
              <FaInstagram size={20} />
            </a>

          </div>

        </div>

        {/* Bottom */}
        <div className="mt-8 border-t border-slate-800 pt-6 text-center">
          <p className="text-sm text-slate-500">
            © 2026 Sugam Shrestha. All rights reserved.
          </p>
        </div>

      </div>
    </footer>
  );
};

export default Footer;