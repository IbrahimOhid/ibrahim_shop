import React from "react";
import { getRating } from "../utility/utilities";

const Rating = ({ value }) => {
  const stars = Array(value).fill(getRating());
  return (
    <div className="flex text-yellow-400">
      {stars.map((star, index) => (
        <div key={index} >
          {star}
        </div>
      ))}
    </div>
  );
};

export default Rating;
