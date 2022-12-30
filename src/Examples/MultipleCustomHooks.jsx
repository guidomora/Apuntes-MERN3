import React from 'react'
import useFetch from '../hooks/useFetch'



// una vez que pasamos el link de la API
// Desestructuramos el custom hook

const MultipleCustomHooks = () => {
const {data, isLoading, hasError} =useFetch("https://www.breakingbadapi.com/api")

  return (
    <div>
        <h1>Breaking bad</h1>
    </div>
  )
}

export default MultipleCustomHooks