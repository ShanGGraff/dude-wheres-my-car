import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
// import car from '../img/StolenCar.jpg';
import ReactDOM from "react-dom";
// import App from "./App";
import Header from "./Header";
import Footer from "./Footer";
import Main from "./Main";


function App(){
  return (
    <React.Fragment>
      <Header/>
      <Main/>
      <Footer/>
    </React.Fragment>
    
  );
}

export default App;
