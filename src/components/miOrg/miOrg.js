
// import { useState } from "react"
import "./miOrg.css"


// uso de estados con hook =  useState(valor del state)
    /*
        1. para utilizar un  hook primero debemos d eimporta useState en el doc,.
        despues declaramos una cosnstante la cual sera un arreglo con dos valores el primero el nombre del state y el segundo una funcion

        const [state, function] = useState('valor inicial del state')
    
    
    
    */



function MiOrg(props){ 
    
    
    // const [eliminar, eliminarElement] = useState(true)
   
    // const manejoClick =()=>{
    //     console.log("Click/noClick" + eliminar)
        
    // }

    return <section className="orgSection" id="org">
        <h3 className="title">Mi organizacion</h3>
       <a href="#form"> <img src="/img/add.png" alt="add" onClick={props.switchForm}/></a>
    </section>
}

export default MiOrg