import React from "react";
import { useToDo, useToDoDispatch, useToDolistDispatch } from "../store/ToDoContext";



export const ToDoHeader = () => {

    
    const todoLIstDispatch = useToDolistDispatch()
    const todoDispatch= useToDoDispatch()
    const todo= useToDo()





    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault()
        if (!todo.todo) {
            return
        }
        todoLIstDispatch({
            type: "add",
            payload: {
               todo: todo.todo
            }
         })
        todoDispatch({
            type: "clear"
        })
     
    }

    const handlerChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        todoDispatch({
            type: "change",
            payload: e.target.value
        })
    }

    return (<div>
        <form onSubmit={handleSubmit}>
            <input type="text" value={todo.todo} placeholder="여기에 할일을 적어주세요" onChange={handlerChange}></input>
            <button type="submit"> 할 일!</button>
        </form>

    </div>)
}