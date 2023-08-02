import React from 'react'
import NavBar from '../../NavBar/NavBar'
import "./Home.css"
import Ofertas from '../../Ofertas/Ofertas'
import Footer from '../../Footer/Footer'
import Destacados from '../../Destacados/Destacados'
import Beneficios from '../../Beneficios/Beneficios'

function Home() {
  return (
    // Varios componentes y 2 divs que muestran un titulo y 2 imagenes, no ameritaban todo un componente, a mi forma de pensar.
    <div className='containerhome'>
      <NavBar />
      <div className='bienvenida'>
        <h2>MISIOTRÓNICA</h2>
      </div>
      <div className='imagenesinvierno'>
        <img src="https://media.discordapp.net/attachments/957130318048010280/1135703263635837020/chollos-top-40-ofertas-20-en-electronica-un-inverno-oportunidades-el-corte-ingles.png?width=1288&height=676" alt="Loading" />
        <img src="https://media.discordapp.net/attachments/957130318048010280/1135706952501035181/Rebajas-de-invierno.png" alt="Loading" />
      </div>
      <Ofertas />
      <Destacados />
      <Beneficios />
      <Footer />
    </div>
  )
}

export default Home
