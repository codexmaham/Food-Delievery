import React, { useState } from 'react'
import "./Navbar.css"
import { assets } from '../../assets/assets'


const Navbar = () => {
  const [menu, setMenu] = useState("home");
  
  return (
    <div className="navbar">
      {/* <img src={assets.Logo} alt="" className="logo" /> */}
      <h1>Foodle</h1>
      <ui className="navbar-menu">
        <li onClick={()=>setMenu("home")} className={menu === "home" ? "active" : "hh"}>Home</li>
        <li onClick={()=>setMenu("menu")} className={menu === "menu" ? "active" : ""}>Menu</li>
        <li onClick={()=>setMenu("careers")} className={menu === "careers" ? "active" : ""}>Careers</li>
        <li onClick={()=>setMenu("contact")} className={menu === "contact" ? "active" : ""}>Contact</li>
      </ui>
      <div className="navbar-right">
        <img
          src={assets.searchicon}
          alt="icon"
          style={{ width: "40px", aspectRatio: "1 / 1", objectFit: "contain" }}
        />
        <div className="navbar-search">
          <img
            src={assets.basketicon}
            alt="icon"
            style={{
              width: "40px",
              aspectRatio: "1 / 1",
              objectFit: "contain",
            }}
          />
          <div className="dot"></div>
        </div>
        <button>Sign in</button>
      </div>
    </div>
  );
}

export default Navbar