import React from 'react';
import Todo from './Todo';
import './TodoList.css';

function TodoList({ todos, setTodos, filteredTodos }) {

    return (
        <div className="TodoList__container">
            <ul className="TodoList__list">
                {filteredTodos.map((todo) => (
                    <Todo 
                        key={todo.id} 
                        todo={todo}
                        text={todo.text} 
                        todos={todos}
                        setTodos={setTodos}
                    />
                ))}
            </ul>
        </div>
    )
}

export default TodoList
