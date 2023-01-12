import React from 'react'
import { Link, NavLink } from 'react-router-dom'


// El NavLink le permite hacer saber a las clases en que ruta estamos para aplicar alguna clase
// En el navlink tenemos la propiedad isActive que es un booleano y nos dice cuando esta activo o no
// Por eso le pasamos isActive como argumento, una clase por defecto y luego preguntamos si el isActive es true
// que aplique la clase active y sino strign vacio
const NavBar = () => {
    return (
        <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
            <div className="container-fluid">
                <Link to="/" className='m-2 navbar-brand'>UseContext</Link>
                <div className="collapse navbar-collapse" id="navbarNav">
                    <ul className="navbar-nav">
                        <NavLink to="/" className={({ isActive }) => `m-2 nav-link ${isActive ? "active" : ""}`}>Home</NavLink>
                        <NavLink to="/login" className={({ isActive }) => `m-2 nav-link ${isActive ? "active" : ""}`}>Login</NavLink>
                        <NavLink to="/about" className={({ isActive }) => `m-2 nav-link ${isActive ? "active" : ""}`}>About</NavLink>
                    </ul>
                </div>
            </div>
        </nav>
    )
}

export default NavBar


'm-2 nav-link'