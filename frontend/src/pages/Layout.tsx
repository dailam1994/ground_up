import { Routes, Route } from "react-router-dom"
import About from "./About"
import Cart from "./Cart"
import Home from "./Home"
import Product from "./Product"
import Shop from "./Shop"

const Layout = () => {
    return (
        <>
            <Routes>
                <Route path="/cart" element={<Cart />} />
                <Route path="/shop" element={<Shop />} />
                <Route path="/product" element={<Product />} />
                <Route path="/about" element={<About />} />
                <Route path="/" element={<Home />} />
            </Routes>
        </>
    )
}

export default Layout