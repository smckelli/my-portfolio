import "./HeroProStyles.css";

import React, { Component } from 'react'



class HeroPro extends Component {
    render() {
        return (
            <div className="heropro-img">
                <div className="heading">
                    <h1>{this.props.heading}</h1>
                    <h4>{this.props.text}</h4>
                </div>
            </div>
        )
    }
}

export default HeroPro
