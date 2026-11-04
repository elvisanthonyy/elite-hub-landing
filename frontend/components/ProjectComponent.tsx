import { Project } from "./OurWork";
import Icon from "./Icon";
import Link from "next/link";
import Image from "next/image";

interface ChildProps {
  project: Project;
}

const ProjectComponent = ({ project }: ChildProps) => {
  return (
    <div className="w-full max-w-[400px] bg-white flex flex-col gap-3 p-2 border rounded-[16px] min-h-[100px] dark:text-[#373737] border-[#d8d8d8]">
      <div className="w-full overflow-hidden h-[180px] rounded-[8px]">
        {project?.imageUrl &&    <Image
          src={project?.imageUrl}
          height={2000}
          width={2000}
          alt="image"
          className="w-full object-cover"
        />}
     
      </div>
      <div className="px-2 flex flex-col gap-2">
        <div className="flex items-center justify-between "><h3 className="font-semibold tracking-[-2%] text-[18px] ">{project.name}</h3> <p className="text-body-text">{project?.projectCategory}</p></div>
        
        <p className="text-[14px] pt-2 border-t border-[#d8d8d8] leading-[18.2px] text-body-text dark:text-[#373737]">
          {project.description}
        </p>
      </div>
      <div className="w-full flex justify-end">
        <Link
          href={project.link}
          className="flex cursor items-center justify-center rounded-full h-8 aspect-square bg-complementary border-[#d8d8d8] text-white"
        >
          <Icon size={20} label="arrow" iconUrl="/icons/arrow-right.svg" />
        </Link>
      </div>
    </div>
  );
};

export default ProjectComponent;
