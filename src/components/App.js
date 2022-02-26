import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import car from '../img/StolenCar.jpg';
import ReactDOM from "react-dom";
// import App from "./App";
import Header from "./Header";
import Footer from "./Footer";


function App(){
  return (
    <React.Fragment>
      <Header/>
      {/* <div>
        <img src={car} alt="picture of stolen car and police officer in Portland Oregon" />
      </div>
      <hr/>  */}
      <main>
        <div>
          <img src={car} alt="picture of stolen car and police officer in Portland Oregon" />
        </div>
      </main>
      <Footer />
    </React.Fragment>
    
  );
}

export default App;
