import React from 'react';
import './App.css';
import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom';

import Navbar from './sections/Navbar';

import Principal from './pages/PrincipalPage';
import Corporativo from './pages/CorporativoPage';
import UDN from './pages/UDNPage';
import Contacto from './pages/ContactoPage';
import AcercaDe from './pages/AcercaDePage';
import NotFound from './pages/NotFoundPage';
import Actividad from './componentes/Actividad';
import Colaborador from './pages/Colaborador';

function App() {
  return (
    <BrowserRouter>
      < Navbar />

      <Routes>
        <Route path='/' element={ <Principal /> } />
        <Route path='/corporativo/*' element={ <Corporativo /> }>
          <Route path='main' element={<p>Welcome!</p>}></Route>
        </Route>
        <Route path='/udn/:id' element={ <Colaborador /> } />
        <Route path='/contacto' element={ <Contacto /> } />
        <Route path='/acerca-de' element={ <AcercaDe /> } />
        <Route path='/salida' element={ <Navigate replace to="/" /> } />
        <Route path='*' element={ <NotFound /> } />
      </Routes>
      
      <footer>
      </footer>
    </BrowserRouter>
  );
}

export default App;
