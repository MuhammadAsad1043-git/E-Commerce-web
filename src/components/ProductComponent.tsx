import RatingExample from "./RatingStar";

import type { ProductStyle } from "../interfaces/LoginTextField";
const ProductComponent = ({ image, name, price }: ProductStyle) => {
  return (
    <div className="flex flex-col lg:gap-1 md:gap-1 sm:gap-1 max-[640px]:gap-0.5 h-auto w-auto">
      <div className="w-full bg-[#F0EEED]">
        <img
          className="lg:w-65 lg:h-70 md:h-80 md:w-80 sm:w-60 sm:h-60 max-[640px]:h-50 max-[640px]:w-50"
          src={image}
          alt={name}
        />
      </div>
      <p className="text-[16px] max-[640px]:text-[14px]">{name}</p>
      <RatingExample />
      <p className="font-bold text-[20px] max-[640px]:text-[16px]">${price}</p>
    </div>
  );
};

export default ProductComponent;
