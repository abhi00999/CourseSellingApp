import { TextField } from '@mui/material'
import React from 'react'
import { useState } from 'react'
import { Button, Card, Typography } from '@mui/material'

const AddCourse = () => {
    const [title, setTitle] = useState("")
    const [description, setDescription] = useState("")
    return (
        <div style={{ display: 'flex', justifyContent: 'center' }}>
            <Card variant='outlined' style={{
                width: 400,
                padding: 20
            }}>
                <TextField
                    onChange={() => {

                    }}
                    fullWidth={true}
                    label="Title"
                    variant="outlined"
                />
                <TextField
                    onChange={() => {

                    }}
                    fullWidth={true}
                    label="Description"
                    variant="outlined"
                />
                <Button onClick={() => {
                    fetch(
                        "https://localhost:300/admin",{
                            method:'POST',
                            body: JSON.stringify({
                                username: email,
                                password
                            }),
                            headers:{
                                "Content-type": "application/json",
                                "Authorization": "Bearer " + + localStorage.getItem("token")
                            }

                        }
                    )
                    .then(callback1)
                }} size='large ' variant='contained'>Add Course</Button>
            </Card>
        </div>
    )
}

export default AddCourse