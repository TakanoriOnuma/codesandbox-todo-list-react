import React, { Component } from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import FlipMove from 'react-flip-move';

// CSS modulesではないので注意
import './TodoList.css';

/**
 * 日付をフォーマットする
 * @param {Date} date - Dateインスタンス
 * @returns {string} - フォーマットされた文字列
 */
function formatDate(date) {
  const year = date.getFullYear();
  const month = ('00' + (date.getMonth() + 1)).slice(-2);
  const day = ('00' + date.getDate()).slice(-2);
  return `${year}-${month}-${day}`;
}

const propTypes = {
  todoList: PropTypes.array.isRequired,
  onStatusChange: PropTypes.func.isRequired,
  onDelete: PropTypes.func.isRequired
};
export default class TodoList extends Component {
  render() {
    const { todoList } = this.props;
    return (
      <div className="todo-list">
        <h1 className="todo-list__title">todolist</h1>
        <FlipMove
        typeName="ul"
        className="todo-list__list"
        enterAnimation="accordionVertical"
        leaveAnimation="accordionVertical"
       >
        {todoList.map((todo) => (
          <li
          key={todo.id}
          className={classNames('todo', {
            'todo--done': todo.isDone
           })}
          >
            <div className="todo__line">
              <button
              className="todo__status"
              type="button"
              onClick={() => { this.props.onStatusChange(todo.id); }}
              >
              {todo.isDone ? 'DONE' : 'DOING'}
              </button>
              <div className="todo__deadline">締切：{formatDate(todo.deadline)}</div>
              <div
              className="todo__delete"
              onClick={() => { this.props.onDelete(todo.id); }}
              />
            </div>
            <div className="todo__text">{todo.text}</div>
          </li>
        ))}
        </FlipMove>
      </div>
    )
  }
}
TodoList.propTypes = propTypes;
