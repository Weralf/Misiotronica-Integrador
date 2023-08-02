import "./NavBar.css";
import React, {useState} from "react";
import logo from "../Imagenes/logoblanco.png";
import BotonNav from "./botonnav/botonnav.jsx";
import Carrito from "./Carrito/Carrito";


function NavBar() {

  const [clicked, setClicked] = useState(false);

  const handleClick = () => {
    setClicked(!clicked)
  }
 
    return (
    //Se coloca un logo a la izquierda, luego las secciones, el carrito y al final el boton hamburguesa que se mostrara cuando se este en modo responsive
    //(cuando el boton hamburguesa es clickeado cambia la clase de las secciones para que se muestren de forma responsive)
    <div className="container">
        <div className="logo">
          <img id="logo" src={logo} alt="Misiotronica"/>
        </div>
        <div className={`navbar ${clicked ? 'active' : '' }`}>
          <a href="/">Home</a>
          <a href="/about">Sobre Nosotros</a>
          <a href="/contact">Contacto</a>
          <a href="/ventas">Ventas</a>
        </div>
        <div id="carrito">
         <Carrito />
        </div>
        <div id="botonn">
         <BotonNav clicked={clicked} handleClick={handleClick} />
       </div>
    </div>
    );
}

export default NavBar;