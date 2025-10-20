import FeedbackComponent from "./FeedbackComponent";
import {
  FeedbackCardDetails,
  FeedbackCardDetails2,
} from "../data/FeedbackCardData";
import type { FeedbackCardStyle } from "../interfaces/LoginTextField";

const FeedbackSection = () => {
  return (
    <div className="w-full h-auto pt-15 pl-8 pr-8 flex flex-col pb-8 gap-3">
      <h1 className="lg:text-[30px] md:text-[28px] sm:text-[26px] max-[640px]:text-[24px] font-extrabold">
        OUR HAPPY CUSTOMERS
      </h1>
      <div className="flex gap-3 lg:flex-row  md:flex-row sm:flex-col max-[640px]:flex-col ">
        <div className="flex gap-3 justify-around  ">
          {FeedbackCardDetails.map(({ feedBack, name }: FeedbackCardStyle) => (
            <FeedbackComponent feedBack={feedBack} name={name} />
          ))}
        </div>
        <div className="flex gap-3 justify-around ">
          {FeedbackCardDetails2.map(({ feedBack, name }: FeedbackCardStyle) => (
            <FeedbackComponent feedBack={feedBack} name={name} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default FeedbackSection;
