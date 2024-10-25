import React from "react";
import Image from "next/image";
import FormCTA from "@/components/FormCTA";

const LastSection = () => {
  return (
    <div className="pt-[80px] md:pt-[130px] pb-[44px] md:pb-[72px] xl2:pb-[124px] mx-auto flex flex-col xl2:flex-row justify-cente xl2:gap-[71px] transition-all">
      <Image
        src="/imgvid.png"
        alt="vid"
        width={1000}
        height={800}
        className="cursor-pointer w-[322px] h-[228px] md:w-[522px] md:h-[370px] xl2:w-[635.039px] xl2:h-[450px] mx-auto xl2:mx-0"
      />
      <div className="pt-10 xl2:pt-0 flex flex-col gap-10 mx-auto items-center xl2:items-start xl2:my-auto xl2:mx-0 xl2:w-[422px]">
        <div className="flex flex-col mx-auto md:w-[425px] xl2:mx-0">
          <div className="text-center xl2:text-left text-[#f75c4e] text-base font-bold ">
            SAVE MORE TIME
          </div>
          <div className="text-center xl2:text-left text-[#070f18] text-[28px] md:text-4xl font-bold pt-[6px] pb-[20px] tracking-[-1px] sm:tracking-normal">
            And Boost Productivity
          </div>
          <div className="text-center xl2:text-left text-[#575455] text-base font-normal  leading-loose">
            Your employees can bring any success into your business, so we need
            to take care of them
          </div>
        </div>
        <FormCTA />
      </div>
    </div>
  );
};

export default LastSection;
