import { useEffect, useState } from 'react';
import { NavLink } from 'react-router-dom';
import { Badge, Typography } from "@mui/material"
import HomeOutlinedIcon from '@mui/icons-material/HomeOutlined';
import InfoOutlinedIcon from '@mui/icons-material/InfoOutlined';
import Inventory2OutlinedIcon from '@mui/icons-material/Inventory2Outlined';
import StorefrontOutlinedIcon from '@mui/icons-material/StorefrontOutlined';
import ShoppingCartOutlinedIcon from '@mui/icons-material/ShoppingCartOutlined';
import { activeStyle } from '../desktop/Navbar.desktop';

const NavbarM = () => {
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
        <div className='m-navbar'>
            <ul>
                <li id='home' className='m-navbar-items'>
                    <NavLink to="/" style={({ isActive }) => (
                        isActive ? activeStyle : {}
                    )}>
                        <HomeOutlinedIcon fontSize='large' />
                        <Typography variant='caption'>HOME</Typography>
                    </NavLink>
                </li>
                <li id='about' className='m-navbar-items'>
                    <NavLink to="/about" style={({ isActive }) => (
                        isActive ? activeStyle : {}
                    )}>
                        <InfoOutlinedIcon fontSize='large' />
                        <Typography variant='caption'>ABOUT</Typography>
                    </NavLink>
                </li>
                <li id='products' className='m-navbar-items'>
                    <NavLink to="/product" style={({ isActive }) => (
                        isActive ? activeStyle : {}
                    )}>
                        <Inventory2OutlinedIcon fontSize='large' />
                        <Typography variant='caption'>PRODUCTS</Typography>
                    </NavLink>
                </li>
                <li id='shop' className='m-navbar-items'>
                    <NavLink to="/shop" style={({ isActive }) => (
                        isActive ? activeStyle : {}
                    )}>
                        <StorefrontOutlinedIcon fontSize='large' />
                        <Typography variant='caption'>SHOP</Typography>
                    </NavLink>
                </li>
                <li id='cart' className='m-navbar-items'>
                    <NavLink to="/cart" style={({ isActive }) => (
                        isActive ? activeStyle : {}
                    )}>
                        <Badge badgeContent={total} className='badge'>
                            <ShoppingCartOutlinedIcon fontSize='large' />
                        </Badge>
                        <Typography variant='caption'>CART</Typography>
                    </NavLink>
                </li>
            </ul>
        </div >
    )
}

export default NavbarM