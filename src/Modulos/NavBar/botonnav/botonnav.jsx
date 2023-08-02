import React from "react";
import "./botonnav.css"

function botonNav(props) {
  // Esto es un boton hamburguesa sacado de codepen.io
  // Cuando el evento onClick sucede se recibe mediante props y a traves de un if muy sencillo cambia la clase del div y se ejecutan los cambios.
    return (
      <div onClick={props.handleClick} className={`icon nav-icon-5 ${props.clicked ? 'open' : '' }`}>
        <span></span>
        <span></span>
        <span></span>
      </div>
    );
}

export default botonNav;

