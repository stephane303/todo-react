import React, { Component } from "react";
import { BrowserRouter, Route } from "react-router-dom";
import Todos from "./components/Todos";
import "./App.css";
import Header from "./components/layout/Header";
import AddTodo from "./components/AddTodo";
import About from "./components/pages/About";


class App extends Component {

  

/*   componentDidMount() {
    Axios.get("https://jsonplaceholder.typicode.com/todos?_limit=10").then(
      response => {
        this.setState({ todos: response.data });
      }
    );
  }

  markComplete = id => {
    let toReplace = this.state.todos.find(item => item.id === id);
    toReplace.completed = !toReplace.completed;
    this.setState({ todos: this.state.todos });
  };

  deleted = id => {
    Axios.delete("https://jsonplaceholder.typicode.com/todos/" + id).then(
      response =>
        this.setState({
          todos: this.state.todos.filter(item => item.id !== id)
        })
    );
  }; */

   /* addEvent = title => {
    //let maxId = this.state.todos.reduce((max, current) => (current.id > max ? current.id : max), 0);
    Axios.post("https://jsonplaceholder.typicode.com/todos", {
      title: title,
      completed: false
    }).then(response =>
      this.setState({
        todos: this.state.todos.concat(response.data)
      })
    );
  };  */
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
