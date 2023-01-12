import React from 'react'
import { Navigate, Route, Routes } from 'react-router-dom'
import HomePage from './HomePage'
import AboutPage from './AboutPage'
import LoginPage from './LoginPage'
import NavBar from './NavBar'
import UserProvider from './Context/UserProvider'

// Routes tiene como hijo Route
// A los route no hace falta ponerle el /
// el /* sirve para cuando se ingresa una ruta que no existe entonces por defecto te manda al componente
// que nosotros pusimos en el Navigate, que tambien borra esa ruta y te pone a donde te dirige


// Componente Link:
// en realidad es una etiqueta <a></a> pero tiene la funcion de que cuando nos manda a otra pag
// no se refresca toda la pagina y evita que se cargue todo de nuevo

// Al envolver todo el componente con el userprovider, todos van a poder acceder
// a la info que este provea

const MainApp = () => {
  return (
    <UserProvider>
      <h1>MainApp</h1>
      <NavBar />
      <hr/>

      <Routes>
        <Route path='/' element={<HomePage />} />
        <Route path='login' element={<LoginPage />} />
        <Route path='about' element={<AboutPage />} />
        <Route path='/*' element={<Navigate to ="about"/>} />
      </Routes>
    </UserProvider>

  )
}

export default MainApp