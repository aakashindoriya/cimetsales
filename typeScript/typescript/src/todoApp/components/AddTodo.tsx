import { useState } from "react"
type addTodoProps={
    handleTodo:(todo:string)=>void
}
const AddTodo = ({handleTodo}:addTodoProps) => {
    let [todo,setTodo]=useState("")
    const handleAddTodo=()=>{
        handleTodo(todo)
        setTodo("")
    }
  return (
    <div>
        <input placeholder="type your task" value={todo}  onChange={(e)=>setTodo(e.target.value)} />
        <button onClick={handleAddTodo}>Add</button>
    </div>
  )
}

export default AddTodo