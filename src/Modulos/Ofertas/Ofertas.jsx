import React from 'react'
import Producto from '../Producto/Producto'
import "./Ofertas.css"

function Ofertas() {

  return (
    <div>
      <div className='tituloofertasinv'>
        <h2>OFERTAS DE INVIERNO</h2>
      </div>
      <div className='containerofertas'>
       <Producto nombre='Kit RGB 2835 interior y exterior 5 metros con fuente y control remoto' precio='$̶3̶.̶5̶0̶5̶  $2205' img='https://media.discordapp.net/attachments/957130318048010280/1135678527937716254/empty-placeholder.png'/>
       <Producto nombre='Luz de emergencia de 30 leds Atomlux 2030 LED' precio='$̶6̶.̶7̶8̶3̶  $4530' img='https://media.discordapp.net/attachments/957130318048010280/1135679308506091560/empty-placeholder.png'/>
       <Producto nombre='Zapatilla Electrica Hexagonal 5 tomas + 2 USB cable largo 1,6m' precio='$̶2̶.̶7̶9̶3̶  $1342' img='https://media.discordapp.net/attachments/957130318048010280/1135680050692370442/empty-placeholder.png'/>
       <Producto nombre='Cargador Shure para Patinetas Electricas, Hoverboards 42V 2A' precio='$̶1̶0̶.̶0̶6̶0̶  $7443' img='https://media.discordapp.net/attachments/957130318048010280/1135681143971254292/empty-placeholder.png'/>
       <Producto nombre='Bateria de gel 12v 7,5Ah TRV' precio='$̶1̶0̶.̶7̶7̶3̶  $7684' img='https://media.discordapp.net/attachments/957130318048010280/1135681718507012166/empty-placeholder.png'/>
      </div>
    </div>
  )
}

export default Ofertas
