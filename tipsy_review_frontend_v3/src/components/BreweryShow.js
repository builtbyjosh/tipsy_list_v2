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
      <div className="container">
        <div className="ui centered card ">
          <BreweryDetails brewery={this.props.brewery} />
          <div className="ui bottom attached button" onClick={this.handleClick}>
            <i className="add icon"></i>
            Add New Review
          </div>
        </div>
        <div className="ui segmented">
          <BreweryReview reviews={this.props.brewery.reviews} />
        </div>
        
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
