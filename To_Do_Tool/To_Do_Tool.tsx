import React from "react";
import { iTodo } from "../To_Do_List";


interface iToll {

    allSelector: () => void
    SelectorDelete: () => void
    
}
export const ToDoToll =(props:iToll) =>{
    const{allSelector, SelectorDelete} =props

    const handleAllSelector =() =>{
        allSelector()     
    } 
   const handleSelectorDelete =() =>{
    SelectorDelete()
   }

    return<>
    <button onClick={handleAllSelector}>전부선택</button>
    <button onClick={handleSelectorDelete}>선택삭제</button>
    </>
}