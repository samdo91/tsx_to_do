import { todoReducerAction, todoReducerState } from "../store/ToDoContext"



export const TodoReducer = (state: todoReducerState, action: todoReducerAction) => {
    switch (action.type) {
        case "change":
            return {
                todo: action.payload
            }
        case "clear":
            return { todo: ("") }
    }


}
