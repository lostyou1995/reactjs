import React, { Component } from 'react';
import './App.css';
import TodoListItem from './components/TodoListItem';

class App extends Component {
  constructor() {
    super();
    this.todoListItem = [
        {title: 'Go to schools', isCompleted: true},
        {title: 'Go to company', isCompleted: false},
        {title: 'Go to super market', isCompleted: false}
    ];
  }

  render() {
      return (
        <div className="App">
            {
              this.todoListItem.length > 0 &&  this.todoListItem.map((item, index) => 
              <TodoListItem key={index}  item={ item }/>)
            }
            {
              this.todoListItem.length === 0 && 'Nothing here'
            }
        </div>
      );
  }
}

export default App;
