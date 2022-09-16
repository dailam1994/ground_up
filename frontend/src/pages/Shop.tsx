import { useState } from "react";
import { SubmitHandler, useForm } from "react-hook-form"
import { Button, Card, CardContent, CardMedia, TextField, Typography } from '@mui/material';

// Declaring type for Form Values
export type FormValues = {
    oxygenQuantity: string;
    soilQuantity: string;
};

const Shop = () => {

    const {
        register,
        handleSubmit,
    } = useForm<FormValues>()


    // Function to handle form submission
    const oxygenOnSubmit: SubmitHandler<FormValues> = (formData) => {
        const { oxygenQuantity } = formData
        const data = {
            title: 'Oxygen Tank',
            oxygenQuantity,
            price: '100',
        }

        // If statement to handle quantity of oxygen tanks
        if (Number(oxygenQuantity) > 0) {
            // Storing data in local storage
            localStorage.setItem('oxygen', JSON.stringify(data))
            alert('Successfully added to cart')
            location.reload()
        } else {
            alert('Quantity value needs to be greater than 0.')
        }
    }

    // Function to handle form submission
    const soilOnSubmit: SubmitHandler<FormValues> = (formData) => {
        const { soilQuantity } = formData
        const data = {
            title: 'Soil Bag',
            soilQuantity,
            price: '10'
        }

        // If statement to handle quantity of oxygen tanks
        if (Number(soilQuantity) > 0) {
            // Storing data in local storage
            localStorage.setItem('soil', JSON.stringify(data))
            alert('Successfully added to cart')
            location.reload()
        } else {
            alert('Quantity value needs to be greater than 0.')
        }

        console.log(data);
    }

    return (
        <div className="shop">
            <div className='notice'>
                <Typography variant='caption'>FREE SHIPPING FOR ORDERS OVER $3000!</Typography>
            </div>
            <Card className='oxygen-card'>
                <div className='oxygen-card-image-container'>
                    <CardMedia
                        component="img"
                        image="https://res.cloudinary.com/lqd270894/image/upload/v1659931085/groundUp/oxygen/02.jpg"
                        alt="Single Oxygen Tank"
                    />
                </div>

                <CardContent>
                    <Typography gutterBottom variant="h5" component="div">
                        Oxygen Tank
                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                        Storage of the purest qualitys of air one can capture.
                    </Typography>
                    <br />
                    <Typography gutterBottom variant="h6" component="div">
                        Price: <strong style={{ fontSize: '30px' }}>$100</strong>
                    </Typography>
                </CardContent>
                <form className='oxygen-form' onSubmit={handleSubmit(oxygenOnSubmit)}>
                    <TextField
                        id="quanity"
                        label="Quantity"
                        variant="standard"
                        placeholder="0"
                        defaultValue={0}
                        {...register("oxygenQuantity")}
                    />
                    <Button type="submit" size="small" variant="contained">Add to Cart</Button>
                </form>
            </Card>
            <Card className='soil-card'>
                <div className='soil-card-image-container'>
                    <CardMedia
                        component="img"
                        image="https://res.cloudinary.com/lqd270894/image/upload/v1659931507/groundUp/soil/06.jpg"
                        alt="Bag of Soil"
                    />
                </div>
                <CardContent>
                    <Typography gutterBottom variant="h5" component="div">
                        Soil Bag
                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                        The finest soil one person can use.
                    </Typography>
                    <br />
                    <Typography gutterBottom variant="h6" component="div">
                        Price: <strong style={{ fontSize: '30px' }}>$10</strong>
                    </Typography>
                </CardContent>
                <form className='soil-form' onSubmit={handleSubmit(soilOnSubmit)}>
                    <TextField
                        id="quanity"
                        label="Quantity"
                        variant="standard"
                        placeholder="0"
                        defaultValue={0}
                        {...register("soilQuantity")}
                    />
                    <Button type="submit" size="small" variant="contained">Add to Cart</Button>
                </form>
            </Card>
        </div>
    )
}

export default Shop