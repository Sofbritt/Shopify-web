import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import Carousel from 'react-bootstrap/Carousel';
import "./Carousel.css";
import { Link } from 'react-router-dom';
import * as Icon from "react-bootstrap-icons";
import { useState, useEffect } from "react"
import axios from "axios";

// let arr = [
//     "https://i.etsystatic.com/17042832/r/il/4b6157/4452681708/il_fullxfull.4452681708_jcc2.jpg",
//     "https://hips.hearstapps.com/hmg-prod/images/hbz-clear-lip-gloss-index-1594043471.jpg?crop=1.00xw:1.00xh;0,0&resize=1200:*",
//     "https://fashionista.com/.image/t_share/MTI3OTEyMDExNjM0ODQ2MzM5/titlejpg.jpg",
// ];


function UncontrolledExample() {
    const [data, setData] = useState([]);


    useEffect(() => {
        axios.get("http://localhost:4500/api/item?category=carousel")
            .then((response) => setData(response.data))
    }, [])


    let nextIcon = <Icon.ArrowRightCircleFill className="next-prev" />
    let prevIcon = <Icon.ArrowLeftCircleFill className="next-prev" />
    return (
        <div className="mainDiv-add">
            <Carousel className="carousel" prevIcon={prevIcon} nextIcon={nextIcon}>
                {data.map((item, index) => (
                    <Carousel.Item key={index}>
                        <img
                            className="d-block w-100 carouselImgs"
                            src={item.img}
                            alt="First slide"
                        />
                        {/* <Carousel.Caption>
                            <button className="carosel-btn">See More</button>
                        </Carousel.Caption> */}
                    </Carousel.Item>
                ))}
            </Carousel>
            <div className="card card-carousel">
                <Link className="card-link">
                    <img
                        alt=""
                        src="https://png.pngtree.com/png-vector/20221003/ourmid/pngtree-15-discount-tag-png-image_6262158.png"
                        className="saleImg"
                    />
                    <img
                        alt=""
                        src='https://static.thcdn.com/images/large/original//productimg/1600/1600/11434754-8895036866079892.jpg'
                        className="offersImg"
                    />
                    <h2 className="offersTitle">La Roche Posay</h2>
                    <h3 className="price">65 $</h3>
                    <h3 className="price-sale">50 $</h3>
                    <button className="add">Add in Basket</button>
                </Link>
            </div>
        </div>
    );
}

export default UncontrolledExample;