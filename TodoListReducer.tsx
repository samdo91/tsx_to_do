
import { iTodo } from "./To_Do_List"



type tState = {
  list: iTodo[]

}

// 리스트 업데이트, 단일 삭체, 토글, 모두 선택, 선택 삭제 
//  add, remove, checked , allchecked , allremove
type tAction = {
  type: "remove",
  payload:{
    id:number
  }
} | {
  type: "checked",
  payload:{
    id: number
  }
} | {
  type: "allChecked",
payload:{
  selector:boolean
}
} | {

  type: "allRemove"
}|{
 type: "add",
 payload:{
  todo:string
 }
}




export const TodoListReducer = (state: tState, action: tAction) => {
  switch (action.type) {
    case "remove":
      return{  list:  state.list.filter((list) => {
        return list.id !== action.payload.id
     })}

    case "checked":
      return{  list : state.list.map((list) => {
        if (list.id === action.payload.id) {
           return {
              ...list,
              selector: !list.selector
           }
        }
        return list
     })

      }
    case "allChecked":
      return{
        list: state.list.map((list) => {

          return {
             ...list,
             selector: !action.payload.selector
          }
       })
      }
    case "allRemove":
      return{  list: state.list.filter(list=> {
        return list.selector !== true
     })}
  case "add": 
  return {
    list: state.list.concat(
      { todo: action.payload.todo,
        id:Date.now() + Math.random() ,
        selector: false

      }
    )
  }

  }
}

// interface tState {
//   list: iTodo[]
// }
// // //  add, remove, checked , allchecked , allremove
// type tAction = {
//   type: "remove",
//   payload: {
//     id: number
//   }
// } | {
//   type: "checked"
//   payload: {
//     id: number
//   }
// } | {
//   type: "allchecked"
//   payload: {
//     if: number
//   }
// } | {
// type: "allremove"

// }

// export const TodoListReducer = (state: tState, action: tAction) => {
//   switch (action.type) {
//     case "remove":
//       return{ list:  state.list.filter((list) => {
//                 return list.id !== action.payload.id
// })}

// }