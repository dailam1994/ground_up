import { Button, Typography } from '@mui/material';

const PlayGround = () => {
    return (
        <div className='playground'>
            Hello Universe
            <Button variant="contained" color="success">
                Success
            </Button>
            <Typography variant="h2">
                Heading
            </Typography>
        </div>
    )
}

export default PlayGround