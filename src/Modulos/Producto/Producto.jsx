import React from 'react'
import "./Producto.css"

class Producto extends React.Component{

render(){
    return(
        <div className='producto'>
        <img id='imgart' src={this.props.img} alt="Loading.." />
        <h2 id='precio'>{this.props.precio}</h2>
        <p id='nombre'>{this.props.nombre}</p>
        </div>
    )
}
}

export default Producto

