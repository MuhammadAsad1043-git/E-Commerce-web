import type { ProductTypeStyle } from "../interfaces/LoginTextField";

const ProductTypeComponent = ({ className, type }: ProductTypeStyle) => {
  return (
    <div className={`h-55 bg-cover bg-no-repeat rounded-2xl ${className}`}>
      <p className="pt-4 pl-3 text-[22px] font-bold">{type}</p>
    </div>
  );
};

export default ProductTypeComponent;
