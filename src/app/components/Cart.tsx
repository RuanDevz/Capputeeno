"use client";
import React from "react";
import Image from "next/image";
import CartImage from "../../../Assets/Sacola.png";
import { useLocalStorage } from "../Hooks/UseLocalStorage";
import CartCount from "./CartCount";

const Cart = () => {
  const { value} = useLocalStorage<string>("myItem");



  return (
    <div>
      <div className="relative">
        <Image
          className="cursor-pointer"
          src={CartImage}
          alt="Cart"
          width={24}
          height={24}
        />
        <div>{value && <CartCount>{value.length}</CartCount>}</div>
      </div>
    </div>
  );
};

export default Cart;
