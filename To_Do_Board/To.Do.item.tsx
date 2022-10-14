import React from "react";
import { FcOk } from "react-icons/fc";
import { IoIosCheckmarkCircleOutline } from "react-icons/io";
import { AiOutlineClose } from "react-icons/ai";
import { useToDolistDispatch } from "../store/ToDoContext";



export const ToDoItem = (props: any) => {
  
const todoLIstDispatch = useToDolistDispatch()

  

    const { value, id, selector } = props


    const handleselector = () => {
        todoLIstDispatch({
            type: "checked",
            payload: {
               id: id
            }
         })

    }
    const handledelete = () => {
      
        todoLIstDispatch({
            type: "remove",
            payload: {
               id: id
            }
         })

    }





    return <><>{value}</>{selector ? <FcOk onClick={handleselector} /> : <IoIosCheckmarkCircleOutline onClick={handleselector} />} <AiOutlineClose onClick={handledelete} /> </>

}