import React from 'react'
import { Button, Card, Typography } from '@mui/material'
import TextField from '@mui/material/TextField';

const Signin = () => {
    return (
        <div>
            {/* <center> */}
                <div style={{
                    paddingTop: 150,
                    marginBottom: 10,
                    display:'flex',
                    justifyContent: 'center'
                }}>
                    <Typography variant='h5'>
                        Welcome to UpStart. Sign Up Below
                    </Typography>
                </div>
            {/* </center> */}
            <div style={{display:'flex', justifyContent:'center'}}>
                <Card variant='outlined' style={{
                    width:400,
                    padding: 20
                }}>
                    <TextField
                        fullWidth={true}
                        id="outlined-basic"
                        label="Email"
                        variant="outlined"
                    />

                    {/* Username - <input type="text" /> */}
                    <br />
                    <br />
                    {/* Password - <input type="password" /> */}
                    <TextField
                        fullWidth={true}
                        id="outlined-basic"
                        label="Password"
                        variant="outlined"
                        type={"password"}
                    />
                    <br />
                    <br />
                    {/* <button>Sign Up</button> */}
                    <Button size='large ' variant='contained'>Sign In</Button>
                </Card>
            </div>
        </div>
    )
}

export default Signin