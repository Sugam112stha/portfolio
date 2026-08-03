const Navbar = () => {

    const navlinks = [
        "Home",
        "About",
        "Skills",
        "Projects",
        "Experiences",
        "Education",
        "Contact",
    ];
  return (
    <>
    <nav className="sticky top-0 z-50 w-full bg-slate-900">
        <div className="mx-auto flex h-20 max-w-7xl items-center justify-between px-6 lg:px-8 text-white">
            <h1 className="text-3xl font-bold tracking-wide">Zorik <span className="text-blue-400">.</span></h1>

            <ul className="flex gap-10">
                {navlinks.map((link)=> (
                    <li key={link} > {link}
                    </li>
                ))}
            </ul>

            <button className="p-3 duration-500 transition-all bg-blue-600 hover:bg-blue-500 ">Download Resume</button>
        </div>
    </nav>
    </>
  )
}

export default Navbar;