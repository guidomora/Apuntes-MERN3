import React, { useState } from "react";
import useCounter from "../hooks/useCounter";
import Small from "./Small";

// Hacemos el json.stringify de show pq es un booleano, sino no se va a mostrar
// el on click del Show/Hide hace que se muestre el valor contrario del show, 
// ej si esta en true lo asa a false 


// SIN EL MEMO: al hacer click en Show/Hide se volvia a renderizar el componente Small
// no se generaba ningun cambio pero lo volvia a renderizar.


// CON EL MEMO: se memoriza el componente, entonces no se renderiza cada vez que se ejecuta el Show/Hide
// mejora mucho el rendimiento, ero tampoco es obligatorio hacero en todos lados
// ssalvo cuando los componentes son bastante grandes


const Memorize = () => {
  const { counter, incrementar } = useCounter();
  const [show, setShow] = useState(true)

  return (
    <div>
      <h1>
        Counter:
        <Small value={counter} />{" "}
      </h1>
      <button className="btn btn-primary mt-2" onClick={() => incrementar()}>
        {" "}
        + 1
      </button>
      <button className="btn btn-outline-primary mt-2" onClick={() => setShow(!show)}>Show/Hide {JSON.stringify(show)}</button>
    </div>
  );
};

export default Memorize;
