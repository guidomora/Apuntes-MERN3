// En cada vez que el mensaje desaparezca se va a ejecutar "mensaje desmontado"

// const Message = () => {
//     useEffect(() => {
//       console.log("mensaje montado")
    
//       return () => {
//         console.log("mensaje desmontado")
//       }
//     }, [])
    


//   return (
//     <div>
//         <h3>Usuario ya existe</h3>
//     </div>
//   )
// }

// export default Message


// En este caso vemos porque es importante usar la funcion de cleanup en el useEffect
// en la funcion onMouseMove lo que hacemos es desestructurar las coordenadas x y para que cuando le pasemos
// el eventListener la funcion quede mas limpia.
// Hasta ahora lo que estaria pasando es que por cada vez que se monta el mensaje, se guarda un espacio en memoria
// se monta el eventListener pero no se desmonta aunque el mensaje desaparezca
// y cada vez que se monta de nuevo se genera otro eventListener y asi se va llenando la memoria


// const Message = () => {
//     useEffect(() => {
//         const onMouseMove = ({x, y}) => {
//             const coords = {x,y}
//             console.log(coords)
//         }
//         window.addEventListener("mousemove", onMouseMove)
      
    
//       return () => {
//         console.log("mensaje desmontado")
//       }
//     }, [])
    


//   return (
//     <div>
//         <h3>Usuario ya existe</h3>
//     </div>
//   )
// }

// export default Message



// Ahora en la funcion de cleanup en vez de addEventListener usamos removeEventListener
// y cada vez que se desmonte, se remueve e eventListener y su espacio en memoria


import React, { useEffect } from 'react'

const Message = () => {
    useEffect(() => {
        const onMouseMove = ({x, y}) => {
            const coords = {x,y}
            console.log(coords)
        }
        window.addEventListener("mousemove", onMouseMove)
      
    
      return () => {
        window.removeEventListener("mousemove", onMouseMove)
      }
    }, [])
    


  return (
    <div>
        <h3>Usuario ya existe</h3>
    </div>
  )
}

export default Message