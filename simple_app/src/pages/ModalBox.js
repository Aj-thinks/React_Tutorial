import React, { useState } from 'react'
import { Button, Header, Image, Modal } from 'semantic-ui-react'

export default function ModalBox() {



    const [box, setBox] = useState(false)

    function run() {
        setBox(true)
    }
    function closebox() {
        setBox(false)
    }

    return (
        <div>
            <Modal open={box}
                closeIcon
                onClose={() => setBox(false)}
                onOpen={() => setBox(true)}>

                <Modal.Header>Add New Item:</Modal.Header>
                <Modal.Content>
                    <p>Do you really want to see me..!!</p>
                </Modal.Content>
                <Modal.Actions>
                    <Button color='grey' onClick={closebox}>Close</Button>
                    <Button color='blue' onClick={() => { setBox(false) }}>Save Changes</Button>
                </Modal.Actions>
            </Modal>



            <Button color='blue' onClick={run}>Open Box</Button>





        </div>
    )
}
