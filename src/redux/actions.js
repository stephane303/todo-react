import {
  ADD_TODO_ERROR,
  ADD_TODO_PENDING,
  ADD_TODO_SUCCESS,
  TOGGLE_TODO,
  SET_FILTER,
  FETCH_TODOS_SUCCESS,
  FETCH_TODOS_ERROR,
  FETCH_TODOS_PENDING,
  DELETE_TODO_ERROR,
  DELETE_TODO_PENDING,
  DELETE_TODO_SUCCESS
} from "./actionTypes";
import axios from "axios";

const apiUrl = "https://jsonplaceholder.typicode.com/todos";

function addTodoPending() {
  return {
    type: ADD_TODO_PENDING
  };
}
function addTodoError(error) {
  return {
    type: ADD_TODO_ERROR,
    payload: error
  };
}

function addTodoSuccess(todo) {
  return {
    type: ADD_TODO_SUCCESS,
    payload: todo
  };
}

function deleteTodoPending() {
  return {
    type: DELETE_TODO_PENDING
  };
}
function deleteTodoError(error) {
  return {
    type: DELETE_TODO_ERROR,
    payload: error
  };
}

function deleteTodoSuccess(id) {
  return {
    type: DELETE_TODO_SUCCESS,
    payload: id
  };
}

function fetchTodosPending() {
  return {
    type: FETCH_TODOS_PENDING
  };
}

function fetchTodosSuccess(todos) {
  return {
    type: FETCH_TODOS_SUCCESS,
    payload: todos
  };
}

function fetchTodosError(error) {
  return {
    type: FETCH_TODOS_ERROR,
    payload: error
  };
}

export const fetchTodos = () => {
  return dispatch => {
    dispatch(fetchTodosPending());
    return axios
      .get(apiUrl + "?_limit=4")
      .then(response => {
        dispatch(fetchTodosSuccess(response.data));
      })
      .catch(error => {
        dispatch(fetchTodosError(error));
      });
  };
};

export const addTodo = title => {
  return dispatch => {
    dispatch(addTodoPending());
    return axios
      .post(apiUrl, { title })
      .then(response => {
        dispatch(addTodoSuccess(response.data));
      })
      .catch(error => {
        dispatch(addTodoError(error));
      });
  };
};

export const deleteTodo = id => {
  return dispatch => {
    dispatch(deleteTodoPending());
    return axios
      .delete(apiUrl + "/" + id)
      .then(response => {
        dispatch(deleteTodoSuccess(id));
      })
      .catch(error => {
        dispatch(deleteTodoError(error));
      });
  };
};

export const toggleTodo = id => ({
  type: TOGGLE_TODO,
  payload:  id 
});

export const setFilter = filter => ({ type: SET_FILTER, payload: { filter } });
