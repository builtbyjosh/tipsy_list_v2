import React from "react";

export default function SearchListItems({ brewery }) {
  return (
    <div key={brewery.name}>
      <p>{brewery.name}</p>
      <button type="submit" onClick={console.log(brewery.name)}>
        Save Brewery
      </button>
    </div>
  );
}
