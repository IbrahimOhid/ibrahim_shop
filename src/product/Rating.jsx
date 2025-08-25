import React from "react";

const Rating = ({ value }) => {
  const stars = Array(value).fill(<span>★</span>);
  return (
    <div>
      {stars.map((star, index) => (
        <div key={index} className="flex text-yellow-400">
          {star}
        </div>
      ))}
    </div>
  );
};

export default Rating;
