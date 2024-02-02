import { PropsWithChildren } from "react";

interface BannerProps extends PropsWithChildren<{}> {
  bg: string;
}

const ProjectBanner = ({ bg, children }: BannerProps) => {
  return (
    <div
      className="h-96 w-72 flex flex-col justify-center items-center bg-cover rounded-lg bg-white hover:scale-105 transition-all"
      style={{ backgroundImage: `url(${bg})` }}
    >
      {children}
    </div>
  );
};
export default ProjectBanner;
