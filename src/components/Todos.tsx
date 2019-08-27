import React, { useEffect } from "react";
import { useStoreActions, useStoreState } from '../store/hooks';
import TodoItem from "./TodoItem";

function Todos() {
  const todos = useStoreState(state => state.todos.data);
  const fetchTodos = useStoreActions(actions => actions.todos.fetchTodos)

  useEffect(() => {
    fetchTodos();
    return;
  }, [fetchTodos]);

  return <>{todos.map(todo => <TodoItem key={todo.id} todo={todo} />)}</>
}

export default Todos;