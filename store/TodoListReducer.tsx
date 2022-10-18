
import { tAction, tState } from "./ToDoContext"
import { seveToDo } from "./ToDoStorage"


// 리스트 업데이트, 단일 삭체, 토글, 모두 선택, 선택 삭제 
//  add, remove, checked , allchecked , allremove





export const TodoListReducer = (state: tState, action: tAction) => {
  switch (action.type) {
    case "remove": {
      const newToDos = state.list.filter((list) => {
        return list.id !== action.payload.id
      })
      seveToDo(newToDos)
      return { list: newToDos }
    }


    case "checked": {
      const newToDos = state.list.map((list) => {
        if (list.id === action.payload.id) {
          return {
            ...list,
            selector: !list.selector
          }
        }
        return list
      })

      seveToDo(newToDos)
      return { list: newToDos }
    }

    case "allChecked": {
      const newToDos = state.list.map((list) => {

        return {
          ...list,
          selector: !action.payload.selector
        }
      })
      seveToDo(newToDos)
      return {
        list: newToDos
      }
    }

    case "allRemove": {
      const newToDos = state.list.filter(list => {
        return list.selector !== true
      })
      seveToDo(newToDos)

      return { list: newToDos }

    }


    case "add": {
      const newToDos = state.list.concat(
        {
          todo: action.payload.todo,
          id: Date.now() + Math.random(),
          selector: false
        })
      seveToDo(newToDos)
      return {
        list: newToDos
      }
    }


  }
}