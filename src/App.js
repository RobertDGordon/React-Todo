import React from 'react';
import TodoForm from './components/TodoComponents/TodoForm';
import TodoList from './components/TodoComponents/TodoList'

class App extends React.Component {
  // you will need a place to store your state in this component.
  // design `App` to be the parent component of your application.
  // this component is going to take care of state, and any change handlers you need to work with your state
  constructor(){
    super();
    this.state = {
      todos:[
        {
          task: '',
          id: Date.now(),
          completed: false
        }
      ]
    }
  }

  addTask = taskName => {
    console.log (taskName)
    this.setState({
      todos: [
        ...this.state.todos,
        {
          task: taskName,
          id: Date.now(),
          completed: false
        }
      ]
    })
  }

  toggleCompleted = taskId => {
    this.setState ({
      todos: this.state.todos.map(item => {
        if (item.id === taskId) {
          return {
            ...item,
            completed: !item.completed
          }
        }
        return item;
      })
    })
  }

  render() {
    return (
      <div>
        <h2>Welcome to your Todo App!</h2>
        <TodoForm addTask={this.addTask} />
        <div>
          <TodoList 
            todos={this.state.todos}
            toggleCompleted={this.state.toggleCompleted}
          />
        </div>
      </div>
    );
  }
}

export default App;
