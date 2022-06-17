import React, { useState, useDeferredValue, useEffect } from "react";

const dummyList = [...Array(10000)].map((val, ind) => "CA" + ind)

export default function UseDeferredValue() {
    const [search, updateSearch] = useState("")
    const [list, setList] = useState(dummyList)
    const deferredlist = useDeferredValue(list)


    const searchText = (text) => {
        updateSearch(text)
        console.log(text)
        let filtered = text ? dummyList.filter(val => val.toLowerCase().indexOf(text.toLowerCase()) != -1) : dummyList
        setList(filtered)
    }

    return (
        <div>
            <p>Type Something</p>
            <input
                value={search}
                onChange={(e) => {
                    searchText(e.target.value)
                }}
            />
            <div style={{ opacity: deferredlist.length != list.length ? 0.2 : 1 }}>
                {
                    deferredlist.map((val, ind) => <p key={ind}>{val}</p>)
                }
            </div>
        </div>
    )
}