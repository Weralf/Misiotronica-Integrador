import React from 'react'
import "./Footer.css"

function Footer() {
  // Cree 3 partes del footer, top, mid y bottom, en top van las redes sociales, en mid info de la empresa y en bottom el copyrigth.
  return (
      <footer>
      {<div className='footer'>
        <div className='topfooter'>
         <a href="https://www.instagram.com/misiotronica/" target="_blank" rel="noopener noreferrer" >
         <img src="https://media.discordapp.net/attachments/662547354859077633/1132468047291105300/image.png" alt="instagram" />   
         </a>
         <a href="https://www.facebook.com/leomessi" target="_blank" rel="noopener noreferrer" >
         <img src="https://media.discordapp.net/attachments/662547354859077633/1132467905108389968/image.png" alt="facebook" />
         </a>
         <a href="https://discord.gg/vVQb9rMFQk" target="_blank" rel="noopener noreferrer" >
         <img src="https://media.discordapp.net/attachments/662547354859077633/1132467200339488819/image.png" alt="discord" />
         </a>
        </div>
        <article id='midfooter' >
          <p>Empresa: Misiotrónica  |  Dirección: Lavalle 295, Ciudad, Mendoza. Argentina  |  Email: misiotrónica@hotmail.com</p>
          <p>Teléfono: (+54-261) 4230010 / 4292334 Whatsapp (261) 6536525  |  Horario: Lun-Vie 9:00hs - 18:30hs. Sab 9:00hs-13:15hs</p>
        </article>
        <div className='bottomfooter'>
         <p id='copyright'>Copyrigth Misiotrónica 2023.  Todos los derechos reservados.</p>
         <p>Powered by Weralf</p>
        </div>
      </div>}
     </footer>
  )
}

export default Footer
