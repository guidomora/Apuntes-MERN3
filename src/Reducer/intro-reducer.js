const initialState = [{
    id:1,
    todo: "recolectar la piedra del alma",
    done: false
}]


// Se pasan 2 argumentos:
// El state y el action (es quien va a decirle al reducer como queremos que cambie el estado)
// el action hay que dejarlo como un objeto vacio ya que en el initialState no le
// estamos mandando nada y eso seria undefined 


const todoReducer = (state= initialState, action = {}) => {

    // si la accion.type es el string ese, se retorna un nuevo estado
    // que es la desestructuracion del state anterior y se le agrega el action.payload
    // basicamente el nuevo todo

    if (action.type === "TODO add todo") {
        return [...state, action.payload]
    }
    return state
}

let todos = todoReducer()

const newTodo = {
    id:2,
    todo: "Recolectar la piedra de la mente",
    done:false
}

// el type es un simple string para saber que accion es la que se disparo
// el payload seria la "carga" que tiene la accion o lo que iria dentro de la accion


const addTodosAction = {
    type: "TODO add todo",
    payload: newTodo,

}

todos = todoReducer(todos, addTodosAction)

console.log(todos)