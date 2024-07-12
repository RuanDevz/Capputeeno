"use client";
import { useContext, useEffect, useState } from "react";
import Header from "./components/Header";
import { GetURL } from "./api/product/BASEURL/api";
import { Product } from "@/types/Product";
import FilterType from "./components/ListTypes/FilterType";
import Page from "./components/Home/Index";
import ProductContext from "../../context/FilterContext";

const HomePage = () => {
  return (
    <div className="px-[160px]">
      <Page />
    </div>
  );
};

export default HomePage;
