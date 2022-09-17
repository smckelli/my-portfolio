import "./HeroConStyles.css";

import HeroImg from "../assets/chill.jpg";
import { FaHandPointDown } from "react-icons/fa";



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
            
              <div>
                <FaHandPointDown
                size={60}
                style={{ color: "#f5f1e3", marginRight: "1rem", marginLeft: "1rem" }}
                />
              </div>
        </div>
        <div>
        </div>
    </div>
  )
}


export default HeroCon