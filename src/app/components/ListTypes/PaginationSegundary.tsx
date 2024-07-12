import React, { useState, Dispatch, SetStateAction, useContext } from "react";
import Image from "next/image";
import Arrow from "../../../../public/Arrow.png";
import OptionsFilterMode from "./OptionsFilterMode";
import filterContext from "../../../../context/FilterContext";

const PaginationSegundary = () => {
  
  const {filterOpen, setFilterOpen} = useContext(filterContext)

  const openFilter = () => {
    setFilterOpen(!filterOpen);
  };

  return (
    <div>
      <div className="flex pt-10 flex-col">
        <div className="flex">
          <h1 className="text-Filtercolor">Organizar por</h1>
          <Image
            onClick={openFilter}
            src={Arrow}
            width={24}
            height={24}
            className="cursor-pointer"
          />
        </div>
        <div className="relative mt-3">
          {filterOpen && <OptionsFilterMode />}
        </div>
      </div>
    </div>
  );
};

export default PaginationSegundary;
