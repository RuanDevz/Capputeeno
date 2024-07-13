import React, { useContext } from "react";
import filterContext from "../../../../context/FilterContext";
import { FilterType } from "@/types/Filters";

const PaginationPrimary = () => {
  const { type, setType } = useContext(filterContext);

  const handleItemClick = (filterType: FilterType) => {
    setType(filterType); // Define o novo tipo de filtro no estado global
  };

  return (
    <div className="flex items-center gap-10 pt-10">
      <li
        className={`cursor-pointer ${
          type === FilterType.ALL ? "font-bold border-b-4 border-[#FFA585]" : ""
        }`}
        onClick={() => handleItemClick(FilterType.ALL)}
      >
        TODOS OS PRODUTOS
      </li>
      <li
        className={`cursor-pointer ${
          type === FilterType.SHIRT ? "font-bold border-b-4 border-[#FFA585]" : ""
        }`}
        onClick={() => handleItemClick(FilterType.SHIRT)}
      >
        CAMISETAS
      </li>
      <li
        className={`cursor-pointer ${
          type === FilterType.MUGS ? "font-bold border-b-4 border-[#FFA585]" : ""
        }`}
        onClick={() => handleItemClick(FilterType.MUGS)}
      >
        CANECAS
      </li>
    </div>
  );
};

export default PaginationPrimary;
