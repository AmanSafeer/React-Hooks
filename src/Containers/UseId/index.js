import React, { useId, useState } from "react";


export default function UseId() {
    const [list] = useState([
        {
            id: useId(),
        },
        {
            id: useId()
        },
        {
            id: useId()
        },
        {
            id: useId()
        },
    ])

    return (
        list.map(val => <p key={val.id}>{val.id}</p>)
    )
}