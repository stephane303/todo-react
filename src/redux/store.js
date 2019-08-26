import { applyMiddleware, createStore, compose } from "redux";
import rootReducer from "./reducers";
import thunk from 'redux-thunk';

const middlewares = [thunk];

export default createStore(rootReducer, {}, 
  compose(applyMiddleware(...middlewares),
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__())
  );

