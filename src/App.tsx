import Navbar from "./component/layouts/Navbar"
import About from "./component/sections/About"
import Experience from "./component/sections/Experience"
import Home from "./component/sections/Home"
import Projects from "./component/sections/Projects"
import Skills from "./component/sections/Skills"

function App() {
  return (
    <>
    <Navbar/>
    <Home/>
    <About/>
    <Skills/>
    <Projects/>
    <Experience/>
    </>
  )
}

export default App