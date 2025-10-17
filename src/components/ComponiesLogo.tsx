const CompaniesLogo = () => {
  return (
    <div className="w-full h-auto bg-black flex lg:flex-row md:flex-col sm:flex-col max-[640px]:flex-col max-[640px]:items-center lg:gap-25 md:gap-13 sm:gap-13 max-[640px]:gap-14  lg:justify-center md:items-center sm:items-center pt-10 pb-10">
      <div className="flex gap-22">
        <img
          className="lg:h-7 md:h-9 sm:h-8 max-[640px]:h-6"
          src="/images/versace.png"
          alt="versace"
        />
        <img
          className="lg:h-7 md:h-9 sm:h-8  max-[640px]:h-6"
          src="/images/zaraLogo.png"
          alt="zara"
        />
        <img
          className="lg:h-7 md:h-9 sm:h-8 max-[640px]:h-6"
          src="/images/gucciLogo.png"
          alt="gucci"
        />
      </div>
      <div className="flex gap-22">
        <img
          className="lg:h-7 md:h-9 sm:h-8 max-[640px]:h-6"
          src="/images/pradaLogo.png"
          alt="parada"
        />
        <img
          className="lg:h-6 md:h-9 sm:h-8 max-[640px]:h-6"
          src="/images/calvinKlein.png"
          alt="calvinklein"
        />
      </div>
    </div>
  );
};

export default CompaniesLogo;
