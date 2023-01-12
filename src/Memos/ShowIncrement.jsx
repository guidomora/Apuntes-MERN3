import React from 'react'


// No se puiede usar el useMemo ya que siempre va a recibir un valor diferente y va a ocupar un espacio
// en memoria diferente, por eso vamos a usar el useCallback y el memo solo

const ShowIncrement = React.memo(({increment}) => {
console.log("me volvi a generar")

  return (
    <button className='btn btn-primary' onClick={() => {increment(5)}}>Incrementar</button>
  )
})

export default ShowIncrement