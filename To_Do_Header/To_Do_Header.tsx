import React, { useState } from "react";
import { iTodo } from "../To_Do_List";

export const ToDoHeader = (props: any) => {
    const { list, setList } = props
    const [todo, setTodo] = useState<string>()
    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault()
        if(!todo) {
            return
        }
        setList(
          [...list, {
            value: todo,
            id:Date.now() + Math.random() ,
            selector: false
         }])
       setTodo("")
    }

    const handlerChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setTodo(e.target.value)
    }

    return (<div>
        <form onSubmit={handleSubmit}>
            <input type="text" value={todo} placeholder="여기에 할일을 적어주세요" onChange={handlerChange}></input>
            <button type="submit"> 할일!</button>
        </form>

    </div>)
}