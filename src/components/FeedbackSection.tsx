import FeedbackComponent from "./FeedbackComponent";
import { FeedbackCardDetails } from "../data/FeedbackCardData";
import type { FeedbackCardStyle } from "../interfaces/LoginTextField";

const FeedbackSection = () => {
  return (
    <div className="w-full h-100 pt-15 pl-8 pr-8 flex flex-col gap-5">
      <h1 className="text-[30px] font-extrabold">OUR HAPPY CUSTOMERS</h1>
      <div className="flex gap-3 justify-around scroll-auto">
        {FeedbackCardDetails.map(({ feedBack, name }: FeedbackCardStyle) => (
          <FeedbackComponent feedBack={feedBack} name={name} />
        ))}
      </div>
    </div>
  );
};

export default FeedbackSection;
