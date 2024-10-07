import { useDispatch, useSelector } from 'react-redux'
import { addTodo, setInput, updateTodo } from '../redux/slices/todoSlice'

const Form = () => {
    const {isEditable,inputText}=useSelector((store)=>store.todos)
    const dispatch=useDispatch()

    function handleInputChange(e){
        dispatch(setInput(e.target.value))
    }

    function handleSubmit(e){
        e.preventDefault()
        if(isEditable){
            dispatch(updateTodo())
        }else{
            dispatch(addTodo())
        }
    }

    return (
      <div className="form-container">
        <form className="todo-form" onSubmit={handleSubmit}>
          <input 
            required 
            type="text" 
            name="task" 
            className="input-task"
            placeholder='Enter task' 
            value={inputText} 
            onChange={handleInputChange} 
          />
          <button type="submit" className="btn-submit">
            {isEditable ? "Update" : "Add"}
          </button>
        </form>
      </div>
    )
}

export default Form
