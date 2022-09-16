import { useEffect, useState } from 'react';
import { Button, Typography } from '@mui/material';
import RemoveCircleOutlineIcon from '@mui/icons-material/RemoveCircleOutline';

// Declaring type for Form Values
type oxygenValues = {
    title: string,
    oxygenQuantity: string;
    price: string
};

type soilValues = {
    title: string,
    soilQuantity: string;
    price: string
};

const Cart = () => {
    const [oxygenData, setOxygenData] = useState<oxygenValues>()
    const [soilData, setSoilData] = useState<soilValues>()

    useEffect(() => {
        setOxygenData(JSON.parse(localStorage.getItem('oxygen') || '{}'))
        setSoilData(JSON.parse(localStorage.getItem('soil') || '{}'))
    }, [])

    const handleSoil = () => {
        localStorage.removeItem('soil')
        alert('Successfully removed')
        location.reload()
    }

    const handleOxygen = () => {
        localStorage.removeItem('oxygen')
        alert('Successfully removed')
        location.reload()
    }

    const handleCheckout = () => {
        const items = [
            { 'id': 1, oxygenData },
            { 'id': 2, soilData }
        ]

        // Fetch method for sending data to the backend server
        fetch('/create-checkout', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(items)
        }).then(async res => {
            if (res.ok) {
                return res.json()
            }
            const json = await res.json();
            Promise.reject(json);
        }).then(url => {
            // console.log(url)
            localStorage.removeItem('soil')
            localStorage.removeItem('oxygen')
            window.location = url;
        }).catch(e => {
            console.log(e)
        })
    }

    return (
        <div className="cart">
            <Typography gutterBottom variant="h4" component="div">
                Checkout
            </Typography>
            <Typography gutterBottom variant="h5" component="div">
                Total:
            </Typography>
            <Typography gutterBottom variant="h4" component="div">
                {
                    (oxygenData?.price && soilData?.price)
                        ? <strong>${(Number(oxygenData?.price) * Number(oxygenData.oxygenQuantity)) + (Number(soilData?.price) * Number(soilData?.soilQuantity))}</strong>
                        : (oxygenData?.price && !soilData?.price)
                            ? <strong>${(Number(oxygenData?.price) * Number(oxygenData.oxygenQuantity))}</strong>
                            : (!oxygenData?.price && soilData?.price)
                                ? <strong>${Number(soilData?.price) * Number(soilData?.soilQuantity)}</strong>
                                : <strong>$0</strong>
                }
            </Typography>
            <ul>
                <li>
                    <Typography gutterBottom variant="h6" component="div">
                        List:
                    </Typography>
                </li>
                {
                    (oxygenData?.title == 'Oxygen Tank') ?
                        <>
                            <li style={{ display: 'flex', justifyContent: 'space-between', margin: '0px 10px 0px 10px' }}>
                                <Typography gutterBottom variant="subtitle1" component="div">
                                    {oxygenData?.title}
                                </Typography>
                                <Typography gutterBottom variant="subtitle1" component="div">
                                    ${Number(oxygenData?.oxygenQuantity) * Number(oxygenData?.price)}
                                </Typography>
                            </li>
                            <li style={{ display: 'flex', justifyContent: 'space-between', margin: '0px 10px 0px 10px' }}>
                                <Typography gutterBottom variant="subtitle2" component="div" style={{ display: 'flex', alignItems: 'center' }}>
                                    <RemoveCircleOutlineIcon onClick={handleOxygen} /><em>Qty:{oxygenData?.oxygenQuantity}</em>
                                </Typography>
                                <Typography gutterBottom variant="subtitle2" component="div">
                                    <em>${oxygenData?.price}/each</em>
                                </Typography>
                            </li>
                        </>
                        :
                        <></>
                }
                {
                    (soilData?.title == 'Soil Bag') ?
                        <>
                            <li style={{ display: 'flex', justifyContent: 'space-between', margin: '0px 10px 0px 10px' }}>

                                <Typography gutterBottom variant="subtitle1" component="div">
                                    {soilData?.title}
                                </Typography>
                                <Typography gutterBottom variant="subtitle1" component="div">
                                    ${Number(soilData?.soilQuantity) * Number(soilData?.price)}
                                </Typography>
                            </li>
                            <li style={{ display: 'flex', justifyContent: 'space-between', margin: '0px 10px 0px 10px' }}>
                                <Typography gutterBottom variant="subtitle2" component="div" style={{ display: 'flex', alignItems: 'center' }}>
                                    <RemoveCircleOutlineIcon onClick={handleSoil} /><em>Qty:{soilData?.soilQuantity}</em>
                                </Typography>
                                <Typography gutterBottom variant="subtitle2" component="div">
                                    <em>${soilData?.price}/each</em>
                                </Typography>
                            </li>
                        </>
                        :
                        <></>
                }
                {
                    oxygenData?.oxygenQuantity || soilData?.soilQuantity
                        ? <Button id='checkout-btn' size="small" variant="contained" style={{ position: 'absolute', right: '10px', marginTop: '50px' }} onClick={handleCheckout}>Confirm</Button>
                        : <Button id='checkout-btn' size="small" variant="contained" style={{ position: 'absolute', right: '10px', marginTop: '50px' }} onClick={handleCheckout} disabled>Confirm</Button>
                }
            </ul>
        </div >
    )
}

export default Cart