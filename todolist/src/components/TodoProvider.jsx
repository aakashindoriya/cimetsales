import { useReducer } from "react";
import { createContext } from "react";


export const todoContext=createContext()

const initialState={
    todos:JSON.parse(localStorage.getItem("todos"))||[]
}
const reducer =(state,action)=>{
  switch(action.type){
    case "ADD_TODO":
        let temp=[...state.todos,{id:Date.now(),text:action.payload,completed:false}]
        localStorage.setItem("todos",JSON.stringify(temp))
      return{
        ...state,
        todos:temp
      }
    case "DELETE_TODO":
        localStorage.setItem("todos",JSON.stringify(state.todos.filter(todo=>todo.id!==action.payload)))
      return{
        todos:state.todos.filter(todo=>todo.id!==action.payload)
      }
    case "TOGGLE_TODO":
        localStorage.setItem("todos",JSON.stringify(state.todos.map(todo=>todo.id===action.payload? {...todo,completed:!todo.completed}:todo)))
        return{
          todos:state.todos.map(todo=>todo.id===action.payload? {...todo,completed:!todo.completed}:todo)
        }
    default:
      return state
  }
}


export default function TodoProvider({children}){
    let [state,dispatch]=useReducer(reducer,initialState)
    return(
        <todoContext.Provider value={{state,dispatch}}>
            {children}
        </todoContext.Provider>
    )
}