import React from "react";

const BreweryReview = ({ reviews = [] }) => {
  if (reviews.length === 0) {
    return <div>No Reviews Yet</div>;
  }
  return (
<div class="ui relaxed divided list">
  {reviews.map((r) => {
    return (
      <div className="item">
        <i className="large user middle aligned icon"></i>
        <div className="content">          
          <div className="description">{r.content}</div>
          <button  className="circular ui button negative mini"><i class="close icon"></i> Delete Review</button>
          
        </div>
      </div>
    );
  })}
</div>
  );
};

export default BreweryReview;

{/* <div class="ui relaxed divided list">
  {reviews.map((r) => {
    return (
      <div class="item">
        <i class="large github middle aligned icon"></i>
        <div class="content">
          <a class="header">Semantic-Org/Semantic-UI</a>
          <div class="description">Updated 10 mins ago</div>
        </div>
      </div>
    );
  })}
</div>; */}
