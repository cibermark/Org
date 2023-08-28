import Colaborador from "../colaborador/colaborador.js"
import "./team.css"
import hexToRgba from 'hex-to-rgba';





const Team = (data) => {

    // podraimos destructurar el data 
             // ejemplo =  const {mainColor,seconColor, name} = data.datos

    //destructurar teamates

    const {teamates} = data


    return <>{teamates.length > 0 &&
        <section className="team" style={{backgroundColor:hexToRgba(data.datos.mainColor, 0.6)} }>
            <input
                type="color"
                className="colorBTN"
                value={data.datos.mainColor}
                onChange={(e)=>{
                        data.changeColor(e.target.value, data.datos.id)
                }}
                // onCHange no sirve para crear la funcion que necesitamos para poder hacer que tidda la  secciona cambie de color
            ></input>
        <h3 style={{borderColor:data.datos.mainColor}}>{data.datos.name}</h3>
        <div className="teamates">
            {teamates.map((teamate, index) => <Colaborador data={teamate} key={index} color={data.datos.mainColor}deleteTeamate={data.deleteTeamate} like={data.like}></Colaborador>)}
        </div>
    </section>}</>
}

export default Team