import { Button, Typography } from '@mui/material'
import React from 'react'

const Appbar = () => {
    return (
        <div style={{
            display: 'flex',
            justifyContent: 'space-between',
            padding: 4
        }}>
            <div>
                <Typography variant='h6'>UpStart</Typography>
            </div>
            <div style={{ display: 'flex' }}>
                <div style={{ marginRight: 10}}>
                    <Button 
                    onClick={()=>{
                        window.location='/signup'
                    }}
                    variant='contained'>Sign Up</Button>
                </div>
                <div>
                    <Button 
                    onClick={()=>{
                        window.location='/signin'
                    }}
                    variant='contained'>Sign In</Button>
                </div>
            </div>
        </div>
    )
}

export default Appbar