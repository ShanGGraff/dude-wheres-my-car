import React from "react";
import { BrowserRouter as Router, Route, Routes, Link } from "react-router-dom";
// import ReactDOM from "react-dom";
import Header from "./Header";
import Signup from "./auth/Signup";
import Footer from "./Footer";
import Main from "./Main";
import Signin from "./auth/Signin";
import CarControl from "./CarControl";

function App(){
  return (
    // <Router>
    // <Header />
    //   <Route path="/signup" element={<Signup/>} />
    // </Router>

    // <React.Fragment>
    //   <Header />
    //   {/* <Signup /> */}
    //   <Footer />
    // </React.Fragment>

  <Router>
    <Header />
    
      <Routes>
        {/* <Route path="/signin" element={<Signin />} /> */}
        <Route path="/" element={<Signup />} />
        // <Route path="/" element={<CarControl />} />
      </Routes>
    <Footer />
  </Router>
  );
}

export default App;
