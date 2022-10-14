
type todoReducerState = {
    todo: string
}

type todoReducerAction = {
    type: "change"
    payload: string
} | {
    type: "clear"
}


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
