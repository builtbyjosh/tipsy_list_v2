import React, { Component } from "react";

class Navbar extends Component {
  state = {};

  handleItemClick = ({ name }) => this.setState({ activeItem: name });

  render() {
    const { activeItem } = this.state;
    return (
      <div className="ui three item menu">
        <a className="active item" onClick={this.handleItemClick} name={"home"}>
          Home
        </a>
        <a className="item" onClick={this.handleItemClick} name={"breweries"}>
          Saved Breweries
        </a>
        <a className="item" onClick={this.handleItemClick} name={"search"}>
          Search New Brewery
        </a>
      </div>
    );
  }
}

export default Navbar;
