// import React from "react";

// export default function SearchListItems({ brewery }) {
//   return (
//     <div key={brewery.name}>
//       <p>{brewery.name}</p>
//       <button type="submit" onClick={console.log(brewery.name)}>
//         Save Brewery
//       </button>
//     </div>
//   );
// }
import React, { Component } from "react";
import BreweryListItem from "./BreweryListItem";

export default class SearchListItems extends Component {
  state = {
    name: this.props.brewery.name,
    address: this.props.brewery.address,
    city: this.props.brewery.city,
    state: this.props.brewery.state,
    url: this.props.brewery.website_url,
  };

  handleClick = () => {
    console.log(this.props.brewery.website_url)
  } 

  render() {
    return (
      <div>
        <p>{this.props.brewery.name}</p>
        <button type="submit" onClick={this.handleClick}>
          Save Brewery
        </button>
      </div>
    );
  }
}
