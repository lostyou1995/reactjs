import React, { Component } from 'react';
import './TodoListItem.css';
const classNames = require('classnames');
class TodoListItem extends Component {

    constructor(props) {
        super(props);
    }

    render() {
        const { item , onClick}  = this.props;
        return (
            <div onClick={onClick} className={
                classNames('TodoListItem', {'itemCompleted': item.isCompleted})
            }>
                <p>{ item.title }</p>
            </div>
        );
    }

}
export default TodoListItem;