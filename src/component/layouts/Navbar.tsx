import { FiDownload } from "react-icons/fi";

const Navbar = () => {

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
            <h1 className="text-3xl font-bold tracking-wide">Zorik <span className="text-blue-400">.</span></h1>

            <ul className="flex items-center gap-10">
                {navlinks.map((link)=> (
                    <li key={link} className="cursor-pointer text-slate-300 transition-all duration-300 hover:text-blue-500 hover:scale-105"
                     > {link}
                    </li>
                ))}
            </ul>

            <button className="flex items-center gap-2 px-6 py-3 rounded-lg font-medium shadow-lg duration-500 transition-all bg-blue-600 hover:bg-blue-500 hover:-translate-y-1"> <FiDownload /> Download Resume 
            </button>
        </div>
    </nav>
    </>
  )
}

export default Navbar;