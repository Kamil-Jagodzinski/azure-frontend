import { useContext, useState } from 'react'
import { TextField, InputAdornment, IconButton } from '@mui/material'
import SearchIcon from '@mui/icons-material/Search'
import { GitContext } from '../GitContext'
import { searchUsers } from '../api/githubAPI'

const SearchBar = () => {
    const [username, setUsername] = useState('')
    const { setUsers, setUpper } = useContext(GitContext)

    const handleKeyPress = (event) => {
        if (event.key === 'Enter') searchFunction()
    }

    const searchFunction = async () => {
        console.log('search: ', username)
        let users = await searchUsers(username)
        setUsers(users)
        setUpper('list')
    }

    return (
        <TextField
            variant="filled"
            value={username}
            label="Search"
            onChange={(e) => setUsername(e.target.value)}
            onKeyDown={handleKeyPress}
            sx={{
                width: '20rem',
                height: '2rem',
            }}
            InputProps={{
                endAdornment: (
                    <InputAdornment position="end">
                        <IconButton onClick={searchFunction}>
                            <SearchIcon sx={{ color: 'primary.main' }} />
                        </IconButton>
                    </InputAdornment>
                ),
            }}
        />
    )
}

export { SearchBar }
