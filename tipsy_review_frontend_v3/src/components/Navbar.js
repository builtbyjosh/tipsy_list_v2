import React, { Component } from "react";

class Navbar extends Component {
  state = {};
  render() {
    return (
      <div className="ui secondary pointing menu segment" id='navbar'>
        <h1 className="ui header logo">
          <i className="beer icon"></i>
          <div className="content">Tipsy List</div>
        </h1>
        <div className="right menu">
          <a className=" item" name={"home"} href={"/"}>
            Home
          </a>
          <a className="item" name={"breweries"} href={"/breweries"}>
            Saved Breweries
          </a>
          <a className="item" name={"search"} href={"/search"}>
            Search New Brewery
          </a>
        </div>
      </div>
    );
  }
}

export default Navbar;
