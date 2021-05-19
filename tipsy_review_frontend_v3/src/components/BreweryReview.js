import React from "react";

const BreweryReview = ({ reviews }) => {
  if (!reviews) {
    return <p>No Reviews Yet</p>;
  }
  return (
    <div>
      {reviews.map((r) => {
        return <p>{r.content}</p>;
      })}
    </div>
  );
};

export default BreweryReview;
