// import reportWebVitals from './reportWebVitals';

// // If you want to start measuring performance in your app, pass a function
// // to log results (for example: reportWebVitals(console.log))
// // or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
// reportWebVitals();

// add all git modules to the .gitignore folder 
// that is why it was breaking 
// and when trying to push these modules, the branch gets ahead by 1 commit 
// https://docs.github.com/en/get-started/getting-started-with-git/ignoring-files?platform=mac
// 

import React from "react";
// this used to be react-dom/client when you take it out it works 
// update now it works 
import ReactDOM from "react-dom/client";
import "./index.css";
// apparently you have to import everything 
import logo from "./img/react-icon.png";
import Header from "./Header";
import Nav from "./Nav";
import Cards from "./Cards";

const Page = () => {
  return (
    <div className="page-wrap">
      <h3>this is the page wrap</h3>
      <p>this is a paragraph of the actual page wrap</p>
      <p><a href="#" className="button">Click here to explore</a></p>
      <Cards />
    </div>
  );
};

const Footer = () => {
  return (
    <footer>
      <div className="footer-left">

      </div>
      <ul className="footer-right">
        <li><a href="#">Footer Item</a></li>
      </ul>
    </footer>
  ); 
};

const App = () => {
  return (
    <div className="body-wrap">
      <Header />
      <Nav />
      <Page />
      <Footer />
    </div>
  );
};

// a new way of rendering for react 18 is like this 
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <App />
);


