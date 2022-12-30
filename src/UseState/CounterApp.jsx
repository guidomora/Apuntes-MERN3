// Contador comun
// const CounterApp = () => {
//     const [counter, setCounter] = useState(10)
//   return (
//     <div>
//         <h1>Counter: {counter}</h1>
//         <button className='btn' onClick={() => setCounter( counter + 1)} >1+</button>
//     </div>
//   )
// }

// export default CounterApp


// En el caso de que tengamos varios counter y solo querramos modificar el primero por ej
// Desestructuramos counter: const { counter1, counter2, counter3 } = counter
// Luego en la parte del boton usamos el spread para devolcer una copia, pero solo se modifica el counter1



import React, { useState } from 'react'

const CounterApp = () => {
    const [counter, setCounter] = useState({
        counter1: 10,
        counter2: 20,
        counter3: 30
    })

    const { counter1, counter2, counter3 } = counter
    return (
        <div>
            <h1>Counter1: {counter1}</h1>
            <h1>Counter2: {counter2}</h1>
            <h1>Counter3: {counter3}</h1>
            <button className='btn' onClick={() => setCounter({
                ...counter,
                counter1: counter1 +1
            })
                } >1+</button>
        </div>
    )
}

export default CounterApp