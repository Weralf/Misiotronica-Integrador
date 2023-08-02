import React from 'react'
import "./FSN.css"

class FSN extends React.Component{

 // Quiero mencionar que tuve que borrar el constructor porque en la terminal me decia que era inutil.

    render(){
        return(
    // Un grid dentro de otro grid, el primer grid (SobreNosotros) separa el div en imagen(izq) y texto(derecha)
    // El segundo grid (infoSobreNosotros) separa la parte de la derecha en titulo y descripcion.
    // En la descripcion puse un lorem, si fuera para una empresa real la cosa seria muy distinta, obviamente.
     <div className='SobreNosotros'>
     <div id='imgSobreNosotros'>
      <img src={this.props.img} alt="Loading..." />
     </div>
     <div className='infoSobreNosotros'>
      <div id='tituloSobreNosotros'>
        <h2>{this.props.titulo}</h2>   
      </div>
      <div id='descSobreNosotros'>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. 
         Neque, voluptatem cum modi, consequatur reprehenderit error asperiores ratione, 
         consectetur quibusdam pariatur praesentium autem distinctio deleniti nulla 
         necessitatibus recusandae voluptate quisquam eveniet nam porro soluta vero 
         eligendi maiores! Ea quas dolor aspernatur. Lorem ipsum dolor sit amet consectetur adipisicing elit. 
         Neque, voluptatem cum modi, consequatur reprehenderit error asperiores ratione, 
         consectetur quibusdam pariatur praesentium autem distinctio deleniti nulla 
         necessitatibus recusandae voluptate quisquam eveniet nam porro soluta vero 
         eligendi maiores! Ea quas dolor aspernatur. Lorem ipsum dolor sit amet consectetur adipisicing elit. 
         Neque, voluptatem cum modi, consequatur reprehenderit error asperiores ratione, 
         consectetur quibusdam pariatur praesentium autem distinctio deleniti nulla 
        </p>
      </div>
     </div>   
    </div>  
        )
    }  
    }

export default FSN
