import axios from "axios";


const apiUrl = "https://jsonplaceholder.typicode.com/todos";

export function getAll() {
  return axios.get(apiUrl + "?_limit=4");
}

export function deleteTodo(id: number) {
  return axios.delete(apiUrl + "/" + id);
}

export function addTodo(todo: object) {
  return axios.post(apiUrl, todo);
}
