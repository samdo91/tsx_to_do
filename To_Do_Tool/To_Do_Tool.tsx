import React from "react";
import { iTodo } from "../To_Do_List";


interface iToll {

    allSelector: () => void
    SelectorDelete: () => void
    isAllSelectors: () => boolean
    
}
export const ToDoToll =(props:iToll) =>{
    const{allSelector, SelectorDelete,isAllSelectors} =props

    const handleAllSelector =() =>{
        allSelector()     
    } 
   const handleSelectorDelete =() =>{
    SelectorDelete()
   }

    return<>
    {isAllSelectors() ? <button onClick={handleAllSelector}>전체해제</button> :<button onClick={handleAllSelector}>전부선택</button>}
    
    <button onClick={handleSelectorDelete}>선택삭제</button>
    </>
}