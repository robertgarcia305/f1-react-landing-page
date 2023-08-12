import React from "react";
import ReactDOM from "react-dom";

const Footer = () => {
    return (
        <footer>
            <div className="footer-top">
                <div className="icon">Instagram</div>
                <div className="icon">X</div>
                <div className="icon">Facebook</div>
                <div className="icon">Pinterest</div>
            </div>
            <div className="footer-bottom">
                <ul>
                <li><a href="#">Home</a></li>
                <li><a href="#">About</a></li>
                <li><a href="#">Pricing</a></li>
                <li><a href="#">Solutions</a></li>
                <li><a href="#">Contact</a></li>
                </ul>
            </div>
        </footer>
    );
}

export default Footer;