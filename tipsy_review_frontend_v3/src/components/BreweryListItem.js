import React from "react";

// export default function BreweryListItem({ brewery }) {
//   return <div>{brewery.name}</div>;
// }

export default function BreweryListItem({ brewery }) {
  return <a href={`/breweries/${brewery.id}`}>{brewery.name}</a>;
}


