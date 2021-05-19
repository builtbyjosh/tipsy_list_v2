import React, { Component } from "react";
import { connect } from "react-redux";

import { getSingleBrewery } from "../redux/actions/breweryActions";
import BreweryDetails from "./BreweryDetails";
import BreweryReview from "./BreweryReview";

class BreweryShow extends Component {

  componentDidMount() {
    this.props.getSingleBrewery(this.props.match.params.id);
  }

  render() {
    return (
      <div>        
        <h1>Brewery Details</h1>
        <BreweryDetails brewery={this.props.brewery} />
        <BreweryReview reviews={this.props.brewery.reviews} />
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    brewery: state.breweries,
  };
};

export default connect(mapStateToProps, { getSingleBrewery })(BreweryShow);
