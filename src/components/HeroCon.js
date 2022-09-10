import "./HeroConStyles.css";

// import React, { Component } from 'react';
import HeroImg from "../assets/chill.jpg";



const HeroCon = () => {
    return (
      <div className="hero">
          <div className="mask">
              <img className="hero-img" 
              src={HeroImg} alt="A look down an overgrown creek."/>
          </div>
          <div className="content">
                <h1>Contact Me</h1>
                <h4>Tell me what's on your mind!</h4>
                {/* <FaArrowDown size={30} style={{ color: "#fff" }}/> */}
              
              {/* <div>
                  <Link to="/project"
                  className="btn">Projects</Link>
                  <Link to="/contact"
                  className="btn btn-light">Contact</Link>
              </div> */}
          </div>
          <div>
          </div>
      </div>
    )
  }

// class HeroCon extends Component {
//     render() {
//         return (

//             <div className="herocon-img">
//                 <div className="heading">
//                     <h1>{this.props.heading}</h1>
//                     <h4>{this.props.text}</h4>
//                 </div>
//             </div>
//         )
//     }
// }

export default HeroCon