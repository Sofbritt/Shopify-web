import React from "react";
import { Link } from "react-router-dom";
import "./Details.css";
import { BsArrowRight } from "react-icons/bs";
import RelatedProducts from "../relatedProducts/RelatedProducts";
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import { userInfo } from "../../../App.js";
import { useContext } from "react";

function Details() {
  const [data, setData] = useState({});
  const params = useParams();
  const [open, setOpen] = useState(false);
  const [add, setAdd] = useState(false)

  const { user } = useContext(userInfo);

  function addBasket(e) {
    if (!user) {
      setOpen(true);
      setTimeout(() => {
        setOpen(false)
      }, 5000)
    } else {
      axios.post(`http://localhost:4500/api/item/addbasket/${user.id}/${data._id}`
        // setOpen(false);



      ).then((res) => {
        if (res.status === 200) {
          setAdd(true);
          setTimeout(() => {
            setAdd(false);
          }, 3000);
        }
      });

    }
  }


  useEffect(() => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
    axios
      .get("http://localhost:4500/api/item/" + params.id)
      .then((response) => setData(response.data)
      );
  }, [params.id]);

  return (
    <div>
      {open === true && <div className="alert">Error</div>}

      <div className="link">
        <Link className="link-titles" style={{ order: "0" }} to={"/showmore/cosmetics"}>
          Cosmetics
        </Link>
        <Link className="link-titles" style={{ order: "-1" }} to={"/showmore/clothes"}>
          Clothes
        </Link>
        <Link className="link-titles" style={{ order: "-2" }} to={"/"}>
          Main Page
        </Link>
      </div>
      {add === true && (
<div className="div-added-alert">
  
<div className="added-alert">
          Added
        </div>
  </div>
      )}
      <div>
        <Link className="back-link" to={""}></Link>
      </div>



      <div className="details">
        <img
          alt=""
          src="https://png.pngtree.com/png-vector/20221003/ourmid/pngtree-15-discount-tag-png-image_6262158.png"
          className="saleImg"
        />


        <br />
        <img alt="" src={data.img} className="details-img" />
        <div className="details-info">
          <h2 className="name-of-product">{data.title} </h2>
          <hr />
          <div className="titles-of-details">
            <p>Category</p>
            <p className="p-of-category">
              {data.category}
              <BsArrowRight className="short-arrow" />
            </p>
          </div>
          <div className="titles-of-details">
            <p>Country</p>
            <p className="p-of-category">
              {data.country} <BsArrowRight className="short-arrow" />
            </p>
          </div>
          <div className="titles-of-details">
            <p> Manufacturer</p>
            <p className="p-of-category">
              {data.manufacturer} <BsArrowRight className="short-arrow" />
            </p>
          </div>

          <div className="counter">
            <div className="counter-div">

              <button
                onClick={addBasket}
                className="add-in-basket"
                title={!user ? "You must sing in" : "add to basket"}
              >
                Add in Basket

              </button>
            </div>
            <div className="price-main-div">
              <div className="prices-div">
                <p className="prices-sale"> {data.price} $</p>
                <p className="prices"> {data.sale} $</p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <hr />
      <RelatedProducts category={data.category} /> <br />
    </div>
  );
}

export default Details;
