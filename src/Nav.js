import React from "react";
import ReactDOM from "react-dom";
import logo from "./img/f1-logo.png";

const Nav = () => {
    return (
        <nav>
            <div className="logo-wrap">
                <img src={logo}></img>
            </div>
            <ul className="center-nav">
                <li><a>Drivers</a></li>
                <li><a>Team</a></li>
                <li><a>Schedule</a></li>
                <li><a>Results</a></li>
            </ul>
            <ul className="right-nav">
                <li><a>Subscribe</a></li>
                <li><a>Sign In</a></li>
            </ul>
        </nav>
    )
}

export default Nav;