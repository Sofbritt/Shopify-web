import React from "react";
import "react-multi-carousel/lib/styles.css";
import { Link } from "react-router-dom";
import Carousel from "react-multi-carousel";
import { responsive } from "../data";



function Slide({ arr }) {


    return (
        <Carousel showDots={false} responsive={responsive} className="products">
            {arr.map((item) => (
                <div className="card" key={item._id}>
                    <Link to={"/product/" + item._id} className="card-link">
                        <img
                            alt=""
                            src="https://png.pngtree.com/png-vector/20221003/ourmid/pngtree-15-discount-tag-png-image_6262158.png"
                            className="saleImg"
                        />
                        <img alt="" src={item.img} className="offersImg" />
                        <h2 className="offersTitle">{item.title}</h2>
                        <h3 className="price">{item.price} $</h3>
                        <h3 className="price-sale">{item.sale} $</h3>
                        <button className="add"   >See More</button>

                    </Link>
                </div>
            ))}
        </Carousel>
    )
}


export default Slide;