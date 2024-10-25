import Button from "@/components/Button";
import HeroImage from "@/components/HeroImage";
import TrustedImg from "@/components/TrustedImg";
import React from "react";

const HeroSection = () => {
  return (
    <div className="xl2:px-10 transition-all">
      <div className="flex xl2:flex-row justify-between ">
        <div className="flex flex-col w-full md:w-[445px] md:mx-auto xl2:w-[445px] xl2:mx-0">
          <span className="text-[#070f18] text-[38px] font-bold pb-5 md:text-[55px] md:text-center xl2:text-left">
            Manage Payroll Like an Expert
          </span>
          <span className="text-[#575455] text-base font-normal leading-loose pb-[30px] md:text-center xl2:text-left">
            Payna is helping you to setting up the payroll without required any
            finance skills or knowledge before
          </span>
          <Button
            text="Get Started"
            blueBtn
            type="button"
            className="md:mx-auto xl2:mx-0"
          />
        </div>
        <div className="hidden xl2:block">
          <HeroImage />
        </div>
      </div>

      <div className="pt-[50px] md:pt-[70px]">
        <TrustedImg />
      </div>
    </div>
  );
};

export default HeroSection;
