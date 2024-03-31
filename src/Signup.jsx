import React, { useState } from 'react'
import { Button, Card, Typography } from '@mui/material'
import TextField from '@mui/material/TextField';
import { responsiveProperty } from '@mui/material/styles/cssUtils';

const Signup = () => {
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")

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
                        onChange={(e)=>{
                            setEmail(e.target.value)
                        }}
                        fullWidth={true}
                        label="Email"
                        variant="outlined"
                    />

                    {/* Username - <input type="text" /> */}
                    <br />
                    <br />
                    {/* Password - <input type="password" /> */}
                    <TextField
                        onChange={(e)=>{
                            setPassword(e.target.value)
                        }}
                        fullWidth={true}
                        label="Password"
                        variant="outlined"
                        type={"password"}
                    />
                    <br />
                    <br />
                    {/* <button>Sign Up</button> */}
                    <Button onClick={()=>{
                        function callback2(data){
                            localStorage.setItem("token", data.token)
                            console.log(data.token)
                        }
                        function callback1(res){
                            res.json().then(callback2)
                        }
                        console.log(username);
                        fetch(
                            "https://localhost:300/admin",{
                                method:'POST',
                                body: JSON.stringify({
                                    username: email,
                                    password
                                }),
                                headers:{
                                    "Content-type": "application/json"
                                }

                            }
                        )
                        .then(callback1)
                    }} size='large ' variant='contained'>Sign Up</Button>
                </Card>
            </div>
        </div>
    )
}

export default Signup