import React, { Component } from 'react';
import './App.css';
import TodoListItem from './components/todo-list/TodoListItem';

class App extends Component {
  constructor() {
    super();
    this.state = {
      todoItems: [
        {title: 'Go to schools', isCompleted: false},
        {title: 'Go to company', isCompleted: false},
        {title: 'Go to super market', isCompleted: false},
        {title: 'Go to play football', isCompleted: false},
      ]
    };

    this.onItemClicked = this.onItemClicked.bind(this);
    
  }

  onItemClicked(item) {
    return (event) => {
      const isCompleted = item.isCompleted;
      const { todoItems } = this.state;
      const index= todoItems.indexOf(item);
      this.setState ({
        todoItems: [
          ...todoItems.slice(0, index),
          {
            ...item,
            isCompleted: !isCompleted
          },
          ...todoItems.slice(index + 1)
        ]
      });
    }
  }

  render() {
        const {todoItems} = this.state;
        return (
          <div className="App">
            {
              todoItems.map((item, index) =>
                <TodoListItem 
                key = {index} 
                item = {item}
                onClick = {this.onItemClicked(item)}/>
             )
            }
          </div>
        );
  }
}

export default App;
