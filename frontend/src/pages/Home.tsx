import { Link } from 'react-router-dom';
import { Button, Typography } from '@mui/material';

const Home = () => {
    return (
        <div className="home">
            <div className='notice'>
                <Typography variant='caption' >FREE SHIPPING FOR ORDERS OVER $3000!</Typography>
            </div>
            <img className='soil-image' src="https://res.cloudinary.com/lqd270894/image/upload/w_1000,ar_16:9,c_fill,g_auto,e_sharpen/v1659931377/groundUp/soil/01.jpg" alt="Hand Holding Mug of Soil" />
            <div className='soil-heading'>
                <Typography variant='h5'>I am a dirt person. I do not trust diamond or gold.</Typography>
                <Link to='/shop'>
                    <Button variant="contained" color="success" sx={{ m: 1 }}>
                        BUY NOW!
                    </Button>
                </Link>
            </div>
            <div className='soil-paragraph'>
                <Typography variant='subtitle1'>Soil, also commonly referred to as earth or dirt, is a mixture of organic matter, minerals, gases, liquids, and organisms that together support life.</Typography>
            </div>
            <img className='oxygen-image' src="https://res.cloudinary.com/lqd270894/image/upload/v1659931228/groundUp/oxygen/04.jpg" alt="Deep Sea Diver with Oxygen Tank" />
            <div className='oxygen-heading'>
                <Typography variant='subtitle1'>Plant trees. They give us two of the most crucial elements for our survival: oxygen and books.</Typography>
                <Link to='/shop'>
                    <Button variant="contained" color="success" sx={{ m: 1 }}>
                        BUY NOW!
                    </Button>
                </Link>
            </div>
            <div className='oxygen-paragraph'>
                <Typography variant='subtitle1'>Oxygen makes up around 21% of the Earth's atmosphere. It makes up around 50% of the Earth's crust, making it the most common element in the Earth.</Typography>
            </div>
        </div>
    )
}

export default Home