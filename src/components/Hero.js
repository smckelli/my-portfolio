import "./HeroStyles.css";

import React from 'react';

import HeroImg from "../assets/serenity.jpg";
import { Link } from "react-router-dom";


const Hero = () => {
  return (
    <div className="hero">
        <div className="mask">
            <img className="hero-img" 
            src={HeroImg} alt="A crane glides in to land on a misty bank"/>
        </div>
        <div className="content">
            <h1>Hi! I'm Scott</h1>
            <h4>Full Stack Web Developer</h4>
            <div className="hero-btns">
                <Link to="/project"
                className="btn">Projects</Link>
                <Link to="/contact"
                className="btn btn-light">Contact</Link>
            </div>
        </div>
    </div>
  )
}

export default Hero