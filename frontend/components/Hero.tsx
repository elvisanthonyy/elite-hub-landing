"use client";
import Image from "next/image";

const Hero = () => {
  return (
    <section className="w-full flex lg:flex-row lg:justify-start lg:px-[120px] items-center justify-center relative min-h-[70dvh] lg:min-h-[50dvh] h-fit flex-col gap-7 bg-[url('/images/strokes-dark.png')] lg:bg-[url('/images/strokes-desktop-dark.png')] lg:dark:bg-[url('/images/strokes-desktop-light.png')] dark:bg-[url('/images/strokes-light.png')] bg-cover bg-bottom">
      <div className="w-full lg:w-fit text-[#fff] flex flex-col justify-center lg:items-start [-2%] px-5 lg:px-0">
        <div className="flex h-fit leading-[52px] flex-col justify-center text-text text-[108px]">
          <h1 className="font-caacupe">
            Elite <br />
            <span className="text-[140px] leading-[140px] h-fit text-primary dark:text-[#669985] font-caacupe">
              Hub
            </span>
          </h1>
          <p className="text-[16px] pl-1 pt-3 leading-[16px] text-body-text">
            Build products. Growing People
          </p>
        </div>
      </div>
      <div className="px-4 flex justify-center">
        <Image
          src={"/images/hero-image-room.png"}
          height={2000}
          width={2000}
          alt="Hero Image"
          className="w-full md:w-[60%] h-full object-cover"
        />
      </div>
    </section>
  );
};

export default Hero;
