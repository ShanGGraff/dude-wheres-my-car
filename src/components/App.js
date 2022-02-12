import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import car from '../img/StolenCar.jpg';

function App(){
  return (
    <React.Fragment>
      <h1>Dude Where Is My Car</h1>
      <div>
        <img src={car} alt="picture of stolen car and police officer in Portland Oregon" />
      </div>
      <hr/>
    </React.Fragment>
  );
}

export default App;
