import React from 'react'
import { useParams } from 'react-router-dom'

export default function Card(p) {
    const { theme } = useParams()
    return (

        <div>


            <h1>{p.children[0]}</h1>
            <h1>{p.children[1]}</h1>
            <h1>{p.children[2]}</h1>

            <br />

            <h3>{p.name}</h3>
            <h3>{p.age}</h3>

            <br />

            <h1> This is the theme : {theme} </h1>
        </div>
    )
}
