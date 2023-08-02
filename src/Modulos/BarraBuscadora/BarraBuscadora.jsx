import React, { useEffect, useState } from 'react';
import Producto from '../Producto/Producto';
import "./BarraBuscadora.css"

const BarraBuscadora = () => {
  const [busqueda, setBusqueda] = useState('');
  const [resultados, setResultados] = useState([]);

    //Productos
  const productos = [
    { nombre: 'Kit RGB 2835 interior y exterior 5 metros con fuente y control remoto', precio:'$̶3̶.̶5̶0̶5̶  $2205', img:'https://media.discordapp.net/attachments/957130318048010280/1135678527937716254/empty-placeholder.png'},
    { nombre: 'Luz de emergencia de 30 leds Atomlux 2030 LED', precio:'$̶6̶.̶7̶8̶3̶  $4530', img:'https://media.discordapp.net/attachments/957130318048010280/1135679308506091560/empty-placeholder.png'},
    { nombre: 'Zapatilla Electrica Hexagonal 5 tomas + 2 USB cable largo 1,6m', precio:'$̶2̶.̶7̶9̶3̶  $1342', img:'https://media.discordapp.net/attachments/957130318048010280/1135680050692370442/empty-placeholder.png'},
    { nombre: 'Cargador Shure para Patinetas Electricas, Hoverboards 42V 2A', precio:'$̶1̶0̶.̶0̶6̶0̶  $7443', img:'https://media.discordapp.net/attachments/957130318048010280/1135681143971254292/empty-placeholder.png'},
    { nombre:'Bateria de gel 12v 7,5Ah TRV', precio:'$̶1̶0̶.̶7̶7̶3̶  $7684', img:'https://media.discordapp.net/attachments/957130318048010280/1135681718507012166/empty-placeholder.png'},
    { nombre: 'Mini Torno Barovo MT234 con maletin y 234 piezas de 8k a 33krpm', precio:'$22.315', img:'https://media.discordapp.net/attachments/957130318048010280/1135688849855611001/mt234_31-4e13195964c414c71016124637013206-240-0.png'},
    { nombre: 'Parlantes portatil Minion', precio:'$883', img:'https://media.discordapp.net/attachments/957130318048010280/1135686801286234203/parlantes-portatil-minion21-6760347123ded837c116563373688280-240-0.png'},
    { nombre: 'Parlante Inteligente Google Home', precio:'$43.747', img:'https://media.discordapp.net/attachments/957130318048010280/1135686953052950659/parlante-inteligente-google-home-21-6c1878959bcbcd373816115013158301-240-0.png'},
    { nombre: 'Webcam Philips P406B FHD 1080p', precio:'$12.255', img:'https://media.discordapp.net/attachments/957130318048010280/1135687126625824900/spl6406bm_80011-6eed336c1efa3b9ab116841845164255-240-0.png'},
    { nombre: 'Auricular Etheos ABT-N Bluetooth in-ear Negro', precio:'$3.847', img:'https://media.discordapp.net/attachments/957130318048010280/1135687285338296472/abt-n_21-864dfb485d79a3786516196612153113-240-0.png'},
    { nombre: 'Camara de Seguridad Domo Kolke KSE-201', precio:'$6.213', img:'https://media.discordapp.net/attachments/957130318048010280/1135687481480708228/31-124de9ed3095fb725616295578952809-240-0.png'},
    { nombre: 'Lampara velador Tornado multicolor Outlet', precio:'$1.425', img:'https://media.discordapp.net/attachments/957130318048010280/1135687637106171990/2023-07-26_13-03-38_4131-34efadce2072ce1ccf16904034719357-240-0.png'},
    { nombre: 'Soporte articulado de 6 brazos para TV de 26" a 65" Vonne STV6-65', precio:'$21.204', img:'https://media.discordapp.net/attachments/957130318048010280/1135687870473060402/stv6-65-11-b3599689885420a2c916575776863740-240-0.png'},
    { nombre: 'Mouse Pad Razer Firefly V2 RGB', precio:'$39.615', img:'https://media.discordapp.net/attachments/957130318048010280/1135688023212818562/https___hybrismediaprod-blob-core-windows-net_sys-master-phoenix-images-container_h7a_hcd_9081441779742_firefly-v2-gallery-211-36f8f39b98702d539416486454501683-240-0.png'},
    { nombre: 'Cargador Notebook Universal Shure 40w con 8 conectores', precio:'$10.374', img:'https://media.discordapp.net/attachments/957130318048010280/1135688300783489064/cargador-notebook-universal-shure-40w-con-8-conectores1-6082b6473faa1bb2a516408765713508-240-0.png'},
    { nombre: 'Memoria Ram 8Gb DDR4 PNY 3200mhz XLR8 MD8GD4320016XRGB', precio:'$19.693', img:'https://media.discordapp.net/attachments/957130318048010280/1135688484020035674/ddr4-xlr8-desktop-rgb-3200mhz-ra1-19fec4f19aea37f56816021252399047-240-0.png'},
    { nombre: 'Disco Rigido interno WD 1Tb 64mb Sata 3 Red WD10EFRX', precio:'$39.330', img:'https://media.discordapp.net/attachments/957130318048010280/1135688624134963250/disco-rigido-interno-wd-1tb-64mb-sata-3-red-wd10efrx-011-263d791b91c5f3d9f116513291723174-240-0.png'},
    { nombre: 'Adaptador Universal de viaje para enchufes', precio:'$1.795', img:'https://media.discordapp.net/attachments/957130318048010280/1135696431043321938/adaptador-universal-de-viaje-para-enchufes1-f8d57d8b4dd6f9f0b316167587706599-240-0.png'},
    { nombre: 'Mouse Philips G201BS Gaming Usb 1000-6400dpi 8Keys colors light', precio:'$7.609', img:'https://media.discordapp.net/attachments/957130318048010280/1135696599218147328/philips-mouse-gamer-g201-6400dpi-rgb-9-botones1-cf385ec555f6bba3ae16848596750608-240-0.png'},
    { nombre: 'Cable HDMI 2.65m mallado V2,0 4k Ultra HD negro en bolsa', precio:'$1.231', img:'https://media.discordapp.net/attachments/957130318048010280/1135696734182461571/cable-hdmi-3-mallado-v20-4k-ultra-hd-negro-en-bolsa1-03838498011724a55916359690354398-240-0.png'},
    { nombre: 'Cable Kolke Audio y Video Plug 3,5mm macho a 3RCA macho 1,8m', precio:'$458', img:'https://media.discordapp.net/attachments/957130318048010280/1135696961782165514/cable-kolke-audio-y-video-3-rca-a-1-mini-plug-35mm-largo-18m211-35242cc2b2883d634316168714821221-240-0.png'},
    { nombre: 'Pilas AA recargables Energizer 2000mA en blister x2', precio:'$4.354', img:'https://media.discordapp.net/attachments/957130318048010280/1135697190854070323/aa21-fbbe1a8c05079e551915974398840230-640-0.png'},
    { nombre: 'Placa video GeForce RTX 3080 MSI Ventus 3x Plus 10gb OC LHR', precio:'$464.130', img:'https://media.discordapp.net/attachments/957130318048010280/1135697337277239337/71t5wwhtltl-_ac_sl1500_1-167f57cbaa5f8c715116569718087737-240-0.png'},
    { nombre: 'TG-3468 Adaptador de Red PCI Express Gigabit', precio:'$9.547', img:'https://media.discordapp.net/attachments/957130318048010280/1135697486904832030/screenshot_271-22d261fd3436cf5f4716356027551920-240-0.png'},
    { nombre: 'Lampara Led 20w E27 Etheos Fria 6500k Alta potencia LAM20LISFE', precio:'$1.031', img:'https://media.discordapp.net/attachments/957130318048010280/1135697601103151216/lam20lisfe1-a496a92a0b064dbf9b16491400986024-480-0.png'},
    { nombre: 'Tubo de leds T8 18 Watts Luz Fría TUB18FE', precio:'$916', img:'https://media.discordapp.net/attachments/957130318048010280/1135697776802533386/18_4_echaly71-9f9b15f081a8ff276115965838242016-640-0.png'},
    { nombre: 'Bateria 9V Energizer', precio:'$1.174', img:'https://media.discordapp.net/attachments/957130318048010280/1135698103442346108/energizer-max-baterias-9v1-6f43fb756be2365c6516264032226630-480-0.png'},
  ];
  
  //Esto es para que los productos se muestren sin la necesidad de escribir algo apenas se muestra la seccion.
  useEffect(() => {
    setResultados(productos);
  }, []);

    //Se establece el valor de la busqueda (es lo que escribe el usuario)
  const handleInputChange = (event) => {
    const valorBusqueda = event.target.value;
    setBusqueda(valorBusqueda);

    // Se filtran los productos segun el valor de la busqueda
    const resultadosFiltrados = productos.filter((producto) =>
      producto.nombre.toLowerCase().includes(valorBusqueda.toLowerCase())
    );

    setResultados(resultadosFiltrados);
  };

  return (
    //Se renderiza la barra buscadora y debajo de ella un grid en donde se mostraran los resultados de la busqueda.
    <div>
        <div className='busquedacontainer'>
          <input id='inputbusqueda' type="text" value={busqueda} onChange={handleInputChange} placeholder="¿Qué buscas?" />
        </div>

        <div className='ofertas'>
         {resultados.map((producto) => (
          <Producto nombre={producto.nombre} precio={producto.precio} img={producto.img} />
         ))}
        </div>  
    </div>
  );
};

export default BarraBuscadora;