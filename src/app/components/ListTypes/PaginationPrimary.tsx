import React, { useContext, useState } from "react";
import filterContext from "../../../../context/FilterContext";
import { FilterType } from "@/types/Filters";

const PaginationPrimary = () => {
  const { type, setType } = useContext(filterContext);
  const [selectedItem, setSelectedItem] = useState(FilterType.ALL)

  const handleItemClick = (filterType: FilterType) => {
    setType(filterType); 
    setSelectedItem(filterType); 
  };

  return (
    <div className="flex items-center gap-10 pt-10">
      <li
        className={`cursor-pointer ${
          selectedItem === FilterType.ALL
            ? "font-bold border-b-4 border-[#FFA585]"
            : ""
        }`}
        onClick={() => handleItemClick(FilterType.ALL)}
      >
        TODOS OS PRODUTOS
      </li>
      <li
        className={`cursor-pointer ${
          selectedItem === FilterType.SHIRT
            ? "font-bold border-b-4 border-[#FFA585]"
            : ""
        }`}
        onClick={() => handleItemClick(FilterType.SHIRT)}
      >
        CAMISETAS
      </li>
      <li
        className={`cursor-pointer ${
          selectedItem === FilterType.MUGS
            ? "font-bold border-b-4 border-[#FFA585]"
            : ""
        }`}
        onClick={() => handleItemClick(FilterType.MUGS)}
      >
        CANECAS
      </li>
    </div>
  );
};

export default PaginationPrimary;
