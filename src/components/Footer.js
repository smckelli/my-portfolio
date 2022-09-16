import "./FooterStyles.css";

import React from 'react'

import { FaGithub, FaTwitter, FaLinkedin, FaTelegramPlane,
        FaWhatsapp } from "react-icons/fa"

const Footer = () => {
  return (
    <div className="footer">
        <div className="footer-container">
            <a href="https://github.com/smckelli" target="_blank" rel="noreferrer">
            <FaGithub 
                size={30} 
                style={{ color: "#CBD0B9", margineRight: "2rem" }} />
            </a>
            <a href="https://twitter.com/home" target="_blank" rel="noreferrer">
            <FaTwitter 
                size={30} 
                style={{ color: "#CBD0B9", margineRight: "2rem" }} />
            </a>
            <a href="https://linkedin.com/in/scott-mckellips" target="_blank" rel="noreferrer">
            <FaLinkedin 
                size={30} 
                style={{ color: "#CBD0B9", margineRight: "2rem" }} />
            </a>
            <a href="https://telegram.org" target="_blank" rel="noreferrer">
            <FaTelegramPlane 
                size={30} 
                style={{ color: "#CBD0B9", margineRight: "2rem" }} />
            </a>
            <a href="https://whatsapp.com" target="_blank" rel="noreferrer">
            <FaWhatsapp
                size={30} 
                style={{ color: "#CBD0B9", margineRight: "2rem" }} />
            </a>
        </div>
    </div>
  )
}

export default Footer