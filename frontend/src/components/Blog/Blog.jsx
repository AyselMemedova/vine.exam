import React from 'react'
import "./Blog.css"

const Blog = () => {
    return (
        <div>
            <div className='blog'>
                <div className="blog_text">
                    <h3>Wine's Blog</h3>
                    <p> lorem ipsum dolor sit amet, consectetur adipisicing elit. Commodi, perspiciatis!</p>
                    <span>View All Products  <i class="fa-solid fa-arrow-right"></i></span>

                </div>
                <div className="blog_cards">
                    <div className="container">
                        <div className="row">
                            <div className="col-4">
                                <div className="blog_card">
                                    <div className="blog_card_img">
                                        <img src="https://preview.colorlib.com/theme/wines/images/img_1.jpg.webp" alt="" />
                                    </div>

                                    <div className="blog_card_text">
                                        <h3>What You Need To Know About Premium Rosecco</h3>
                                        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eligendi temporibus praesentium neque, voluptatum quam quibusdam.</p>
                                        <span>Dave Rogers in News</span>
                                    </div>
                                </div>
                            </div>

                            <div className="col-4">
                                <div className="blog_card">
                                    <div className="blog_card_img">
                                        <img src="https://preview.colorlib.com/theme/wines/images/img_2.jpg.webp" alt="" />
                                    </div>

                                    <div className="blog_card_text">
                                        <h3>What You Need To Know About Premium Rosecco</h3>
                                        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eligendi temporibus praesentium neque, voluptatum quam quibusdam.</p>
                                        <span>Dave Rogers in News</span>
                                    </div>
                                </div>
                            </div>

                            <div className="col-4">
                                <div className="blog_card">
                                    <div className="blog_card_img">
                                        <img src="https://preview.colorlib.com/theme/wines/images/img_3.jpg.webp" alt="" />
                                    </div>

                                    <div className="blog_card_text">
                                        <h3>What You Need To Know About Premium Rosecco</h3>
                                        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eligendi temporibus praesentium neque, voluptatum quam quibusdam.</p>
                                        <span>Dave Rogers in News</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Blog