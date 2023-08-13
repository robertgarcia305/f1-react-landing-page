import React from "react";
import ReactDom from "react-dom";

const F1Driver = (props) => {
    // if you do this, the images will be passed as sctring on the module 
    console.log(props.pic);
    console.log(typeof(props.pic));
    return (
        <div className="driver-container">
            <div className="img-wrap">
                <img src={props.pic}></img>
                {/* this this dinamivcally but is not working as of now */}
                {/* <img src={`./img/${props.pic}`}></img> */}
            </div>
            <div className="f1-details">
                <h3 className={props.team}>{props.driverName}</h3>
                <p>Country: {props.country}</p>
                {/* this checks for a condition and deletes it from the dom if there is nothings */}
                <p>Rating: {props.rate && props.rate}</p>
            </div>
        </div>
    );
}

export default F1Driver;