import React from "react";
import ReactDom from "react-dom";

const F1Driver = (props) => {
    let badge;
    const addBadge = () => {
        if (props.item.badge === true) {
            badge = "World Champion";
        } else {
            // else do nothing
        }
    }
    addBadge();

    // since there's many props i call on the component, im adding the props.item.element in order to make ..
    // the component shorter, but it can be only props.pic
    return (
        <div className="driver-container">
            <div className="img-wrap">
                <img src={props.item.pic}></img>
                {badge && <p className="badge">{badge}</p>}
                {/* this this dinamivcally but is not working as of now */}
                {/* <img src={`./img/${props.pic}`}></img> */}
            </div>
            <div className="f1-details">
                <h3 className={props.item.team}>{props.item.name}</h3>
                <p>Country: {props.item.country}</p>
                {/* this checks for a condition and deletes it from the dom if there is nothings */}
                {props.item.rate && <p>Rating: {props.item.rate}</p>}
            </div>
        </div>
    );
}

export default F1Driver;