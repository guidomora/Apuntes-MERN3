// Aplicamos un custom hook para no tener que volver a implementar toda la logica del counter de nuevo desde 0
// cuando creamos la constante para llamar al custom hook lo que envuelve en este caso al counter,
// son corchetes pq en el return del hook lo pusimos con corchetes (un objeto)n en caso
// de que sea con un array hanria que ponerlo con []
// para incorporar la funciones del CH (customHook) las agregamos a la desestruturacion
// de la constante y las mandamos con el onclick

// const CounterWithCustomHook = () => {
//     const {counter, incrementar, decrementar, reset} = useCounter()


//     return (
//         <div>
//             <h1>Counter with Hook: {counter}</h1>
//             <button className='btn btn-primary' onClick={incrementar}> + 1</button>
//             <button className='btn btn-primary' onClick={reset}> Reset</button>
//             <button className='btn btn-primary' onClick={decrementar}> - 1</button>
//         </div>
//     )
// }

// export default CounterWithCustomHook




// Aca le pasamos el valor de value a las funciones para dec/incrementar, al tener un parametro
// el onClick hayq eue escribirlo como una funcion flecha y pasarle el valor

import React from 'react'
import useCounter from './hooks/useCounter'

const CounterWithCustomHook = () => {
    const {counter, incrementar, decrementar, reset} = useCounter()


    return (
        <div>
            <h1>Counter with Hook: {counter}</h1>
            <button className='btn btn-primary' onClick={() =>incrementar(4)}> + 1</button>
            <button className='btn btn-primary' onClick={reset}> Reset</button>
            <button className='btn btn-primary' onClick={()=> decrementar(2)}> - 1</button>
        </div>
    )
}

export default CounterWithCustomHook