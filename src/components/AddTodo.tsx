import React, { useState } from "react";
import { useStoreActions } from '../store/hooks';


export function AddTodo() {
  const [title, setTitle] = useState("");

  const addTodo = useStoreActions(actions => actions.todos.addTodo)

  const onChange = (e: React.ChangeEvent) => setTitle((e.currentTarget as HTMLInputElement).value);
  const onSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    addTodo(title);
    setTitle("");
  };

  return (
    <form onSubmit={onSubmit} style={{ display: "flex" }}>
      <input
        type="text"
        name="title"
        placeholder="Add Todo ..."
        style={{ flex: "10", padding: "5px" }}
        value={title}
        onChange={onChange}
      />
      <input
        type="submit"
        value="Submit"
        className="btn"
        style={{ flex: "1" }}
      />
    </form>
  );
}

export default AddTodo;
