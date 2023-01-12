import React from 'react'

const TodoItem = ({ todo, onDeleteTodos, onToggleTodo }) => {

    return (
        <li className='list-group-item'>
            <span onClick={() => onToggleTodo(todo.id)}  className={todo.done ? "text-decoration-line-through" : null}>
                {todo.description}
            </span>
            <button className='btn btn-danger w-15' onClick={() => onDeleteTodos(todo.id)}>Borrar</button>
        </li>
    )
}

export default TodoItem


// El if para poder subrayar puede ser de otra forma, si ya tengo una clase y no esta vacia como arriba:
// className={`nombre de una clase ${todo.done ? "text-decoration-line-through" : ""}`}