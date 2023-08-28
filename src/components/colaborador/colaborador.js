import "./colaborador.css"
import {TiDelete, } from "react-icons/ti"
import {AiOutlineHeart, AiFillHeart} from "react-icons/ai"


function Colaborador(datos) {
  const {nombre,img,puesto,id, fav} = datos.data
  const {deleteTeamate, like} = datos
    
    return <div className="colaborador">
        <TiDelete onClick={()=>{deleteTeamate(id)}} className="deleteBTN"></TiDelete>
        <div className="encabezado" style={{backgroundColor:datos.color} }> 
                <img  src={img} alt={nombre}></img>
        </div>
        <div className="info"> 
            <h4>{nombre}</h4>
            <h5>{puesto}</h5> 

           { fav ? <AiFillHeart color="red" onClick={()=>{like(id)}}></AiFillHeart> :<AiOutlineHeart onClick={()=>{like(id)}} ></AiOutlineHeart>}
            
            
            
        </div>
    </div>
}


export default Colaborador;