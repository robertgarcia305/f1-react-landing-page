//  how to start a react app, my-app should be changed to whatever your name of the app
//   npx create-react-app my-app
//   cd my-app
//   npm start

// here you are not importing the react and reactdom because you export the function
import './App.css';
import Header from "./Header";
import Nav from "./Nav";
import Cards from "./Cards";
import Footer from "./Footer";
import Subscribe from "./Subscribe";
import MainPage from "./MainPage";

const App = () => {
  return (
    <div className="body-wrap">
      <Header />
      <Nav />
      <MainPage />
      <Cards />
      <Subscribe />
      <Footer />
    </div>
  );
}

export default App;
