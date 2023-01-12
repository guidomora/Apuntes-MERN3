//  Es un archivo js pq no va a retornar jsx
// usualmente se trabaja con un switch
// el throw new error es para cuando no implementamos algo pero queremos seguir avanzando
// asi, no nos olvidamos de que falta eso y no nos da la impresion de que esta funcionando

// export const todoReducer = (initialState = [], action) => {
//     switch (action.type) {
//         case "Add to do":
//             throw new Error("Action.type = ABC no esta implementada");
//         default:
//             return initialState;
//     }
// }

// La accion va a ser de tipo "Add to do" y en el return ponemos el action.payload
// que va a ser el todo que queremos insertar

// export const todoReducer = (initialState = [], action) => {
//     switch (action.type) {
//         case "add todo":
//             return [...initialState, action.payload];
//         default:
//             return initialState;
//     }
// }

// Le agregamos un case nuevo para poder borrar los todos
// filter: traemos todos los todos sean diferentes al todo.id que estoy recibiendo en el payload
// Al cual le mando el id
export const todoReducer = (initialState = [], action) => {
  switch (action.type) {
    case "add todo":
      return [...initialState, action.payload];
    case "remove todo":
      return initialState.filter((todo) => todo.id !== action.payload);
    case "toggle todo":
        // Preguntamos si el id del todo es igual al id que tenemos en nuestra accion (payload)
        // y si es el caso, regresamos un nuevo todo, usamos el spread para esparcir el todo
        // y le modificamos la propiedad done por su contrario    !todo.done
        return initialState.map(todo => {
            if (todo.id === action.payload )
            return {
                ...todo,
                done: !todo.done
            }
            return todo
        })
    default:
      return initialState;
  }
};
