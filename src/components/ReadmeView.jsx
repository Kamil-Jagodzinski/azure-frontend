import { Box } from '@mui/material'
import { GitContext } from '../GitContext'
import { useContext } from 'react'
import { marked } from 'marked'

const ReadmeView = () => {
    const { selectedRepo } = useContext(GitContext)
    const readme =
        selectedRepo !== null ? marked(selectedRepo) : 'No readme : /'

    return (
        <Box
            sx={{
                p: 0.5,
                boxSizing: 'border-box',
                height: '100%',
                display: 'flex',
                justifyContent: 'center',
            }}
        >
            <div
                title="README"
                overflow="auto"
                dangerouslySetInnerHTML={{ __html: readme }}
            ></div>
        </Box>
    )
}

export { ReadmeView }
