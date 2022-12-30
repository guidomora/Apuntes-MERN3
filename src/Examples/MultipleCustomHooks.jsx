import React from 'react'
import useFetch from '../hooks/useFetch'



// una vez que pasamos el link de la API
// Desestructuramos el custom hook
// Agregamos un condicional para que si carga muestre un mensaje y sino que muestre otro mensaje
// Al llamar la frase y el autor lo hacemos en la posicion 0 porque es donde esta en el array que nos da la API


const MultipleCustomHooks = () => {
  const { data, isLoading, hasError } = useFetch("https://api.breakingbadquotes.xyz/v1/quotes")

  console.log(data)

  // const {author, quote} = !!data & data[0]
  return (
    <div>
      <h1>Breaking bad</h1>
      {isLoading ? <h2 className='alert alert-info text-center'>Cargando...</h2> :
        <blockquote className='blockquote text-end'>
          <p className='mb-1'>{data[0].quote}</p>
          <footer className='blockquote-footer'>{data[0].author}</footer>
        </blockquote>}
    </div>
  )
}

export default MultipleCustomHooks