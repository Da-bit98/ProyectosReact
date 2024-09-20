import React from 'react'; //Importa la biblioteca de React al componente
import  '../stylesheets/Experiencia.css';

function Experiencia(props){
  return(
    <div className='contenedor-experiencia'>
      <img className='imagen-empresa' 
      src={require(`../imagenes/${props.imagen}-Logo.png`)} 
      alt='Imagen de Huawei' />
    <div className='contenedor-texto'>
      <p className='nombre-empresa'><strong>{props.empresa}</strong> - {props.locacion}</p>
      <p className='rol-laboral'><u>{props.rol}</u> at <em>{props.departamento}</em></p>
      <p className='texto-experiencia'>{props.testimonio}</p>
    </div>    
    </div>
  );
}

export default Experiencia;
