"use client";
const Hero = () => {
  return (
    <section className="w-full relative min-h-[60dvh]">
      <div className="w-full leading-[52px] text-[#fff] flex flex-col justify-center text-center gap-8 [-2%] px-4 h-[260px] absolute bottom-[62px]">
        <div className="px-2 text-primary text-[136px]">
          <h1 className="font-caacupe">
            Elite <br />
            <span className="text-[56px] font-caacupe text-text ml-1">Hub Global</span>
          </h1>
          <p className="text-[16px] ml-2 text-body-text">Build products. Growing People</p>
        </div>

        <button className="text-[14px] w-full rounded-[12px] flex items-center justify-center h-[56px] bg-complementary font-medium tracking-[-4%]">
          Contact Us
        </button>
      </div>
    </section>
  );
};

export default Hero;
