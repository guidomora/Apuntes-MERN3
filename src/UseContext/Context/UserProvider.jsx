

// El provider se puede crear en el mismo archivo del context, pero para que sea mas 
// prolijo los creamos separados

import { useState } from "react"
import { UserContext } from "./UserContext"

// El provider al ser un high order component tiene como parametro children (sus hijos)

// Al agregarle el .Provider le provee toda la informacion que el context le va a dar a
// todos los componentes

// const user = {
//     id: 123,
//     name: "Guido Morabito",
//     email: "guido@gmail.com",
// }

// const UserProvider = ({children}) => {
//   return (
//     <UserContext.Provider value={{hola: "mundo", user: user}}>
//         {children}
//     </UserContext.Provider>
//   )
// }

// export default UserProvider

// -----------------------------------------------------------------------

// Al ser un functional component podemos usar los hooks


const UserProvider = ({children}) => {

    // Creamos el user y el seter pero estan vacios
    const [user, setUser] = useState()

    // pasamos el user y el seter al context
  return (
    <UserContext.Provider value={{user, setUser}}>
        {children}
    </UserContext.Provider>
  )
}

export default UserProvider