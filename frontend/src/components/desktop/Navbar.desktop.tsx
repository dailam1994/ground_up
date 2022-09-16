import { useEffect, useState } from 'react';
import { NavLink } from 'react-router-dom';
import { Badge, Typography } from "@mui/material"
import ShoppingCartOutlinedIcon from '@mui/icons-material/ShoppingCartOutlined';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import InstagramIcon from '@mui/icons-material/Instagram';
import TwitterIcon from '@mui/icons-material/Twitter';

export const activeStyle = {
    textDecoration: 'none',
    color: 'red !imporant'
};

const NavbarD = () => {
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
        <div className='d-sidebar'>
            <div className='d-brand'>
                <img src='https://res.cloudinary.com/lqd270894/image/upload/v1659930982/groundUp/logo.png' alt='Logo' />
                <Typography variant='h5'>GroundUP</Typography>
            </div>
            <div className='d-navbar'>
                <ul>
                    <li id='home' className='d-navbar-items'>
                        <NavLink to="/" style={({ isActive }) => (
                            isActive ? activeStyle : {}
                        )}>
                            <Typography variant='subtitle1'>HOME</Typography>
                        </NavLink>
                    </li>
                    <li id='about' className='d-navbar-items'>
                        <NavLink to="/about" style={({ isActive }) => (
                            isActive ? activeStyle : {}
                        )}>
                            <Typography variant='subtitle1'>ABOUT</Typography>
                        </NavLink>
                    </li>
                    <li id='products' className='d-navbar-items'>
                        <NavLink to="/product" style={({ isActive }) => (
                            isActive ? activeStyle : {}
                        )}>
                            <Typography variant='subtitle1'>PRODUCTS</Typography>
                        </NavLink>
                    </li>
                    <li id='shop' className='d-navbar-items'>
                        <NavLink to="/shop" style={({ isActive }) => (
                            isActive ? activeStyle : {}
                        )}>
                            <Typography variant='subtitle1'>SHOP</Typography>
                        </NavLink>
                    </li>
                    <li id='cart' className='d-navbar-items'>
                        <NavLink to="/cart" style={({ isActive }) => (
                            isActive ? activeStyle : {}
                        )}>
                            <Badge badgeContent={total} color="warning" className='badge'>
                                <ShoppingCartOutlinedIcon fontSize='large' />
                            </Badge>
                            <Typography variant='subtitle1'>CART</Typography>
                        </NavLink>
                    </li>
                </ul>
                <hr />
                <div className='social'>
                    <a href="https://www.linkedin.com/">
                        <LinkedInIcon fontSize='large' style={{ color: 'rgb(0,114,177)', backgroundColor: 'rgb(255,255,255)', borderRadius: '10px' }} />
                    </a>
                    <a href="https://www.instagram.com/">
                        <InstagramIcon fontSize='large' style={{ background: `radial-gradient(circle at 30% 107%, #fdf497 0%, #fdf497 5%, #fd5949 45%, #d6249f 60%, #285AEB 90%)`, borderRadius: '10px', color: 'rgb(255,255,255)' }} />
                    </a>
                    <a href="https://www.twitter.com/">
                        <TwitterIcon fontSize='large' style={{ color: 'rgb(29,161,242)', backgroundColor: 'rgb(255,255,255)', borderRadius: '10px' }} />
                    </a>
                </div>
                <div className='d-footer'>
                    <Typography variant='subtitle2'>GroundUP © Copyrights | All Rights Reserved 2022</Typography>
                </div>
            </div>
        </div>
    )
}

export default NavbarD