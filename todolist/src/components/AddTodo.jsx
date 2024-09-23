import React, { useContext, useState } from 'react'
import { todoContext } from './TodoProvider'

export const AddTodo = () => {
    let {state,dispatch}=useContext(todoContext)
    let [todoText,handleTodoText]=useState("")
    console.log(state)
  return (
    <div>
        <input value={todoText} placeholder='enter tasks' onChange={(e)=>handleTodoText(e.target.value)}  />
        <button onClick={()=>{
            dispatch({type:'ADD_TODO',payload:todoText})
            handleTodoText("")
        }}>Add Todo</button>
    </div>
  )
}
