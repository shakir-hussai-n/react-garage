
import style from "./Items.module.css";
const Item = ({item ,bought, handleBuyButtonClick}) => {
  
 
  

    return <>
    
    <li  className={`list-group-item  ${bought && "active"} ${style.kgItem}`}>
            <span className={style.kgSpan}>{item}</span>
            <button type="button" className={`${style.itemBtn} btn btn-info `}  onClick={handleBuyButtonClick}>Buy</button>
          </li>
    
    </>
}


export default Item;