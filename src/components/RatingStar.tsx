import React, { useState } from "react";
import { Rating } from "@smastrom/react-rating";
import "@smastrom/react-rating/style.css";

const RatingExample: React.FC = () => {
  const [rating, setRating] = useState<number>(5);

  return (
    <div className=" flex items-center gap-3">
      {/* Rating Component */}
      <Rating
        style={{ maxWidth: 80 }}
        value={rating}
        onChange={setRating}
        readOnly={false}
      />
    </div>
  );
};

export default RatingExample;

//<p className="text-[14px]">{rating}/5</p>
