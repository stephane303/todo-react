import React, { useEffect } from "react";
import { useStoreState, useStoreActions} from 'easy-peasy';
import TodoItem from "./TodoItem";

function Todos() {
  const todos = useStoreState(state => state.todos.data);
  const fetchTodos = useStoreActions(state => state.todos.fetchTodos)

  useEffect(() => {
    fetchTodos();
    return ;
  }, [fetchTodos]); 

  return todos.map(todo => <TodoItem key={todo.id} todo={todo} />);
}

export default Todos;
