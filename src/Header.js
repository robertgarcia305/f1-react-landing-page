import React from "react";
import ReactDOM from "react-dom";

const Header = () => {
    return (
        <div className="header">
            <h1>this is a test of teh imported header</h1>
            <p>this is some other test text as a paragraph just to give it some context</p>
        </div>
    );
};

// this is how you export a function 
export default Header;