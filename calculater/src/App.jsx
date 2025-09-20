import style from "./App.module.css";
import { useState } from "react";
import Display from "./components/Display.jsx";
import Button from "./components/Button.jsx";

function App() {

  let items = [1, 2, 3, 4, 5, 6, 7, 8, 9, 0, "*", "+", "-", "/","=","c"];

  let [calValue,setValue] = useState("");

  const onClickButton = (item) => {
    if(item === "c"){
      setValue("");
    }else if(item === "="){
     const result = eval(calValue);
     setValue(result)

    }else{
     const inputItem = calValue + item;
     setValue(inputItem);


     }

    }
   
  

  return (
    <>
      <div className={style.calCont}>
        <Display  calDisplay ={calValue}/>
        <div className={style.btncont}>
          <Button item ={items} handleOnClick ={onClickButton}/>
        </div>
      </div>
    </>
  );
}

export default App;
