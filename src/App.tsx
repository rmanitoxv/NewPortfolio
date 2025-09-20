import { Parallax } from "react-scroll-parallax"
import Hero from "./components/Hero"
import Projects from "./components/Projects"
import Contact from "./components/Contact"
import Skills from "./components/Skills"
import { useEffect } from "react"

const App = () => {
  useEffect(() => {
    document.documentElement.style.scrollBehavior = "smooth";
    
    return () => {
      document.documentElement.style.scrollBehavior = "";
    };
  }, []);

  return (
    <div className="snap-y snap-mandatory h-screen overflow-y-scroll select-none">
      <div id="home" className="snap-start h-screen bg-neutral-950">
        <Parallax>
          <Hero />
        </Parallax>
      </div>
      <div id="skills" className="snap-start h-screen bg-neutral-900">
        <Parallax>
          <Skills />
        </Parallax>
      </div>
      <div id="projects" className="snap-start h-screen bg-zinc-900">
        <Parallax>
          <Projects />
        </Parallax>
      </div>
      <div id="contact" className="snap-start h-screen bg-stone-950">
        <Parallax>
          <Contact />
        </Parallax>
      </div>
    </div>
  )
}

export default App
