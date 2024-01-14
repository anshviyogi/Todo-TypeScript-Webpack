import { TodoInterface } from "./Interfaces"

interface Props {
    todo: TodoInterface[];
    setTodo: React.Dispatch<React.SetStateAction<TodoInterface[]>>
}

const TodoList: React.FC<Props> = ({todo, setTodo}: Props)=> {
    
    const deleteHandler = (id: number | string)=> {
        let filter: TodoInterface[] = todo.filter(item => {
            return item.id !== id
        })

        setTodo(filter)
    }

    return (
        <>
        {todo.map((item: TodoInterface) => {
           return (
            <div style={{display:"flex",justifyContent:"center"}}>
            <h1>{item.todo}</h1>
            <button>Edit</button>
            <button onClick={()=> deleteHandler(item.id)}>Delete</button>
            </div>
           )
        })}
        </>
    )
}

export default TodoList