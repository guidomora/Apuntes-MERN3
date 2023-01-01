import React from "react";
import useFetch from "../hooks/useFetch";
import IsLoading from "./MCH-componentes/IsLoading";
import Quote from "./MCH-componentes/Quote";

// una vez que pasamos el link de la API
// Desestructuramos el custom hook
// Agregamos un condicional para que si carga muestre un mensaje y sino que muestre otro mensaje
// Al llamar la frase y el autor lo hacemos en la posicion 0 porque es donde esta en el array que nos da la API

// Codigo sin optimizar:

// const MultipleCustomHooks = () => {

//   const { data, isLoading, hasError } = useFetch(`https://api.breakingbadquotes.xyz/v1/quotes`)

//   return (
//     <div>
//       <h1>Breaking bad</h1>
//       {isLoading ? <h2 className='alert alert-info text-center'>Cargando...</h2> :
//         <blockquote className='blockquote text-end'>
//           <p className='mb-1'>{data[0].quote}</p>
//           <footer className='blockquote-footer'>{data[0].author}</footer>
//         </blockquote>}
//     </div>
//   )
// }

// export default MultipleCustomHooks

// Codigo optimizado
// Reducimos lineas de codgo creando componentes

const MultipleCustomHooks = () => {
  const { data, isLoading, hasError } = useFetch(
    `https://api.breakingbadquotes.xyz/v1/quotes`
  );

  return (
    <div>
      <h1>Breaking bad</h1>
      {isLoading ? (
        <IsLoading />
      ) : (
        <Quote quote={data[0].quote} author={data[0].author} />
      )}
    </div>
  );
};

export default MultipleCustomHooks;
