import React, { useContext } from "react";
import "./Header.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { BsSearch, BsBasket } from "react-icons/bs";
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { userInfo } from "../../../App";
import axios from "axios";


function Header() {
  const { user, setUser } = useContext(userInfo);
  const [show, setShow] = useState(false);
  const [search, setSearch] = useState('')
  const navigate = useNavigate()


  function sendSearch() {
    axios.get("http://localhost:4500/api/item/getitem?q=" + search.toUpperCase()).then((res) => {
      navigate('/product/' + res.data)
      setSearch('')
    }).catch((err)=> console.log(err))
  }

  return (
    <div className="header">
      <Link to={"/#"}>
        <img
          className="logo"
          alt="no"
          src="https://i.fbcd.co/products/resized/resized-750-500/sf-fs-modern-logo-designs-2-f6a94cb89c415dc12a346af7ca2e5d2e5077f0687cdc5184030fd397aa46b777.jpg"
        />
      </Link>

      <div className="search" >
        <input
          type="text"
          name="search"
          className="search-inp"
          placeholder="Search"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />
        <div onClick={sendSearch}>
          <BsSearch className="search-icon" />
        </div>
      </div>

      <h4 className="menu" onClick={() => setShow(!show)}>
        Menu
        {show === true && (
          <div className="menues">
            <Link className="menu-link" to={"/showmore/clothes"}>
              <h5 className="menu-links">Clotes</h5>
            </Link>
            <Link className="menu-link" to={"/showmore/skincare"}>
              <h5 className="menu-links">Cosmetics</h5>
            </Link>
            <Link className="menu-link" to={"/showmore/cosmetics"}>
              <h5 className="menu-links">SkinCare</h5>
            </Link>
            <Link className="menu-link" to={"/showmore/others"}>
              <h5 className="menu-links">Others</h5>
            </Link>
            <Link className="menu-link" to={"/showmore/seasons"}>
              <h5 className="menu-links">Seasons Offers</h5>
            </Link>
            <Link className="menu-link" to={"/showmore/special"}>
              <h5 className="menu-links">Special Offers</h5>
            </Link>
          </div>
        )}
      </h4>
      <div className="main-of-basket">
        {!user.name ? (
          <>
            <Link to={"/login"}>
              <button className="sign-in">Sign in</button>
            </Link>
            <Link to={"/register"}>
              <button className="sign-in">Sign up</button>
            </Link>
          </>
        ) : (
          <>
            <span>{user.name}</span>
            <button
              onClick={() => {
                localStorage.clear();
                setUser("");
              }}
              className="logout" >
              Log out
            </button>
            {user.isAdmin &&  <Link to='/admin' className="adminLink">Admin</Link>}
           
          </>
        )}

        <Link to={"/basket"}>
          <BsBasket className="basket-icon" />
        </Link>


      </div>
    </div>
  );
}

export default Header;
