import { createStore, thunk, action } from "easy-peasy";
import { TodosModel, Todo, StoreModel } from './models';
import { addTodo, deleteTodo, getAll } from '../services'

let uid = 2000;

const todosModel: TodosModel = {
  data: [],

  addTodo: thunk(async (actions, todo) => {
    let response = await addTodo(todo);
    actions.addTodoSuccess({ ...response.data, id: ++uid });
  }),

  addTodoSuccess: action((state, payload) => {
    state.data.push(payload);
  }),

  fetchTodos: thunk(async (actions, payload) => {
    const response = await getAll();
    let data: Todo[] = response.data;
    actions.setTodos(data);
  }),

  setTodos: action((state, payload) => {
    state.data = payload;
  }),

  toggleTodo: action((state, id) => {
    let item: Todo = state.data.find(item => item.id === id)!;
    item.completed = !item.completed;
  }),

  deleteTodoSuccess: action((state, id) => {
    state.data = state.data.filter(item => item.id !== id);
  }),

  deleteTodo: thunk(async (actions, id) => {
    await deleteTodo(id);
    actions.deleteTodoSuccess(id);
  })
};

const storeModel: StoreModel = {
  todos: todosModel
};

const store = createStore(storeModel);

export default store;
