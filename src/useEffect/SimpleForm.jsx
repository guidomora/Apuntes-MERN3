// Desestructuramos el username y el email const {username, email} = formState
// y los pasamos como value

// InputChange: desestructuramos el target (dentro de el esta el name y el value)
// a nosotros nos interesan esos 2 por eso los llamamos nada mas
//  --- Para cambiar el estado llamamos al seter y dentro usamos el spread operator con el formState
// para mantener todos los valores del formulario, pero solo vamos a cambiar el valor de name
// por eso llamamos a name entre llaves cuadradas y le decimos que el valor va a ser el nueva value


// useEffect: cada vez que no tenga la dependencia ( el [] al final), se va a ejecutar
// cada vez que se realice un cambio en la app (se recomienda opner siempre la dependencia)
// ya que solo se dispara cuando se monta (se renderiza)
// cuando hay muichos efectos se recomienda usar un useEffect por cada uno
// Si queremos que solo se ejecute cuando cambia solo el mail por ejemplo:
// useEffect(() => {
//     console.log("formState cambiado email")
// }, [email])

// useEffect(() => {
//     El cuerpo de la funcion
  
//     return () => {
//       funcion de cleanup/limpieza 
//     }
//   }, [dependencia])


import React, { useEffect, useState } from 'react'
import Message from './Message'

const SimpleForm = () => {
    const [formState, setFormState] = useState({
        username: "guido",
        email:"guido@mail.com"
    })

    const {username, email} = formState

    const inputChange = ({target}) => {
        const {name, value} = target;
        setFormState({
            ...formState,
            [name]: value
        })
    }

  return (
    <div>
        <h1>SimpleForm</h1>
        <input 
        type="text"
        className ="form-control"
        placeholder="Username"
        name="username"
        value={username}
        onChange={inputChange}
        />
        <input 
        type="email"
        className ="form-control mt-2"
        placeholder="email"
        name="email"
        value={email}
        onChange={inputChange}
        />
        {username === "guido2" ? <Message /> : null}
    </div>
  )
}

export default SimpleForm