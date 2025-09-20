import style from "./Button.module.css";
const Button = ({item,handleOnClick}) => {
  
  return (
    <>
      {item.map((item) => (
        <button key={item} type="button" className={style.btn} onClick={(event) => handleOnClick(item)}>
          {item}
        </button>
      ))}
    </>
  );
};

export default Button;
