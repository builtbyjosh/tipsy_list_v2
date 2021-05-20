import React, { Component } from "react";

class Navbar extends Component {
  state = {};
  render() {
    return (

      <div className="ui secondary pointing menu">
        <a className=" item" name={"home"} href={'/'}>
          Home
        </a>
        <a className="item" name={"breweries"} href={'/breweries'}>
          Saved Breweries
        </a>
        <a className="item" name={"search"} href={'/search'}>
          Search New Brewery
        </a>
      </div>
    );
  }
}

export default Navbar;
