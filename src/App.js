import React from 'react';
import TodoForm from './components/TodoComponents/TodoForm'
import { toASCII } from 'punycode';

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

  render() {
    return (
      <div>
        <h2>Welcome to your Todo App!</h2>
        <TodoForm addTask={this.addTask} />
      </div>
    );
  }
}

export default App;
