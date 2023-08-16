import React from "react";
import "./Showmore.css";
import { Link, useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import axios from "axios";
import { BsArrowLeft } from "react-icons/bs";

function ShowMore() {
  const category = useParams().category;
  const [data, setData] = useState([]);

  useEffect(() => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });

    axios
      .get("http://localhost:4500/api/item?category=" + category)
      .then((response) => setData(response.data));
  }, [category]);
  return (
    <div className="show-more">
      <div className="link">

        <Link className="link-titles" style={{ order: "-2" }} to={"/"}>
          Main Page
        </Link>
      </div>


      <Link to={"/"}>
        <BsArrowLeft className="left-icon" />
      </Link>
      <div className="show-more-div">
        <div className="categories">
          <div className="filtr">
            <h3 className="title-category"> Cateogries</h3>
            <Link to={"/showmore/clothes"} className="link-in-show">
              <h5>Clothes</h5>
            </Link>
            <Link to={"/showmore/skincare"} className="link-in-show">
              <h5>Cosmetics</h5>
            </Link>
            <Link to={"/showmore/cosmetics"} className="link-in-show">
              <h5>Skin Care</h5>
            </Link>
            <Link to={"/showmore/special"} className="link-in-show">
              <h5>Special Offers</h5>
            </Link>
            <Link to={"/showmore/seasons"} className="link-in-show">
              <h5>Seasons Offers</h5>
            </Link>
            <Link to={"/showmore/others"} className="link-in-show">
              <h5>Others</h5>
            </Link>
          </div>
        </div>

        <div className="showmore-products">
          {data.map((item) => (
            <div className="card" key={item.id}>
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
                <button className="add">Add in Basket</button>
              </Link>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default ShowMore;
