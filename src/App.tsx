import { useState } from "react"
import InputField from "./Components/InputFields"
import { TodoInterface } from "./Components/Interfaces"
import TodoList from "./Components/TodoList"

const App: React.FC = ()=> {
  const [message, setMessage] = useState<string>("")
  const [todo, setTodo] = useState<TodoInterface[]>([])

  return (
    <>
    <InputField message={message} setMessage={setMessage} todo={todo} setTodo={setTodo}/>
    <TodoList todo={todo} setTodo={setTodo}/>
    </>
  )
}

export default App