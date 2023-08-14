import React from "react";
import ReactDom from "react-dom";

const F1Driver = (props) => {
    let badge;
    const addBadge = () => {
        if (props.badge === true) {
            badge = "World Champion";
        } else {
            // else do nothing
        }
    }
    addBadge();

    return (
        <div className="driver-container">
            <div className="img-wrap">
                <img src={props.pic}></img>
                {badge && <p className="badge">{badge}</p>}
                {/* this this dinamivcally but is not working as of now */}
                {/* <img src={`./img/${props.pic}`}></img> */}
            </div>
            <div className="f1-details">
                <h3 className={props.team}>{props.driverName}</h3>
                <p>Country: {props.country}</p>
                {/* this checks for a condition and deletes it from the dom if there is nothings */}
                {props.rate && <p>Rating: {props.rate}</p>}
            </div>
        </div>
    );
}

export default F1Driver;