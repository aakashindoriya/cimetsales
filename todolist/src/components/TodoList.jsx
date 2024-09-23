import React, { useContext } from 'react'
import { todoContext } from './TodoProvider'

export const TodoList = () => {
    let {state,dispatch}=useContext(todoContext)
  return (
    <>
    {
        state.todos.map((todo)=>
        <div>
            <h2>{todo.text}</h2>
            <p>{todo.completed?"task completed":"task panding"}</p>
            <button onClick={()=>dispatch({type:'DELETE_TODO',payload:todo.id})}>Delete</button>
            <button onClick={()=>dispatch({type:'TOGGLE_TODO',payload:todo.id})}>Toggle</button>
            <hr/>
        </div>
    )
    }
    </>
  )
}
