import React, { useState, useContext } from 'react'
import { Typography, TextField, Button, Paper } from '@mui/material'
import { verifyLogin } from '../api/userAPI'
import { GitContext } from '../GitContext'


const LoginForm = (props) => {

    const {
        setLoggedUserId,
        setLoggedIn,
        setLoggedUserLogin
    } = useContext(GitContext)

    const [username, setUsername] = useState('')
    const [password, setPassword] = useState('')

    const handleUsernameChange = (event) => {
        setUsername(event.target.value)
    }

    const handlePasswordChange = (event) => {
        setPassword(event.target.value)
    }

    const handleLogin = async () => {
        const response = await verifyLogin(username, password)
        console.log( response )
        if (response) {
            setLoggedUserId(response.userId);
            setLoggedUserLogin(response.login)
            setLoggedIn(true);
            props.onClose()
        } else {
            alert('Invalid username or password')
        }
    }

    return (
        <Paper
            sx={{
                border: '2px solid #4682b4',
                p: 2,
            }}
        >
            <Typography variant="h5" sx={{ mb: 2 }}>
                Log In
            </Typography>
            <TextField
                label="Username"
                variant="outlined"
                fullWidth
                value={username}
                onChange={handleUsernameChange}
                sx={{ mb: 2 }}
            />
            <TextField
                label="Password"
                type="password"
                variant="outlined"
                fullWidth
                value={password}
                onChange={handlePasswordChange}
                sx={{ mb: 2 }}
            />
            <Button
                variant="contained"
                color="primary"
                onClick={handleLogin}
                sx={{ ml: '80%' }}
            >
                Log In
            </Button>
        </Paper>
    )
}

export { LoginForm }
