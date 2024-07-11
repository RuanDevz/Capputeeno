'use client'
import { useEffect, useState } from "react";
import Header from "./components/Header";
import { GetURL } from "./api/product/(BASEURL)/api"; 
import { Product } from "@/types/Product";

const HomePage = () => {
  const [products, setProducts] = useState<Product[]>([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const data = await GetURL('/all');
        console.log(data);
        
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchData();
  }, []); 

  return ( 
    <div className="px-[160px]">
      <h1>Pagetsx</h1>
    </div>
  );
};

export default HomePage;
