import React, { Component } from 'react'
import PropTypes from 'prop-types';


export class TodoItem extends Component {
  
  getStyle = () => ({
    background: '#f4f4f4',
    padding: '10px',
    borderBottom: '1px #ccc dotted',
    textDecoration: (this.props.todo.completed?'line-through':'none')})
  

  render() {
    return (
      <div style={this.getStyle()}>
        <p>
          <input style={{marginRight:'10px'}} defaultChecked={this.props.todo.completed} type="checkbox" onChange={() => this.props.markComplete(this.props.todo.id)} /> 
          {this.props.todo.title}
          <button style={buttonStyle} onClick={() => this.props.deleted(this.props.todo.id)}>X</button>
          </p>
      </div>
    )
  }
}

const buttonStyle = {
  border:0,
  color:'white',
  background : 'red',
  borderRadius: '50%',
  padding:'5px 10px',
  float: 'right',
  cursor:'pointer',
  fontWeight:'bold'
}
TodoItem.proTypes = {
  todo : PropTypes.object.isRequired
}

TodoItem.proTypes = {
  todos : PropTypes.array.isRequired,
  markComplete : PropTypes.func.isRequired,
  deleted : PropTypes.func.isRequired,
}

export default TodoItem
