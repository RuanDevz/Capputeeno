"use client";
import React, { useState } from "react";
import PaginationPrimary from "./PaginationPrimary";
import PaginationSegundary from "./PaginationSegundary";

const FilterType = () => {

  return (
    <div>
      <ul className=" flex justify-between">
        <PaginationPrimary/>
        <PaginationSegundary/>
      </ul>
    </div>
  );
};

export default FilterType;
