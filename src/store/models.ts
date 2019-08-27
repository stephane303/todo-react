import { Action, Thunk } from "easy-peasy";
export interface Todo {
  id: number;
  title: string;
  completed: boolean;
}

export interface TodosModel {
  data: Todo[];
  addTodoSuccess: Action<TodosModel, Todo>; // 👈 declaring our action
  addTodo: Thunk<TodosModel, string>; // 👈 declaring our thunk
  setTodos: Action<TodosModel, Todo[]>;
  fetchTodos: Thunk<TodosModel>;
  toggleTodo: Action<TodosModel, number>;
  deleteTodoSuccess: Action<TodosModel, number>;
  deleteTodo: Thunk<TodosModel, number>;
}
export interface StoreModel {
  todos: TodosModel;
}