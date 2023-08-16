import React from 'react'
import "./Seasons.css";
import "react-multi-carousel/lib/styles.css";
import { useEffect, useState } from "react";
import axios from "axios";
import Slide from '../slide/Slide';
import { Link } from 'react-router-dom';



function SeasonsOffers() {
    const [data, setData] = useState([]);

 
    useEffect(()=>{
        axios.get("http://localhost:4500/api/item?category=seasons")
        .then((response)=>setData(response.data))
    },[])
    return (
        <div>
        <h1 className="special-offers">Seasons Offers</h1>
        <div className="offers ">
        <Slide arr={data} />
        
        </div>
        <div className="see-more">
        <Link to={'/showmore/seasons'}>
                <button className="see-more-but" >See more</button>
                </Link>
        </div>
    </div>
    )
}






export default SeasonsOffers;