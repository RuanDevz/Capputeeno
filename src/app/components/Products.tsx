import { useContext, useEffect, useState } from "react";
import ProductContext from "../../../context/Productcontext";
import { GetURL } from "../api/product/BASEURL/api";
import { Product } from "@/types/Product";
import Image from "next/image";

const convertPriceInCentsToReal = (priceInCents: number): string => {
  const priceInReal = (priceInCents / 100).toLocaleString('pt-BR', {
    style: 'currency',
    currency: 'BRL'
  });
  return priceInReal;
};

export default function Products() {
  const [allProducts, setAllproducts] = useState<Product[]>([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const data = await GetURL("/all");
        console.log(data);
        setAllproducts(data);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, []);

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
            <p>{product.name}</p>
            <strong className="pb-7">{convertPriceInCentsToReal(product.price_in_cents)}</strong>
          </div>
        </div>
      ))}
    </div>
  );
}
