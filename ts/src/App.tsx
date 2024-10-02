
import { useState } from 'react'
import './App.css'
import { AddTodo } from './components/AddTodo'
import { TodosList } from './components/TodosList'
type todo={
  text:string
  completed:boolean
  id:number
}

function GetLetestArr(): todo[] {
  const stringArr = localStorage.getItem("todos");
  if (stringArr) {
      return JSON.parse(stringArr) as todo[];
  }
  return []
}
function setLetestArr(todos:todo[]){
  localStorage.setItem("todos",JSON.stringify(todos))
}
function App() {
 let [todos,setTodos]=useState<todo[]>(GetLetestArr())
  function addNewTodo(todo:todo){
    setTodos([...todos,todo])
    setLetestArr([...todos,todo])
  }
  function toggleStatus(id:number){
    let toggledArr=todos.map((el)=>el.id===id?{...el,completed:!el.completed}:el)
    setTodos([...toggledArr])
    setLetestArr([...toggledArr])
  }
  function deleteTodo(id:number){
    let deletedArr=todos.filter((el)=>el.id!==id)
    setTodos([...deletedArr])
    setLetestArr([...deletedArr])
  }
  console.log(GetLetestArr())
  return (
    <>
      <div>
        <AddTodo  addNewTodo={addNewTodo} />
        <TodosList todos={todos} toggleStatus={toggleStatus} deleteTodo={deleteTodo}/>
      </div>
       
    </>
  )
}

export default App
