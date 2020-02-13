// your components will all go in this `component` directory.
// feel free to change this component.js into TodoList.js
import React from 'react';

const TodoList = props => {
    return (
        <div>
            {props.todo.map(item => (
                <Todo key={item.id} item={item} toggleItem={props.toggleItem} />
            ))}
            <button onClick={props.clearPurchased}>Clear Purchased</button>
        </div>
    );
};

export default TodoList;