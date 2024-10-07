import { useSelector } from "react-redux"
import SingleTodo from "./SingleTodo"

const TodoList = () => {
    const {todo} =useSelector((store)=>store.todos)
    return (
        <div className="todo-list">
            {
                todo.length > 0 ? (
                    todo.map((item) => (
                        <SingleTodo key={item.id} {...item} />
                    ))
                ) : (
                    <p className="no-todo">No tasks available!</p>
                )
            }
        </div>
    )
}

export default TodoList
