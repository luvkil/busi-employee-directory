import React from "react";
import "./style.css";

function Header() {
  return (
    <header className= "header">
      <img
        src={require("../../image/header-blueBurst.jpg").default}
        alt="header"
        className="img-fluid borderW border-success"
      />
      <div className ="subheader">
          <h1 className ="heading"> employee Directory</h1>
          <h3 className = "secondHeading">search below to get results</h3>
      </div>
      
    </header>
  );
}

export default Header;
