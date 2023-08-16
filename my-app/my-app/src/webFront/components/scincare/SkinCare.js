import React from "react";
import './Skincare.css'
import { useEffect, useState } from "react";
import axios from "axios";
import Slide from '../slide/Slide';
import { Link } from 'react-router-dom';


function SkinCare() {

    const [data, setData] = useState([]);


    useEffect(() => {
        axios.get("http://localhost:4500/api/item?category=cosmetics")
            .then((response) => setData(response.data))
    },[])
    return (
        <div>
            <h1 className="special-offers">Skin Care</h1>
            <div className="offers ">
                <Slide arr={data} />
            </div>
            <div className="see-more">
            <Link to={'/showmore/cosmetics'}>
                <button className="see-more-but" >See more</button>
                </Link>
            </div>
        </div>
    )
}

export default SkinCare;