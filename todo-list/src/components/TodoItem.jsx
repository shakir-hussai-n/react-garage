import { RiDeleteBin5Fill } from "react-icons/ri";
import style from "./TodoItem.module.css";
import { TodoItemsContext } from "../store/todo-items-store";
import {useContext} from "react";


function TodoItem2({ todoName,todoDate,onClickDelete}) {

 const{deleteItem}  = useContext(TodoItemsContext)  


  return (
    <>
      <div className="container ">
        <div className={`row ${style.kgRow}`}>
        <div className="col-5"> {todoName} </div>
          <div className="col-5">{todoDate} </div>
          <div className="col-2">
            <button type="button" className={`btn btn-danger ${style.kgButton}`} onClick = {() => deleteItem(todoName)}>
           <RiDeleteBin5Fill/>
            </button>
          </div>
        </div>
      </div>
    </>
  );
}

export default TodoItem2;
