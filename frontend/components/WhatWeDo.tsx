import Image from "next/image";

const WhatWeDo = () => {
  return (
    <section className="px-4 flex flex-col gap-5 py-[48px] pb-[24px]">
      <h1 className="text-[20px] tracking-[-4%] font-semibold">
        WHAT DO WE DO?
      </h1>
      <p className="text-[14px] w-[90%] text-body-text leading-[18.2px]">
        We build simple, fast, and scalable digital products that solve
        real-world problems, while creating practical opportunities for people
        to learn, build, and grow in the digital industry.
      </p>
      <div className="w-full">
        <Image
          src={"/images/what-we-do-image.png"}
          alt="what we do"
          width={1000}
          height={1000}
          draggable={false}
          className="w-full"
        />
      </div>
    </section>
  );
};

export default WhatWeDo;
