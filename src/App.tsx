import Footer from "./component/layouts/Footer"
import Navbar from "./component/layouts/Navbar"
import About from "./component/sections/About"
import Contact from "./component/sections/Contact"
import Experience from "./component/sections/Experience"
import Home from "./component/sections/Home"
import Projects from "./component/sections/Projects"
import Skills from "./component/sections/Skills"
import EntryScreen from "./component/ui/EntryScreen"

function App() {
  return (
    <>
    <EntryScreen/>
    <Navbar/>
    <Home/>
    <About/>
    <Skills/>
    <Projects/>
    <Experience/>
    <Contact/>
    <Footer/>
    </>
  )
}

export default App