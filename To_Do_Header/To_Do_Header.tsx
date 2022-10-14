import React, {useReducer } from "react";
import { TodoReducer } from "./TodoReducer";


export const ToDoHeader = (props: any) => {
    const { addList } = props
    const [todo, todoDispatch ]= useReducer(TodoReducer ,{todo:""})
    // const [todo, setTodo] = useState<string>()
    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault()
        if(!todo.todo) {
            return
        }
        addList(todo.todo)
         todoDispatch({
            type:"clear" })
         }

    const handlerChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        todoDispatch({
            type: "change",
            payload: e.target.value
        })}

    return (<div>
        <form onSubmit={handleSubmit}>
            <input type="text" value={todo.todo} placeholder="여기에 할일을 적어주세요" onChange={handlerChange}></input>
            <button type="submit"> 할일!</button>
        </form>

    </div>)
}