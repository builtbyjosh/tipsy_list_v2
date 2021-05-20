import React from "react";

const BreweryReview = ({ reviews = [] }) => {
  if (reviews.length === 0) {
    return (
      <div className="ui centered raised cards">
        <div className="card">
        <div className="content">
          <div className="description center aligned">No Reviews Yet!</div>
        </div>
      </div>
      </div>
      
    );
  }
  return (
    <div className="ui centered raised cards">
      {reviews.map((r) => {
        return (
          <div className="card">
            <div className="content">
              <div className="description center aligned">{r.content}</div>
            </div>
            <div className="ui bottom attached button">
              <i className="trash alternate icon"></i>
              Delete Review
            </div>
          </div>
        );
      })}
      
    </div>
  );
};

export default BreweryReview;
