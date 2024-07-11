"use client";
import { useEffect, useState } from "react";
import Header from "../Header";
import { GetURL } from "../../api/product/BASEURL/api";
import { Product } from "@/types/Product";
import FilterType from "../ListTypes/FilterType";
import Products from "../Products";

const Page = () => {

  return (
    <div className="">
      <FilterType />
      <Products/>
    </div>
  );
};

export default Page;
