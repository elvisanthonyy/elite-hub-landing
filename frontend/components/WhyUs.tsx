import WhyUsCard from "./WhyUsCard";

const whyUsCards = [
  {
    title: "Simple",
    color: "#EDEDED",
    iconColor: "#669985",
    textColor: "#373737",
    iconUrl: "/icons/digital-solutions.svg",
  },
  {
    title: "Practical",
    color: "#EDEDED",
    iconColor: "#669985",
    textColor: "#373737",
    iconUrl: "/icons/learning-development.svg",
  },
  {
    title: "Empowering",
    color: "#EDEDED",
    iconColor: "#669985",
    textColor: "#373737",
    iconUrl: "/icons/growth-opportunities.svg",
  },
  {
    title: "Innovative",
    color: "#EDEDED",
    iconColor: "#669985",
    textColor: "#373737",
    iconUrl: "/icons/growth-opportunities.svg",
  },
];

const WhyUs = () => {
  return (
    <section className="px-4 flex flex-col gap-5 py-[16px]">
      <h1 className="text-[20px] tracking-[-4%] font-semibold">
        WHAT DO WE DO?
      </h1>
      <div className="w-full md:flex-row flex flex-col gap-2">
        {whyUsCards.map((card, index) => (
          <WhyUsCard index={index} card={card} key={index} />
        ))}
      </div>
    </section>
  );
};

export default WhyUs;
