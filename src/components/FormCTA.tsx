import React from "react";
import InputField from "./InputField";
import Button from "./Button";

const FormCTA = () => {
  return (
    <form className="flex flex-col gap-3 md:flex-row md:gap-0 md:transform md:translate-x-8 xl2:translate-x-0 transition-all">
      <InputField placeholder="Email Address" />
      <Button
        text="Get Started"
        blueBtn
        type="submit"
        className="!w-[299px] md:transform md:translate-x-[-50px] z-50"
      />
    </form>
  );
};

export default FormCTA;
