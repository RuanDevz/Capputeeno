"use client";
import { useContext, useEffect, useState } from "react";
import ProductContext from "../../../context/FilterContext";
import { GetURL } from "../api/product/BASEURL/api";
import { Product } from "@/types/Product";
import Image from "next/image";
import { convertPriceInCentsToReal } from "../../../utils/FormatedCurrency";
import { useFilter } from "../Hooks/useFilter";
import { FilterType } from "@/types/Filters";

export default function Products() {
  const [allProducts, setAllproducts] = useState<Product[]>([]);

  const { type } = useFilter();

  useEffect(() => {
    const fetchProducts = async () => {
      let url = "/all"; 

      if (type === FilterType.MUGS) {
        url = "/mugs";
      } else if (type === FilterType.SHIRT) {
        url = "/shirts";
      }

      try {
        const response = await GetURL(url);
        setAllproducts(response)
        console.log("Produtos obtidos:", response);
      } catch (error) {
        console.error("Erro ao buscar produtos:", error);
      }
    };

    fetchProducts();
  }, [type])

  return (
    <div className="flex justify-between items-center flex-wrap max-w-[1200px] mx-auto mt-32">
      {allProducts.map((product, index) => (
        <div className="" key={index}>
          <div className="">
            <img
              className="w-[256px] h-[300px] rounded-sm mb-2"
              src={product.image_url}
              alt={product.name}
            />
          </div>
          <div className="flex flex-col gap-5 justify-start">
            <p className="border-b-[1px] border-[#78788042]">{product.name}</p>
            <strong className="pb-7">
              {convertPriceInCentsToReal(product.price_in_cents)}
            </strong>
          </div>
        </div>
      ))}
    </div>
  );
}
