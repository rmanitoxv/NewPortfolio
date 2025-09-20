import { FaLinkedin, FaGithubSquare } from "react-icons/fa"
import { FaFilePdf } from "react-icons/fa6"
import resume from "../files/RUSSEL A. MANITO.pdf"
import { useEffect, useState } from "react"

const Hero = () => {
  const langs = [
    "ReactJS",
    "React Native",
    "NextJS",
    "Angular",
    "VueJS",
    "NodeJS",
    "Laravel",
    "Django",
    "JavaScript",
    "TypeScript",
    "TailwindCSS",
    "PHP",
    "Python",
    "Selenium",
    "HTML",
    "CSS",
    "C++",
    "C",
  ]
  
  const [isVisible, setIsVisible] = useState(false)
  
  useEffect(() => {
    setIsVisible(true)
  }, [])

  return (
    <div className="bg-linear-to-b from-neutral-950 to-neutral-900 text-white min-h-screen flex justify-center items-center">
      <div className="flex flex-col justify-center h-full lg:w-3/5 items-center">
        <div className={`transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <p className="font-playfair tracking-wide 2xl:text-8xl lg:text-7xl text-5xl text-center">
            Hello,
            <span className="md:hidden"> I'm </span>
            <span className="block md:hidden font-noto font-bold 2xl:text-[12rem] xl:text-9xl text-8xl pb-8">
              Russel
            </span>
          </p>
          <p className="hidden tracking-wide md:block font-noto font-bold 2xl:text-[12rem] text-9xl pb-8">
            <span className="2xl:text-8xl lg:text-7xl text-5xl"> I'm </span>
            <span className="bg-linear-to-r from-blue-500 to-purple-500 text-transparent bg-clip-text">Russel</span>
          </p>
        </div>
        
        <div className={`flex flex-wrap justify-center gap-2 transition-all duration-1000 delay-300 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          {langs.map((lang, index) => {
            return (
              <div
                key={lang}
                className={`border border-blue-400/30 rounded-full px-2 2xl:px-4 py-1 hover:text-neutral-950 hover:bg-white hover:-translate-y-1 cursor-default transition-all 2xl:text-xl xl:text-sm transition-all duration-300 delay-${index * 50 % 500}`}
              >
                {lang}
              </div>
            )
          })}
        </div>
        
        <div className={`flex flex-col items-center w-full mt-8 transition-all duration-1000 delay-500 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <p className="text-center my-4 2xl:text-xl">
            <a
              href="mailto:manito.russel@gmail.com"
              className="hover:underline hover:text-blue-400 transition-colors"
            >
              manito.russel@gmail.com
            </a>
          </p>
          <div className="flex gap-4 justify-center items-center text-3xl">
            <a href="https://www.linkedin.com/in/rrmanitoxv/" className="hover:text-blue-500 transition-colors">
              <FaLinkedin />
            </a>
            <a href="https://github.com/rmanitoxv" className="hover:text-gray-400 transition-colors">
              <FaGithubSquare />
            </a>
            <a href={resume} className="text-2xl hover:text-red-400 transition-colors">
              <FaFilePdf />
            </a>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Hero
