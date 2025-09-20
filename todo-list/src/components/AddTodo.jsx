import style from "./AddTodo.module.css";
import {useState,useRef}from  "react";
import { IoMdAdd  } from "react-icons/io";
import { TodoItemsContext} from "../store/todo-items-store";
import { useContext } from "react";



function AddTodo() {

 const {addNewItem} = useContext(TodoItemsContext) ;
 

const todoNameElement = useRef();
const dueDateElement = useRef();


const handleButtonOnClick = (event) => {
  event.preventDefault();
  const todoName = todoNameElement.current.value;
  const dueDate = dueDateElement.current.value;
  todoNameElement.current.value = "";
  dueDateElement.current.value = "";
  
addNewItem(todoName,dueDate);
 


}

  return (
    <>
      <div className="container ">
       <form onSubmit = {handleButtonOnClick }>
        <div className={`row ${style.kgRow}`} >
          <div className="col-5">
            <input
              type="text"
              placeholder="Enter todo here"
             ref = { todoNameElement }
             
            ></input>
          </div>
          <div className="col-5">
            <input type="date" ref = {dueDateElement } ></input>
          </div>
          <div className="col-2">
            <button
              className={`btn btn-success ${style.kgButton}`} 
            >
              <IoMdAdd />
            </button>
          </div>
        </div>
       </form> 
      </div>
    </>
  );
}

export default AddTodo;
