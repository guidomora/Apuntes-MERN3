import React, { useState, useCallback } from 'react'
import ShowIncrement from './ShowIncrement'


// Aplicando el useCallback
// Es parecido al useMemo pero nos sirve para memorizar funciones y lo que regresa es una funcion
// memorizada y que solo se va a volver ejecutar cuando algo cambia
// La estructura es como la del useEffect y el useMemo
// useCallback(
//     () => {
//       Callback que vamos a querer ejecutar
//     },
//     [dependencias],
//   )

// En vez de en el callback poner setCounter(counter + 1)
// ponemos de la otra forma


// const CallBackHook = () => {
//     const [counter, setCounter] = useState(10)

//     const Incrementar = useCallback(
//         () => {
//             setCounter((value) => value + 1)
//         },
//         [],
//     )

//     return (
//         <div>
//             <h1>CallBackHook: {counter}</h1>
//             <ShowIncrement increment={Incrementar} />
//         </div>
//     )
// }

// export default CallBackHook


// useCallback con Argumento:

// value seria el argumento que va a pasar en ShowIncrement (en este caso 5)
// Se pueden pasar varios argumentos, objetos  y desestructurarlos tambien
const CallBackHook = () => {
    const [counter, setCounter] = useState(10)

    const Incrementar = useCallback(
        (value) => {
            setCounter((c) => c + value)
        },
        [],
    )

    return (
        <div>
            <h1>CallBackHook: {counter}</h1>
            <ShowIncrement increment={Incrementar} />
        </div>
    )
}

export default CallBackHook