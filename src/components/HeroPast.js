import "./HeroEdStyles.css";

// import React, { Component } from 'react'
import HeroImg from "../assets/meditation.jpg";
// import { FaArrowDown } from "react-icons/fa";
import { FaHandPointDown } from "react-icons/fa";


const HeroPast = () => {
    return (
      <div className="hero">
          <div className="mask">
              <img className="hero-img" 
              src={HeroImg} alt="An ancient place."/>
          </div>
          <div className="content">
                <h1>Past Lives</h1>
                <h4>A diverse set of experiences.</h4>
                {/* <FaArrowDown size={30} style={{ color: "#fff" }}/> */}
              
                <div>
                  <FaHandPointDown
                  size={60}
                  style={{ color: "#f5f1e3", marginRight: "1rem", marginLeft: "1rem" }}
                  />
                </div>
          </div>
      </div>
    )
  }

export default HeroPast;