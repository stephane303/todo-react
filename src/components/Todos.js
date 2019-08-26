import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import TodoItem from "./TodoItem";
import { fetchTodos } from "../redux/actions";

function Todos() {
  const todos = useSelector(state => state.todos.data);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchTodos());
    return ;
  }, [dispatch]);

  return todos.map(todo => <TodoItem key={todo.id} todo={todo} />);
}

export default Todos;
