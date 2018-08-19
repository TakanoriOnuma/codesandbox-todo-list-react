import React, { Component } from 'react';
import PropTypes from 'prop-types';

import TodoInputter from './components/TodoInputter.jsx';

export default class App extends Component {
  render() {
    return (
      <div>
        <div>test</div>
        <TodoInputter />
      </div>
    );
  }
}
