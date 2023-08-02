import React from 'react'
import NavBar from '../../NavBar/NavBar'
import "./SobreNosotros.css"
import Footer from '../../Footer/Footer'
import FSN from '../../FormatoSobreNosotros/FSN'

function SobreNosotros() {
  return (
    <div className='containersobrenosotros'>
     <NavBar />
     <FSN titulo='Sobre Nosotros' img='https://media.discordapp.net/attachments/957130318048010280/1133613265189097563/pexels-photo-6169636.png?width=426&height=675' />
     <FSN titulo='Misiotrónica esta creciendo' img='https://media.discordapp.net/attachments/957130318048010280/1134390370474672129/pexels-photo-6169668.png?width=1014&height=676' />
     <FSN titulo='Misiotrónica quiere calidad' img='https://media.discordapp.net/attachments/957130318048010280/1134390611915571280/pexels-photo-3825584.png?width=483&height=676' />
     <Footer />
    </div>
  )
}

export default SobreNosotros
