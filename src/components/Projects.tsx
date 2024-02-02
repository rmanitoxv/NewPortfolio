import { FaGithub } from "react-icons/fa";
import { IoMdOpen } from "react-icons/io";
import ProjectBanner from "./ProjectBanner";
import techno from "../images/techno.jpg";
import dogderma from "../images/dogderma.jpg";
import brittany from "../images/brittany.png";

const Projects = () => {
  return (
    <div className="h-screen bg-slate-900 text-white flex flex-col justify-center items-center">
      <h1>PROJECTS</h1>
      <div className="grid grid-cols-3 gap-8">
        <ProjectBanner bg={techno}>
          <div className="font-raleway font-extrabold text-3xl text-cyan-400 h-full flex items-center">
            TECHNO<span className="text-yellow-300">T</span>YPER
          </div>
          <div className="h-full text-black text-justify px-8">
            A typing game tailored for kids, featuring a range of challenges and
            difficulties to enhance their skills in a fun, engaging way.
          </div>
          <div className="flex gap-2 text-black pb-4">
            <a href="https://github.com/rmanitoxv/keyboarding-react">
              <FaGithub />
            </a>
            <a href="https://keyboarding-react.vercel.app">
              <IoMdOpen />
            </a>
          </div>
        </ProjectBanner>
        <ProjectBanner bg={dogderma}>
          <div className="font-barlow text-[#fe8d2a] font-bold text-4xl h-full flex items-center">
            DOG<span className="text-[#112b3c]">DERMA</span>
          </div>
          <div className="text-justify px-8 h-full">
            DogDerma is a web-mobile application used to detect a number of dog
            skin diseases with the use of image classification.
          </div>
          <div className="flex gap-2 text-white pb-4">
            <a href="https://github.com/rmanitoxv/DogDermVue">
              <FaGithub />
            </a>
            <a href="https://dogderm.vercel.app">
              <IoMdOpen />
            </a>
          </div>
        </ProjectBanner>
        <ProjectBanner bg={""}>
          <div className="font-barlow text-[#fe8d2a] font-bold text-4xl h-full flex items-center">
            <img src={brittany} className="w-48" />
          </div>
          <div className="text-justify h-full px-8 bg-[#bc8540]">
            A payment portal for Brittany Pallazo employees that utilizes maya
            api to handle payments. It also comes with staff and clients
            management.
          </div>
          <div className="flex gap-2 text-white bg-[#bc8540] w-full pb-4 justify-center">
            <a href="https://paymentportal.brittanypalazzo.com">
              <IoMdOpen />
            </a>
          </div>
        </ProjectBanner>
      </div>
    </div>
  );
};

export default Projects;
