import { FooterDetails } from "../data/FooterData";
import type { FooterSocialStyle } from "../interfaces/LoginTextField";

const Footer = () => {
  return (
    <div className="w-full pb-8 bg-[#F0EEED] pt-10 flex lg:flex-row md:flex-row sm:flex-col max-[640px]:flex-col max-[640px]:gap-9 sm:gap-9 lg:gap-12 md:gap-14 lg:pr-15 lg:pl-15 md:pl-10 md:pr-10 lg:justify-between md:justify-between  ">
      {/* Logo Div */}
      <div className=" w-full flex flex-col lg:whitespace-normal md:whitespace-normal max-[640px]:whitespace-pre-line max-[640px]:text-center max-[640px]:leading-5 lg:leading-6 md:leading-6 sm:leading-6 lg:gap-7 md:gap-7 sm:gap-5 max-[640px]:gap-4 sm:whitespace-pre-line sm:text-center pt-1 lg:pr-10 md:pr-4 sm:items-center max-[640px]:items-center">
        <img
          className="lg:h-5 lg:w-35 md:h-5 md:w-35 sm:h-7 sm:w-40 max-[640px]:h-6 max-[640px]:w-32 "
          src="images/mainlogo.png"
          alt="mainlogo"
        />
        <p className=" text-black opacity-60 lg:text-[16px] md:text-[14px] sm:text-[18px] max-[640px]:text-[16px]">
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
      <div className="w-full flex gap-12 ">
        {/* Company div */}
        <div className="w-full flex flex-col gap-5 sm:items-center lg:items-start md:items-start max-[640px]:items-center ">
          <p className="lg:text-[20px] md:text-[20px] sm:text-[22px] max-[640px]:text-[20px] font-semibold">
            Company
          </p>
          {FooterDetails.map(({ company }: FooterSocialStyle) => (
            <p className="text-black opacity-60 lg:text-[16px] md:text-[14px] sm:text-[16px] max-[640px]:text-[16px]">
              {company}
            </p>
          ))}
        </div>

        {/* Help Div */}
        <div className="w-full flex flex-col gap-5 sm:text-center lg:text-start md:text-start max-[640px]:text-center">
          <p className=" lg:text-[20px] md:text-[20px] sm:text-[22px]  max-[640px]:text-[20px] font-semibold">
            Help
          </p>
          {FooterDetails.map(({ help }: FooterSocialStyle) => (
            <p className="text-black opacity-60 lg:text-[16px] md:text-[14px] sm:text-[16px] max-[640px]:text-[16px]">
              {help}
            </p>
          ))}
        </div>
      </div>

      {/* Faq and Resources Divs */}
      <div className="w-full flex gap-12 ">
        {/* Faq Div */}
        <div className="w-full flex flex-col gap-5 sm:items-center lg:items-start md:items-start max-[640px]:items-center ">
          <p className="lg:text-[20px] md:text-[20px] sm:text-[22px] max-[640px]:text-[20px] font-semibold">
            Faq
          </p>
          {FooterDetails.map(({ faq }: FooterSocialStyle) => (
            <p className="text-black opacity-60 lg:text-[16px] md:text-[14px] sm:text-[16px] max-[640px]:text-[16px]">
              {faq}
            </p>
          ))}
        </div>

        {/* Resourses Div */}
        <div className="w-full flex flex-col gap-5 sm:items-center lg:items-start md:items-start max-[640px]:items-center">
          <p className="lg:text-[20px] md:text-[20px] sm:text-[22px] max-[640px]:text-[20px]  font-semibold sm:text-center lg:text-start md:text-start">
            Resourses
          </p>
          {FooterDetails.map(({ resources }: FooterSocialStyle) => (
            <p className="text-black opacity-60 lg:text-[16px] md:text-[14px] sm:text-[16px] max-[640px]:text-[16px]">
              {resources}
            </p>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Footer;
