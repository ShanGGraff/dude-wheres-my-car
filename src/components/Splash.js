import React from "react";
import Header from "./Header";
import Signup from "./auth/Signup";
import Footer from "./Footer"
import car from '../img/StolenCar.jpg';


function App(){
  return (
    <React.Fragment>
      <Header />
      <div>
            <img src={car} alt="picture of stolen car and police officer in Portland Oregon" />
      </div>
      <Footer />
    </React.Fragment>
  );
}

export default App;