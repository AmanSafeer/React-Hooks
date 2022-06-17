import React, { useState, useDeferredValue } from "react";

export default function DeferredValue() {
    const [search, updateSearch] = useState("")
    // const deferredSearchText = useDeferredValue(search)
 
    return (
        <div>
            <p>Type Something</p>
            <input
                value={search}
                onChange={(e) => {
                    updateSearch(e.target.value)
                }}
            />
            {/* <div style={{ opacity: deferredSearchText != search ? 0.2 : 1 }}> */}
            <div>
                {
                    [...Array(10000)].map((val, ind) => (
                        <p key={ind}>{search}</p>
                        // <p key={ind}>{deferredSearchText}</p>
                    ))
                }
            </div>
        </div>
    )
}