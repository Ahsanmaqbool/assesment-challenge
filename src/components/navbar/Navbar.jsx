import React from "react";
import "./navbar.css";
const Navbar = () => {
  return (
    <div>
      <div className="header">
        <div className="headerImageWrapper">
          <img
            src="images/droppe-logo.png"
            className="headerImage"
            alt="droppe-logo"
          />
        </div>
      </div>
      <div className="main">
        <img src="images/img1.png" className="Img" alt="img1" />
        <img src="images/img2.png" className="Img" alt="img2" />
      </div>
    </div>
  );
};

export default Navbar;
