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

// data js files, not json for now
import DriversData from "./DriversData";

const App = () => {
  const drivers = DriversData.map((driver) => {
    return <F1Driver 
      pic={driver.pic}
      driverName={driver.name}
      country={driver.country}
      rate={driver.rate}
      team={driver.team}
    />
  });

  return (
    <div className="body-wrap">
      <Header />
      <Nav />
      <MainPage />
      <Cards />
      <Subscribe />

      {/* drivers data component */}
      <div className="f1-wrap">
        {drivers}
        
      </div>

      <Footer />
    </div>
  );
}

export default App;
