import React, { useState, useMemo } from "react";
import useCounter from "../hooks/useCounter";


// El useMemo tiene una estructura parecida a la del useEffect
// El useMemo va a memorizar lo que sea que retorne
// El valor que memoriza solo cambia si las dependencias cambian ( como el useEffect lo que esta entre [])

// Caso explicado: el useMemo va a memorizar siempre el valor del counter (1500)
// entonces al tocar el boton de show/hide no se va a renderizar
// solo se renderiza al aumentar el valor del contador, pq se le esta modificando
// lo que pasamos como dependencia que seria el contador tambien
// En este caso la dependencia siempre se actualiza entonces al sumar al contador
// se vuelve a renderizar todo de nuevo

const heavyStuff = (iterationNumber = 100) => {
    for (let i = 0; i < iterationNumber; ++i) {
        console.log("ahi vamos...")
    }
    return `${iterationNumber} iteraciones realizadas`
}

const MemoHook = () => {
    const { counter, incrementar } = useCounter(1500);
    const [show, setShow] = useState(true)

    const memorizedValue = useMemo(() => heavyStuff(counter), [counter])
  
    return (
      <div>
        <h1>
          Counter: {counter}
        </h1>
        <h2>{memorizedValue}</h2>
        <button className="btn btn-primary mt-2" onClick={() => incrementar()}>
          {" "}
          + 1
        </button>
        <button className="btn btn-outline-primary mt-2" onClick={() => setShow(!show)}>Show/Hide {JSON.stringify(show)}</button>
      </div>
    );
  };
  
  export default MemoHook;
  