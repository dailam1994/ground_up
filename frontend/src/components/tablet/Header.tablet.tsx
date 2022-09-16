import { useEffect, useState } from 'react';
import { NavLink } from 'react-router-dom';
import { Badge, Typography } from "@mui/material"
import ShoppingCartOutlinedIcon from '@mui/icons-material/ShoppingCartOutlined';
import { activeStyle } from '../desktop/Navbar.desktop';

const HeaderT = () => {
    const [oxygenValue, setOxygenValue] = useState(0)
    const [soilValue, setSoilValue] = useState(0)
    const [total, setTotal] = useState(0)

    useEffect(() => {
        if (localStorage.getItem('oxygen') !== null) {
            const { oxygenQuantity } = JSON.parse(localStorage.getItem('oxygen') || '{}')
            setOxygenValue(Number(oxygenQuantity))
        }

        if (localStorage.getItem('soil') != null) {
            const { soilQuantity } = JSON.parse(localStorage.getItem('soil') || '{}')

            setSoilValue(Number(soilQuantity))
        }

        setTotal(Number(oxygenValue + soilValue))
    }, [oxygenValue, soilValue])

    return (
        <div className='t-header'>
            <div className='t-brand'>
                <img src='https://res.cloudinary.com/lqd270894/image/upload/v1659930982/groundUp/logo.png' alt='Logo' />
                <Typography variant='h5'>GroundUP</Typography>
            </div>
            <div className='t-navbar'>
                <ul>
                    <li id='home' className='t-navbar-items'>
                        <NavLink to="/" style={({ isActive }) => (
                            isActive ? activeStyle : {}
                        )}>
                            <Typography variant='subtitle1'>HOME</Typography>
                        </NavLink>
                    </li>
                    <li id='about' className='t-navbar-items'>
                        <NavLink to="/about" style={({ isActive }) => (
                            isActive ? activeStyle : {}
                        )}>
                            <Typography variant='subtitle1'>ABOUT</Typography>
                        </NavLink>
                    </li>
                    <li id='products' className='t-navbar-items'>
                        <NavLink to="/product" style={({ isActive }) => (
                            isActive ? activeStyle : {}
                        )}>
                            <Typography variant='subtitle1'>PRODUCTS</Typography>
                        </NavLink>
                    </li>
                    <li id='shop' className='t-navbar-items'>
                        <NavLink to="/shop" style={({ isActive }) => (
                            isActive ? activeStyle : {}
                        )}>
                            <Typography variant='subtitle1'>SHOP</Typography>
                        </NavLink>
                    </li>
                    <li id='cart' className='t-navbar-items'>
                        <NavLink to="/cart" style={({ isActive }) => (
                            isActive ? activeStyle : {}
                        )}>
                            <Badge badgeContent={total} className='badge'>
                                <ShoppingCartOutlinedIcon fontSize='large' />
                            </Badge>
                            <Typography variant='subtitle1'>CART</Typography>
                        </NavLink>
                    </li>
                </ul>
            </div>
        </div >
    )
}

export default HeaderT