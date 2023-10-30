import React, { useContext } from 'react'
import { ThemeContext, UserContext } from './MainMenu'
import { Button } from 'semantic-ui-react'

export default function Books() {

    const { user, setUser, age } = useContext(UserContext)

    const { theme, setTheme } = useContext(ThemeContext)


    function changeTheme() {
        if (theme === 'dark') {
            setTheme('light')
        } else {
            setTheme('dark')
        }
    }

    return (
        <div>
            <h1> This is books page... </h1>
            <br />
            <Button onClick={changeTheme} > Change Theme</Button>

            <h1>{theme}</h1>
            <br />
            <h1>{age}</h1>



        </div>
    )
}
