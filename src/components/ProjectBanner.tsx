import { PropsWithChildren } from "react"

interface BannerProps extends PropsWithChildren<{}> {
  bgImage: string
  bgColor: string
}

const ProjectBanner = ({ bgImage, bgColor, children }: BannerProps) => {
  return (
    <div
      className="lg:h-80 lg:w-72 h-96 flex flex-col justify-center items-center bg-cover rounded-lg bg-white lg:hover:scale-105 lg:transition-all relative"
      style={{ backgroundImage: `url(${bgImage})`, backgroundColor: bgColor }}
    >
      {children}
    </div>
  )
}

export default ProjectBanner
