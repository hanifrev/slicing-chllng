import React from "react";

interface InputProps {
  placeholder?: string;
}

const InputField: React.FC<InputProps> = ({ placeholder }) => {
  return (
    <input
      className="w-[299px] py-3 px-6 bg-[#f5f6fb] text-[#575455] focus:ring-purple-500 text-base font-normal rounded-[50px]"
      placeholder={placeholder}
    />
  );
};

export default InputField;
