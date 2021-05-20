import React, { Component } from "react";
import { connect } from "react-redux";

import { getSavedBreweries } from "../redux/actions/breweryActions";
import BreweryListItem from "./BreweryListItem";

class BreweryList extends Component {
  componentDidMount() {
    this.props.getSavedBreweries();
  }

  render() {
    return (
      <div className="container">
        <div className="ui card centered">
          <div className="content">
            <div className="center aligned header">Saved Brewery List</div>
          </div>
        </div>
        <div className="ui centered raised cards">
          {this.props.breweries.map((b) => (
            <BreweryListItem brewery={b} />
          ))}
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

export default connect(mapStateToProps, { getSavedBreweries })(BreweryList);
