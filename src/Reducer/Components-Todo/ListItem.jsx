import React from 'react'
import TodoItem from './TodoItem'

const ListItem = ({ todos =[], onDeleteTodos, onToggleTodo}) => {
    return (
        <ul className='mt-4 list-group '>
            {todos.map(todo => (
                <TodoItem 
                key={todo.id}
                todo={todo}
                onDeleteTodos = {onDeleteTodos}
                onToggleTodo = {onToggleTodo}
                />
            ))}
        </ul>

    )
}

export default ListItem