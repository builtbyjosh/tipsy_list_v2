import React from "react";
import {useHistory} from 'react-router-dom'

export default function BreweryListItem({ brewery }) {
  let history = useHistory()
  let redirect = () => {
    history.push(`/breweries/${brewery.id}`)
  }
  return (
    <div className="card">
      <div className="content">
        <div className="header">{brewery.name}</div>
      </div>
      <div className="ui bottom attached button" onClick={redirect}>
        <i className="eye icon"></i>
        View Details
      </div>
    </div>
  );
}

{
  /* <a href={`/breweries/${brewery.id}`}>{brewery.name}</a> */
}

{
  /* <div className="ui cards">
  <div className="card">
    <div className="content">
      <div className="header">Elliot Fu</div>
      <div className="description">
        Elliot Fu is a film-maker from New York.
      </div>
    </div>
    <div className="ui bottom attached button">
      <i className="add icon"></i>
      Add New Review
    </div>
  </div>  
</div> */
}
