import React, { Component } from "react";
import { BrowserRouter, Route } from "react-router-dom";
import Todos from "./components/Todos";
import "./App.css";
import Header from "./components/layout/Header";
import AddTodo from "./components/AddTodo";
import About from "./components/pages/About";


class App extends Component {
 
  render() {

    return (
      <BrowserRouter>
        <div className="App">
          <div className="container">
            <Header />
            <Route
              exact
              path="/"
              render={ ()=>
                <React.Fragment>
                  <AddTodo />
                  <Todos />
                </React.Fragment>
              }
            ></Route>
            <Route path="/about" component={About} />
          </div>
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
