import React from 'react'
import { Paper, Typography, Link, Stack } from '@mui/material'
import { GitContext } from '../GitContext'
import { useContext, useMemo } from 'react'
import { getReadme } from '../api/githubAPI'

const RepositoryPanel = (props) => {
    const { setLower, setSelectedRepo, selectedUser } = useContext(GitContext)
    const { name, url, lang, stargazers, watchers, forks, openIssues } =
        props.repository

    const selectedRepo = async () => {
        let readme = await getReadme(selectedUser.login, name)
        setSelectedRepo(readme)
        setLower('readme')
    }

    const getRandomColor = () => {
        const r = Math.floor(Math.random() * 256)
        const g = Math.floor(Math.random() * 256)
        const b = Math.floor(Math.random() * 256)
        return `rgb(${r}, ${g}, ${b})`
    }

    const borderColor = useMemo(() => {
        return getRandomColor()
    }, [])

    return (
        <Paper
            onClick={() => {
                selectedRepo()
            }}
            sx={{
                py: 1,
                mx: 2,
                my: 1,
                cursor: 'pointer',
                display: 'flex',
                flexDirection: 'column',
                border: '3px solid ',
                borderColor: borderColor,
                borderRadius: 4,
                boxSizing: 'border-box',
                ':hover': {
                    scale: '1.01',
                },
            }}
        >
            <Stack
                display="flex"
                direction="row"
                sx={{ justifyContent: 'space-between', mx: 3 }}
            >
                <Link
                    variant="h5"
                    sx={{ marginBottom: '12px' }}
                    href={url}
                    target="_blank"
                    underline="hover"
                >
                    {name}
                </Link>
                <Typography variant="body1" sx={{ marginBottom: '8px' }}>
                    {lang}
                </Typography>
            </Stack>

            <Stack display="flex" direction="row" sx={{ mx: 3, gap: 2 }}>
                <Typography variant="body1" sx={{ marginBottom: '8px' }}>
                    Stars: {stargazers}
                </Typography>
                <Typography variant="body1" sx={{ marginBottom: '8px' }}>
                    Watchers: {watchers}
                </Typography>
                <Typography variant="body1" sx={{ marginBottom: '8px' }}>
                    Forks: {forks}
                </Typography>
                <Typography variant="body1" sx={{ marginBottom: '8px' }}>
                    Open Issues: {openIssues}
                </Typography>
            </Stack>
        </Paper>
    )
}

export { RepositoryPanel }
