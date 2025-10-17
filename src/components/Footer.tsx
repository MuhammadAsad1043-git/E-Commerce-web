import ButtonComponent from "./ButtonComponent";
import NumberList from "./NumberList";

const Footer = () => {
  return (
    <div className="flex lg:flex-row md:flex-col sm:flex-col max-[640px]:flex-col w-full h-auto pt-8 pl-9 pr-9 bg-[#F2F0F1] lg:items-center lg:justify-between md:justify-center md:items-center sm:justify-center sm:items-center max-[640px]:items-center max-[640px]:justify-center ">
      {/* details div */}
      <div className="flex flex-col lg:justify-center lg:items-start md:justify-center md:items-center sm:justify-center max-[640px]:justify-center max-[640px]:items-center sm:items-center lg:gap-10 md:gap-8 sm:gap-7 max-[640px]:gap-7 w-full">
        <p className="lg:text-[60px] md:text-[60px] sm:text-[55px] max-[640px]:text-[50px] font-extrabold whitespace-pre-line leading-18 text-center ">
          {"FIND CLOTHES \nTHAT MATCHES \nYOUR STYLE"}
        </p>
        <p className="text-[#818181] whitespace-pre-line lg:text-[15px] max-[640px]:text-center md:text-[18px] sm:text-[14px] max-[640px]:text-[14px] text-justify lg:leading-7 md:leading-10 sm:leading-9 max-[640px]:leading-7">
          {
            "Browse through our diverse range of meticulously crafted garments,\ndesigned to bring out your individuality and cater to your sense of style."
          }
        </p>
        <ButtonComponent
          text="Shop Now"
          className="bg-black lg:w-50 lg:h-12 md:w-60 md:h-13 sm:w-55 sm:h-13 max-[640px]:h-11 max-[640px]:w-45 md:text-[20px] text-white rounded-4xl cursor-pointer lg:text-[18px] max-[640px]:text-[20px]"
        />
        {/* Number Div */}
        <div className="flex flex-row  lg:gap-10 md:gap-10 sm:gap-7 max-[640px]:gap-7 ">
          <NumberList heading="200+" text="International Brands" />
          <NumberList heading="2000+" text="High-Quality Products" />
          <NumberList heading="3000+" text="Happy Customers" />
        </div>
      </div>

      {/* Image  */}
      <img
        className="lg:h-140 lg:w-210 md:h-95 md:w-105 sm:h-90 sm:w-110 max-[640px]:w-100 max-[640px]:h-80 "
        src="/images/menWomen.png"
        alt="MenWomen"
      />
    </div>
  );
};

export default Footer;
