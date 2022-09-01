import "./HeroProStyles.css";

import React, { Component } from 'react'
import HeroImg from "../assets/peace.jpg";
import { FaArrowDown } from "react-icons/fa";



// class HeroPro extends Component {
//     render() {
//         return (
//             <div className="heropro-img">
//                 <div className="heading">
//                     <h1>{this.props.heading}</h1>
//                     <h4>{this.props.text}</h4>
//                 </div>
//             </div>
//         )
//     }
// }

const HeroPro = () => {
    return (
      <div className="hero">
          <div className="mask">
              <img className="hero-img" 
              src={HeroImg} alt="A tree peers through the fog by the edge of a pond"/>
          </div>
          <div className="content">
                <h1>Projects</h1>
                <h4>Some of my most recent work</h4>
                <FaArrowDown size={30} style={{ color: "#fff" }}/>
              
              {/* <div>
                  <Link to="/project"
                  className="btn">Projects</Link>
                  <Link to="/contact"
                  className="btn btn-light">Contact</Link>
              </div> */}
          </div>
          <div className="content-arrow">

          </div>
      </div>
    )
  }

export default HeroPro
