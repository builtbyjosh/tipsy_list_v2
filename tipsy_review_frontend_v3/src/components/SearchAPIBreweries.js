import React, { Component } from "react";
import { connect } from "react-redux";

import { getAPIBreweries } from "../redux/actions/breweryActions";
import SearchListItems from "./SearchListItems";

class SearchAPIBreweries extends Component {
  state = {
    query: ""
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
        <div className="ui segment search-bar">
          <form onSubmit={this.handleSubmit} className="ui form">
            <div className="ui icon fluid input field">
              <input
                type="text"
                name="query"
                value={this.state.query}
                onChange={this.handleChange}
                placeholder="Search for New Brewery"
              />
              <i className="search icon"></i>
            </div>
          </form>
        </div>
        <div className="ui card centered">
          <div className="content">
            <div className="center aligned header">Search Results</div>
          </div>
        </div>

        <div className="container">
          <div className="ui centered raised cards">
            {this.props.breweries.map((b) => (
              <SearchListItems brewery={b} />
            ))}
          </div>
        </div>
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
