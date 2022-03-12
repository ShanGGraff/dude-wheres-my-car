import React from "react";
import Header from "./Header";
import Signup from "./auth/Signup";
import Footer from "./Footer"
import car from '../img/StolenCar.jpg';


function App(){
  return (
    <React.Fragment>
      <Header />
      {/* <div>
            <img src={car} alt="picture of stolen car and police officer in Portland Oregon" />
      </div> */}

      <div style={{
            backgroundImage: `url(${car})`,
            backgroundSize: "cover",
            height: "100vh",
            color: "#f5f5f5"
            }}>
      </div>
      <Footer />
    </React.Fragment>
  );
}

export default App;