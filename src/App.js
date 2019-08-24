import React, { Component } from 'react';
import Todos from './components/Todos';
import './App.css';
import Header from './components/layout/Header'
import AddTodo from './components/AddTodo';

class App extends Component {
  state = {
    todos: [
      {
        id: 1,
        title: 'Take out the trash',
        completed: false
      },
      {
        id: 2,
        title: 'See the sunrise',
        completed: true
      },
      {
        id: 3,
        title: 'Cry about my lost life',
        completed: false
      },
    ]
  }

  markComplete = (id) => {
    let toReplace = this.state.todos.find((item) => item.id === id);
    toReplace.completed = !toReplace.completed;
    this.setState({ todos: this.state.todos });
  }

  deleted = (id) => {
    this.setState({
      todos: this.state.todos.filter(
        (item) => (item.id !== id))
    })
  }

  addEvent = (title) => {
    let maxId = this.state.todos.reduce( (max, current) => (current.id > max ? current.id:max),0);
    this.setState({
      todos: this.state.todos.concat({
        title: title,
        id: maxId + 1
      })
    })
  }
  render() {
    console.log(this.state.todos)
    return (
      <div className="App">
        <div className="container">
          <Header />
          <AddTodo addEvent={(title) => this.addEvent(title)} />
          <Todos todos={this.state.todos} markComplete={this.markComplete} deleted={this.deleted} />

        </div>
      </div>
    );
  }
}

export default App;
