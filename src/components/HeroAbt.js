import "./HeroAbtStyles.css";

import React, { Component } from 'react';

class HeroAbt extends Component {
    render() {
        return (

            <div className="heroabt-img">
                <div className="heading">
                    <h1>{this.props.heading}</h1>
                    <h4>{this.props.text}</h4>
                </div>
            </div>
        )
    }
}

export default HeroAbt