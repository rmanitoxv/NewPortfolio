import { FaLinkedin, FaGithubSquare } from "react-icons/fa";
const Hero = () => {
  const langs = [
    "ReactJS",
    "NextJS",
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
  ];

  return (
    <div className="bg-neutral-950 text-white h-screen flex flex-col justify-center px-[36rem]">
      <p className="font-playfair text-9xl">Hello,</p>
      <p className="font-playfair text-9xl mb-8">
        I'm <span className="font-noto font-bold">Russel.</span>
      </p>
      <div className="flex flex-wrap justify-center gap-2">
        {langs.map((lang) => {
          return (
            <div
              key={lang}
              className="border rounded-full px-2 py-1 hover:text-neutral-950 hover:bg-white hover:-translate-y-1 cursor-default transition-all "
            >
              {lang}
            </div>
          );
        })}
      </div>
      <p className="text-center my-4">
        <a href="mailto:manito.russel@gmail.com" className="hover:underline">
          manito.russel@gmail.com
        </a>
      </p>
      <div className="flex gap-2 justify-center text-2xl">
        <a href="https://www.linkedin.com/in/rrmanitoxv/">
          <FaLinkedin />
        </a>
        <a href="https://github.com/rmanitoxv">
          <FaGithubSquare />
        </a>
      </div>
    </div>
  );
};

export default Hero;
