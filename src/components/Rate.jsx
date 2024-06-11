import React from "react";
import { FaStar } from "react-icons/fa";

export const Rate = ({ rating }) => {
  const renderStars = () => {
    const stars = [];
    for (let i = 0; i < 5; i++) {
      if (i < rating) {
        stars.push(<FaStar key={i} color="#ffc107" />);
      } else {
        stars.push(<FaStar key={i} color="rgb(192,192,192)" />);
      }
    }
    return stars;
  };

  return <div>{renderStars()}</div>;
};
