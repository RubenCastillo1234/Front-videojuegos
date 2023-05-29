import React from 'react';
import "../styles/Inicio.css"
import "../styles/Alumno.css"

export const Imagen = () => {
  return (
    <div class="imagen">
      <h2>.</h2>
      <h2>.</h2>
      <h2>.</h2>
    </div>

  );
};

export const Informacion = () => {
  return (
    <div class="Entrada sombra" >
      <section>
        <p>¿Que información sobre los juegos puedes encontrar en esta página? </p>

        <li>Podrás encontrar información acerca de: </li>
        <li>ID del juego</li>
        <li>Titulo de venta!</li>
        <li>Fecha de lanzamiento</li>
        <li>Descripcion del juego</li>
        <li>Tipo del juego</li>
        <li>Creador del juego</li>
        <li>Personajes del juego</li>
        <li>Enemigos del juego</li>
        <li>Precio del juego</li>
        <li>Musica del juego</li>
        <li>version actual!!</li>
        <li>Comentarios</li>
      </section>
    </div>
  );
}


export const Alumno = () => {
  return (
    <div>
      <div class="my-2 mx-auto p-relative bg-white shadow-1 blue-hover .Carta">
        <div className='TarjetaFoto'>
          <img src="./img/Yo1.jpg" alt="Foto mía"
            class="d-block w-full"></img>
          <h2>
            Nombre del Alumno: <br></br>
            Matricula del Alumno: <br></br>
            Escolaridad: <br></br> 
          </h2>

          <h3>
            Ruben Castillo Ramirez <br></br>
            S20020314 <br></br>
            602 Ingeniería de Software, UV
          </h3>
        </div>

        <div class="px-2 py-2">
          <p class="mb-0 small font-weight-medium text-uppercase mb-1 text-muted lts-2px">
            Trabajo
          </p>

          <h1 class="ff-serif font-weight-normal text-black card-heading mt-0 mb-1 Carta1">
            Página realizada en React para la muestra de información sobre video juegos!
          </h1>

          <p class="mb-1">
            El front puede mostrar los juegos almacenados en una ApiRest de Python con DJango!
          </p>

        </div>

      </div>



      <div class="w-full bg-white py-1 px-2 clearfix Carta2">
        <span class="float-left">
          Red Social Personal:  
          <a href="https://www.facebook.com/profile.php?id=100007134004772" class="styled-link"> Facebook</a>
        </span>
        <span class="float-right">
         <p class="styled-link"> +52 272 259 4250</p>
        </span>
      </div>
    </div>

  )
}