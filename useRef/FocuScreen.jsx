import React, { useRef } from "react";

// Para pasarle al ref el elemento html usamos la propiedad ref y le ponemos el nombre de la constante

// en la funcion le pasamos current para hacer referencia al valor actual seleccionado
// y select para que lo seleccione

// Esto hace que al hacer click en el boton se seleccione el texto dentro
// del input y podamos modificarlo

const FocuScreen = () => {
  const inputRef = useRef();

  const onClick = () => {
    inputRef.current.select()
  }
  return (
    <div>
      <input
      ref={inputRef}
        placeholder="Ingrese su nombre"
        type={"text"}
        className="form-control"
      />
      <button className="btn btn-primary mt-2" onClick={onClick} >Set focus</button>
    </div>
  );
};

export default FocuScreen;
