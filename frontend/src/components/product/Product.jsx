import React, { useContext, useState } from 'react'
import "./Product.css"
import MainContext from '../../context/context'
import { Link } from "react-router-dom"
import Basket from '../../pages/site/basket/Basket'

const Product = () => {
    const { data, setdata, basket, setBasket } = useContext(MainContext);

    function addToBasket(_id) {
        const target = basket.find((x) => x._id == _id);
        if (target) {
            target.count++;
            target.totalPrice += target.price
        }
        else {
            const items = data.find((x) => x._id == _id);
            basket.push(items)

        }

        setBasket([...basket])
        console.log(basket);
    }
    const [search, setSearch] = useState("");
    const [sortBy, setSortBy] = useState(null);
    return (
        <div>
            <div className='product'>
                <div className="product_text">
                    <h4>Our Products</h4>
                    <p> Lorem ipsum dolor sit amet, consectetur adipisicing elit. Commodi, perspiciatis!</p>
                    <button>View All Products <i class="fa-solid fa-arrow-right"></i></button>
                </div>

                <div className='button_sira'>
                    <input type='text' placeholder='search data' value={search} onChange={(e) => setSearch(e.target.value)} />
                    <button onClick={() => setSortBy({ field: "title", asc: true })}>A-Z</button>
                    <button onClick={() => setSortBy({ field: "title", asc: false })}>Z-A</button>
                    <button id='az' onClick={() => setSortBy({ field: "price", asc: true })}>Azalan</button>
                    <button onClick={() => setSortBy({ field: "price", asc: false })}>Artan</button>
                    <button onClick={() => setSortBy(null)}>default</button>
                </div>

                <div className="container">
                    <div className="row " >

                        {
                            data
                                .filter(x => x.title.toLowerCase().includes(search.toLocaleLowerCase()))
                                .sort((a, b) => {
                                    if (!sortBy) {
                                        return 0;
                                    }
                                    else if (sortBy.asc) {
                                        return (a[sortBy.field] > b[sortBy.field]) ? 1 : ((b[sortBy.field] > a[sortBy.field]) ? -1 : 0)
                                    }
                                    else if (sortBy.asc == false) {
                                        return (a[sortBy.field] < b[sortBy.field]) ? 1 : ((b[sortBy.field] < a[sortBy.field]) ? -1 : 0)
                                    }

                                })
                                .map((item, index) => (
                                    <div className="col-4" key={index}>
                                        <div className='product_card'>
                                            <div className="product_img">
                                                <img src={item.image} alt="" />
                                            </div>
                                            <div className="product_card_text">
                                                <p>{item.title}</p>
                                                <span>{item.price}$</span>

                                                <Link to={`/detail/${item._id}`}>View Details</Link>

                                                <button id='basket' onClick={() => { addToBasket(item._id) }}  ><i class="fa-solid fa-bag-shopping"></i></button>



                                            </div>
                                        </div>

                                    </div>
                                )
                                )
                        }
                    </div>
                </div>

            </div>
        </div>
    )
}

export default Product