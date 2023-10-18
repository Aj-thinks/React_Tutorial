import React, { useState } from 'react'

export default function MyProfile() {

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
        </div>
    )
}
