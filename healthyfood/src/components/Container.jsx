import style from "./Container.module.css";

const Container = (props)=> {



    return <div className={style.contBody}>{props.children}</div>
}


export default Container;