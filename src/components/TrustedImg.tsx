import React from "react";
import Image from "next/image";

const TrustedImg = () => {
  const logo = [
    "/apple.svg",
    "/adobe.svg",
    "/slack.svg",
    "/spotify.svg",
    "/google.svg",
  ];

  return (
    <div className="flex flex-col gap-[30px] xl2:gap-0 md:items-center xl2:flex-row xl2:justify-between transition-all">
      <div className="text-[#070f18] text-base font-semibold xl2:w-[152px]">
        Trusted by Global Companies
      </div>
      <div className="flex flex-row flex-wrap gap-6 gap-y-[30px] md:gap-[50px]">
        {logo.map((item, index) => {
          return (
            <Image src={item} key={index} alt="image" width={80} height={26} />
          );
        })}
      </div>
    </div>
  );
};

export default TrustedImg;
