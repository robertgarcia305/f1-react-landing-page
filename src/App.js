//  how to start a react app, my-app should be changed to whatever your name of the app
//   npx create-react-app my-app
//   cd my-app
//   npm start

import React from "react";
import ReactDOM from "react-dom";

// here you are not importing the react and reactdom because you export the function
import './App.css';
import Header from "./Header";
import Nav from "./Nav";
import Cards from "./Cards";
import Footer from "./Footer";
import Subscribe from "./Subscribe";
import MainPage from "./MainPage";
import F1Driver from "./F1Driver";

const App = () => {
  return (
    <div className="body-wrap">
      <Header />
      <Nav />
      <MainPage />
      <Cards />
      <Subscribe />
      <div className="f1-wrap">
        <F1Driver
        // the pics are being passed as strings
          pic="img/perez.png"
          driverName="Checo Perez"
          country="Mexico"
          rate="9.4"
          team="red-bull"
        />
        <F1Driver
          pic="img/hamilton.png"
          driverName="Lewis Hamilton"
          country="UK"
          rate="9.0"
          team="mercedes"
        />
        <F1Driver
          pic="img/russell.png"
          driverName="George Russell"
          country="UK"
          rate="7.0"
          team="mercedes"
        />
        <F1Driver
          pic="img/sainz.png"
          driverName="Carlos Sainz"
          country="Spain"
          rate="7.0"
          team="ferrari"
        />
      </div>

      <Footer />
    </div>
  );
}

export default App;
