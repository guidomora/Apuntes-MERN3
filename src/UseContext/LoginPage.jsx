import React, { useContext } from 'react'
import { UserContext } from './Context/UserContext'

const LoginPage = () => {


  // Como extraemos la informacion del context:
  // constante {desestructuramos lo que queremos traer} = hook useContext(nuestro componente de context)

  const { user, setUser } = useContext(UserContext);

  return (
    <div>
      <h1>LoginPage</h1>
      <p>{JSON.stringify(user)}</p>



      {/* Al tocar este boton se carga el usuario, ya que le pasamos las propiedades mediante el seter
      que obtuvimos del context */}
      <button className='btn btn-primary'
        onClick={() => setUser({ id: 123, name: "Guido", mail: "guido@gmail.com" })}>
        Set user
      </button>
    </div>

  )
}

export default LoginPage