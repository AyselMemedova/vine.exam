import React, { useContext } from 'react'
import { Helmet } from 'react-helmet'
import MainContext from '../../../context/context'

const Wishlist = () => {
    const { wishlist,setWishlist} = useContext(MainContext)
    return (
        <div>
            <Helmet>
                <title>Wishlist</title>
            </Helmet>

            <table class="table table-striped">
                <thead>
                    <tr>
                        <th scope="col">#</th>
                        <th scope="col">İmage</th>
                        <th scope="col">Title</th>
                        <th scope="col">Price</th>
        
                    </tr>
                </thead>
                <tbody>
                    {wishlist &&
                        wishlist.map((item, index) => (
                            <tr key={index}>
                                <th scope="row">{index + 1}</th>
                                <td><img width={"60px"} height={"60px"} src={item.image} alt="" /></td>
                                <td>{item.title}</td>
                                <td>{item.price}</td>
                            </tr>
                        ))
                    }

                </tbody>
            </table>
        </div>
    )
}

export default Wishlist