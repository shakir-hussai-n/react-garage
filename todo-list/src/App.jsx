import "./App.css";
import { useState ,useReducer} from "react";
import AppName from "./components/AppName";
import AddTodo from "./components/AddTodo";
import TodoItems from "./components/TodoItems.jsx";
import WelCome from "./components/WelCome.jsx";
import { TodoItemsContext } from "./store/todo-items-store.jsx";

function App() {
  // const [todoItems, setTodoItems] = useState([]);

  const reducerfun = (currValue,action) => {
    let newTodoItems = currValue;
    if(action.type === "NEW_ITEMS"){
      newTodoItems = [{name: action.payload.todoName, dueDate:action.payload.dueDate},...currValue]

      
    }else if (action.type === "DELETE_ITEMS"){

      newTodoItems = (currValue.filter((items) => items.name !== action.payload.deleteItems));

    }

    return newTodoItems ;
  }

  const [todoItems, todoDispach] = useReducer(reducerfun, []);




  const addNewItem = (todoName, dueDate) => {

    const dispachObject = {
           type: "NEW_ITEMS",
           payload: {todoName,
            dueDate
           }
    }
    todoDispach(dispachObject)


    
    // // const newInputAdd = [{name:todoName,dueDate:dueDate},...todoItems];

    // setTodoItems((currValue) => [
    //   { name: todoName, dueDate: dueDate },
    //   ...currValue,
    // ]);
  };

  const deleteItem = (deleteItems) => {

    const objectDeleteItem = {
      type: "DELETE_ITEMS",
      payload: {deleteItems}

    }
    todoDispach(objectDeleteItem);
    // setTodoItems(todoItems.filter((items) => items.name !== deleteItem));
  };

  // const defaultTodoItems =  [{name:"bye Milk",dueDate:"tomorrow"}]

  return (
    <>
      <TodoItemsContext.Provider
        value={{
          todoItems: todoItems,
          addNewItem: addNewItem,
          deleteItem: deleteItem,
        }}
      >
        <center className="todo-container">
          <AppName />
          <AddTodo />
          <WelCome></WelCome>
          <TodoItems />
        </center>
      </TodoItemsContext.Provider>
    </>
  );
}

export default App;
