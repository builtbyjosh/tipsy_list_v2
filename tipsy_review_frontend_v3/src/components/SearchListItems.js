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
import { connect } from "react-redux";

import { createBrewery } from "../redux/actions/breweryActions";

class SearchListItems extends Component {
  state = {
    name: this.props.brewery.name,
    address: this.props.brewery.address,
    city: this.props.brewery.city,
    state: this.props.brewery.state,
    url: this.props.brewery.website_url,
  };

  handleClick = (e) => {
    
    this.props.createBrewery(this.state);
    window.location.href = "/breweries";
  };

  render() {
    return (
      <div className="card " key={this.props.brewery.name}>
        <div className="content">
          <div className="description center aligned">
            {this.props.brewery.name}
          </div>
        </div>
        <div className="ui bottom attached button" onClick={this.handleClick}>
          <i className="plus alternate icon" ></i>
          Add Brewery
        </div>
      </div>
    );
  }
}
export default connect(null, { createBrewery })(SearchListItems);

// <div>
//         <p>{this.props.brewery.name}</p>
//         <button type="submit" onClick={this.handleClick}>
//           Save Brewery
//         </button>
//       </div>
