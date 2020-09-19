import React from 'react';
import './Form.css';

function Form({ todos, setTodos, inputText, setInputText, setStatus }) {

    const inputTextHandler = (e) => {
        console.log(e.target.value);
        setInputText(e.target.value);
    }

    const submitTodoHander = (e) => {
        e.preventDefault();
        if(inputText){
            setTodos([
                ...todos, {text: inputText, completed: false, id: Math.random()*10000}
            ]);
            setInputText("");
        }
        
    }

    const statusHander = (e) => {
        console.log(e.target.value);
        setStatus(e.target.value);
    }

    return (
        <form>
            <input 
                value={inputText}
                onChange={inputTextHandler} 
                type="text" 
            />

            <button onClick={submitTodoHander} type="submit">
                <i className="fas fa-plus-square"></i>
            </button>
            
            <div className="form__select">
                <select 
                    name="todos" 
                    className="form__select_filter"
                    onChange={statusHander}>
                    <option value="all">All</option>
                    <option value="completed">Completed</option>
                    <option value="uncompleted">Uncompleted</option>
                </select>
            </div>
        </form>
    )
}

export default Form
