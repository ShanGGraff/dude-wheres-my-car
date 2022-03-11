import React from "react";
import { BrowserRouter as Router, Route, Routes, Link } from "react-router-dom";
// import ReactDOM from "react-dom";
import Header from "./Header";
import Signup from "./auth/Signup";
import Footer from "./Footer";
// import Main from "./Main";
import Signin from "./auth/Signin";
import CarControl from "./CarControl";
import Splash from "./Splash";

function App(){
  return (
  <Router>
    {/* <Header /> */}
      <Routes>
        <Route path="/signin" element={<Signin />} />
        <Route path="/" element={<Splash />} />
        <Route path="/signup" element={<Signup />} />
        {/* <Route path='/user-profile' render={() => ( this.state.isLoggedIn ? <UserProfile /> : <Redirect to="/Signin" /> )}/> */}
      </Routes>
    {/* <Footer /> */}
  </Router>
  );
}

export default App;
