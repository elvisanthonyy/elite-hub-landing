"use client";
import Image from "next/image";

const Hero = () => {
  return (
    <section className="w-full flex items-center justify-center relative min-h-[70dvh] h-fit flex-col gap-7 bg-[url('/images/strokes.png')] dark:bg-[url('/images/strokes-dark.png')] bg-cover bg-bottom">
      <div className="w-full text-[#fff] flex flex-col justify-center [-2%] px-5">
        <div className="flex h-fit leading-[52px] flex-col justify-center text-text text-[136px]">
          <h1 className="font-caacupe">
            Elite <br />
            <span className="text-[56px] pl-1 text-primary dark:text-[#669985] font-caacupe">
              Hub Global
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
          className="w-full h-full object-cover"
        />
      </div>
    </section>
  );
};

export default Hero;
