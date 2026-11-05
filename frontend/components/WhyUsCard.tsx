import React from "react";
import Image from "next/image";
import Icon from "./Icon";

interface WhatWeDoCardProps {
  title: string;
  color: string;
  iconColor: string;
  textColor: string;
  iconUrl: string;
}

interface ChildProps {
  card: WhatWeDoCardProps;
  index: number;
}
const WhyUsCard = ({ card, index }: ChildProps) => {
  console.log(`${index} ${card.title}`);
  const cardTop = 32 * (index + 1) + 64;
  return (
    <div
      style={{ top: cardTop }}
      className={`w-full bg-[#fff] dark:bg-[#414141] dark:border-background border border-[#d8d8d8] flex md:top-0 md:static gap-5 p-3 sticky md:flex-col items-center justify-center rounded-[32px] h-[207px]`}
    >
      <div
        className="w-[45px] flex items-center justify-center aspect-square rounded-full"
        style={{ backgroundColor: card?.iconColor }}
      >
        <Icon size={24} iconUrl={card.iconUrl} label={card.title} />
        {/*  <Image
          height={24}
          width={24}
          src={card?.iconUrl}
          alt="icon"
          className="m-auto"
        /> */}
      </div>

      <div className="flex flex-col gap-2">
        <h2 className="text-[18px] text-foreground tracking-[-4%] font-semibold">
          {card.title}
        </h2>
      </div>
    </div>
  );
};

export default WhyUsCard;
