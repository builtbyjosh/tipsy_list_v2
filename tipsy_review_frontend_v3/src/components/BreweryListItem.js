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

