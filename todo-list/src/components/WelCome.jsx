import { TodoItemsContext } from "../store/todo-items-store";
import {useContext} from "react";

const WelCome = ()  => {

const {todoItems} = useContext(TodoItemsContext);


    return <>
    {todoItems.length === 0 && <p>enjoy your day</p>}
    
    </>
}
    
export default WelCome;
