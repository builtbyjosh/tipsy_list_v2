import React, { Component } from "react";
import { connect } from "react-redux";

import { getSingleBrewery } from "../redux/actions/breweryActions";

class BreweryShow extends Component {

  componentDidMount() {
    this.props.getSingleBrewery(this.props.match.params.id);
  }

  render() {
    return (
      <div>
        Show Brewery
        <p>More Text</p>
      </div>
    );
  }
}

export default connect(null, { getSingleBrewery })(BreweryShow);
