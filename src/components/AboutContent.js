import "./AboutContentStyles.css";

import React from 'react';
import { Link } from "react-router-dom";
import familysunflowers from "../assets/familysunflowers.jpg";

const AboutContent = () => {
  return (
    <div className="about">
        <div classname="left">
            <h1>My Story</h1>
            <p>Father of two great kids.</p>
            <p>Husband to my amazing and talented wife.</p>
            <p>Looking for an opportunity in full stack software web development.</p>
            <p>25+ years of public service. 10+ years in tech.</p>
            <Link to="/contact">
                <button className="btn">Contact</button>
            </Link>
        </div>

        <div className="right">
            <div className="img-container">
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