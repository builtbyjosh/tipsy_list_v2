import React from "react";

const BreweryReview = ({ reviews = [] }) => {
  if (reviews.length === 0) {
    return <div>No Reviews Yet</div>;
  }
  return (

    <div className="ui cards">
      {reviews.map((r) => {
        return (
          <div className="card">
            <div className="content">
              <div className="description">{r.content}</div>
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

{
  /* <div className="ui cards">
  {reviews.map((r) => {
    <div className="card">
      <div className="content">      
        <div className="description">
          {r.content}
        </div>
      </div>
      <div className="ui bottom attached button">
        <i className="add icon"></i>
        Delete Review
      </div>
    </div> 
  })}   
</div> */
}
