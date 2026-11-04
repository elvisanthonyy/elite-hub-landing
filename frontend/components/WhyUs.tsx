import WhyUsCard from "./WhyUsCard";

const whyUsCards = [
  {
    title: "Simple",
    color: "#EDEDED",
    iconColor: "#669985",
    textColor: "#373737",
    iconUrl: "/icons/simple.svg",
  },
  {
    title: "Practical",
    color: "#EDEDED",
    iconColor: "#669985",
    textColor: "#373737",
    iconUrl: "/icons/practical.svg",
  },
  {
    title: "Empowering",
    color: "#EDEDED",
    iconColor: "#669985",
    textColor: "#373737",
    iconUrl: "/icons/empowering.svg",
  },
  {
    title: "Innovative",
    color: "#EDEDED",
    iconColor: "#669985",
    textColor: "#373737",
    iconUrl: "/icons/innovative.svg",
  },
];

const WhyUs = () => {
  return (
    <section className="px-4 lg:px-[120px] border-t border-[#d8d8d8] dark:border-[#414141] flex flex-col gap-5 py-[16px]">
      <h1 className="text-[20px] tracking-[-4%] font-semibold">
        WHAT ELITE HUB?
      </h1>
      <div className="w-full md:flex-row flex flex-col gap-3">
        {whyUsCards.map((card, index) => (
          <WhyUsCard index={index} card={card} key={index} />
        ))}
      </div>
    </section>
  );
};

export default WhyUs;
