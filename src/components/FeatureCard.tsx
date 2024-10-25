import React from "react";
import Image from "next/image";

interface CardProps {
  img: string;
  title: string;
  desc: string;
}

const FeatureCard: React.FC<CardProps> = ({ img, title, desc }) => {
  return (
    <div className="flex flex-row gap-6 md:w-[311px] items-start transition-all">
      <Image src={img} alt="icon" className="" width={60} height={60} />
      <div className="flex flex-col gap-3">
        <span className="text-[#070f18] text-xl font-semibold">{title}</span>
        <span className="text-[#575455] text-base font-normal leading-loose">
          {desc}
        </span>
      </div>
    </div>
  );
};

export default FeatureCard;
