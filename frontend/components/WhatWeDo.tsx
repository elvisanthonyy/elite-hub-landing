import WhatWeDoCard from "./WhatWeDoCard";

const whatWeDoCards = [
  {
    title: "digital solutions",
    description:
      "We build simple, fast, and scalable digital products that solve real-world problems.",
    color: "#7D99B5",
    iconColor: "#F9F9F9",
    textColor: "#EFEFEF",
    iconUrl: "/icons/digital-solutions.svg",
  },
  {
    title: "learning & development",
    description:
      "We build simple, fast, and scalable digital products that solve real-world problems.",
    color: "#F9F9F9",
    iconColor: "#669985",
    textColor: "#373737",
    iconUrl: "/icons/learning-development.svg",
  },
  {
    title: "growth & opportunities",
    description:
      "We build simple, fast, and scalable digital products that solve real-world problems.",
    color: "#669985",
    iconColor: "#F9F9F9",
    textColor: "#EFEFEF",
    iconUrl: "/icons/growth-opportunities.svg",
  },
];

const WhatWeDo = () => {
  return (
    <section className="px-4 flex flex-col gap-5 py-[16px]">
      <h1 className="text-[20px] tracking-[-4%] font-semibold">
        WHAT DO WE DO?
      </h1>
      <div className="w-full md:flex-row flex flex-col gap-3">
        {whatWeDoCards.map((card, index) => (
          <WhatWeDoCard index={index} card={card} key={index} />
        ))}
      </div>
    </section>
  );
};

export default WhatWeDo;
