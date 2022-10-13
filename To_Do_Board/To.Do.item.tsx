import React from "react";
import { FcOk } from "react-icons/fc";
import { IoIosCheckmarkCircleOutline } from "react-icons/io";
import { AiOutlineClose } from "react-icons/ai";


export const ToDoItem = (props: any) => {

    const { selectorBoolean, value, id, selector, itemDelete } = props




    // const handleselector = (e: React.MouseEvent<SVGElement>) => {
    //     if (selector === true) {
    //         setSelector(false)

    //     }
    //     if (selector === false) {
    //         setSelector(true)

    //     }
    // }

    const handleselector = () => {
        selectorBoolean(id)

    }
    const handledelete = () => {
        itemDelete(id)

    }





    return <><>{value}</>{selector ? <FcOk onClick={handleselector} /> : <IoIosCheckmarkCircleOutline onClick={handleselector} />} <AiOutlineClose onClick={handledelete} /> </>

}