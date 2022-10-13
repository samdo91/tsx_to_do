import React, { useState } from "react";
import { ToDoHeader } from "./To_Do_Header/To_Do_Header";
import { ToDoBoard } from "./To_Do_Board/To_Do_Board";
import { listenerCount } from "process";
import { ToDoToll } from "./To_Do_Tool/To_Do_Tool";

export interface iTodo {
   value: string
   id: number
   selector: boolean
}

export const ToDoList = () => {

   const [list, setList] = useState<iTodo[]>([])
   const selectorBoolean = (id: number) => {
      const newList = list.map((list) => {
         if (list.id === id) {

            return {
               ...list,
               selector: !list.selector
            }
         }

         return list

      })
      setList(newList)
   }

   const itemDelete = (id: number) => {

      const newList = list.filter((list) => {
         return list.id !== id
      })
      setList(newList)
   }
const isAllSelectors=() => {
   return list.every(list=> list.selector)
}

   const allSelector = () => {
const isAllSelector= isAllSelectors()
      const newList = list.map((list) => {

         return {
            ...list,
            selector: !isAllSelector
         }
      })
      setList(newList)
   }

   const SelectorDelete = () => {
      const newList = list.filter(list=> {
         return list.selector !== true
      })
      setList(newList)
   }


   return (<div>
      <h1> {` ${ list.length} 만큼! 할 일이 너무 많아!!`} </h1>
      <ToDoHeader list={list} setList={setList} />
      <ToDoToll allSelector={allSelector} SelectorDelete ={SelectorDelete}  isAllSelectors={isAllSelectors}/>
      <ToDoBoard list={list} selectorBoolean={selectorBoolean} itemDelete={itemDelete} />


   </div>)
}