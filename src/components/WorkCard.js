import "./WorkCardStyles.css";

import React from 'react';
import project1 from "../assets/project1.png";
import { NavLink } from "react-router-dom";

const WorkCard = () => {
  return (
    <div className="work-container">
        {/* <h1 classname="project-heading">Projects</h1> */}
        <div className="project-container">
            <div className="project-card">
                <img src={project1} alt="To Do List screenshot" />
                <h2 className="project-title">Project Title</h2>
                <div className="pro-details">
                    <p>This is text.</p>
                    <div className="pro-btns">
                        <NavLink to="url.com"
                        className="btn">
                            Source
                        </NavLink>
                    </div>
                </div>
            </div>

        </div>
    </div>
  )
}

export default WorkCard