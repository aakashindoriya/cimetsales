import { useState } from "react"
import AddTodo from "./components/AddTodo"
type todo={
  id: number,
  text: string,
  completed: boolean
}

export const App = () => {
  let [todos,setTodos]=useState<todo[]>([])
  let addTodo=(text:string) => {
    setTodos([...todos,{text,id:Date.now(),completed:false}])
  }
  return (
    <div>
      <AddTodo handleTodo={addTodo}/>
    </div>
  )
}
