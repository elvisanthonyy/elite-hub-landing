import React from "react";
import Image from "next/image";

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
  const cardTop = 32 * (index + 1);
  return (
    <div
      style={{ top: cardTop }}
      className={`w-full bg-[#EDEDED] dark:bg-[#414141] dark:border-background border-2 border-white flex md:top-0 md:static gap-5 p-3 sticky items-center justify-center rounded-[32px] h-[207px]`}
    >
      <div
        className="w-[45px] flex aspect-square rounded-full"
        style={{ backgroundColor: card?.iconColor }}
      >
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
