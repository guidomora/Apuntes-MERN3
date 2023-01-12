import React, { useContext } from 'react'
import { UserContext } from './Context/UserContext'

const HomePage = () => {


  // Mismo metodo para llamarlo en otro componente
  const { user } = useContext(UserContext)

  return (
    <div>
      {/* el ? seria como un ternario en el que preguntamos si existe el user que retorne el name */}
      <h1>HomePage <small>{user?.name}</small></h1>

      <p>{JSON.stringify(user)}</p>
    </div>
  )
}

export default HomePage