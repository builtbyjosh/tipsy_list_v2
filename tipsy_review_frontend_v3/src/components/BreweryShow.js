import React, { Component } from "react";
import { connect } from "react-redux";

import { getSingleBrewery } from "../redux/actions/breweryActions";
import breweryReducer from "../redux/reducers/breweryReducer";

class BreweryShow extends Component {

  componentDidMount() {
    this.props.getSingleBrewery(this.props.match.params.id);
  }

  render() {
    return (
      <div>        
        <h1>Brewery Details</h1>
        <h3>{this.props.brewery.name}</h3>
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
