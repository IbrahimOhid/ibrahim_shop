import React from "react";

const Rating = ({ value }) => {
  const stars = [];
  for (let i = 0; i < 5; i++) {
    stars.push(
      <span key={i} className={i < value ? "text-yellow-400" : "text-gray-300"}>
        ★
      </span>
    );
  }
  return <div>{stars}</div>;
};

export default Rating;
