import React from "react";

interface CartCountProps {
  children: number;
}

const CartCount: React.FC<CartCountProps> = ({ children }) => {
  return (
    <div className="bg-red-500 rounded-full w-[17px] h-[17px] absolute text-xs text-center text-white right-0 bottom-0 translate-x-2 translate-y-2">
      {children}
    </div>
  );
};

export default CartCount;
