import '../styles/Navbar.css';

import { Navbar, Container, Nav, NavDropdown, Button } from 'react-bootstrap';
import { NavLink, Link } from 'react-router-dom';

export default function Contacto() {
    return (
        <nav>
        <Navbar bg="dark" variant="dark" expand="lg" fixed="top">
          <Container fluid>
            <Navbar.Brand href="/">
              <img
                alt=""
                src= { require('../imagenes/logo.svg') }
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
                <Nav.Link> 
                  <NavLink 
                    className={({ isActive}) => (isActive ? "active" : "disactive")} 
                    to="/corporativo"
                  >
                    Corporativo
                  </NavLink> 
                </Nav.Link>
                <NavDropdown title="UDN" id="navbarScrollingDropdown">
                  <NavDropdown.Item><Link to="/celula-1">Célula 1</Link></NavDropdown.Item>
                  <NavDropdown.Item><Link to="/celula-2">Célula 2</Link></NavDropdown.Item>
                  <NavDropdown.Item><Link to="/celula-3">Célula 3</Link></NavDropdown.Item>
                  <NavDropdown.Item><Link to="/celula-4">Célula 4</Link></NavDropdown.Item>
                  <NavDropdown.Item><Link to="/celula-5">Célula 5</Link></NavDropdown.Item>
                  <NavDropdown.Divider />
                  <NavDropdown.Item>
                    <Link to='/celula-m/'>Mantenimiento</Link>
                  </NavDropdown.Item>
                </NavDropdown>
                <Nav.Link>
                  <NavLink 
                    className={({ isActive}) => (isActive ? "active" : "disactive")} 
                    to="/contacto"
                  >
                    Contacto
                  </NavLink> 
                </Nav.Link>
                <Nav.Link>
                  <NavLink 
                    className={({ isActive}) => (isActive ? "active" : "disactive")} 
                    to="/acerca-de"
                  >
                    Acerca de
                  </NavLink> 
                </Nav.Link>
              </Nav>
              
              <Button variant="outline-success">Iniciar sesión</Button>
              <Button variant="outline-primary">Registrarse</Button>
            </Navbar.Collapse>
          </Container>
        </Navbar>
      </nav>
    );
}