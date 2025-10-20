import RatingExample from "./RatingStar";
import type { FeedbackCardStyle } from "../interfaces/LoginTextField";

const FeedbackComponent = ({ feedBack, name }: FeedbackCardStyle) => {
  return (
    <div className="w-auto h-auto rounded-2xl border-2 border-[#F0F0F0]">
      <div className="pt-5 lg:pr-4 max-[640px]:pl-2 max-[640px]:pr-2 sm:pl-3 sm:pr-4 lg:pl-3 max-[640px]:gap-1 md:pr-2 md:pl-2 pb-5 text-justify flex flex-col lg:gap-1 sm:gap-2 md:gap-1">
        <RatingExample />
        <p className="font-bold lg:text-[18px] md:text-[15px] sm:text-[16px] max-[640px]:text-[14px]">
          {name}
        </p>
        <p className="lg:text-[14px] md:text-[12px] sm:text-[13px] max-[640px]:text-[12px]">
          {feedBack}
        </p>
      </div>
    </div>
  );
};

export default FeedbackComponent;
