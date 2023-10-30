// Without Props:

/* import React from 'react'

export default function Nested() {
    return (
        <div>
            <h1>Its Me Ajay</h1>
            <b>Hai</b>
            <i>Hello</i>

        </div>
    )
} */


// With props:
import React from 'react'
import Card from './Card'

export default function Nested() {
    return (
        <div>
            <Card name='Ajay' age={26} >
                <h1>Its Me Ajay</h1>
                <b>Hai</b>
                <i>Hello</i>

            </Card>

        </div>
    )
}