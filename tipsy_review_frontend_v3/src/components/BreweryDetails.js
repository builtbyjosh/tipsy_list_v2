import React from "react";

const BreweryDetails = ({ brewery }) => {
  return (
    <div className="content">
      <div className="header center aligned">{brewery.name}</div>
      <div className="meta center aligned">
        <a href={brewery.url}>{brewery.url}</a>
      </div>
      <div className="description center aligned">
        <p>{brewery.address}</p>
        <p>
          {brewery.city}, {brewery.state}
        </p>
      </div>
    </div>
  );
};

export default BreweryDetails;
