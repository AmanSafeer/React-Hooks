import React, { useRef, useEffect, useLayoutEffect } from "react";


export default function UseLayoutEffects() {
    const text = useRef()

    // useEffect(() => {
    //     text.current.style.backgroundColor = `red`
    // }, [])

    useLayoutEffect(() => {
        text.current.style.backgroundColor = `red`
    }, [])

    return (
        <div style={{ backgroundColor: "green", fontSize: 200 }} ref={text}>
            This is a text
        </div>

    )
}