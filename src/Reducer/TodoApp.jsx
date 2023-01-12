import React, { useEffect, useReducer } from 'react'
import ListItem from './Components-Todo/ListItem'
import TodoAdd from './Components-Todo/TodoAdd'
import { todoReducer } from './todoReducer'
import useTodos from './Components-Todo/useTodos'


// importamos el todoReducer que creamos en el archivo js y lo ponemos donde iria el reducer
//  el dispatch se va a encargar de despahcar acciones hacia el reducer
// const initialState = []

// init seria la funcion que inicializa al reducer (el tercer argumento) y le pedimos
// que traiga lo que esta en el localStorage y si es nulo devuelve un array vacio
// Tenemos que pasar esta funcion en el useReducer sino obvio que no tiene efecto

// const init = () => {
//     return JSON.parse(localStorage.getItem("todos")) || [];
// }

// const TodoApp = () => {
//     const [todos, dispatch] = useReducer(todoReducer, initialState, init)


// Cuando los todos cambian se vuelve a ejecutar el efecto (se sube al localStorage)

// useEffect(() => {
//     localStorage.setItem("todos", JSON.stringify(todos))
//   }, [todos])

// Creamos la accion que vamos a enviar, le agregamos el type, que tiene que ser
// el mismo que el del switch del todoReducer, el payload va a ser nuestro todo
// para mandarle la accion al reducer uso el dispatch y por supuesto le tengo
// que pasar la accion, en este caso action


// const handleNewTodo = (todo) => {
//     const action = {
//         type: "add todo",
//         payload: todo
//     }
//     dispatch(action)
// }

// Recibimos el id, la accion que despachamos es de tipo "remove todo" y el payload (carga)
// es el id

// const handleDeleteTodo = (id) => {
//     dispatch({
//         type: "remove todo",
//         payload: id
//     })
// }

// const handleToggleTodo = (id) => {
//     dispatch({
//         type: "toggle todo",
//         payload: id
//     })
// }


//     return (
//         <div>
//             <h1>To do App: 10, <small> Pendientes: 2</small></h1>
//             <h3 className='mt-4'>Agregar to do</h3>
//             <TodoAdd 
//             onNewTodo = {handleNewTodo}
//             />
//             <ListItem 
//             todos={todos}
//             onDeleteTodos = {handleDeleteTodo}
//             onToggleTodo = {handleToggleTodo}
//             />
//         </div>
//     )
// }

// export default TodoApp


// Aplicando el custom hook para reducir logica visual y que quede mas sencillo

const TodoApp = () => {

    const { handleDeleteTodo, handleNewTodo, handleToggleTodo, todos, pendingTodosCount, todosCount } = useTodos()

    return (
        <div>
            <h1>To do App: {todosCount}, <small> Pendientes:{pendingTodosCount}</small></h1>
            <h3 className='mt-4'>Agregar to do</h3>
            <TodoAdd
                onNewTodo={handleNewTodo}
            />
            <ListItem
                todos={todos}
                onDeleteTodos={handleDeleteTodo}
                onToggleTodo={handleToggleTodo}
            />
        </div>
    )
}

export default TodoApp