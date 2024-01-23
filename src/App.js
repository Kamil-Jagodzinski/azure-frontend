import './App.css'
import theme from './assets/theme'
import { ThemeProvider } from '@mui/material/styles'
import { Footer } from './layout/Footer'
import { Header } from './layout/Header'
import { Divider, Grid } from '@mui/material'
import { UpperPanel } from './layout/UpperPanel'
import { LowerPanel } from './layout/LowerPanel'
import React, { useState } from 'react'
import { GitContext } from './GitContext'
import { MainPanel } from './layout/MainPanel'

function App() {
    const [users, setUsers] = useState([])
    const [selectedUser, setSelectedUser] = useState('')
    const [repositories, setRepositories] = useState([])
    const [selectedRepo, setSelectedRepo] = useState('')
    const [upper, setUpper] = useState('empty')
    const [lower, setLower] = useState('empty')
    const [main, setMain] = useState('empty')
    const [loggedUserId, setLoggedUserId] = useState('')
    const [loggedUserLogin, setLoggedUserLogin] = useState('')
    const [isLoggedIn, setLoggedIn] = useState(false)
    const [followingList, setFollowingList] = useState([])

    const content = {
        users,
        setUsers,
        selectedUser,
        setSelectedUser,
        repositories,
        setRepositories,
        selectedRepo,
        setSelectedRepo,
        upper,
        setUpper,
        lower,
        setLower,
        main,
        setMain,
        isLoggedIn,
        setLoggedIn,
        followingList,
        setFollowingList,
        loggedUserLogin,
        setLoggedUserLogin,
        loggedUserId,
        setLoggedUserId,
    }

    return (
        <ThemeProvider theme={theme}>
            <div margin="0 5px">
                <GitContext.Provider value={content}>
                    <Header />
                    <Grid container>
                        <Grid
                            item
                            xs={4}
                            height="calc(100vh - 8rem)"
                            borderRight="2px solid"
                            borderColor="primary.main"
                            display="flex"
                            flexDirection="column"
                        >
                            <UpperPanel />
                            <Divider />
                            <LowerPanel />
                        </Grid>

                        <Grid
                            item
                            xs={8}
                            height="calc(100vh - 8rem)"
                            display="flex"
                            flexDirection="column"
                            overflow="auto"
                        >
                            <MainPanel />
                        </Grid>
                    </Grid>
                </GitContext.Provider>
                <Footer />
            </div>
        </ThemeProvider>
    )
}

export default App
