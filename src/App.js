import { useState } from 'react';
import { v4 as uuidv4 } from 'uuid';
import './App.css';
import Header from './components/header/header.js';
import Form from './components/form/form.js';
import MiOrg from './components/miOrg/miOrg.js';
import Team from './components/team';
import Footer from './components/footer/footer.jsx';
// import Input from './components/input/input';

function App() {
  // let encabezao  = header()  caulquiera de las dos formas se pueden usar directo con las llaves o creando una variable

  /*
     {encabezao}
      {Header()}
      <Header></Header>
      <Header/>
  
  */ 

      // usos de if con ternario = condicion ? si se cuple haz esto  : si no haz esto
      // {mostarFoorm && <Form></Form>}  de esta manera ya no debemos de escribir como esta debajo del header

      const [mostrarForm, actulaizar] = useState(false)

      //estado para registar teamates 

      const [teamates, updateTeamates] = useState([{
        id:uuidv4(),
        choosen: "Front-End",
        img: "https://github.com/harlandlohora.png",
        nombre: "Harland Lohora",
        puesto: "Instructor",
        fav: false
      },
      {
        id:uuidv4(),
        choosen: "Programacion",
        img: "https://github.com/JeanmarieAluraLatam.png",
        nombre: "Genesys Rondón",
        puesto: "Desarrolladora de software e instructora",
        fav: false
      },
      {
        id:uuidv4(),
        choosen: "Ux y Diseño",
        img: "https://github.com/JeanmarieAluraLatam.png",
        nombre: "Jeanmarie Quijada",
        puesto: "Instructora en Alura Latam",
        fav: true
      },
      {
        id:uuidv4(),
        choosen: "Programacion",
        img: "https://github.com/christianpva.png",
        nombre: "Christian Velasco",
        puesto: "Head de Alura e Instructor",
        fav: true
      },
      {
        id:uuidv4(),
        choosen: "Innovacion y Gestion",
        img: "https://github.com/JoseDarioGonzalezCha.png",
        nombre: "Jose Gonzalez",
        puesto: "Dev FullStack",
        fav: true
      }])

      const [teams, actualizarEquipos] = useState([{
          id: uuidv4(),
          name:"Programacion",
          mainColor:"#57C278",
          secondColor:"#D9F7E9",
        }, 
        {
          id: uuidv4(),
          name:"Front-End",
          mainColor:"#82CFFA",
          secondColor:"#E8F8FF",
        },
        {
          id: uuidv4(),
          name:"Data Science",
          mainColor:"#A6D157",
          secondColor:"#F0F8E2",
        },
        {
          id: uuidv4(),
          name:"Devops",
          mainColor:"#E06B69",
          secondColor:"#FDE7E8",
        },
        {
          id: uuidv4(),
          name:"Ux y Diseño",
          mainColor:"#DB6EBF",
          secondColor:"#FAE9F5",
        },
        {
          id: uuidv4(),
          name:"Movil",
          mainColor:"#FFBA05",
          secondColor:"#FFF5D9",
        },
        {
          id: uuidv4(),
          name:"Inovacion y Gestion",
          mainColor:"#FF8A29",
          secondColor:"#FFEEDF",
        }, 
    ])

      const switchForm = () => {
        actulaizar(!mostrarForm)
      }

      // registrar teamates

      const registrar =(colaborador)=>{
        //spread operator para crear una copia del objeto array
        updateTeamates([...teamates, colaborador])
     
      }

      //eliminar teamate

      const deleteTeamate = (id)=>{
        console.log("elimianr colaborador" + id)
        const nuevosColabroadores = teamates.filter((teamate)=>teamate.id !== id)
        updateTeamates(nuevosColabroadores)
        
      }

      // cambio de color de sectiond de colaboradores

      const changeCorlor =(color, id)=> {
         

          const teamUpdated = teams.map(team => {
            if(team.id === id){
              team.mainColor = color
            }

            return team
          })
          
          actualizarEquipos(teamUpdated)
           
      }


      // crear equipo
      const crearEquipo = (nuevoEquipo) => {
        console.log(nuevoEquipo)

        actualizarEquipos([...teams, {...nuevoEquipo, id: uuidv4()}])
      }


      // corazon true and false

      const like = (id) => {
        console.log("like", id)
        const liked = teamates.map( (team) =>{
          if(team.id === id){
             if(team.fav === true){
              team.fav = false
             }else{
              team.fav = true
             }
            /*
               if(team.fav === true){
              team.fav = false
              }else{
              team.fav = true

              puede sr sustitudio por eso

              team.fav = !team.fav
             }
            */
          }

          return team
        })

        updateTeamates(liked)
      }


    //   const teams  = [

    //     {
    //       name:"Programacion",
    //       mainColor:"#57C278",
    //       secondColor:"#D9F7E9",
    //     }, 
    //     {
    //       name:"Front-End",
    //       mainColor:"#82CFFA",
    //       secondColor:"#E8F8FF",
    //     },
    //     {
    //       name:"Data Science",
    //       mainColor:"#A6D157",
    //       secondColor:"#F0F8E2",
    //     },
    //     {
    //       name:"Devops",
    //       mainColor:"#E06B69",
    //       secondColor:"#FDE7E8",
    //     },
    //     {
    //       name:"Ux y Diseño",
    //       mainColor:"#DB6EBF",
    //       secondColor:"#FAE9F5",
    //     },
    //     {
    //       name:"Movil",
    //       mainColor:"#FFBA05",
    //       secondColor:"#FFF5D9",
    //     },
    //     {
    //       name:"Inovacion y Gestion",
    //       mainColor:"#FF8A29",
    //       secondColor:"#FFEEDF",
    //     }, 
    // ]
 
  return (
    <div >
      <Header></Header>
      {
        mostrarForm && <Form options={teams.map(team => team.name)} registrar={registrar} crearEquipo={crearEquipo}></Form>
      }
      <MiOrg switchForm={switchForm}></MiOrg>
      {
        teams.map((data, index)=>{
        
          return <Team key={data.name} datos={data} teamates={teamates.filter(colaborador => colaborador.choosen ===  data.name)} deleteTeamate={deleteTeamate} changeColor={changeCorlor} like={like}></Team>
         })
      }
      <Footer></Footer>



      
    </div>
  );
}

export default App;

