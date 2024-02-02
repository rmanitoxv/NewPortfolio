import { Parallax } from "react-scroll-parallax"
import Hero from "./components/Hero"
import Projects from "./components/Projects"

const App = () => {

  return (
    <div>
      <div className="sticky top-0 bg-neutral-950">
        <Parallax opacity={[2, 0]} scale={[1, 0.9]}>
          <Hero />
        </Parallax>
      </div>
      <div className="sticky top-0 bg-slate-950">
        <Parallax opacity={[2, 0]}>
          <Projects />
        </Parallax>
      </div>
    </div>
  )
}

export default App