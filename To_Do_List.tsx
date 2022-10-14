import React, { useState, useReducer } from "react";
import { ToDoHeader } from "./To_Do_Header/To_Do_Header";
import { ToDoBoard } from "./To_Do_Board/To_Do_Board";
import { ToDoToll } from "./To_Do_Tool/To_Do_Tool";
import { TodoListReducer } from "./TodoListReducer";

export interface iTodo {
   todo: string
   id: number
   selector: boolean
}

export const ToDoList = () => {
   const [list, todoLIstDispatch] = useReducer(TodoListReducer, { list: [] })

const addList =(todo:string) =>{
   todoLIstDispatch({
      type: "add",
      payload:{
         todo: todo
      }
   })
   
} 


   const selectorBoolean = (id: number) => {
      todoLIstDispatch({
         type: "checked",
         payload: {
            id: id
         }
      })
   }

   const itemDelete = (id: number) => {

      todoLIstDispatch({
         type: "remove",
         payload: {
            id: id
         }
      })
   }

   const isAllSelectors = () => {
      return list.list.every(list => list.selector)
   }

   const allSelector = () => {
      const AllSelectors = isAllSelectors()
      todoLIstDispatch({
         type: "allChecked",
         payload: {
            selector: AllSelectors
         }
      })
   }


   const SelectorDelete = () => {
      todoLIstDispatch({
         type: "allRemove"
      })
   }


   return (<div>
      <h1> {` ${list.list.length} 만큼! 할 일이 너무 많아!!`} </h1>
      <ToDoHeader list={list.list} addList={addList}/>
      <ToDoToll allSelector={allSelector} SelectorDelete={SelectorDelete} isAllSelectors={isAllSelectors} />
      <ToDoBoard list={list.list} selectorBoolean={selectorBoolean} itemDelete={itemDelete} />


   </div>)
}