import { useRef } from "react";
import { TodoInterface } from "./Interfaces";

interface MessageType {
    message: string;
    setMessage: React.Dispatch<React.SetStateAction<string>>;
    todo: TodoInterface[];
    setTodo: React.Dispatch<React.SetStateAction<TodoInterface[]>>
}

const InputField: React.FC<MessageType> = ({message, setMessage, todo, setTodo}: MessageType) => {
    let inputRef = useRef<HTMLInputElement>(null)

    const submitHandler = (e: React.SyntheticEvent)=> {
        e.preventDefault();
        inputRef.current?.focus();
        
        if (message) {
            setTodo([...todo, {id:Math.random(), todo:message, isActive:false}])
            setMessage("")
        }
}

    return (
        <>
        <form onSubmit={submitHandler}>
            <input ref={inputRef} type="text" value={message} onChange={e => setMessage(e.target.value)}/>
            <button type="submit">Submit</button>
        </form>
        </>
    )
}

export default InputField