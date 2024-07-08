import React, { ComponentProps } from "react";
import Searchicon from "../../../Assets/Searchicon.png";
import Image from "next/image";

type PrimaryInputProps = ComponentProps<"input">;

const PrimaryInput = ({ ...props }: PrimaryInputProps) => {
  return (
    <div>
      <div className="flex items-center relative">
        <input
          className="w-[352px] py-[10px] px-4 bg-bginput outline-0 rounded-lg"
          type="text"
          {...props}
        />
        <Image
          className="absolute right-0 mr-5 cursor-pointer"
          src={Searchicon}
          alt="Cart"
          width={24}
          height={24}
        />
      </div>
    </div>
  );
};

export default PrimaryInput;
