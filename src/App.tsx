import { Parallax } from "react-scroll-parallax"
import Hero from "./components/Hero"
import Projects from "./components/Projects"
import Contact from "./components/Contact"

const App = () => {
  return (
    <div>
      <div className="sticky top-0 bg-neutral-950">
        <Parallax opacity={[2, 0]}>
          <Hero />
        </Parallax>
      </div>
      <div className="sticky top-0 bg-zinc-900">
        <Parallax opacity={[2, 0]}>
          <Projects />
        </Parallax>
      </div>
      <div className="sticky top-0 bg-stone-950">
        <Parallax opacity={[2, 0]}>
          <Contact />
        </Parallax>
      </div>
    </div>
  )
}

export default App
