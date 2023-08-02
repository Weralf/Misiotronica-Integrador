
import NavBar from '../../NavBar/NavBar'
import React from 'react'
import Footer from '../../Footer/Footer'
import "./Contacto.css"


function Contacto() {

function msgEnviado() {
  alert('Su consulta ha sido enviada!');
}

  return (
    // Hay 2 grids, uno que separa el titulo de los inputs, y otro que organiza los inputs de forma correcta.
    // Al enviar la consulta simplemente se recibe una alerta, nada mas.
    <div>
     <NavBar />
     <div className='containercontacto'>
      <div id='titulocontacto'>
       <h1>CONTACTANOS</h1>
      </div>
      <div id='inputscontacto'>
      <div>
        <input id='inputnombre' type="text" placeholder="Nombre Completo" ></input>  
      </div>
      <div>
       <input id='inputcorreo' type="text" placeholder="Correo Electronico" ></input>
      </div>
      <div>
       <textarea id='inputconsulta' type="text" placeholder="¿Cúal es la consulta?" rows={8} cols={80} ></textarea>
      </div>
      <div>
       <button id='inputenviar' type="submit" onClick={msgEnviado} >Enviar</button> 
      </div>
     </div>
    </div>
    <Footer />
   </div>
  )
}

export default Contacto
