import { PropsWithChildren } from "react"

interface BannerProps extends PropsWithChildren<{}> {
  bgImage: string
  bgColor: string
}

const ProjectBanner = ({ bgImage, bgColor, children }: BannerProps) => {
  return (
    <div
      className="h-80 w-72 flex flex-col justify-center items-center bg-cover rounded-lg bg-white hover:scale-105 transition-all relative"
      style={{ backgroundImage: `url(${bgImage})`, backgroundColor:  bgColor}}
    >
      {children}
    </div>
  )
}

export default ProjectBanner
