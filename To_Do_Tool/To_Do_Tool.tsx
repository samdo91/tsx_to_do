import React from "react";
import { useToDolist, useToDolistDispatch } from "../store/ToDoContext";



export const ToDoToll =() =>{
    const list = useToDolist()
    const todoLIstDispatch = useToDolistDispatch()
    

    const isAllSelectors = () => {
        return list.list.every(list => list.selector)
     }
  

    const handleAllSelector =() =>{
        const AllSelectors = isAllSelectors()
        todoLIstDispatch({
           type: "allChecked",
           payload: {
              selector: AllSelectors
           }
        })
    } 
   const handleSelectorDelete =() =>{
    todoLIstDispatch({
        type: "allRemove"
     })
   }

    return<>
    {isAllSelectors() ? <button onClick={handleAllSelector}>전체해제</button> :<button onClick={handleAllSelector}>전부선택</button>}
    
    <button onClick={handleSelectorDelete}>선택삭제</button>
    </>
}