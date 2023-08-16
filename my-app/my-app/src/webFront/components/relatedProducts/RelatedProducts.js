import React from "react";
import "react-multi-carousel/lib/styles.css";
import './RelatedProducts.css';
import Slide from "../slide/Slide";
import { useState, useEffect } from "react";
import axios from "axios"



function RelatedProducts({ category }) {



    const [data, setData] = useState([])

    useEffect(() => {
        axios.get("http://localhost:4500/api/item?limit=4&category=" + category)
            .then(response => setData(response.data))
    }, [category])

    return (
        <div>
            <h1 className="special-offers">Related  Products</h1>
            <div className="offers ">
                <Slide arr={data} />
            </div>
        </div>
    )
}

export default RelatedProducts;