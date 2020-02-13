import React from 'react';
import TodoList from './components/TodoComponents/TodoList';
import TodoForm from './components/TodoComponents/TodoForm';

const todo = {
  task: 'Organize Garage',
  id: 1528817077286,
  completed: false
},
{
  task: 'Bake Cookies',
  id: 1528817084358,
  completed: false
}

class App extends React.Component {
  // you will need a place to store your state in this component.
  // design `App` to be the parent component of your application.
  // this component is going to take care of state, and any change handlers you need to work with your state
  constructor() {
    super();
    this.state = {
      todo
    };
  }

  addTodo = (e, todo) => {
    e.preventDefault();

    const newTodo = {
      name: todo,
      id: Date.now(),
      purchased: false
    };

    this.setState({
      todo: [...this.state.todo, newTodo]
    });
  };

  toggleTodo = todoId => {
    this.setState({
      todo: this.state.todo.map(todo => {
        if (todoId === todo.id) {
          return {
            ...todo,
            purchcased: !item.purchased
          };
        }

        return todo;
      })
    });
  };

  clearPurchased = e => {
    e.preventDefault();
    this.setState({
      todo: this.state.todo.filter(todo => todo.purchased === false)
    });
  };

  render() {
    return (
      <div>
        <div>
          <h1>To-do List</h1>
          <TodoForm addTodo={this.addTodo} />
        </div>
        <TodoList
          todo={this.state.todo}
          toggleItem={this.toggleItem}
          clearPurchased={this.clearPurchased}
        />
      </div>
    );
  }
}

export default App;
