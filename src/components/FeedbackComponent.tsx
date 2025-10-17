import RatingExample from "./RatingStar";
import type { FeedbackCardStyle } from "../interfaces/LoginTextField";

const FeedbackComponent = ({ feedBack, name }: FeedbackCardStyle) => {
  return (
    <div className="w-auto h-auto rounded-2xl border-2 border-[#F0F0F0]">
      <div className="pt-5 pr-5 pl-4 pb-5 text-justify flex flex-col gap-2">
        <RatingExample />
        <p className="font-bold">{name}</p>
        <p className="lg:text-[14px] md:text-[12px]">{feedBack}</p>
      </div>
    </div>
  );
};

export default FeedbackComponent;
