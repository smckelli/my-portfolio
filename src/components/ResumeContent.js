import React from "react";
import "./ResumeContentStyles.css";
import HeroImg from "../assets/focus.jpg";
import ResumeImg from "../assets/Resume-img.jpg";
import ResumeImg2 from "../assets/Resume2-img.jpg";
import ResumeImg3 from "../assets/Resume2-2-img.jpg";
import { FaChevronDown} from "react-icons/fa";
import Resume from "../assets/McKellips_Resume.pdf";
import Resume2 from "../assets/McKellips_Resume2.pdf";
import { 
    SiMysql, 
    SiSequelize, 
    SiMongodb, 
    SiReact, 
    SiInsomnia,
    SiApollographql,
    SiHeroku,
    SiHandlebarsdotjs,
    SiVercel,
 } from "react-icons/si";
import {
  FaGithub,
  FaHtml5,
  FaCss3Alt,
  FaJsSquare,
  FaBootstrap,
  FaNodeJs,
  FaPython,
} from "react-icons/fa";

const ResumeContent = () => {
  return (
    <div className="hero">
      <div className="mask">
          <img className="hero-img" 
          src={HeroImg} alt="A look down an overgrown creek."/>
      </div>
        <div className="content">
                  <h1>My Resume</h1>
                  <h4>Take a look at my skillset</h4>
                  {/* <FaArrowDown size={30} style={{ color: "#fff" }}/> */}
                
                  <div>
                    <FaChevronDown
                    size={60}
                    style={{ color: "#f5f1e3", marginRight: "1rem", marginLeft: "1rem" }}
                    />
                  </div>
        </div>
      <div className="resume-container">
        <h1 id="resume-head">Technologies</h1>
        <div className="icons">
          <div>
            <FaGithub
              size={60}
              style={{ color: "#f5f1e3", marginRight: "1rem", marginLeft: "1rem" }}
            />
            <FaHtml5
              size={60}
              style={{ color: "#f5f1e3", marginRight: "1rem", marginLeft: "1rem" }}
            />
            <FaCss3Alt
              size={60}
              style={{ color: "#f5f1e3", marginRight: "1rem", marginLeft: "1rem" }}
            />
            <FaBootstrap
              size={60}
              style={{ color: "#f5f1e3", marginRight: "1rem", marginLeft: "1rem" }}
            />
          </div>
          <div>
            <FaJsSquare
              size={60}
              style={{ color: "#f5f1e3", marginRight: "1rem", marginLeft: "1rem" }}
            />
            <FaNodeJs
              size={60}
              style={{ color: "#f5f1e3", marginRight: "1rem", marginLeft: "1rem" }}
            />
            <SiMysql
              size={60}
              style={{ color: "#f5f1e3", marginRight: "1rem", marginLeft: "1rem" }}
            />
            <SiSequelize
              size={60}
              style={{ color: "#f5f1e3", marginRight: "1rem", marginLeft: "1rem" }}
            />
          </div>
          <div>
            <SiMongodb
              size={60}
              style={{ color: "#f5f1e3", marginRight: "1rem", marginLeft: "1rem" }}
            />
            <SiReact
              size={60}
              style={{ color: "#f5f1e3", marginRight: "1rem", marginLeft: "1rem" }}
            />
          <SiInsomnia
              size={60}
              style={{ color: "#f5f1e3", marginRight: "1rem", marginLeft: "1rem" }}
            />
          <SiApollographql
              size={60}
              style={{ color: "#f5f1e3", marginRight: "1rem", marginLeft: "1rem" }}
            />
          </div>
          <div>
            <SiHeroku
              size={60}
              style={{ color: "#f5f1e3", marginRight: "1rem", marginLeft: "1rem" }}
            />
            <SiHandlebarsdotjs
              size={60}
              style={{ color: "#f5f1e3", marginRight: "1rem", marginLeft: "1rem" }}
            />
            <FaPython
              size={60}
              style={{ color: "#f5f1e3", marginRight: "1rem", marginLeft: "1rem" }}
            />
            <SiVercel
              size={60}
              style={{ color: "#f5f1e3", marginRight: "1rem", marginLeft: "1rem" }}
            />
          </div>
          </div>
          <p id="view-resume">View my technical resume here: </p>
          <img src={ResumeImg} alt= "Mckellips Technical Resume"/><br></br>
          <a href={Resume} download className="btn">
            Click to download
          </a>
          <p id="view-resume">View my leadership resume here: </p>
          <img src={ResumeImg2} alt= "Mckellips Leadership Resume"/><br></br>
          <img src={ResumeImg3} alt= "Mckellips Leadership Resume"/><br></br>
          <a href={Resume2} download className="btn">
            Click to download
          </a>
          </div>
          <div>
          </div>
    </div>
  );
};

export default ResumeContent;