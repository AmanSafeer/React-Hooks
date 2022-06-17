import React, { useState, useEffect } from "react";


export default function Rules() {
    const [name, setName] = useState("") //1
    const [todos, setTodos] = useState([]) //2


    // // 1) Only call hooks at the top level
    // if(true){
    //     useEffect(()=>{ //3
    //         console.log("hello nested")
    //     },[])
    // }
    
    // //2) Dont call hooks from regular functions. Call hooks from components or custom hooks
    // function hello(){// 4
    //     const [test, setTest] = useState("test")
    // }

    useEffect(()=>{ //5
        console.log("hello world")
    },[])

    return (
        <div>
            Hello world
        </div>
    )
}
