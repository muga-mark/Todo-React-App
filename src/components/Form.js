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

    const clearList = (e) => {
        e.preventDefault();
        setTodos([]);
    }

    return (
        // <div className="Form__container">
            <form>
                <div>
                    <input 
                        value={inputText}
                        onChange={inputTextHandler} 
                        type="text" 
                    />
                    <button onClick={submitTodoHander} type="submit">
                        <i className="fas fa-plus-square"></i>
                    </button>
                </div>

               <div>
                    <div className="form__select">
                        <div>
                            <select 
                                name="todos" 
                                className="form__select_filter"
                                onChange={statusHander}>
                                <option value="all">All</option>
                                <option value="completed">Completed</option>
                                <option value="uncompleted">Uncompleted</option>
                            </select>
                        </div>
                    </div>
                    <div>
                        <button onClick={clearList} className="Todo__trash_btn">
                            <i className="fas fa-trash"></i>
                        </button>  
                    </div>
                </div>
            </form>
        // </div>
    )
}

export default Form
