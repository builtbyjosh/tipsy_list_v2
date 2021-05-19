import React from "react";

const BreweryDetails = ({ brewery }) => {
  return (
    <div className="content">
      <div className="header">{brewery.name}</div>
      <div className="meta">
        <a href={brewery.url}>{brewery.url}</a>
      </div>
      <div className="description">
        <p>{brewery.address}</p>
        <p>
          {brewery.city}, {brewery.state}
        </p>
      </div>
    </div>
  );
};

export default BreweryDetails;

{
  /* <div>
      <h3>{brewery.name}</h3>
      <p>{brewery.address}</p>
      <p>
        {brewery.city}, {brewery.state}
      </p>
      <a href={brewery.url}>{brewery.url}</a>      
    </div> */
}
