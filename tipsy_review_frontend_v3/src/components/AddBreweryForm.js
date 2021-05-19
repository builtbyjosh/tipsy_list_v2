import React, { Component } from "react";
import {connect} from 'react-redux'

import { createBreweryReview } from '../redux/actions/reviewActions'

class AddBreweryForm extends Component {
  state = {
    content: "",
    brewery_id: this.props.match.params.id
  };

  handleChange = (e) => {
    this.setState({[e.target.name]: e.target.value});
  };

  handleSubmit = (e) => {
    e.preventDefault();
    this.props.createBreweryReview(this.state, this.props.history)
  };

  render() {
    
    return (
      <div>
        <h1>Add New Review</h1>
        <form onSubmit={this.handleSubmit}>
          <input
            type="text"
            name="content"
            value={this.state.content}
            onChange={this.handleChange}
          />
          <button type="submit">Add Review</button>
        </form>
      </div>
    );
  }
}

export default connect(null, {createBreweryReview})(AddBreweryForm);
