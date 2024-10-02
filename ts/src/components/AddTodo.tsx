import { useState } from "react"

type todo={
    text:string
    completed:boolean
    id:number
}
type AddTodoProps={
    addNewTodo:(todo:todo)=>void
}
export const AddTodo = ({addNewTodo}:AddTodoProps) => {
    let [text,setText]=useState("")
    
  return (
    <div>
    <input value={text} placeholder="add new task" onChange={(e)=>{setText(e.target.value)}} />
    <button onClick={()=>{
      addNewTodo({text,id:Date.now(),completed:false})
      setText("")
    }}>add todo</button>
    </div>
  )
}
