import Form from './component/Form'
import TodoList from './component/TodoList'
import "./App.css"
function App() {
  return (
    <div className="app-container">
      <h1 className="app-heading">Todo App</h1>
      <Form />
      <TodoList />
    </div>
  )
}

export default App
