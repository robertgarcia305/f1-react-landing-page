import React from "react";
import ReactDOM from "react-dom";

const Subscribe = () => {
    return (
        <div className="subscribe-wrap">
            <h3>Subscribe for more</h3>
            <p>subscribe to receive more news and other things</p>
            <form action="subscribe.php" method="POST">
                <input placeholder="john.doe@email.com"></input>
                <button type="submit">Subscribe</button>
            </form>
        </div>
    );
}

export default Subscribe;