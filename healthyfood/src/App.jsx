import { useState } from "react";
import FoodItems from "./components/FoodItems.jsx";
import ErrorMessage from "./components/ErrorMessage.jsx";
import ComponentHead from "./components/ComponentHead.jsx";
import Container from "./components/Container.jsx";
import FoodInput from "./components/FoodInput.jsx";

function App() {

  
  let [foodItems,setFoodItems] = useState([]);

  

  const onKeyDown = (event) => {
      if(event.key === "Enter"){
        let newFoodItem = event.target.value;
        let newItems = [newFoodItem, ...foodItems ];
        setFoodItems(newItems);
      }
  }

  return (
    <Container>
      <center>
        <ComponentHead />
        <ErrorMessage items={foodItems} />
        <FoodInput handleKeyDown={onKeyDown}/>
      </center>
      <FoodItems items={foodItems} />
    </Container>
  );
}

export default App;
