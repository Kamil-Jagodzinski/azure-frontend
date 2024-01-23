import { AppBar, Box, Paper, IconButton, Typography } from '@mui/material'
import logo from '../assets/logo.png'
import { SearchBar } from '../components/SerachBar'
import RecentActorsIcon from '@mui/icons-material/RecentActors'
import LoginIcon from '@mui/icons-material/Login'
import { useContext } from 'react'
import { GitContext } from '../GitContext'
import { useState } from 'react'
import { FormWrapper } from '../components/FormWrapper'
import { LoginForm } from '../components/LoginForm'
import { RegisterForm } from '../components/RegisterForm'
import LogoutIcon from '@mui/icons-material/Logout'
import GroupAddIcon from '@mui/icons-material/GroupAdd'
import { getFollowingUsers } from '../api/userAPI'

const Header = () => {
    const {
        setUpper,
        isLoggedIn,
        setLoggedIn,
        setLoggedUserId,
        setFollowingList,
        loggedUserId,
        loggedUserLogin,
    } = useContext(GitContext)
    const [isLoginOpen, setLogin] = useState(false)
    const [isRegisterOpen, setRegister] = useState(false)

    const openLogin = () => setLogin(true)
    const closeLogin = () => setLogin(false)

    const openRegister = () => setRegister(true)
    const closeRegister = () => setRegister(false)

    const openFollowing = async () => {
        let users = await getFollowingUsers(loggedUserId)
        setFollowingList(users)
        setUpper('following')
    }

    const logout = () => {
        setLoggedIn(false)
        setLoggedUserId('')
        setFollowingList([])
    }

    return (
        <AppBar
            position="static"
            sx={{ borderWidth: '0 0 0 4px', borderColor: 'red' }}
        >
            <Paper
                sx={{
                    px: 4,
                    display: 'flex',
                    justifyContent: 'space-between',
                    alignItems: 'center',
                    borderRadius: 0,
                    height: '5.5rem',
                    width: '100%',
                    boxSizing: 'border-box',
                    borderWidth: '0 0 3px 0',
                }}
                variant="outlined"
            >
                <Box
                    sx={{
                        display: 'flex',
                        gap: 4,
                    }}
                >
                    <img src={logo} alt="Logo" height="50rem" />
                    <SearchBar />
                    {isLoggedIn === true ? (
                        <Box
                            sx={{
                                gap: 1,
                                display: 'flex',
                            }}
                        >
                            <Typography
                                variant="body1"
                                color="white"
                                sx={{ mx: 1, pt: 1.5 }}
                            >
                                {loggedUserLogin}
                            </Typography>
                            <IconButton
                                onClick={openFollowing}
                                variant="outlined"
                                sx={{
                                    cursor: 'pointer',
                                    border: '1px solid',
                                    borderColor: 'white',
                                    borderRadius: '10px',
                                    boxSizing: 'border-box',
                                    ':hover': {
                                        scale: '1.02',
                                        boxShadow:
                                            'inset 1px 1px 28px 0px #888888;',
                                    },
                                }}
                            >
                                <RecentActorsIcon
                                    alt="Following users"
                                    sx={{ color: 'white', fontSize: 26 }}
                                />
                            </IconButton>
                        </Box>
                    ) : (
                        <></>
                    )}
                </Box>

                {isLoggedIn ? (
                    <Box
                        sx={{
                            display: 'flex',
                            gap: 2,
                        }}
                    >
                        <IconButton
                            onClick={logout}
                            variant="outlined"
                            sx={{
                                cursor: 'pointer',
                                border: '1px solid',
                                borderColor: 'white',
                                borderRadius: '10px',
                                boxSizing: 'border-box',
                                p: 1,
                                ':hover': {
                                    scale: '1.02',
                                    boxShadow:
                                        'inset 1px 1px 28px 0px #888888;',
                                },
                            }}
                        >
                            <LogoutIcon
                                alt="Login"
                                sx={{ color: 'white', fontSize: 22 }}
                            />
                            <Typography
                                variant="button"
                                color="white"
                                sx={{ mx: 1 }}
                            >
                                Logout
                            </Typography>
                        </IconButton>
                    </Box>
                ) : (
                    <Box
                        sx={{
                            display: 'flex',
                            gap: 2,
                        }}
                    >
                        <IconButton
                            onClick={openLogin}
                            variant="outlined"
                            sx={{
                                cursor: 'pointer',
                                border: '1px solid',
                                borderColor: 'white',
                                borderRadius: '10px',
                                boxSizing: 'border-box',
                                p: 1,
                                ':hover': {
                                    scale: '1.02',
                                    boxShadow:
                                        'inset 1px 1px 28px 0px #888888;',
                                },
                            }}
                        >
                            <LoginIcon
                                alt="Login"
                                sx={{ color: 'white', fontSize: 22 }}
                            />
                            <Typography
                                variant="button"
                                color="white"
                                sx={{ mx: 1 }}
                            >
                                Login
                            </Typography>
                        </IconButton>

                        <IconButton
                            onClick={openRegister}
                            variant="outlined"
                            sx={{
                                cursor: 'pointer',
                                border: '1px solid',
                                borderColor: 'white',
                                borderRadius: '10px',
                                boxSizing: 'border-box',
                                p: 1,
                                ':hover': {
                                    scale: '1.02',
                                    boxShadow:
                                        'inset 1px 1px 28px 0px #888888;',
                                },
                            }}
                        >
                            <GroupAddIcon
                                alt="Login"
                                sx={{ color: 'white', fontSize: 22 }}
                            />
                            <Typography
                                variant="button"
                                color="white"
                                sx={{ mx: 1 }}
                            >
                                Sign In
                            </Typography>
                        </IconButton>
                    </Box>
                )}
            </Paper>
            <FormWrapper isOpen={isLoginOpen} onClose={closeLogin}>
                <LoginForm onClose={closeLogin} />
            </FormWrapper>
            <FormWrapper isOpen={isRegisterOpen} onClose={closeRegister}>
                <RegisterForm onClose={closeRegister} />
            </FormWrapper>
        </AppBar>
    )
}

export { Header }
