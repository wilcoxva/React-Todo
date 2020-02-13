// your components will all go in this `component` directory.
// feel free to change this component.js into TodoList.js
import React from 'react';
import Todo from './Todo';

const TodoList = props => {
    console.log(props)
    return (
        <div>
            {props.todo.map(todo => (
                <Todo key={todo.id} todo={todo} toggleItem={props.toggleItem} />
            ))}
            <button onClick={props.clearPurchased}>Clear Purchased</button>
        </div>
    );
};

export default TodoList;