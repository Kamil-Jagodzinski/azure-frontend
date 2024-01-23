import { Box, Typography } from '@mui/material'
import gitIcon from '../assets/Git-Icon-Black.png'

const EmptyPanel = () => {
    return (
        <Box
            sx={{
                width: '100%',
                height: '100%',
                mx: 'auto',
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'center',
                alignItems: 'center',
            }}
        >
            <img
                width="100px"
                height="100px"
                src={gitIcon}
                alt={'no-content'}
                color="rgba(40, 97, 243)"
            />
            <Typography variant="h6" sx={{ m: 1 }}>
                {' '}
                No content{' '}
            </Typography>
        </Box>
    )
}

export { EmptyPanel }
