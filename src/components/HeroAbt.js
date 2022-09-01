import "./HeroAbtStyles.css";

// import React, { Component } from 'react';
import HeroImg from "../assets/rest.jpg";

const HeroAbt = () => {
    return (
      <div className="hero">
          <div className="mask">
              <img className="hero-img" 
              src={HeroImg} alt="Sunrise at the foot of a dock over a peacefully calm lake."/>
          </div>
          <div className="content">
                <h1>About Me</h1>
                <h4>Dad. Husband. Developer. Veteran.</h4>
                {/* <FaArrowDown size={30} style={{ color: "#fff" }}/> */}
              
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






// class HeroAbt extends Component {
//     render() {
//         return (

//             <div className="heroabt-img">
//                 <div className="heading">
//                     <h1>{this.props.heading}</h1>
//                     <h4>{this.props.text}</h4>
//                 </div>
//             </div>
//         )
//     }
// }

export default HeroAbt