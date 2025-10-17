import ProductTypeComponent from "./ProductTypeComponent";

const DressStyleComponent = () => {
  return (
    <div className="w-full bg-[#F0F0F0] flex flex-col items-center pt-8 pb-8 rounded-3xl gap-8">
      {/* Title */}
      <h1 className="font-extrabold lg:text-[45px] md:text-[38px] sm:text-[30px] max-[640px]:text-[25px] text-center">
        BROWSE BY DRESS STYLE
      </h1>

      {/* First Row */}
      <div className="flex lg:flex-row md:flex-row sm:flex-col flex-wrap justify-center gap-6 w-full px-4">
        <ProductTypeComponent
          type="Casual"
          className="w-full sm:w-[99%] md:w-[40%] lg:w-[40%] h-56 bg-[url('/images/casualDress.png')] bg-cover bg-center rounded-2xl"
        />
        <ProductTypeComponent
          type="Formal"
          className="w-full sm:w-[99%] md:w-[55%] lg:w-[55%] h-56 bg-[url('/images/formalDress.png')] bg-cover bg-center rounded-2xl"
        />
      </div>

      {/* Second Row */}
      <div className="flex lg:flex-row md:flex-row sm:flex-col flex-wrap justify-center gap-6 w-full px-4">
        <ProductTypeComponent
          type="Party"
          className="w-full sm:w-[99%] md:w-[55%] lg:w-[55%] h-56 bg-[url('/images/partyDress.png')] bg-cover bg-center rounded-2xl"
        />
        <ProductTypeComponent
          type="Gym"
          className="w-full sm:w-[99%]  md:w-[40%] lg:w-[40%] h-56 bg-[url('/images/gymDress.png')] bg-cover bg-center rounded-2xl"
        />
      </div>
    </div>
  );
};

export default DressStyleComponent;
