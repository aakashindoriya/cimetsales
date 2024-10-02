type todo={
    text:string
    completed:boolean
    id:number
}
type TodoListProps={
    todos:todo[]
    toggleStatus:(id:number)=>void
    deleteTodo:(id:number)=>void
}

export const TodosList = ({todos,deleteTodo,toggleStatus}:TodoListProps) => {
  return (
    <div>
      {
        todos.map((todo)=><div key={todo.id}>
            <p>{todo.text}</p>
            <p>status :{todo.completed?"completed":"panding"}</p>
            <button onClick={()=>toggleStatus(todo.id)}>Toggle status</button>
            <button onClick={()=>deleteTodo(todo.id)}>Delete Todo</button>
        </div>)
      }
    </div>
  )
}
