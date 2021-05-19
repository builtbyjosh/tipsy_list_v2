import React, { Component } from "react";
import { connect } from "react-redux";

import { getAPIBreweries } from "../redux/actions/breweryActions";
import SearchListItems from "./SearchListItems";

class SearchAPIBreweries extends Component {
  state = {
    query: "",
    breweries: [],
  };

  handleChange = (e) => {
    this.setState({ [e.target.name]: e.target.value });
  };

  handleSubmit = (e) => {
    e.preventDefault();
    this.props.getAPIBreweries(this.state.query);
  };

  render() {
    return (
      <div>
        <form onSubmit={this.handleSubmit}>
          <input
            type="text"
            name="query"
            value={this.state.query}
            onChange={this.handleChange}
          />
          <button type="submit">Search</button>
        </form>

        <h1>Search Results</h1>
        {this.props.breweries.map((b) => (
          <SearchListItems brewery={b} />
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
