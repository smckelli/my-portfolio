import "./HeroStyles.css";

import React from 'react';

import HeroImg from "../assets/serenity.jpg";
import { Link } from "react-router-dom";
import { FaGithub, FaTwitter, FaLinkedin, FaTelegramPlane,
  FaWhatsapp } from "react-icons/fa"

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
            <div>
                <Link to="/project"
                className="btn">Projects</Link>
                <Link to="/contact"
                className="btn btn-light">Contact</Link>
            </div>
            <a href="https://github.com/smckelli" target="_blank">
            <FaGithub 
                size={30} 
                style={{ color: "#CBD0B9", margineRight: "2rem" }} />
            </a>
        </div>
    </div>
  )
}

export default Hero