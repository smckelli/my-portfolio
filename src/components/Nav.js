import "./NavStyles.css";

import React, { useState } from 'react';
import { Link } from "react-router-dom";

import { FaBars, FaTimes } from "react-icons/fa";

const Nav = () => {


    const [click, setClick] = useState(false);
    const handleClick = () => setClick(!click);


  return (
    <div className="header">
        <Link to="/">
            <h1>Scott McKellips</h1>
        </Link>
        <ul className={click ? "nav-menu active" : 
        "nav-menu"}>
            <li>
                <Link to="/">Home</Link>
            </li>
            <li>
                <Link to="/about">About Me</Link>
            </li>
            <li>
                <Link to="/project">Projects</Link>
            </li>
            <li>
                <Link to="/education">Education</Link>
            </li>
            <li>
                <Link to="/contact">Contact</Link>
            </li>
        </ul>
        <div className="hamburger" onClick=
            {handleClick}>
            {click ? (
            <FaTimes size={20} style={{ color: "#fff" }}/>
            ) : (
            <FaBars size={20} style={{ color: "#fff" }}/>
            )};
        </div>
    </div>
  )
}

export default Nav