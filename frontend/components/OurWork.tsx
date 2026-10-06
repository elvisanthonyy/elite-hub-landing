"use client";
import { useState, useEffect } from "react";
import ProjectComponent from "./ProjectComponent";
import { useRouter } from "next/navigation";
import Icon from "./Icon";

//project type
export interface Project {
  id: number;
  name: string;
  description: string;
  code: string;
  link: string;
}

interface ChildProps {
  projects: Project[];
}

const OurWork = ({ projects }: ChildProps) => {
  const router = useRouter();
  const [seeMore, setSeeMore] = useState(false);
  const [mainProjects, setMainProjects] = useState<Project[] | null>(null);

  //function to setVariable and url
  const setSeeMoreVariable = () => {
    if (seeMore) {
      setSeeMore(false);
    } else {
      setSeeMore(true);
    }
  };

  useEffect(() => {
    if (!seeMore) {
      setMainProjects(projects.slice(0, 1));
    } else {
      setMainProjects(projects);
    }
  }, [seeMore]);
  return (
    <section className="px-4 flex  flex-col gap-5 py-[24px]">
      <div className="flex  flex-col">
        <h1 className="text-[20px] tracking-[-4%] font-semibold">OUR WORK</h1>
        <p className="text-[14px] w-[90%] text-body-text leading-[18.2px]">
          Websites we’ve designed and developed for businesses, organizations,
          and brands.
        </p>
      </div>

      <div className="w-full flex flex-col gap-3">
        {mainProjects?.map((project) => (
          <ProjectComponent key={project.id.toString()} project={project} />
        ))}
      </div>
      <div className="w-full flex justify-end">
        <button
          className="text-[14px] cursor-pointer items-center flex gap-2 tracking-[-4%] font-medium text-body-text"
          onClick={setSeeMoreVariable}
        >
          {seeMore ? "See less" : "See more"}
          <div
            className={`transition-all ease-in duration-500 ${seeMore && "rotate-180"}`}
          >
            <Icon
              iconUrl="/icons/see-more-arrow.svg"
              size={20}
              label="down arrow"
            />
          </div>
        </button>
      </div>

      <button className="w-[200px] h-11 cursor-pointer text-white text-[14px] font-medium tracking-[-4%] bg-complementary rounded-[12px]">
        Hire Us
      </button>
    </section>
  );
};

export default OurWork;
