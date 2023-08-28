import "./choice.css";

// como utilizar .map

/*
    arreglor.map((item, indexOfItem)=>{
        return <option>item</option>
    })

*/



function Choice(promps){

    // const options  = [
    //     "Programacion", 
    //     "Front End", 
    //     "Data Science", 
    //     "Devops", 
    //     "Ux y Diseño", 
    //     "Movil", 
    //     "Inovacion y Gestion"
    // ]

    const chargeOfChange = (e)=>{
        console.log(e.target.value)
        promps.update(e.target.value)
    }

    return <div className="option-list"> 
        <label>Euipos</label>
        <select value={promps.value} onChange={chargeOfChange}>
            <option value="" hidden defaultValue="" disabled>Seleccionar Opcion</option>
            {promps.options.map((opcion, index)=>{
                return <option key={index} id={promps.id} value={opcion}>{opcion}</option>
            })}
        </select>
    </div>
}

export default Choice


/* <option>Programacion</option>
            <option>Front End</option>
            <option>Data Science</option>
            <option>Devops</option>
            <option>Ux y Diseño</option>
            <option>Movil</option>
            <option>Inovacion y Gestion</option> */