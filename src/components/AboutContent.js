import "./AboutContentStyles.css";

import React from 'react';
import { Link } from "react-router-dom";
import Avascott from "../assets/Avascott.png";
import familysunflowers from "../assets/familysunflowers.jpg";

const AboutContent = () => {
  return (
    <div className="about">
        <div classname="left">
            <h1>My Story</h1>
            <p>This is my story.</p>
            <Link to="/contact">
                <button className="btn">Contact</button>
            </Link>
        </div>

        <div className="right">
            <div className="img-container">
                <div className="img-stack top">
                    <img src={Avascott}
                    className="img" alt="scotts avatar"/>
                </div>
                <div className="img-stack bottom">
                    <img src={familysunflowers}
                    className="img" alt="family photo"/>
                </div>
            </div>
        </div>
    </div>
  )
}

export default AboutContent