import React from 'react';
import TodoItem from './TodoItem';
import PropTypes from 'prop-types';

class Todos extends React.Component {

  markComplete = (id) => {this.props.markComplete(id)}
  deleted = (id) => {this.props.deleted(id)}
  render() {

    return this.props.todos.map((todo) =>
      <TodoItem key={todo.id} todo = {todo} markComplete={this.markComplete} deleted={this.deleted}/>
    )
  }
}

Todos.proTypes = {
  todos : PropTypes.array.isRequired,
  markComplete : PropTypes.func.isRequired,
  deleted : PropTypes.func.isRequired,
}


export default Todos;