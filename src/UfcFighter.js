import React from "react";
import ReactDom from "react-dom";

const UfcFighter = (props) => {
    console.log(props.pic);
    console.log(typeof(props.pic));
    return (
        <div className="fighter-container">
            <div className="img-wrap">
                <img src={props.pic}></img>
                {/* this this dinamivcally but is not working as of now */}
                {/* <img src={`./img/${props.pic}`}></img> */}
            </div>
            <div className="ufc-details">
                <h3>{props.fighterName}</h3>
                <p>{props.country}</p>
                {/* this checks for a condition and deletes it from the dom if there is nothings */}
                <p>{props.rate && props.rate}</p>
            </div>
        </div>
    );
}

export default UfcFighter;