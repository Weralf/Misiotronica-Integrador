
import React from 'react'
import NavBar from '../../NavBar/NavBar'
import "./Ventas.css"
import Footer from '../../Footer/Footer'
import BarraBusqueda from '../../BarraBuscadora/BarraBuscadora'

function Ventas() {
  return (
    // La barra de busqueda organiza todos los productos en la pagina por si misma.
    <div>
      <NavBar />
      <div className='ventastitulo'>
        <h1>PRODUCTOS A LA VENTA</h1>
      </div>
      <BarraBusqueda />
      <div className='imagenesinvierno'>
        <img src="https://media.discordapp.net/attachments/957130318048010280/1135703263635837020/chollos-top-40-ofertas-20-en-electronica-un-inverno-oportunidades-el-corte-ingles.png?width=1288&height=676" alt="Loading" />
        <img src="https://media.discordapp.net/attachments/957130318048010280/1135706952501035181/Rebajas-de-invierno.png" alt="Loading" />
      </div>
      <Footer />
    </div>
  )
}

export default Ventas
