import React from 'react';
import './Todo.css';

function Todo({ text, todo, todos, setTodos }) {

    const deleteHandler = () => {
        setTodos(todos.filter((el) => el.id !== todo.id))
    }

    const completeHandler = () => {
        setTodos(todos.map((item) => {
            if(item.id === todo.id){
                return {
                    ...item, completed: !item.completed
                }
            }
            return item;
        }));
    }

    return (
        <div className="Todo">
            <li className={`Todo__item ${todo.completed? "completed" : ''}`}>
                {text}
            </li>
            <button onClick={completeHandler} className="Todo__complete_btn">
                <i className="fas fa-check"></i>
            </button>
            <button onClick={deleteHandler} className="Todo__trash_btn">
                <i className="fas fa-trash"></i>
            </button>
        </div>
    )
}

export default Todo
