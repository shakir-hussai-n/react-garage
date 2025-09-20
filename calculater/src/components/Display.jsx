import style from "./display.module.css";
const Display = ({calDisplay}) => {
  return (
    <>
      <input
        type="text"
        placeholder="calculater"
        className={style.inptCont}
        value ={calDisplay} 
        readOnly
      ></input>
    </>
  );
};
export default Display;
