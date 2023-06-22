import { useState } from "react"
import React from 'react'
import AddTodo from "../Add-todo/AddTodo";
import './ToDo.css'



function ToDo() {
  const [ToDos, setToDos] = useState([{}]);

  const [showForm , setshowForm] = useState(false);
  const closeModal = () => setshowForm(false);

  return (
    <div className="container todo-form">
      <div></div>
      <div>
        {
          ToDos.length > 1 ? 
        ToDos.map((ToDo,index) => {
          return(
            <>
                <h4> {ToDo.text}</h4>
                <i class="bi bi-pencil"></i>
                &nbsp;
                <i className="bi bi-trash"></i>
            </>
          )
            })
          : ''
          }
      </div>
      <div>
            <button className='btn' onClick={() => setshowForm(true)}>
            <i className="bi bi-plus-circle-fill"></i></button>
            {showForm && <AddTodo  closeModal={closeModal} ToDos={ToDos} setToDos={setToDos} />}

            
                       
      </div>      
      
    </div>
    
  )
}

export default ToDo