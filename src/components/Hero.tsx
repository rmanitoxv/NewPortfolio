import { FaLinkedin, FaGithubSquare } from "react-icons/fa"
import { FaFilePdf } from "react-icons/fa6"
import resume from "../files/RUSSEL A. MANITO.pdf"

const Hero = () => {
  const langs = [
    "ReactJS",
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

  return (
    <div className="bg-neutral-950 text-white h-screen flex justify-center">
      <div className="flex flex-col justify-center h-full lg:w-3/5 items-center">
        <p className="font-playfair tracking-wide 2xl:text-8xl lg:text-7xl text-5xl text-center">
          Hello,
          <span className="md:hidden"> I'm </span>
          <span className="block md:hidden font-noto font-bold 2xl:text-[12rem] xl:text-9xl text-8xl pb-8">
            Russel
          </span>
        </p>
        <p className="hidden tracking-wide md:block font-noto font-bold 2xl:text-[12rem] text-9xl pb-8">
          <span className="2xl:text-8xl lg:text-7xl text-5xl"> I'm </span>
          Russel
        </p>
        <div className="flex flex-wrap justify-center gap-2">
          {langs.map((lang) => {
            return (
              <div
                key={lang}
                className="border rounded-full px-2 2xl:px-4 py-1 hover:text-neutral-950 hover:bg-white hover:-translate-y-1 cursor-default transition-all 2xl:text-xl xl:text-sm"
              >
                {lang}
              </div>
            )
          })}
        </div>
        <div className="flex flex-col items-center w-full">
          <p className="text-center my-4 2xl:text-xl">
            <a
              href="mailto:manito.russel@gmail.com"
              className="hover:underline"
            >
              manito.russel@gmail.com
            </a>
          </p>
          <div className="flex gap-2 justify-center items-center text-2xl">
            <a href="https://www.linkedin.com/in/rrmanitoxv/">
              <FaLinkedin />
            </a>
            <a href="https://github.com/rmanitoxv">
              <FaGithubSquare />
            </a>
            <a href={resume} className="text-xl">
              <FaFilePdf />
            </a>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Hero
