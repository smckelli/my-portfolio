import "./HeroEdStyles.css";

import HeroImg from "../assets/wisdom.jpg";
import { FaChevronDown } from "react-icons/fa";


const HeroEd = () => {
    return (
      <div className="hero">
          <div className="mask">
              <img className="hero-img" 
              src={HeroImg} alt="An ancient place."/>
          </div>
          <div className="content">
                <h1>Education and Training</h1>
                <h4>A lifetime of expertise.</h4>
                {/* <FaArrowDown size={30} style={{ color: "#fff" }}/> */}
              
                <div>
                  <FaChevronDown
                  size={60}
                  style={{ color: "#f5f1e3", marginRight: "1rem", marginLeft: "1rem" }}
                  />
                </div>
          </div>
      </div>
    )
  }

export default HeroEd;