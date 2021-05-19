import React from "react";


const BreweryDetails = ({ brewery }) => {
  return (
    <div>
      <h3>{brewery.name}</h3>
      <p>{brewery.address}</p>
      <p>
        {brewery.city}, {brewery.state}
      </p>
      <a href={brewery.url}>{brewery.url}</a>
      
    </div>
  );
};

export default BreweryDetails;
