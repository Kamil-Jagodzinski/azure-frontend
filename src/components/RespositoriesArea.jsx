import React from 'react'
import { Box, Typography } from '@mui/material'
import { RepositoryPanel } from './RepositoryPanel'

const RepositoryArea = (props) => {
    return (
        <Box sx={{ width: '100%', height: '100%', overflow: 'auto' }}>
            {props.repos !== null && props.repos.length > 0 ? (
                props.repos.map((repo) => (
                    <RepositoryPanel repository={repo} key={repo.name} />
                ))
            ) : (
                <Typography variant="h3">Ups!? No repo found </Typography>
            )}
        </Box>
    )
}

export { RepositoryArea }
