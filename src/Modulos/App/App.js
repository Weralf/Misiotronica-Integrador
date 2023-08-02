
import './App.css';
import React from 'react';
import Home from '../Paginas/Home/Home';
import NotFound from '../Paginas/404/404';
import Ventas from '../Paginas/Ventas/Ventas';
import SobreNosotros from '../Paginas/SobreNosotros/SobreNosotros';
import Contacto from '../Paginas/Contacto/Contacto';

import { createBrowserRouter, RouterProvider } from 'react-router-dom';

const rutas = createBrowserRouter(
  [
    {path:'/', element:<Home />},
    {path:'/home', element:<Home />},
    {path:'/about', element:<SobreNosotros />},
    {path:'/ventas', element:<Ventas />},
    {path:'/contact', element:<Contacto />},
    {path:'/*', element:<NotFound />},
  ]
);

function App() {
  return (
    <RouterProvider router={rutas} />
  );
}

export default App;
