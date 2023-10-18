import React, { useState } from 'react'

export default function TodoList() {

    const x = localStorage.getItem('todos')


    let dataList = []
    if (x) {
        dataList = JSON.parse(x)
    }


    const [list, setList] = useState(dataList)
    const [text, setText] = useState('')

    function addItem(e) {
        e.preventDefault()
        if (text === '') {
            return
        }

        const newList = [...list]
        newList.push(text)
        setList(newList)
        // setlist([...list, text])
        setText('')

        localStorage.setItem('todos', JSON.stringify(newList))  // To create a local data storage:
    }


    return (
        <div>
            <h3> Add Items </h3>

            <form onSubmit={addItem}>
                <input
                    type='text'
                    onChange={(e) => { setText(e.target.value) }}
                    value={text}
                    required
                />
                <button>Add Item</button>

            </form>

            <h3> To do List </h3>
            <ol>
                {
                    list.map((item) => {
                        return (
                            <>
                                <li>{item}</li>
                            </>
                        )
                    })
                }
            </ol>

        </div>
    )
}


