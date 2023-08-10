import React from "react";
import ReactDom from "react-dom";

const UfcFighters = (props) => {
    return (
        <div className="fighter-container">
            <div className="img-wrap">
                <img src={props.pic} alt="logo"></img>
            </div>
            <div className="ufc-details">
                <h3>{props.fighterName}</h3>
                <p>{props.country}</p>
                <p>{props.rate}</p>
            </div>
        </div>
    );
}

export default UfcFighters;