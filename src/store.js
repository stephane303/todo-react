import { createStore, action, thunk } from "easy-peasy";
import axios from "axios";

const apiUrl = "https://jsonplaceholder.typicode.com/todos";
let uid = 2000;
function getAll() {
  return axios.get(apiUrl + "?_limit=4");
}

function deleteTodo(id) {
  return axios.delete(apiUrl + "/" + id);
}

function addTodo(todo) {
  return axios.post(apiUrl, todo);
}

const todosModel = {
  data: [],

  addTodo: thunk(async (actions, payload) => {
    let response = await addTodo({ title: payload.title });

    actions.addTodoSuccess({ ...response.data, id: ++uid });
  }),

  addTodoSuccess: action((state, payload) => {
    state.data.push(payload);
  }),

  fetchTodos: thunk(async (actions, payload) => {
    const response = await getAll();
    actions.setTodos({ data: response.data });
  }),

  setTodos: action((state, payload) => {
    state.data = payload.data;
  }),

  toggleTodo: action((state, payload) => {
    const item = state.data.find(item => item.id === payload.id);
    item.completed = !item.completed;
  }),

  deleteTodoSuccess: action((state, payload) => {
    state.data = state.data.filter(item => item.id !== payload.id);
  }),

  deleteTodo: thunk(async (actions, payload) => {
    await deleteTodo(payload.id);
    actions.deleteTodoSuccess({ id: payload.id });
  })
};

const storeModel = {
  todos: todosModel
};

const store = createStore(storeModel);

export default store;
