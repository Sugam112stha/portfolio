import { FiDownload, FiMenu, FiX } from "react-icons/fi";
import { useState } from "react";
import logo1 from "../../assets/images/logo1.png";
import Resume from "../../assets/resume/Sugam_Shrestha.pdf";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navItems = [
    { name: "Home", href: "#home" },
    { name: "About", href: "#about" },
    { name: "Skills", href: "#skills" },
    { name: "Projects", href: "#projects" },
    { name: "Experience", href: "#experience" },
    { name: "Contact", href: "#contact" },
  ];

  const handleNavClick = () => {
    setIsMenuOpen(false);
  };

  return (
    <>
      <nav className="fixed top-0 left-0 z-40 w-full bg-slate-950/95 backdrop-blur-md">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4 md:px-10 lg:px-16">

          {/* Logo */}
          <a href="#home" onClick={handleNavClick}>
            <img
              src={logo1}
              alt="Zorik Logo"
              className="h-12 w-auto"
            />
          </a>

          {/* Desktop Navigation */}
          <div className="hidden items-center gap-8 lg:flex">
            {navItems.map((item) => (
              <a
                key={item.name}
                href={item.href}
                className="cursor-pointer text-slate-300 transition-all duration-300 hover:scale-105 hover:text-blue-500"
              >
                {item.name}
              </a>
            ))}

            {/* Desktop Resume */}
            <a
              href={Resume}
              download="Sugam_Shrestha.pdf"
              className="flex items-center gap-2 rounded-lg bg-blue-600 px-6 py-3 font-medium text-white shadow-lg transition-all duration-500 hover:-translate-y-1 hover:bg-blue-500"
            >
              <FiDownload />
              Download Resume
            </a>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="text-3xl text-white lg:hidden"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label="Toggle menu"
          >
            {isMenuOpen ? <FiX /> : <FiMenu />}
          </button>

        </div>
      </nav>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="fixed left-0 top-[72px] z-30 w-full border-t border-slate-800 bg-slate-950 px-6 py-6 shadow-xl lg:hidden">

          <div className="flex flex-col gap-5">

            {navItems.map((item) => (
              <a
                key={item.name}
                href={item.href}
                onClick={handleNavClick}
                className="text-base font-medium text-slate-300 transition-colors duration-300 hover:text-blue-500"
              >
                {item.name}
              </a>
            ))}

            {/* Mobile Resume */}
            <a
              href={Resume}
              download="Sugam_Shrestha.pdf"
              onClick={handleNavClick}
              className="flex items-center justify-center gap-2 rounded-lg bg-blue-600 px-6 py-3 font-medium text-white transition-all duration-300 hover:bg-blue-500"
            >
              <FiDownload />
              Download Resume
            </a>

          </div>
        </div>
      )}
    </>
  );
};

export default Navbar;