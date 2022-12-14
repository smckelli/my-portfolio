import "./HeroProStyles.css";

import HeroImg from "../assets/peace.jpg";
import { FaChevronDown } from "react-icons/fa";


const HeroPro = () => {
    return (
      <div className="hero">
          <div className="mask">
              <img className="hero-img" 
              src={HeroImg} alt="A tree peers through the fog by the edge of a pond"/>
          </div>
          <div className="content">
                <h1 className="project-head">Projects</h1>
                <h4>Some of my most recent work</h4>
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

export default HeroPro
