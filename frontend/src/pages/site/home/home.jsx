
import React, { useContext } from 'react'
import { Helmet } from 'react-helmet'
import MainContext from '../../../context/context'
import Slider from '../../../components/slider/slider'
import Product from '../../../components/product/Product'
import Wines from '../../../components/wines/Wines'
import Customer from '../../../components/customer/Customer'
import Blog from '../../../components/Blog/Blog'

const Home = () => {
    const { data, setdata } = useContext(MainContext)
    return (
        <>
            <Helmet>
                <title>Home</title>
            </Helmet>

            <Slider />
            <Product />
            <Wines/>
            <Customer/>
            <Blog/>
        </>
    )
}

export default Home
