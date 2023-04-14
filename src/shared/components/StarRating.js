import React from "react";
import { FaStar, FaStarHalfAlt } from "react-icons/fa";
import { AiOutlineStar } from "react-icons/ai";
const StarRating = ({ star }) => {
  const ratingstar = Array.from({ length: 5 }, (element, index) => {
    let number = index + 0.5;
    return (
      <span>
        {star >= index + 1 ? (
          <FaStar className="icons" />
        ) : star >= number ? (
          <FaStarHalfAlt className="icons" />
        ) : (
          <AiOutlineStar className="icons" />
        )}
      </span>
    );
  });
  return <div className=" text-yellow-500 flex">{ratingstar}</div>;
};

export default StarRating;
