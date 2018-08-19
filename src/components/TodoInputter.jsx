import React, { Component } from 'react';
import PropTypes from 'prop-types';

export default class TodoInputter extends Component {
  constructor(props) {
    super(props);

    this.state = {
      todoText: '',
      deadline: ''
    };
  }

  render() {
    return (
      <form>
        <p>create todo</p>
      </form>
    )
  }
}