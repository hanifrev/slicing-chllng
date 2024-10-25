import FeatureCard from "@/components/FeatureCard";
import React from "react";

const FeatureSection = () => {
  const featureCards = [
    {
      img: "/feature/1.svg",
      title: "Share Insights",
      desc: "Working together with your team to make decisions",
    },
    {
      img: "/feature/2.svg",
      title: "Track Leads",
      desc: "See where your money goes and comes in business",
    },
    {
      img: "/feature/3.svg",
      title: "Offline Mode",
      desc: "Use the feature while off from internet? sure can",
    },
    {
      img: "/feature/4.svg",
      title: "Kanban Mode",
      desc: "Organize the report that easy to be understand",
    },
    {
      img: "/feature/5.svg",
      title: "Reward System",
      desc: "Motivate your team working harder and receive a gift",
    },
    {
      img: "/feature/6.svg",
      title: "189 Country",
      desc: "Working together worldwide people from anywhere",
    },
  ];

  return (
    <div className="pt-20 md:pt-[130px] transition-all">
      <div className="flex flex-col mx-auto md:w-[389px]">
        <div className="text-center text-[#f75c4e] text-base font-bold ">
          WORK BETTER
        </div>
        <div className="text-center text-[#070f18] text-[28px] md:text-4xl font-bold pt-[6px] pb-[20px]">
          For Your Business
        </div>
        <div className="text-center text-[#575455] text-base font-normal  leading-loose">
          We did research what your company needs and here we are providing all
          of them just for you
        </div>
      </div>
      <div className="pt-[50px] flex flex-col gap-[60px] md:flex-row md:justify-center md:flex-wrap md:gap-x-[93px] md:gap-y-[60px] xl2:px-[44px]">
        {featureCards.map((item, index) => {
          return (
            <FeatureCard
              key={index}
              img={item.img}
              title={item.title}
              desc={item.desc}
            />
          );
        })}
      </div>
    </div>
  );
};

export default FeatureSection;
