import React from "react";
import Image from "next/image";

interface WhatWeDoCardProps {
  title: string;
  description: string;
  color: string;
  iconColor: string;
  textColor: string;
  iconUrl: string;
}

interface ChildProps {
  card: WhatWeDoCardProps;
  index: number;
}

const WhatWeDoCard = ({ card, index }: ChildProps) => {
  console.log(`${index} ${card.title}`);
  const cardTop = 32 * (index + 1);
  return (
    <div
      style={{ backgroundColor: card?.color, top: cardTop }}
      className={`w-full flex flex-col md:top-0 md:static gap-[32px] ${card.title === "learning & development" ? "border border-[#d8d8d8]" : ""} p-3 sticky rounded-[32px] h-[207px]`}
    >
      <div
        className="w-[45px] flex aspect-square rounded-full"
        style={{ backgroundColor: card?.iconColor }}
      >
        <Image
          height={24}
          width={24}
          src={card?.iconUrl}
          alt="icon"
          className="m-auto"
        />
      </div>

      <div className="flex flex-col gap-2">
        <h2
          style={{ color: card?.textColor }}
          className="text-[16px] tracking-[-4%] font-semibold"
        >
          {card.title.toUpperCase()}
        </h2>
        <p
          style={{ color: card?.textColor }}
          className="text-[14px] leading-[18.2px] text-body-text"
        >
          {card.description}
        </p>
      </div>
    </div>
  );
};

export default WhatWeDoCard;
