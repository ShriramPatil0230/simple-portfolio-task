import "./FrontBox.css";
import { Link } from "react-router-dom";

import React from "react";
import SrImg from "../assets/Sr.png";


const FrontBox = () => {
  return (
    <div className="hero">
      <div className="mask">

          <img className="into-img" src={SrImg} />
        <div className="content">
          <p>Hi, I'M Shriram Patil</p>
          
          <h1>Frontend Developer</h1>
         
          <div>

          <Link to="/project" className="btn">Projects</Link>
          <Link to="/contact" className="btn-light">Contact</Link>
          </div>
        </div>
      </div>

    </div>
  )
}

export default FrontBox
