'use client'
import { useContext, useEffect, useState } from "react"
import ProductContext from "../../../context/Productcontext"
import { GetURL } from "../api/product/BASEURL/api";
import { Product } from "@/types/Product";

export default function Products(){

    const [allProducts, setAllproducts] = useState<Product[]>([]);

    useEffect(() => {
      const fetchData = async () => {
        try {
          const data = await GetURL("/all");
          console.log(data);
          setAllproducts(data)
        } catch (error) {
          console.error("Error fetching data:", error);
        }
      };
  
      fetchData();
    }, []);
  

    return <div>
        {allProducts.map((product, index) => (
            <div key={index}>
                <p>{product.name}</p>
            </div>
        ))}
    </div>
}