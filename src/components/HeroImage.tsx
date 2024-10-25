import React from "react";
import Image from "next/image";

const HeroImage = () => {
  return (
    <div className="relative">
      <Image src="/hero-main.svg" alt="heromain" width={540} height={400} />
      <Image
        src="/hero-analytic.svg"
        alt="heromain"
        width={249}
        height={191}
        className="absolute top-[120px] left-[-127px]"
      />
      <Image
        src="/hero-bulk.svg"
        alt="heromain"
        width={213}
        height={66}
        className="!w-auto top-[44px] right-[-67px] absolute"
      />
    </div>
  );
};

export default HeroImage;
