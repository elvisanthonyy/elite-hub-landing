"use client";
const Hero = () => {
  return (
    <section className="w-full flex items-center justify-center relative min-h-[60dvh] bg-[url('/images/strokes.png')] bg-cover bg-center">
      <div className="w-full leading-[52px] text-[#fff] flex flex-col justify-center text-center gap-8 [-2%] px-4 h-[260px]">
        <div className="px-2 text-text text-[136px]">
          <h1 className="font-caacupe">
            Elite <br />
            <span className="text-[56px] text-primary font-caacupe ml-1">
              Hub Global
            </span>
          </h1>
          <p className="text-[16px] ml-2 text-body-text">
            Build products. Growing People
          </p>
        </div>
      </div>
    </section>
  );
};

export default Hero;
