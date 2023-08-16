import React from "react";
import './Others.css'
import { useEffect, useState } from "react";
import axios from "axios";
import Slide from '../slide/Slide';
import { Link } from "react-router-dom";



function Others() {
    const [data, setData] = useState([]);

  
    useEffect(() => {
        axios.get("http://localhost:4500/api/item?category=others")
            .then((response) => setData(response.data.reverse()))
    },[])
  
    return (
        <div>
        <h1 className="special-offers">Others</h1>
        <div className="offers ">
            <Slide arr={data}/> 
        </div>
        <div className="see-more">
        <Link to={'/showmore/others'}>
                <button className="see-more-but" >See more</button>
                </Link>
        </div>
    </div>

    )
}

export default Others;