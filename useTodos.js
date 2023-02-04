import { useEffect, useReducer } from "react";
import { todoReducer } from "../08-useReducer/todoReducer";

const initialState = [
    // {
    //     id: new Date().getTime(),
    //     description: 'Recolectar la Piedra del Alma',
    //     done: false,
    // },
    // {
    //     id: new Date().getTime() * 3,
    //     description: 'Recolectar la Piedra del Tiempo',
    //     done: false,
    // },
    
]

const init = () => {
    // para recuperar los TODOS del LocalStorage
    return JSON.parse( localStorage.getItem('todos')) || [];
}

export const useTodos = () => {

  
    const [ todos, dispatch ] = useReducer( todoReducer, initialState, init );

    useEffect(() => {
      // console.log(todos);
      // para Grabar los TODOS en el LocalStorage
      localStorage.setItem('todos', JSON.stringify( todos) );
    }, [todos]);
    

    const handleNewTodo = ( todo ) => {
        // console.log({ todo });
        const action = {
            type: '[TODO] Add Todo',
            payload: todo
        }

        dispatch( action );
    };

    const handleDeleteTodo = ( id ) => {
        //console.log({ id });
        dispatch({
            type: '[TODO] Remove Todo',
            payload: id,
        });
    };
    
    const handleToggleTodo = ( id ) => {
        console.log({ id });
        dispatch({
            type: '[TODO] Toggle Todo',
            payload: id,
        });
    };
    const todosCount = todos.length ;
    const pendingTodosCount = todos.filter( todos => !todos.done ).length;

    return {
        todos,
        handleNewTodo,
        handleDeleteTodo,
        handleToggleTodo,
        todosCount,
        pendingTodosCount,
    }
  
     




  
}
