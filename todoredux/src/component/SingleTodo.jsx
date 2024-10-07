import { useDispatch, useSelector } from "react-redux"
import { deleteTodo, setEdit, toggleTodo } from "../redux/slices/todoSlice"

const SingleTodo = ({text,isCompleted,id}) => {
    const dispatch=useDispatch()
    const {isEditable} =useSelector(s=>s.todos)
    
    function handleEdit(){
        dispatch(setEdit({id,text}))
    }
    
    function handleDelete(){
        dispatch(deleteTodo(id))
    }
    
    function handleToggle(){
        dispatch(toggleTodo(id))
    }

    return (
      <div className="todo-item">
        <div className="todo-details">
          <input 
            type="checkbox" 
            className="todo-checkbox" 
            checked={isCompleted} 
            onChange={handleToggle} 
          />
          <span className={`todo-text ${isCompleted ? 'completed' : ''}`}>{text}</span>
        </div>
        <div className="todo-actions">
          <button 
            className="btn-edit" 
            onClick={handleEdit}>
            Edit
          </button>
          <button 
            className="btn-delete" 
            onClick={handleDelete} 
            disabled={isEditable}>
            Delete
          </button>
        </div>
      </div>
    )
}

export default SingleTodo
