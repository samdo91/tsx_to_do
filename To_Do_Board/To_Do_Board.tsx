import React from "react";
import { iTodo } from "../To_Do_List";
import { ToDoItem } from "./To.Do.item";

interface iBoardProps {
    list: iTodo[]
    selectorBoolean: (id: number) => void
    itemDelete: (id:number)=> void
}


export const ToDoBoard = (props: iBoardProps) => {
    const { list, selectorBoolean, itemDelete } = props
  

    return <ul>
        {/* {list.map((item)=> <ToDoItem item={item}></ToDoItem>)} */}
        {list.map((item) => <li key={item.id}><ToDoItem id={item.id} key={item.id} value={item.value} selector={item.selector} selectorBoolean={selectorBoolean} itemDelete ={itemDelete}/></li>)}
    </ul>
}