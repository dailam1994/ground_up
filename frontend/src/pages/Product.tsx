import { Link } from 'react-router-dom';
import { Button, Typography } from '@mui/material';

const Product = () => {
    return (
        <div className="product">
            <div className='notice'>
                <Typography variant='caption'>FREE SHIPPING FOR ORDERS OVER $3000!</Typography>
            </div>
            <div className='oxygen-heading'>
                <Typography variant='h4'>OXYGEN</Typography>
            </div>
            <div id='image1'>
                <img className='oxygen-image' id='oxygen-image1' src="https://res.cloudinary.com/lqd270894/image/upload/v1659931106/groundUp/oxygen/03.jpg" alt="Three Oxygen Tanks" />
            </div>
            <div id='image2'>
                <img className='oxygen-image' id='oxygen-image2' src="https://res.cloudinary.com/lqd270894/image/upload/v1659931277/groundUp/oxygen/05.jpg" alt="Oxygen Tanks with Meter Gauges" />
            </div>
            <div id='image3'>
                <img className='oxygen-image' id='oxygen-image3' src="https://res.cloudinary.com/lqd270894/image/upload/w_1000,ar_16:9,c_fill,g_auto,e_sharpen/v1659931303/groundUp/oxygen/06.jpg" alt="Oxygen Tanks  from Dentistry" />
            </div>
            <Link to='/shop'>
                <Button variant="contained" color="success" sx={{ m: 1 }}>
                    BUY NOW!
                </Button>
            </Link>
            <div className='soil-heading'>
                <Typography variant='h4'>SOIL</Typography>
            </div>
            <div id='image4'>
                <img className='soil-image' id='soil-image1' src="https://res.cloudinary.com/lqd270894/image/upload/v1659931437/groundUp/soil/03.jpg" alt="Open Soil Bag" />
            </div>
            <div id='image5'>
                <img className='soil-image' id='soil-image2' src="https://res.cloudinary.com/lqd270894/image/upload/v1659931458/groundUp/soil/04.jpg" alt="Stack of Soil Bags" />
            </div>
            <div id='image6'>
                <img className='soil-image' id='soil-image3' src="https://res.cloudinary.com/lqd270894/image/upload/v1659931479/groundUp/soil/05.jpg" alt="Soil and Trucker" />
            </div>
        </div>
    )
}

export default Product