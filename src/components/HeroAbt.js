import "./HeroAbtStyles.css";

import HeroImg from "../assets/rest.jpg";
import { Link } from "react-router-dom";
import { FaChevronDown, FaUserGraduate } from "react-icons/fa";
import { GiOuroboros } from "react-icons/gi"



const HeroAbt = () => {
    return (
      <div className="hero">
          <div className="mask">
              <img className="hero-img" 
              src={HeroImg} alt="A tree by the road."/>
          </div>
          <div className="content">
                <h1>About Me</h1>
                <h4>Dad. Husband. Developer. Leader. Veteran.</h4>
                <div className="abt-btns">
                <Link to="/education"
                className="hero-abt-btn"><FaUserGraduate /></Link>
                <Link to="/pastlives"
                className="hero-abt-btn btn-light"><GiOuroboros /></Link>
            </div>
              
                <div>
                  <FaChevronDown
                  size={60}
                  style={{ color: "#f5f1e3", marginRight: "1rem", marginLeft: "1rem", marginTop: "3rem" }}
                  />
                </div>
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