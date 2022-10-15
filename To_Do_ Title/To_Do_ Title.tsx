import React from "react";
import { useToDolist } from "../store/ToDoContext";


export const ToDoTittle= () =>{
    const  list= useToDolist()


    return  ( <h1> {` ${list.list.length} 만큼! 할 일이 너무 많아!!`} </h1>)
}
    
         