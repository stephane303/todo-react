import React, {  useState } from "react";
import {useDispatch} from 'react-redux';
import {addTodo} from '../redux/actions'

export function AddTodo() {
  const [title, setTitle] = useState("");
  const dispatch = useDispatch();
  const onChange = e => setTitle(e.target.value);
  const onSubmit = e => {
    e.preventDefault();
    dispatch(addTodo(title));
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
