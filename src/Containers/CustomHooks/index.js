import React, { useEffect, useState, useDebugValue } from "react";

// function useLocalStorage(key, initalValue){
//     const savedValue = JSON.parse(localStorage.getItem(key))
//     const [value, setValue] = useState(savedValue || initalValue)

//     // useDebugValue(value);

//     useEffect(()=>{
//         localStorage.setItem(key, JSON.stringify(value))
//     },[value])

//     return [value, setValue]
// }

export default function CustomHooks() {
    // const [name, setName] = useLocalStorage("name", "")
    const [name, setName] = useState("")

    return (
        <>
            <p>Type Somthing</p>
            <input
                value={name}
                onChange={(e) => setName(e.target.value)}
            />
        </>
    )
}