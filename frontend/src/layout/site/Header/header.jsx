import React from 'react'
import "./header.css"
import {Link} from "react-router-dom"

const Header = () => {
return (
    <div>
        <div className='header_all'>
            <div className='header_top'>
                <img src="https://preview.colorlib.com/theme/wines/images/logo.png.webp" alt="" />

            </div>

            <div className='header_bottom'>
                <ul>
                    <li ><Link to={"/"}>Home</Link></li>
                    <li><Link to={"/basket"}>Basket</Link></li>
                    <li>About</li>
                    <li>Wines</li>
                    <li>Shop</li>
                    <li>Contact</li>
                </ul>

            </div>

        </div>
    </div>
)
}

export default Header
                            