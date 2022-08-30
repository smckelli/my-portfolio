import "./HeroConStyles.css";

import React, { Component } from 'react';

class HeroCon extends Component {
    render() {
        return (

            <div className="herocon-img">
                <div className="heading">
                    <h1>{this.props.heading}</h1>
                    <h4>{this.props.text}</h4>
                </div>
            </div>
        )
    }
}

export default HeroCon