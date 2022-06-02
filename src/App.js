import React from 'react';
import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { Navbar, Container, Nav, NavDropdown, Button } from 'react-bootstrap';
import Principal from './pages/Corporativo';
import Corporativo from './pages/Corporativo';
import UDN from './pages/UDN';
import Contacto from './pages/Contacto';
import AcercaDe from './pages/AcercaDe';
import Actividad from './componentes/Actividad';

function App() {
  return (
    <BrowserRouter>
      <nav>
        <Navbar bg="dark" variant="dark" expand="lg" fixed="top">
          <Container fluid>
            <Navbar.Brand href="#home">
              <img
                alt=""
                src= { require('./imagenes/logo.svg') }
                width="35"
                height="35"
                className="d-inline-block align-top"
              />{' '}
              SGEA
            </Navbar.Brand>
            <Navbar.Toggle aria-controls="navbarScroll" />
            <Navbar.Collapse id="navbarScroll">
              <Nav
                className="me-auto my-2 my-lg-0"
                style={{ maxHeight: '100px' }}
                navbarScroll
              >
                <Nav.Link href="/corporativo">Corporativo</Nav.Link>
                <NavDropdown title="UDN" id="navbarScrollingDropdown" disabled>
                  <NavDropdown.Item href="#action3">Célula 1</NavDropdown.Item>
                  <NavDropdown.Item href="#action4">Célula 2</NavDropdown.Item>
                  <NavDropdown.Item href="#action3">Célula 3</NavDropdown.Item>
                  <NavDropdown.Item href="#action4">Célula 4</NavDropdown.Item>
                  <NavDropdown.Item href="#action3">Célula 5</NavDropdown.Item>
                  <NavDropdown.Divider />
                  <NavDropdown.Item href="/udn">
                    Mantenimiento
                  </NavDropdown.Item>
                </NavDropdown>
                <Nav.Link href="/contacto">Contacto</Nav.Link>
                <Nav.Link href="/acerca-de">Acerca de</Nav.Link>
              </Nav>
              
              <Button variant="outline-success">Iniciar sesión</Button>
              <Button variant="outline-primary">Registrarse</Button>
            </Navbar.Collapse>
          </Container>
        </Navbar>
      </nav>

      <Routes>
        <Route path='/' element={ <Principal /> } />
        <Route path='/corporativo' element={ <Corporativo /> } />
        <Route path='/udn' element={ <UDN /> } />
        <Route path='/contacto' element={ <Contacto /> } />
        <Route path='/acerca-de' element={ <AcercaDe /> } />
      </Routes>
      
      <main className="App">
        <div className='contenedor-principal'>
          <h1>Sistema Gestor de Equipos Ágiles</h1>
          <div className='contenedor-testimonio'>
            <img 
              className='imagen-testimonio' 
              src= { require('./imagenes/vans-logo.jpg') }
              alt= 'Foto de Colaborador'
            />

            <div className='contendor-texto-testimonio'>
              <p className='nombre-testimonio'>BALAM CODE MX, S.A. DE C.V. </p>
              <p className='cargo-testimonio'>Copyright © 2019 CodersPST</p>
              <p className='texto-testimonio'> 22/01/2011</p>
              <Button variant="outline-primary" size="lg">Iniciar sesión</Button>
            </div>
          </div>
        </div>
      </main>

      <footer>
      </footer>
    </BrowserRouter>
  );
}

export default App;
