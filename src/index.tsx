import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { StoreProvider } from 'easy-peasy';
import store from "./store/store";
// import $P from './lib'

ReactDOM.render(
  <StoreProvider store={store}>
    <App />
  </StoreProvider>, document.getElementById('root'));
//@ts-ignore
//window.$P = $P;
//console.log($P('#root').on('click', () => alert('clicked')).hide());
//for (let i = 0; i < 10; i++) {
//  setTimeout(function () { console.log(i); }, 100 * i);
//}

