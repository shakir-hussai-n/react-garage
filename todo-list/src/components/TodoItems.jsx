import { TodoItemsContext } from "../store/todo-items-store.jsx";
import { useContext } from "react";
import style from "./TodoItems.module.css";
import TodoItem from "./TodoItem.jsx";


const TodoItems = () => {

    const {todoItems} = useContext(TodoItemsContext);
     
    
    

    return <>
    
    <div className={style.itemContainer}>
        {todoItems.map( items => <TodoItem  key = {items.name} todoName={items.name} todoDate={items.dueDate}  /> )}
          
          
        </div>
    
    </>
}

export default TodoItems;