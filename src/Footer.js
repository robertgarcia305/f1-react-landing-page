import React from "react";
import ReactDOM from "react-dom";

const Footer = () => {
    return (
        <footer>
            <div className="footer-top">
                <div class="icon">Instagram</div>
                <div class="icon">X</div>
                <div class="icon">Facebook</div>
                <div class="icon">Pinterest</div>
            </div>
            <div className="footer-bottom">
                <ul>
                <li><a href="#">home</a></li>
                <li><a href="#">about</a></li>
                <li><a href="#">pricing</a></li>
                <li><a href="#">solutions</a></li>
                <li><a href="#">contact</a></li>
                </ul>
            </div>
        </footer>
    );
}

export default Footer;