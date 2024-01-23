import { Box, Typography } from '@mui/material'
import { UserCell } from './UserCell'

const FollowingList = (props) => {
    return (
        <Box
            sx={{
                boxSizing: 'border-box',
            }}
        >
            {props.userlist !== null && props.userlist.length > 0 ? (
                props.userlist.map((user) => (
                    <UserCell
                        login={user.login}
                        url={user.url}
                        avatar={user.avatar}
                        key={user.login}
                    />
                ))
            ) : (
                <Typography variant="h3">Ups!? No users found </Typography>
            )}
        </Box>
    )
}

export { FollowingList }
