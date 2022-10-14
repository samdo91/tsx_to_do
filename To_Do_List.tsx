import React from "react";
import { ToDoHeader } from "./To_Do_Header/To_Do_Header";
import { ToDoBoard } from "./To_Do_Board/To_Do_Board";
import { ToDoToll } from "./To_Do_Tool/To_Do_Tool";
import ToDoContextProvider, { useToDolist } from "./store/ToDoContext";

export interface iTodo {
   todo: string
   id: number
   selector: boolean
}



export const ToDoList = () => {

   const list = useToDolist()



   return (<div>
      <ToDoContextProvider>
         <h1> {` ${list.list.length} 만큼! 할 일이 너무 많아!!`} </h1>
         <ToDoHeader />
         <ToDoToll />
         <ToDoBoard />
      </ToDoContextProvider>

   </div>)
}