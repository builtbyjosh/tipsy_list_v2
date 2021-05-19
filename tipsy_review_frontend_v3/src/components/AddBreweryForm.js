import React, { Component } from "react";

class AddBreweryForm extends Component {
  state = {
    // name: '',
    // address: '',
    // city: '',
    // state: '',
    // url: '',
    content: "",
    brewery_id: null
  };

  handleChange = (e) => {
    this.setState({[e.target.name]: e.target.value});
  };

  handleSubmit = (e) => {
    e.preventDefault();
  };

  render() {
    return (
      <div>
        <h1>Add New Brewery</h1>
        <form>
          <input
            type="text"
            name="content"
            value={this.state.content}
            onChange={this.handleChange}
          />
          <button type="submit">Add Brewery</button>
        </form>
      </div>
    );
  }
}

export default AddBreweryForm;
