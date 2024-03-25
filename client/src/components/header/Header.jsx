import React from "react";
import "./header.css";

const Header = () => {
  return (
    <nav className="navbar">
      <div className="brand">
        PHARMA<span>TRUST</span>
      </div>
      <div className="links">
        <a href="/">Home</a>
        <a href="/Roles">Roles</a>
        <a href="/">FAQs</a>
        {/* <button class="nav-wallet">Connect Wallet</button> */}
      </div>
    </nav>
  );
};

export default Header;
