import React from 'react';
import '../css/Actividad.css';

function Actividad(props) {
  return (
    <div className='contenedor-testimonio'>
      <img 
        className='imagen-testimonio' 
        src= { require(`../imagenes/${props.imagen}-logo.jpg`) }
        alt= 'Foto de Colaborador'
      />

      <div className='contendor-texto-testimonio'>
        <p className='nombre-testimonio'>
          <strong>{props.nombre}</strong> en <i>{props.pais}</i>
        </p>
        <p className='cargo-testimonio'>
          <bold>{props.cargo}</bold> en {props.empresa}</p>
        <p className='texto-testimonio'>"{props.testimonio}"</p>
      </div>
    </div>
  );
}

export default Actividad;