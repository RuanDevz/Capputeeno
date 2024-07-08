import React from "react";

const PaginationSegundary = () => {
  return (
    <div>
      <div className="flex pt-10">
        <h1 className="text-Filtercolor">Organizar por</h1>
        <select className="bg-bgsite text-center text-Filtercolor" name="" id="">
          <option selected value=""></option>
          <option value="Novidades">Novidades</option>
          <option value="Maior - Menor">Preço: Maior - Menor</option>
          <option value=" Menor - Maior">Preço: Menor - Maior</option>
          <option value="Novidades">Mais vendidos</option>
          <option value="Novidades">Novidades</option>
        </select>
      </div>
    </div>
  );
};

export default PaginationSegundary;
