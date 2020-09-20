import React from "react";
import './Header.css';

import closeX from "../../icons/closeIcon.png";
import Onlinedot from "../../icons/onlineIcon.png";

const Header = ({room}) =>{
    return(
        <div className="Header-container">
            <div className="Left-inner">
                <img className="online" src={Onlinedot} alt="online-dot" />
                <h3>{room}</h3>
            </div>
            <div className="Right-inner">
                <a href="/"><img src={closeX} alt="leave-cross" /></a>
            </div>
        </div>
    );
}

export default Header;