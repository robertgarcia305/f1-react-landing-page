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
import UfcFighters from "./UfcFighter";

const App = () => {
  return (
    <div className="body-wrap">
      <Header />
      <Nav />
      <MainPage />
      <Cards />
      <Subscribe />
      <UfcFighters 
        pic="./img/logo.svg"
        fighterName="Alexander Volkanovski"
        country="Australia"
        rate="9.4"
      />
      <Footer />
    </div>
  );
}

export default App;
