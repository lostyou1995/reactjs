import React, { Component } from 'react';
import './TodoListItem.css';
class TodoListItem extends Component {
    render() {
        const item  = this.props.item;
        let className = 'TodoListItem';
        console.log(item)
        if (item.isCompleted) {
            className += ' itemCompleted';
        }

        return (
            <div className={ className }>
                <p>{ this.props.item.title }</p>
            </div>
        );
    }
}
export default TodoListItem;