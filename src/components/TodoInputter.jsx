import React, { Component } from 'react';
import PropTypes from 'prop-types';

// CSS modulesではないので注意
import './TodoInputter.css';

const propTypes = {
  onSubmitTodo: PropTypes.func.isRequired
};

export default class TodoInputter extends Component {
  constructor(props) {
    super(props);

    this.state = {
      todoText: '',
      deadline: ''
    };

    this.onSubmit = this.onSubmit.bind(this);
  }

  /**
   * 送信
   */
  onSubmit(e) {
    e.preventDefault();

    const { todoText, deadline } = this.state;
    console.log(todoText, deadline);
    this.props.onSubmitTodo({
      text: todoText,
      deadline: new Date(deadline)
    });

    // データをリセットする
    this.setState({
      todoText: '',
      deadline: ''
    });
  }

  render() {
    const { todoText, deadline } = this.state;
    const canSubmittion = todoText !== '' && deadline !== '';
    return (
      <form
      className="todo-inputter"
      onSubmit={this.onSubmit}
      >
        <p>create todo</p>
        <div className="todo-inputter__input-item">
          <input
          value={todoText}
          type="text"
          placeholder="todo"
          onChange={(e) => { this.setState({ todoText: e.target.value }); }}
          />
        </div>
        <div className="todo-inputter__input-item">
          <label htmlFor="date">締切：</label>
          <input
          id="date"
          type="date"
          value={deadline}
          onChange={(e) => { this.setState({ deadline: e.target.value }); }}
          />
        </div>
        <div className="todo-inputter__input-item">
          <button
          type="submit"
          disabled={!canSubmittion}
          >
          登録
          </button>
        </div>
      </form>
    );
  }
}
TodoInputter.propTypes = propTypes;
