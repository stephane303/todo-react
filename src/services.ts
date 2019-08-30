import axios, { AxiosResponse } from "axios";
import { Todo } from './store/models'


const apiUrl = "https://jsonplaceholder.typicode.com/todos";

export function getAll(): Promise<AxiosResponse<Todo[]>> {
  return axios.get(apiUrl + "?_limit=4");
}

export function deleteTodo(id: number): Promise<AxiosResponse<Todo>> {
  return axios.delete(apiUrl + "/" + id);
}

export function addTodo(todo: Todo): Promise<AxiosResponse<Todo>> {
  return axios.post(apiUrl, todo);
}
