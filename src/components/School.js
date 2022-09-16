import "./SchoolCardStyles.css";
import SchoolCard from "./SchoolCard.js";
import SchoolCardData from "./SchoolCardData.js";

import React from 'react';


const School = () => {
  return (
    <div className="school-container">
        <h1 classname="sch-heading">Education and Training</h1>
        <div className="education-container">
            {SchoolCardData.map((val, ind) => {
                return(
                    <SchoolCard 
                    key={ind}
                    imgsrc={val.imgsrc}
                    title={val.title}
                    text={val.text}
                    data={val.data}
                    />
                )
            })}
        </div>
    </div>
  )
}

export default School