import React, { useState } from 'react'
import { useParams } from 'react-router-dom'

export default function MyProfile() {

    const { userid } = useParams()

    let x = ''
    x = localStorage.getItem('User')
    const [user, setUser] = useState(x)


    function handleSave() {
        localStorage.setItem('User', user)          // "User" is a key and "user" is a data which is added to this key
    }


    return (
        <div>
            <input
                type='text'
                value={user}
                onChange={(e) => { setUser(e.target.value) }}
                required
            />
            <button onClick={handleSave}>Save Changes</button>
            <hr />

            <h1> This is the user id passed in the url: {userid} </h1>
        </div>
    )
}
