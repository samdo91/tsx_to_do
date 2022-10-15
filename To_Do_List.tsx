import React from "react";
import { ToDoHeader } from "./To_Do_Header/To_Do_Header";
import { ToDoBoard } from "./To_Do_Board/To_Do_Board";
import { ToDoToll } from "./To_Do_Tool/To_Do_Tool";
import ToDoContextProvider from "./store/ToDoContext";
import { ToDoTittle } from "./To_Do_ Title/To_Do_ Title";

export interface iTodo {
   todo: string
   id: number
   selector: boolean
}



export const ToDoList = () => {





   return (<div>
      <ToDoContextProvider>
         <ToDoTittle />
         <ToDoHeader />
         <ToDoToll />
         <ToDoBoard />
      </ToDoContextProvider>

   </div>)
}