import "./SchoolCardStyles.css";

import React from 'react';

const SchoolCard = (props) => {
    return (
        <div className="school-card">
        <img src={props.imgsrc} alt="School screenshot" />
        <h2 className="school-title">{props.title}</h2>
        <div className="sch-details">
            <p>{props.text}</p>
            <p>{props.data}</p>
        </div>
    </div>
)}

export default SchoolCard