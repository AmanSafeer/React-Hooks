import React from "react";

export default function TodoComp({ state, dispatch }) {
    return (
        <>
            <div style={{ marginBottom: 10 }}>
                <input
                    value={state.todoName}
                    onChange={(e) => dispatch({ type: "set", payload: e.target.value })}
                />
                <button onClick={() => dispatch({ type: "add", payload: state.todoName })}>Add</button>
            </div>
            {
                state.todos.map((val, ind) => (
                    <div key={ind}>
                        <span>{val}</span>
                        <button onClick={() => dispatch({ type: "delete", payload: { id: ind } })}>Delete</button>
                    </div>
                ))
            }
        </>
    )

}