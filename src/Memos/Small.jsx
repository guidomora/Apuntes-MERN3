import React, { memo } from "react";

// el memo le dice a react que memorice el componente, recibe como argumento al componente
// y solo cambia cuando cambian las propiedades

const Small = memo(({ value }) => {

console.log("me volvi a dibujar")

  return <small>{value}</small>;
});

export default Small;
