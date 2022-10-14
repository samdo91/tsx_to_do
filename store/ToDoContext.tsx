import React, { ReactNode, useContext, createContext, useReducer, Dispatch } from "react";
import { TodoListReducer } from "../TodoListReducer";
import { TodoReducer } from "../To_Do_Header/TodoReducer";
import { iTodo } from "../To_Do_List";
interface iToDoContext {
    children: ReactNode
}


export type tState = {
    list: iTodo[]

}

export type tAction = {
    type: "remove",
    payload: {
        id: number
    }
} | {
    type: "checked",
    payload: {
        id: number
    }
} | {
    type: "allChecked",
    payload: {
        selector: boolean
    }
} | {

    type: "allRemove"
} | {
    type: "add",
    payload: {
        todo: string
    }
}

export type todoReducerState = {
    todo: string
}

export type todoReducerAction = {
    type: "change"
    payload: string
} | {
    type: "clear"
}





const toDoListContext = createContext<tState | null>(null)
const toDoListDispatchContext = createContext<Dispatch<tAction> | null>(null)
const toDoContext = createContext<todoReducerState | null>(null)
const toDoDispatctContext = createContext<Dispatch<todoReducerAction> | null>(null)





const ToDoContextProvider = (props: iToDoContext) => {

    const [list, todoLIstDispatch] = useReducer(TodoListReducer, { list: [] })
    const [todo, todoDispatch] = useReducer(TodoReducer, { todo: "" })

    return (

        <toDoListContext.Provider value={list}>
            <toDoListDispatchContext.Provider value={todoLIstDispatch}>
                <toDoContext.Provider value={todo}>
                    <toDoDispatctContext.Provider value={todoDispatch}>
                        {props.children}
                    </toDoDispatctContext.Provider>
                </toDoContext.Provider>
            </toDoListDispatchContext.Provider>
        </toDoListContext.Provider>
    )


}

//  export const names= useContext(mames)

export const useToDolist = () => {
    const value = useContext(toDoListContext)
    if (!value) {
        throw new Error("에러뜸 유즈리스트야")
    }
    return value
}
export const useToDolistDispatch = () => {
    const value = useContext(toDoListDispatchContext)
    if (!value) {
        throw new Error("에러뜸 유즈투드리스트디스패치야")
    }
    return value
}
export const useToDo = () => {
    const value = useContext(toDoContext)
    if (!value) {
        throw new Error("에러뜸 유즈투드야")
    }
    return value
}

export const useToDoDispatch = () => {
    const value = useContext(toDoDispatctContext)
    if (!value) {
        throw new Error("에러뜸 유즈투드리스트야")
    }
    return value
}



export default ToDoContextProvider