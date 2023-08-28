import { useState } from "react";
import "./input.css";

function Input(props){
   
    //se destrucutra un a propiedad y se le puede dar un valor para cuando no se le indique uno nuevo
    const {type = "text"} = props


    const manejarCambio = (e)=>{
        // este props updarte hace referencia al value de form 
        props.update(e.target.value)
    }

    return <div className={`input input-${type}`}>
        <label>{props.titulo}</label>
        <input type={type}  
        placeholder={props.placeholder} 
        required={props.required} 
        value={props.value} 
        onChange={manejarCambio}
        />
    </div>
}


export default Input