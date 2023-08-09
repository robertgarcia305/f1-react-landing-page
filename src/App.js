//  how to start a react app, my-app should be changed to whatever your name of the app
//   npx create-react-app my-app
//   cd my-app
//   npm start

// here you are not importing the react and reactdom because you export the function
import './App.css';
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
}

export default App;
