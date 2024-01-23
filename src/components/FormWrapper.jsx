import { Modal, Box } from '@mui/material'

const FormWrapper = (props) => {
    return (
        <Modal open={props.isOpen} onClose={props.onClose}>
            <Box
                sx={{
                    display: 'flex',
                    flexDirection: 'column',
                    position: 'absolute',
                    justifyContent: 'space-evenly',
                    width: '30vw',
                    top: '50%',
                    left: '50%',
                    transform: 'translate(-50%, -50%)',
                }}
            >
                {props.children}
            </Box>
        </Modal>
    )
}

export { FormWrapper }
