import React from 'react'
import Student from './Student'
import StuCard from './StuCard'
import { Card } from 'semantic-ui-react'
import { useParams } from 'react-router-dom'

export default function StudentsList() {

    let { id, name } = useParams()  // Get the id and names from the parmas

    const data = [
        { name: "Raju", phone: '+911235679' },
        { name: "Ramu", phone: '+911235679' },
        { name: "Mahesh", phone: '+911235679' },
        { name: "apple", phone: '+911235679' },
        { name: "bat", phone: '+911235679' },
        { name: "cat", phone: '+91123465798' },
    ]
    return (
        <div>

            {/* <h1> Students List</h1>
            {data.map((item) => (                   // First define the key, based on which data has to align or show.
                <div key={item.name}>
                    <h2>{item.name}</h2>
                    <h3>{item.phone}</h3>
                </div>
            ))} */}

            <h1>{id}</h1>
            <h1>{name}</h1>

            <Card.Group itemsPerRow={5}>
                {data.map((item) => <StuCard item={item} />)}       {/* // Here we are using components from StuCard*/}
            </Card.Group>


        </div>
    )
}