import React from "react";
import Header from "./Header";
import Footer from "./Footer"
import car from '../img/StolenCarSplash.jpg';


function App(){
  return (
    <React.Fragment>
      <Header />
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