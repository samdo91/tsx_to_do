import React from "react";
import { useToDolist,} from "../store/ToDoContext";
import { ToDoItem } from "./To.Do.item";




export const ToDoBoard = () => {
    const list = useToDolist()

    
  

    return <ul>
        {list.list.map((item) => <li key={item.id}><ToDoItem id={item.id} key={item.id} value={item.todo} selector={item.selector}/></li>)}
    </ul>
}