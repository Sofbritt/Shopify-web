
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Web from "./pages/Web.js";
import Details from "./webFront/components/details/Details";
import Footer from "./webFront/components/footer/Footer.js";
import Header from "./webFront/components/header/Header.js";
import Login from "./pages/login/Login.jsx";
import Register from "./pages/register/Register.jsx";
import Basket from "./pages/basket/Basket.js";
import ShowMore from "./webFront/components/showmore/Showmore.js";
import News from "./webFront/components/news/News.js";
import { createContext, useEffect, useState } from "react";
import Admin from "./webFront/components/adminPage/Admin.js";

export const userInfo = createContext();
function App() {
  const [user, setUser] = useState('');

  useEffect(() => {
    if (localStorage.getItem("user") && !user) {
      setUser(JSON.parse(localStorage.getItem("user")));
    }
  }, [user]);
  // console.log(user)

  return (
    <div className="App">
      <userInfo.Provider
        value={{
          user,
          setUser,
        }}
      >
        <BrowserRouter>
          <Header />
          <Routes>
            <Route path="/" element={<Web />} />
            <Route path="/product/:id" element={<Details />} />
            <Route path="/login" element={<Login />} />
            <Route path="/register" element={<Register />} />
            <Route path="/basket" element={<Basket />} />
            <Route path="/showmore/:category" element={<ShowMore />} />
            <Route path="/news" element={<News />} />

            <Route path="/admin" element={<Admin />} />
          </Routes>
          <Footer />
        </BrowserRouter>
      </userInfo.Provider>
    </div>
  );
}

export default App;
