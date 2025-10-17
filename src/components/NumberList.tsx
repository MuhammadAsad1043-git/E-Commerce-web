import type { NumberComponentDetails } from "../interfaces/LoginTextField";

const NumberList = ({ heading, text }: NumberComponentDetails) => {
  return (
    <div className="leading-10">
      <h1 className="lg:text-[40px] md:text-[40px] sm:text-[38px] max-[640px]:text-[35px] font-bold ">
        {heading}
      </h1>
      <p className="lg:text-[15px] md:text-[15px] sm:text-[14px] max-[640px]: text-[12px]   text-[#818181]">
        {text}
      </p>
    </div>
  );
};

export default NumberList;
