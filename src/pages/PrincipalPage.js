import { useNavigate } from 'react-router-dom';
import { Button } from 'react-bootstrap';

export default function Principal() {
  const navigate = useNavigate();
  const handerClick = () => {
    navigate('/acerca-de');
  }
  return (
      <main className="App">
      <div className='contenedor-principal'>
        <h1>Sistema Gestor de Equipos Ágiles</h1>
        <div className='contenedor-testimonio'>
          <img 
            className='imagen-testimonio' 
            src= { require('../imagenes/vans-logo.jpg') }
            alt= 'Foto de Colaborador'
          />

          <div className='contendor-texto-testimonio'>
            <p className='nombre-testimonio'>BALAM CODE MX, S.A. DE C.V. </p>
            <p className='cargo-testimonio'>Copyright © 2019 CodersPST</p>
            <p className='texto-testimonio'> 22/01/2011</p>
            <Button variant="outline-primary" size="lg" onClick={ handerClick }>Iniciar sesión</Button>
          </div>
        </div>
      </div>
    </main>
  );
}