import Item from "./Items.jsx";
import { useState } from "react";

 const FoodItems = ({items}) => {

let [activeItem,setActiveItem] = useState([]);

let onBuyButton = (item ,event ) => {
let newItem = [...activeItem, item];
setActiveItem(newItem);



}


  return (
    <>
      <ul className="list-group">
        {items.map((item) => (
          <Item
            key={item}
            item={item}
            bought={activeItem.includes(item)}
            handleBuyButtonClick={(event) => onBuyButton(item , event)}
          />
        ))}
      </ul>
    </>
  );
};

export default FoodItems;
