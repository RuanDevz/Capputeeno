import { createContext, ReactNode, useState } from "react";
import { Product } from "@/types/Product"; 

const initialProductContextValue: { allProducts: Product[] } = {
  allProducts: [],
};


const ProductContext = createContext(initialProductContextValue);


export default ProductContext;


export const ExampleComponent = ({children}: {children: ReactNode}) => {
  const [allProducts, setAllProducts] = useState<Product[]>([]);

  return (
    <ProductContext.Provider value={{ allProducts }}>
      {children}
    </ProductContext.Provider>
  );
};
