import React, { useContext } from 'react';
import { FiltersProps } from '../../../types/Filters'; // Verifique o caminho correto do seu arquivo de tipos
import filterContext from '../../../../context/FilterContext';
import { FilterType } from '../../../types/Filters'; // Verifique o caminho correto do seu arquivo de tipos

const OptionsFilterMode = () => {
  const { setType, setPriority, setFilterOpen } = useContext(filterContext);

  const handleUpdatePriority = (value: FiltersProps) =>{
    setPriority(value)
    setFilterOpen(false)
    
  }

  return (
    <div className="bg-white shadow-lg rounded-sm absolute w-[176px] h-[132px] p-2">
      <ul className="list-none flex flex-col text-Filtercolor gap-2 mx-auto">
        <li onClick={() => handleUpdatePriority(FiltersProps.NEWS)} className="cursor-pointer hover:text-[#656570]">Novidades</li>
        <li onClick={() => handleUpdatePriority(FiltersProps.MAX)} className="cursor-pointer hover:text-[#656570]">Preço: Maior - menor</li>
        <li onClick={() => handleUpdatePriority(FiltersProps.MIN)} className="cursor-pointer hover:text-[#b4b4b6]">Preço: Menor - maior</li>
        <li onClick={() => handleUpdatePriority(FiltersProps.BEST_SALLERS)} className="cursor-pointer hover:text-[#656570]">Mais vendidos</li>
      </ul>
    </div>
  );
}

export default OptionsFilterMode;
