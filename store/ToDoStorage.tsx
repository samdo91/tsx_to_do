import { json } from "stream/consumers";
import { iTodo } from "../To_Do_List";
import { tState } from "./ToDoContext";

export const seveToDo= (todo:iTodo[]) =>{

    localStorage.setItem("todo" ,JSON.stringify(todo))
}

export const loadToDo= () =>{

    const todoJson =localStorage.getItem("todo")
    if(!todoJson){
        return []
    }
    try{
      return JSON.parse(todoJson)  
    }catch (e){
        console.log(e)
        return []
    }
    

}