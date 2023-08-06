// this were all the default when you create a react app
// import React from 'react';
// import ReactDOM from 'react-dom/client';
// import './index.css';
// import App from './App';
// import reportWebVitals from './reportWebVitals';

// // If you want to start measuring performance in your app, pass a function
// // to log results (for example: reportWebVitals(console.log))
// // or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
// reportWebVitals();


import React from "react";
// this used to be react-dom/client when you take it out it works 
import ReactDOM from "react-dom";
import "./index.css";
// apparently you have to import everything 
import logo from "./img/john-wick.png";
import Header from "./Header";
import Nav from "./Nav";

const Page = () => {
  return (
    <div className="page-wrap">
      <h3>this is the page wrap</h3>
      <p>this is a paragraph of the actual page wrap</p>
      <p><a href="#" className="button">Click here to explore</a></p>
    </div>
  );
};

const Footer = () => {
  return (
    <footer>
      <ul><li>this is the footer menu</li></ul>
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

