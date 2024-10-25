import React from "react";

interface BtnProps {
  text: string;
  blueBtn?: boolean;
  type?: "submit" | "button";
  className?: string;
}

const Button: React.FC<BtnProps> = ({
  text,
  blueBtn,
  type = "button",
  className,
}) => {
  return (
    <button
      className={` py-3 text-center bg-[#f5f6fb] hover:bg-slate-300 rounded-[50px] cursor-pointer transition-all ${
        blueBtn
          ? "!bg-[#1F7CFF] hover:!bg-[#4d95f9] w-[180px] md:w-[180px] !text-white font-semibold"
          : "w-[150px]"
      } ${className}`}
      type={type}
    >
      {text}
    </button>
  );
};

export default Button;
