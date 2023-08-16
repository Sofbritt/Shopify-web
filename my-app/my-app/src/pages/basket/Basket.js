import React, { useContext, useEffect } from "react";
import "./Basket.css";
import Others from "../../webFront/components/others/Others";
import { BsXCircle } from "react-icons/bs";
import { useState } from "react";
import { userInfo } from "../../App";
import { Navigate } from "react-router-dom";
import axios from "axios";
import Carousel from "react-multi-carousel";
// import { responsive } from "../data";


export const responsive = {
  superLargeDesktop: {
    breakpoint: { max: 4000, min: 1100 },
    items: 4,
    slidesToSlide: 2,
  },
  desktop: {
    breakpoint: { max: 1100, min: 800 },
    items: 3,
  },
  tablet: {
    breakpoint: { max: 800, min: 464 },
    items: 2,
  },
  mobile: {
    breakpoint: { max: 464, min: 0 },
    items: 1,
  },
};


function Basket() {
  const [data, setData] = useState([]);

  const { user } = useContext(userInfo);

  useEffect(() => {
    axios
      .get("http://localhost:4500/api/item/basket/" + user.id)
      .then((res) => setData(res.data));
  }, []);
  if (!user) {
    return <Navigate to="/" />;
  }

  function removeItem(id) {
    axios
      .delete(`http://localhost:4500/api/item/removeitem/${user.id}/${id}`)
      .then((res) => setData(res.data));
  }

  return (
    <div>
      <Others /> <br />
      <h3 className="basket-title">Basket</h3>
      <h5 className="clean-basket-title">Clean Basket</h5>
      <div className="clean-basket-div">
        <Carousel showDots={false} responsive={responsive} className="basket-slide"   >
          {data.map((item) => (
            <div className="basket">
              <img className="basket-img" alt="" src={item.img} />
              <div className="basket-product-info">
                <h5>{item.title} </h5>
              </div>

              <div className="prices">
                <h5 className="price"> {item.price}$</h5>
                <h5 className="sale-price"> {item.sale}$ </h5>
              </div>
              <div className="x-icon" onClick={() => removeItem(item._id)}>
                <BsXCircle />

              </div>
            </div>
          ))}
        </Carousel>


      </div>
      <div className="main-total">
        <div className="total-div">
          <div className="total1-div">
            <h4 className="title-total">Total</h4>
            <h5 className="total-price">

              {data.reduce((acc, item) => acc + item.price, 0)}$
            </h5>


          </div>
          <button className="next-btn">NEXT</button>

        </div>
      </div>

    </div>
  );
}

export default Basket;