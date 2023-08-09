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
import ReactDOM from "react-dom/client";
import "./index.css";
// apparently you have to import everything 
import App from "./App";


// a new way of rendering for react 18 is like this 
const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(
    <App />
);


