import React from "react";
import Image from "next/image";
import Button from "./Button";
import Link from "next/link";

const Navbar = () => {
  const pages = ["Home", "Features", "Showcase", "Pricing"];

  return (
    <div className="flex flex-row justify-between items-center transition-all pt-10 pb-[50px] md:pb-[100px] xl2:pb-[78px]">
      <Image
        src="/logo.svg"
        alt="logo"
        width={151}
        height={42}
        className="cursor-pointer"
      />
      <div className="hidden xl2:flex flex-row gap-[60px] text-base ">
        {pages.map((item, index) => {
          return (
            <Link
              href="#"
              key={index}
              className="cursor-pointer active:font-bold hover:text-blue-600"
            >
              {item}
            </Link>
          );
        })}
      </div>
      <Button text="Sign In" type="button" className="hidden md:block" />
    </div>
  );
};

export default Navbar;
