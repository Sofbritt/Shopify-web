import React, { useContext } from "react";
import "./Login.css";
import { useState } from "react";
import axios from "axios";
import { Navigate, useNavigate } from "react-router-dom";
import { userInfo } from "../../App";
const url = "http://localhost:4500/api/auth/login";

export default function Login(props) {
  const [email, setEmail] = useState("");
  const [error, setError] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();
  const { user, setUser } = useContext(userInfo);
  if (user) {
    return <Navigate to="/" />;
  }




  const handlesubmit = (e) => {
    e.preventDefault();
    axios
      .post(url, { email, password })
      .then((res) => {
        if (res.status === 200) {
          localStorage.setItem("user", JSON.stringify(res.data));
          setUser(res.data);
          navigate("/");
        }
      })
      .catch((err) => {
        setError(err.response.data.message);
      });
  };
  return (
    <div className="Auth-form-container">
      <form className="Auth-form" onSubmit={handlesubmit}>
        <div className="Auth-form-content">
          <h3 className="Auth-form-title">Sign In</h3>

          <div className="form-group mt-3">
            <label>Email address</label>
            <input
              type="email"
              className="form-control mt-1"
              placeholder="Enter email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>
          <div className="form-group mt-3">
            <label>Password</label>
            <input
              type="password"
              className="form-control mt-1"
              placeholder="Enter password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>
          <p className="error">{error}</p>
          <div className="d-grid gap-2 mt-3">
            <button type="submit" className="btn btn-primary">
              Submit
            </button>
          </div>
        </div>
      </form>
    </div>
  );
}
