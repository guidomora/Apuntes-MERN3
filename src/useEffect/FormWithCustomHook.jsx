// llamo al useForm con el inputChange y los valores

import React, { useEffect, useState } from 'react'
import useForm from '../hooks/useForm'

const FormWithCustomHook = () => {
    const { inputChange, username, password, email, onReset } = useForm({
        username: "",
        email: "",
        password: ""
    })

    return (
        <div>
            <h1>Formulario con custom hook</h1>
            <input
                type="text"
                className="form-control"
                placeholder="Username"
                name="username"
                value={username}
                onChange={inputChange}
            />
            <input
                type="email"
                className="form-control mt-2"
                placeholder="email"
                name="email"
                value={email}
                onChange={inputChange}
            />
            <input
                type="password"
                className="form-control mt-2"
                placeholder="password"
                name="password"
                value={password}
                onChange={inputChange}
            />
            <button className='btn btn-primary mt-2' onClick={onReset} >Reset</button>
        </div>
    )
}

export default FormWithCustomHook