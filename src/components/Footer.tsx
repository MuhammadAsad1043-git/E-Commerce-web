import { FooterDetails } from "../data/FooterData";
import type { FooterSocialStyle } from "../interfaces/LoginTextField";

const Footer = () => {
  return (
    <div className="w-full pb-10 bg-[#F0EEED] pt-10 flex lg:flex-row md:flex-row sm:flex-col sm:gap-7 lg:gap-12 md:gap-8 lg:pr-15 lg:pl-15 md:pl-10 md:pr-10 lg:justify-between md:justify-between sm:justify-center ">
      {/* Logo Div */}
      <div className=" w-full flex flex-col gap-9 pt-1 lg:pr-10 md:pr-4">
        <img className="h-5 w-35 " src="images/mainlogo.png" alt="mainlogo" />
        <p className="text-[15px] text-black opacity-60 lg:text-[16px] md:text-[14px]">
          {
            "We have clothes that suits your style \nand which you’re proud to wear.\nFrom women to men."
          }
        </p>

        <div className="flex gap-5">
          {FooterDetails.map(({ path }: FooterSocialStyle) => (
            <img className="h-7" src={path} alt="logos" />
          ))}
        </div>
      </div>

      {/* Company and Help Divs */}
      <div className="w-full flex gap-12">
        {/* Company div */}
        <div className="w-full flex flex-col gap-7 lg:justify-start md:justify-start sm:items-center">
          <p className="text-[20px] font-semibold">Company</p>
          {FooterDetails.map(({ company }: FooterSocialStyle) => (
            <p className="text-black opacity-60 lg:text-[16px] md:text-[14px]">
              {company}
            </p>
          ))}
        </div>

        {/* Help Div */}
        <div className="w-full flex flex-col gap-7 lg:justify-start md:justify-start sm:items-center">
          <p className="w-full text-[20px] font-semibold">Help</p>
          {FooterDetails.map(({ help }: FooterSocialStyle) => (
            <p className="text-black opacity-60 lg:text-[16px] md:text-[14px]">
              {help}
            </p>
          ))}
        </div>
      </div>

      {/* Faq and Resources Divs */}
      <div className="w-full flex gap-12">
        {/* Faq Div */}
        <div className="w-full flex flex-col gap-7 lg:justify-start md:justify-start sm:items-center">
          <p className=" w-full text-[20px] font-semibold">Faq</p>
          {FooterDetails.map(({ faq }: FooterSocialStyle) => (
            <p className="text-black opacity-60 lg:text-[16px] md:text-[14px]">
              {faq}
            </p>
          ))}
        </div>

        {/* Resourses Div */}
        <div className="w-full flex flex-col gap-7 lg:justify-start md:justify-start sm:items-center">
          <p className="w-full text-[20px] font-semibold">Resourses</p>
          {FooterDetails.map(({ resources }: FooterSocialStyle) => (
            <p className="text-black opacity-60 lg:text-[16px] md:text-[14px]">
              {resources}
            </p>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Footer;
