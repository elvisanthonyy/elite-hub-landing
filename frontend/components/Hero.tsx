"use client";
import Image from "next/image";

const Hero = () => {
  return (
    <section className="w-full top-16 pt-[66px] flex items-center justify-center relative min-h-dvh h-fit flex-col gap-10 bg-[url('/images/strokes.png')] dark:bg-[url('/images/strokes-dark.png')] bg-cover bg-bottom">
      <div className="w-full leading-[52px] text-[#fff] flex flex-col justify-center [-2%] px-5">
        <div className="flex flex-col justify-center text-text text-[136px]">
          <h1 className="font-caacupe">
            Elite <br />
            <span className="text-[56px] text-primary dark:text-[#669985] font-caacupe">
              Hub Global
            </span>
          </h1>
          <p className="text-[16px] text-body-text">
            Build products. Growing People
          </p>
        </div>
      </div>
      <div className="px-4 min-h-60 flex justify-center">
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
