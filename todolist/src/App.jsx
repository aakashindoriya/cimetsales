
import './App.css'
import { AddTodo } from './components/AddTodo'
import { TodoList } from './components/TodoList'
import TodoProvider from './components/TodoProvider'

function App() {

  return (
    <>
    <TodoProvider>
      <AddTodo />
      <TodoList />
    </TodoProvider>
      
    </>
  )
}

export default App
