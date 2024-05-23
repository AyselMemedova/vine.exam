
import React from 'react'
import {Link} from "react-router-dom"
import "./header.css"

const Header = () => {
    return (
        <div>
            <div className="header_admin">
                <div className="logo">
                    <h1>Admin</h1>
                </div>
                <div className="list_admin">
                    <ul>
                        <li> <Link to={"/admin"}>Dashboard</Link> </li>
                        <li> <Link to={'/admin/add'}>Add Product</Link> </li>
                        <li>  <Link to={'/admin/productss'}>Product</Link> </li>
                    </ul>
                </div>
            </div>
        </div>
    )
}

export default Header
                                