import React, { Component, useState } from 'react'
import './AddTodo.css';


const AddTodo = ({closeModal,ToDos,setToDos}) => {


  const [ToDo, setToDo]  = useState({
    text : '',
    starred : false,
    completed : false
  });
  const ToDoHandler = () =>
  {
    setToDos([...ToDos,ToDo]);
    console.log(...ToDos,ToDo);   
    closeModal();
  }

    return (
      
        <div className="modal-wrapper row" >
          <div className="modal-container col-12">
            <span className='close-btn' onClick={closeModal}><i className="bi bi-x"></i></span>
              <div className='text-box'>
                <input type='text' className='todo-text'
                placeholder='Add Task Dude' 
                value={ToDo.text}
                onChange={(e) => setToDo({ ...ToDo,text:e.target.value}) }
                ></input>
                <h1>{ToDo.text}</h1>
                <button  className='add-btn'  onClick={ToDoHandler}>
                  <i className="bi bi-chevron-double-right double-right"></i>
                </button>
              </div>
          </div>
        </div>

    )
  }

export default AddTodo;