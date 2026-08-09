import { FiDownload, FiMenu, FiX } from "react-icons/fi";
import { useState } from "react";
import logo1 from "../../assets/images/logo1.png"

const Navbar = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const navlinks = [
        "Home",
        "About",
        "Skills",
        "Projects",
        "Experiences",
        "Contact",
    ];
  return (
    <>
    <nav className="sticky top-0 z-50 w-full bg-slate-900">
        <div className="mx-auto flex h-20 max-w-7xl items-center justify-between px-6 lg:px-8 text-white">
          <img src={logo1} alt="" className="w-24"/>

            <ul className="hidden lg:flex items-center gap-10">
                {navlinks.map((link)=> (
                    <li key={link} className="cursor-pointer text-slate-300 transition-all duration-300 hover:text-blue-500 hover:scale-105"
                     > {link}
                    </li>
                ))}
            </ul>

            <button className="hidden lg:flex items-center gap-2 px-6 py-3 rounded-lg font-medium shadow-lg duration-500 transition-all bg-blue-600 hover:bg-blue-500 hover:-translate-y-1"> <FiDownload /> Download Resume 
            </button>
            <button className="lg:hidden text-3xl text-white" onClick={() => setIsMenuOpen(!isMenuOpen)}>
                {isMenuOpen ? <FiX /> : <FiMenu />}
            </button>
        </div>
    </nav>
    {
  isMenuOpen && (
    <div className="lg:hidden bg-slate-900 border-t border-slate-800">
      <ul className="flex flex-col items-center py-6 gap-6">
        {navlinks.map((link) => (
          <li
            key={link}
            className="text-slate-300 hover:text-blue-500 transition-all duration-300 cursor-pointer"
          >
            {link}
          </li>
        ))}
      </ul>

      <div className="flex justify-center pb-6">
        <button className="flex items-center gap-2 px-6 py-3 rounded-lg bg-blue-600 hover:bg-blue-500 transition-all duration-300">
          <FiDownload />
          Download Resume
        </button>
      </div>
    </div>
  )
}
    </>
  )
}

export default Navbar;