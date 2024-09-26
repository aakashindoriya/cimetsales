type TodoItem={
    text:string
    completed:boolean
    id:string
}
type ListProp={
    toggleTodo:(id:string)=>void
    deleteTodo:(id:string)=>void
    todos:TodoItem[]
}
export const List = ({toggleTodo,deleteTodo,todos}:ListProp) => {
  return (
    <div>
        <ul>
            {todos.map(todo => (
                <li key={todo.id}>
                    <input type="checkbox" checked={todo.completed} onChange={()=>toggleTodo(todo.id)}/>
                    {todo.text}
                    <button onClick={()=>deleteTodo(todo.id)}>Delete</button>
                </li>
            ))}
        </ul>
        <button>Add Todo</button>
    </div>
  )
}
