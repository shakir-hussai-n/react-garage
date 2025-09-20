
import style from "./FoodInput.module.css";
const FoodInput = ({handleKeyDown}) => {

 

    return <>
    <input type="text" placeholder="Enter food item" className={style.foodInput} onKeyDown={handleKeyDown }/>
    
    </>
}

export default FoodInput;