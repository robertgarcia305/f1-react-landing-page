import React from "react";
import ReactDOM from "react-dom";
import logo from "./img/f1-logo.png";

const Nav = () => {
    return (
        <nav>
            <div className="logo-wrap">
                <img src={logo}></img>
            </div>
            <ul>
                <li><a>Home</a></li>
                <li><a>About</a></li>
                <li><a>Pricing</a></li>
                <li><a>Solutions</a></li>
                <li><a>Contact</a></li>
            </ul>
        </nav>
    )
}

export default Nav;