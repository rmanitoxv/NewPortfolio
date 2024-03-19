import { FaGithub } from "react-icons/fa"
import { IoMdOpen } from "react-icons/io"
import ProjectBanner from "./ProjectBanner"
import techno from "../files/techno.jpg"
import dogderma from "../files/dogderma.jpg"
import brittany from "../files/brittany.png"

const Projects = () => {
  return (
    <div className="h-screen text-white flex flex-col justify-center items-center">
      <h1 className="font-bold">PROJECTS</h1>
      <div className="flex lg:grid lg:grid-cols-3 gap-8 xl:w-4/6 lg:w-full w-11/12 lg:overflow-hidden overflow-x-auto lg:justify-center py-4">
        <div className="w-full flex justify-end">
          <ProjectBanner bgImage={techno} bgColor={""}>
            <div className="w-72 justify-center font-raleway font-extrabold text-3xl text-cyan-400 h-full flex items-center">
              TECHNO<span className="text-yellow-300">T</span>YPER
            </div>
            <div className="h-full text-black text-justify px-8">
              A typing game tailored for kids, featuring a range of challenges
              and difficulties to enhance their skills in a fun, engaging way.
            </div>
            <div className="flex gap-2 text-black pb-4 text-xl">
              <a
                target="_blank"
                href="https://github.com/rmanitoxv/keyboarding-react"
              >
                <FaGithub />
              </a>
              <a target="_blank" href="https://keyboarding-react.vercel.app">
                <IoMdOpen />
              </a>
            </div>
          </ProjectBanner>
        </div>
        <div className="w-full flex justify-center">
          <ProjectBanner bgImage={dogderma} bgColor={""}>
            <div className="w-72 justify-center font-barlow text-[#fe8d2a] font-bold text-4xl h-full flex items-center">
              DOG<span className="text-[#112b3c]">DERMA</span>
            </div>
            <div className="text-justify px-8 mt-14 h-full">
              DogDerma is a web-mobile application used to detect a number of
              dog skin diseases using image classification.
            </div>
            <div className="flex gap-2 text-white pb-4 text-xl">
              <a target="_blank" href="https://github.com/rmanitoxv/DogDermVue">
                <FaGithub />
              </a>
              <a target="_blank" href="https://dogderm.vercel.app">
                <IoMdOpen />
              </a>
            </div>
          </ProjectBanner>
        </div>
        <div className="w-full flex justify-start">
          <ProjectBanner bgImage={""} bgColor={""}>
            <div className="w-72 justify-center font-barlow text-[#fe8d2a] h-full flex items-center">
              <img src={brittany} className="w-48" />
            </div>
            <div className="text-justify h-full px-8 bg-[#bc8540] rounded-b-lg">
              A payment portal for Brittany Pallazo employees that utilizes maya
              api to handle payments. It also comes with staff and clients
              management.
              <div className="absolute flex gap-2 text-white justify-center bottom-4 right-1/2 text-xl">
                <a
                  target="_blank"
                  href="https://paymentportal.brittanypalazzo.com"
                >
                  <IoMdOpen />
                </a>
              </div>
            </div>
          </ProjectBanner>
        </div>
        <div className="flex gap-8 lg:justify-center w-full lg:col-span-3">
          <ProjectBanner bgImage={""} bgColor={"#020617"}>
            <div className="lg:w-full w-72 justify-center font-inter text-purple-600 font-bold uppercase text-2xl h-full flex items-center">
              Undying Blog App
            </div>
            <div className="text-justify h-full px-8 font-inter ">
              The blog app, powered by Google Firebase and Angular, allows users
              to post content by simply registering with their name.
            </div>
            <div className="flex gap-2 text-white pb-4 text-xl">
              <a
                target="_blank"
                href="https://github.com/rmanitoxv/blog-angular"
              >
                <FaGithub />
              </a>
              <a target="_blank" href="https://blog-angular-sandy.vercel.app/">
                <IoMdOpen />
              </a>
            </div>
          </ProjectBanner>
          <ProjectBanner bgImage={""} bgColor={"#0f172a"}>
            <div className="font-inter uppercase text-2xl h-full flex items-center w-72 justify-center lg:w-full">
              EXPENSE TRACKER
            </div>
            <div className="text-justify h-full px-8 font-inter">
              Track expenses easily with this app. List your expenses and it
              calculates your monthly spending.
            </div>
            <div className="flex gap-2 text-white pb-4 text-xl">
              <a
                target="_blank"
                href="https://github.com/rmanitoxv/expense-tracker-next"
              >
                <FaGithub />
              </a>
              <a
                target="_blank"
                href="https://expense-tracker-next-two.vercel.app/"
              >
                <IoMdOpen />
              </a>
            </div>
          </ProjectBanner>
        </div>
      </div>
    </div>
  )
}

export default Projects
