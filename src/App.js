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
import UfcFighter from "./UfcFighter";

// this is an static way of adding them
import jones from "./img/jones.png";
import masvidal from "./img/masvidal.png";
import leon from "./img/leon.png";
import volkanovski from "./img/volkanovski.png";

const App = () => {
  return (
    <div className="body-wrap">
      <Header />
      <Nav />
      <MainPage />
      <Cards />
      <Subscribe />
      <div className="ufc-wrap">
        <UfcFighter
        // the pics are being passed as strings
          pic={jones}
          fighterName="Alexander Volkanovski"
          country="Australia"
          rate="9.4"
        />
        <UfcFighter
          pic={masvidal}
          fighterName="Jorge Masvidal"
          country="Florida"
          rate="9.0"
        />
        <UfcFighter
          pic={leon}
          fighterName="Leon Edwards"
          country="UK"
          rate="7.0"
        />
        <UfcFighter
          pic={volkanovski}
          fighterName="Alexander Volkanovski"
          country="Florida"
        />
      </div>

      <Footer />
    </div>
  );
}

export default App;
