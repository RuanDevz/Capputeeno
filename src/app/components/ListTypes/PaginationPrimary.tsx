import React, { useState } from "react";

const PaginationPrimary = () => {
  const [activeItem, setActiveItem] = useState("TODOS OS PRODUTOS");

  const handleClick = (itemName: string) => {
    setActiveItem(itemName);
  };
  return (
    <div className="flex items-center gap-10 pt-10">
      <li
        className={`text-Filtercolor cursor-pointer ${
          activeItem === "TODOS OS PRODUTOS"
            ? "font-bold  border-b-4 border-[#ffa584]"
            : ""
        }`}
        onClick={() => handleClick("TODOS OS PRODUTOS")}
      >
        TODOS OS PRODUTOS
      </li>
      <li
        className={`text-Filtercolor cursor-pointer ${
          activeItem === "CAMISETAS"
            ? "font-bold  border-b-4 border-[#ffa584]"
            : ""
        }`}
        onClick={() => handleClick("CAMISETAS")}
      >
        CAMISETAS
      </li>
      <li
        className={`text-Filtercolor cursor-pointer ${
          activeItem === "CANECAS"
            ? " font-bold  border-b-4 border-[#ffa584]"
            : ""
        }`}
        onClick={() => handleClick("CANECAS")}
      >
        CANECAS
      </li>
    </div>
  );
};

export default PaginationPrimary;
