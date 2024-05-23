import React, { useContext } from 'react';
import { useParams } from "react-router";
import MainContext from "../../../context/context";
import { Helmet } from "react-helmet";
import { Link } from "react-router-dom"
import "./Detail.css"

const Detail = () => {
    const { data } = useContext(MainContext);
    const { id } = useParams();
    const target = data.find((x) => x._id == id);

    return (
        <div>
            <Helmet>
                <title>Detail</title>
            </Helmet>

            {target && (
                <>
                    <div className='detail_all'>

                        <div className="detail_img">
                            <img src={target.image} alt="" width={"300px"} height={"350px"} />
                        </div>

                        <div className="detail_text">
                            <h2>Title:{target.title}</h2>
                            <h3>Price:{target.price}$</h3>
                        </div>
                    </div>
                </>
            )}
        </div>
    );
};

export default Detail