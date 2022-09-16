import { Link } from 'react-router-dom';
import { Button, Typography } from '@mui/material';

const About = () => {
    return (
        <div className="about">
            <div className='notice'>
                <Typography variant='caption' >FREE SHIPPING FOR ORDERS OVER $3000!</Typography>
            </div>
            <img className='soil-image' src="https://res.cloudinary.com/lqd270894/image/upload/w_1000,ar_16:9,c_fill,g_auto,e_sharpen/v1659931401/groundUp/soil/02.jpg" alt="Bag of Soil and Gardening Fork" />
            <div className='soil-heading'>
                <Typography variant='h5'>GroundUP is a proud family of Australians doing business with our famous Australian Soil and Fresh Crisp Air.</Typography>
                <Link to='/shop'>
                    <Button variant="contained" color="success" sx={{ m: 1 }}>
                        BUY NOW!
                    </Button>
                </Link>
            </div>
            <img className='oxygen-image' src="https://res.cloudinary.com/lqd270894/image/upload/v1659931057/groundUp/oxygen/01.jpg" alt="Oxygen Tanks by the Sea" />
            <div className='oxygen-heading'>
                <Typography variant='subtitle1'>Promising to deliver the highest possible standards of soil from the great land of Australia, along with its rich oxygen collected right off the beaches of the Great Barrier Reef.</Typography>
                <Link to='/shop'>
                    <Button variant="contained" color="success" sx={{ m: 1 }}>
                        BUY NOW!
                    </Button>
                </Link>
            </div>
        </div>
    )
}

export default About