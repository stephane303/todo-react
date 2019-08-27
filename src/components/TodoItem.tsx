import React from 'react'


import { useStoreActions } from '../store/hooks';
import { Todo } from '../store/models';

export function TodoItem({ todo }: { todo: Todo }) {
  const toggleTodo = useStoreActions(state => state.todos.toggleTodo);
  const deleteTodo = useStoreActions(state => state.todos.deleteTodo);
  const getStyle = () => ({
    background: '#f4f4f4',
    padding: '10px',
    borderBottom: '1px #ccc dotted',
    textDecoration: (todo.completed ? 'line-through' : 'none')
  })

  function markComplete(id: number) {
    toggleTodo(id);
  }

  function handleDeleteTodo(id: number) {
    deleteTodo(id);
  }

  return (
    <div style={getStyle()}>
      <p>
        <input style={{ marginRight: '10px' }} defaultChecked={todo.completed} type="checkbox" onChange={() => markComplete(todo.id)} />
        {todo.title}
        <button style={buttonStyle} onClick={() => handleDeleteTodo(todo.id)}>X</button>
      </p>
    </div>
  )

}

const buttonStyle = {
  border: 0,
  color: 'white',
  background: 'red',
  borderRadius: '50%',
  padding: '5px 10px',
  float: 'right' as 'right',
  cursor: 'pointer',
  fontWeight: 'bold' as 'bold'
}

export default TodoItem
