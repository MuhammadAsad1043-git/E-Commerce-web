import ProductComponent from "./ProductComponent";
import { ArrivalProduct, ArrivalProduct2 } from "../data/ProductData";
import type { ProductStyle } from "../interfaces/LoginTextField";
import ButtonComponent from "./ButtonComponent";

const ArrivalSection = () => {
  return (
    <div className="w-full h-auto flex flex-col items-center lg:pt-10 md:pt-8 sm:pt-7 max-[640px]:pt-7  gap-8 lg:pb- md:pb-7 sm:pb-6 max-[640px]:pb-6">
      <h1 className="font-extrabold lg:text-[45px] md:text-[45px] sm:text-[40px] max-[640px]:text-[36px]">
        NEW ARRIVALS
      </h1>
      <div className="flex lg:gap-6 md:gap-8 sm:gap-8 max-[640px]:gap-8 lg:flex-row md:flex-col sm:flex-col max-[640px]:flex-col lg:justify-between">
        <div className="flex lg:gap-6 md:gap-10 sm:gap-8 max-[640px]:gap-6">
          {ArrivalProduct.map(({ image, name, price }: ProductStyle) => (
            <ProductComponent image={image} name={name} price={price} />
          ))}
        </div>
        <div className="flex lg:gap-6 md:gap-10 sm:gap-8 max-[640px]:gap-6">
          {ArrivalProduct2.map(({ image, name, price }: ProductStyle) => (
            <ProductComponent image={image} name={name} price={price} />
          ))}
        </div>
      </div>
      <ButtonComponent
        className="w-40 h-10 border-[#F0EEED] rounded-3xl border-2 "
        text="View All"
      />
      <div className=" w-full lg:pl-50 lg:pr-50 md:pl-40 md:pr-40 sm:pr-30 sm:pl-30 max-[640px]:pr-22 max-[640px]:pl-22 pt-3">
        <hr className="border-t-3 border-[#F0F0F0] w-full" />
      </div>
    </div>
  );
};

export default ArrivalSection;
