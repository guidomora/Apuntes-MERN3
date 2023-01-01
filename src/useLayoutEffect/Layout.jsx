// Es identico al useEffect pero se dispara de for sincrona (se dispara una vez que cargo todo)
// igualente se recomienda usar el useEffect

// pegamos el codigo del MutipleCustomHooks
// La verdad bastante al pedo este hook, lo deje sin efecto

import React from "react";
import useFetch from "../hooks/useFetch";
import IsLoading from "../Examples/MCH-componentes/IsLoading";
import Quote from "../Examples/MCH-componentes/Quote";

const Layout = () => {
  const { data, isLoading, hasError } = useFetch(
    `https://api.breakingbadquotes.xyz/v1/quotes`
  );

  return (
    <div>
      <h1>Breaking bad</h1>
      {isLoading ? (
        <IsLoading />
      ) : (
        <Quote quote={data[0].quote} author={data[0].author} />
      )}
    </div>
  );
};

export default Layout;
