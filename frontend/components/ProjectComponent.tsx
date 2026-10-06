import { Project } from "./OurWork";
import Icon from "./Icon";
import Link from "next/link";
import Image from "next/image";

interface ChildProps {
  project: Project;
}

const ProjectComponent = ({ project }: ChildProps) => {
  return (
    <div className="w-full flex flex-col gap-3 p-2 border rounded-[24px] min-h-[100px] border-[#d8d8d8]">
      <div className="w-full overflow-hidden h-[180px] bg-[#eefdf7] rounded-[16px]">
        <Image
          src={"/images/hero-image.png"}
          height={2000}
          width={2000}
          alt="image"
          className="w-full"
        />
      </div>
      <div className="px-2 flex flex-col gap-2">
        <h3>{project.name}</h3>
        <p className="text-[14px] pt-2 border-t border-[#d8d8d8] leading-[18.2px] text-body-text">
          {project.description}
        </p>
      </div>
      <div className="w-full flex justify-end">
        <Link
          href={project.link}
          className="flex cursor items-center justify-center rounded-full h-11 aspect-square border border-[#d8d8d8] text-white"
        >
          <Icon size={24} label="arror" iconUrl="/icons/right-arrow.svg" />
        </Link>
      </div>
    </div>
  );
};

export default ProjectComponent;
