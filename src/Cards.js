import React from "react";
import ReactDOM from "react-dom";

const Cards = () => {
    return (
        <div className="cards-wrap">
            <div class="card-block">
                <h3>Card Title</h3>
                <p>this is some text about this card title in particular</p>
                <div class="anchor-wrap"><a href="#">Click Here</a></div>
            </div>
            <div className="card-block">
                <h3>Card Title</h3>
                <p>this is some text about this card title in particular</p>
                <div class="anchor-wrap"><a href="#">Click Here</a></div>
            </div>
            <div className="card-block">
                <h3>Card Title</h3>
                <p>this is some text about this card title in particular</p>
                <div class="anchor-wrap"><a href="#">Click Here</a></div>
            </div>
            <div className="card-block">
                <h3>Card Title</h3>
                <p>this is some text about this card title in particular</p>
                <div class="anchor-wrap"><a href="#">Click Here</a></div>
            </div>
        </div>
    );
}

export default Cards;