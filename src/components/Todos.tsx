import React, { useEffect } from "react";
import { useStoreActions, useStoreState } from '../store/hooks';
import TodoItem from "./TodoItem";
import { Todo } from '../store/models'

function Todos() {
  const todos: Todo[] = useStoreState(state => state.todos.todos);
  const fetchTodos = useStoreActions(actions => actions.todos.fetchTodos)

  useEffect(() => {
    fetchTodos();
    return;
  }, [fetchTodos]);

  return <>{todos.map(todo => <TodoItem key={todo.id} todo={todo} />)}</>
}

export default Todos;