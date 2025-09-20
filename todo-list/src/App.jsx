import "./App.css";
import { useState } from "react";
import AppName from "./components/AppName";
import AddTodo from "./components/AddTodo";
import TodoItems from "./components/TodoItems.jsx";
import WelCome from "./components/WelCome.jsx";
import { TodoItemsContext } from "./store/todo-items-store.jsx";

function App() {
  const initialTodoItems = [
    {
      name: "buy Milk",
      dueDate: "4/10/2023",
    },
    {
      name: "Go to collage",
      dueDate: "4/10/2023",
    },
    {
      name: "Go to University",
      dueDate: "4/10/2023",
    },
  ];

  let [todoItems, setTodoItems] = useState(initialTodoItems);

  const addNewItem = (todoName, dueDate) => {
    // const newInputAdd = [{name:todoName,dueDate:dueDate},...todoItems];

    setTodoItems((currValue) => [
      { name: todoName, dueDate: dueDate },
      ...currValue,
    ]);
  };

  const deleteItem = (deleteItem) => {
    setTodoItems(todoItems.filter((items) => items.name !== deleteItem));
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
