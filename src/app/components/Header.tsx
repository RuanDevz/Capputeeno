import React from "react";
import PrimaryInput from "./PrimaryInput";
import Cart from "./Cart";

const Header = () => {
  return (
    <header className="flex items-center justify-between py-5 px-[160px] bg-white ">
      <div>
        <h1 className="text-LogoColor font-normal text-4xl font-saira">Capputeeno</h1>
      </div>
      <div className="flex items-center gap-5">
        <PrimaryInput placeholder="Procurando por algo especifico?" />
        <Cart />
      </div>
    </header>
  );
};

export default Header;
