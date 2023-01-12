import React from 'react'
import  useForm  from "../../hooks/useForm"

// Usamos el custom hook el useForm

const TodoAdd = ({onNewTodo}) => {

    const { description, inputChange,
        onReset, } = useForm({
            description: "",
        })


    const onFormSubmit = (event) => {
        event.preventDefault();
        if (description.length <= 1) return;

        const newTodo = {
            id: new Date().getTime(),
            description,
            done: false,
        }

        onNewTodo(newTodo),
        onReset()
    }

    return (
        <div>
            <form onSubmit={onFormSubmit}>
                <input
                    type="text"
                    placeholder='que hay que hacer?'
                    className='form-control mt-3'
                    value={description}
                    name="description"
                    onChange={inputChange}
                />
                <button className='btn btn-primary mt-3'>Agregar</button>
            </form>
        </div>
    )
}

export default TodoAdd