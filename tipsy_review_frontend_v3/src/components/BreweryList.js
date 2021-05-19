import React, { Component } from "react";
import { connect } from "react-redux";

import { getSavedBreweries } from "../redux/actions/breweryActions";

class BreweryList extends Component {
  componentDidMount() {
    this.props.getSavedBreweries();
  }

  render() {
    return <div>List of breweries</div>;
  }
}

const mapStateToProps = (state) => {
  return {
    breweries: state.breweries,
  };
};

export default connect(mapStateToProps, { getSavedBreweries })(BreweryList);
