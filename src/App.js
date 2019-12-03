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
          task: 'Submit Daily Retro',
          id: Date.now(),
          completed: false
        }
      ]
    }
  }
  componentDidMount() {
    const tasks = JSON.parse(window.localStorage.getItem('todos'))
    console.log ('tasks',tasks)
    // this.setState({ task: tasks });
  }

  addTask = taskName => {
    // console.log (taskName)
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

  clearCompleted = () => {
    this.setState({
      todos: this.state.todos.filter(item => {
        return !item.completed;
      })
    });
  }

  render() {
    return (
      <div className='App'>
        <div className='header'>
        <h2>Welcome to your Todo App!</h2>
        <TodoForm addTask={this.addTask} />
        </div>
        <div>
          <TodoList 
            todos={this.state.todos}
            toggleCompleted={this.toggleCompleted}
            clearCompleted={this.clearCompleted}
          />
        </div>
      </div>
    );
  }
}

export default App;
