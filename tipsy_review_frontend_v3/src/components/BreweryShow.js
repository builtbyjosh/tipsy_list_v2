import React, { Component } from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";

import { getSingleBrewery } from "../redux/actions/breweryActions";
import BreweryDetails from "./BreweryDetails";
import BreweryReview from "./BreweryReview";

class BreweryShow extends Component {
  componentDidMount() {
    this.props.getSingleBrewery(this.props.match.params.id);
  }

  handleClick = () => {
    this.props.history.push(`/breweries/${this.props.brewery.id}/new`);
  };

  render() {
    return (
      <div>
        <h1>Brewery Details</h1>
        <BreweryDetails brewery={this.props.brewery} />
        <button onClick={this.handleClick} className="circular ui button primary"><i class="beer icon"></i> Add A Review</button>
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
