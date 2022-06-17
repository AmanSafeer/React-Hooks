import React, { useState, useReducer } from "react";
import TodoComp from "./todoComp";


// function reducer(state, action) {
//     switch (action.type) {
//         case "set":
//             return {
//                 ...state,
//                 todoName: action.payload
//             }
//         case "add":
//             return {
//                 ...state,
//                 todos: [action.payload, ...state.todos],
//                 todoName: ""
//             }
//         case "delete":
//             let todoList = [...state.todos]
//             todoList.splice(action.payload.id, 1)
//             return {
//                 ...state,
//                 todos: todoList
//             }
//     }
// }

export default function UseReducer() {
    // const [state, dispatch] = useReducer(reducer, { todoName: "", todos: [] })
    // const { todoName, todos } = state
    const [todos, setTodos] = useState([])
    const [todoName, setTodoName] = useState("")

    const addTodo = () => {
        setTodos([todoName, ...todos])
        setTodoName("")
    }

    const deleteTodo = (ind) => {
        const todoList = [...todos];
        todoList.splice(ind, 1)
        setTodos(todoList)
    }

    return (
        <>
            <div style={{ marginBottom: 10 }}>
                <input
                    value={todoName}
                    onChange={(e) => setTodoName(e.target.value)}
                    // onChange={(e) => dispatch({ type: "set", payload: e.target.value })}
                />
                <button onClick={addTodo}>Add</button>
                {/* <button onClick={() => dispatch({ type: "add", payload: todoName })}>Add</button> */}
            </div>
            {
                todos.map((val, ind) => (
                    <div key={ind}>
                        <span>{val}</span>
                        <button onClick={() => deleteTodo(ind)}>Delete</button>
                        {/* <button onClick={() => dispatch({ type: "delete", payload: { id: ind } })}>Delete</button> */}
                    </div>
                ))
            }
        </>
        // <TodoComp state={state} dispatch={dispatch}/>
    )
}