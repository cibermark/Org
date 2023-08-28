import { useState } from "react"
import "./form.css"
import Input from "../input/input.js"
import Choice from "../choice/choice.js"
import Btn from "../boton/boton.js"


// uso del promps.children ejemplo dle boton.

function Form(data) {

    const [nombre, updateName] = useState('')
    const [puesto, updatePuesto] = useState('')
    const [img, updateImg] = useState('')

    const [choosen, updateChoosen] = useState("asd")

    // use state para nuevo equipo

    const [name, updateTitulo] = useState("");
    const [color, updateColor] = useState("")
    
   


    const mensajeEnvio = (e)=>{
        e.preventDefault()
        // creamos un objeto con los valores obtenidos de los estados

        let sentData = {
            nombre:nombre,
            puesto:puesto,
            img:img,
            choosen:choosen,
        }

        /*
            esto es justamente lo mismo que arriba cuando la key y el value es el mismo 

          let sentData = {
            nombre,
           puesto,
            img,
        }
        
        */
        console.log(sentData)

        data.registrar(sentData)
    }


    const manejarEquipo = (e)=>{
        e.preventDefault()
        console.log(name, color)
        //ahora con la funcion declarada en apps. mandamos un objeto de los datos titulo y color.
        data.crearEquipo({name, mainColor: color})
    }
    return <section className="formulario">
        <form onSubmit={mensajeEnvio} id="form">
            <h2>Rellena el formulario para crear el colaborador.</h2>
            <Input titulo="Nombre" placeholder="ingresa tu nombre" required={true} value={nombre} update={updateName}></Input>
            <Input titulo="Puesto" placeholder="ingresa tu Puesto" required value={puesto} update={updatePuesto}></Input>
            <Input titulo="Foto" placeholder="ingresa tu Foto" required value={img} update={updateImg}></Input>
            <Choice id="hola" value={choosen} update={updateChoosen} options={data.options}></Choice>
            <Btn>Crear</Btn> 

        </form>
        <form onSubmit={manejarEquipo} id="form">
            <h2>Rellena el formulario para crear un Equipo</h2>
            <Input titulo="Titulo" placeholder="ingresa Titulo" required={true} value={name} update={updateTitulo}></Input>
            <Input titulo="Color" placeholder="ingresa el color en HEXA" required value={color} update={updateColor}type="color"></Input>
            <Btn>Registrar Equipo</Btn> 
        </form>
    </section>
}

export default Form