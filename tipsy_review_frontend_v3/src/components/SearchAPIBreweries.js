import React, { Component } from "react";
import { connect } from "react-redux";

import { getAPIBreweries } from "../redux/actions/breweryActions";
import BreweryListItem from "./BreweryListItem";

class SearchAPIBreweries extends Component {
  state = {
    query: "",
    breweries: [],
  };

  componentDidMount() {
    this.props.getAPIBreweries();
  }

  render() {
    return (
      <div>
        <h1>Search Results</h1>
        {this.props.breweries.map((b) => (
          <BreweryListItem brewery={b} />
        ))}
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    breweries: state.breweries,
  };
};

export default connect(mapStateToProps, { getAPIBreweries })(
  SearchAPIBreweries
);
