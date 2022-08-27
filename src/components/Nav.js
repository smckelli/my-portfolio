import "./NavStyles.css"

import React from 'react'
import { Link } from "react-router-dom"

const Nav = () => {
  return (
    <div className="header">
        <Link to="/">
            <h1>Scott McKellips</h1>
        </Link>
        <ul className="nav-menu">
            <li>
                <Link to="/">Home</Link>
            </li>
            <li>
                <Link to="/project">Projects</Link>
            </li>
            <li>
                <Link to="/about">About Me</Link>
            </li>
            <li>
                <Link to="/contact">Contact</Link>
            </li>

        </ul>
    </div>
  )
}

export default Nav