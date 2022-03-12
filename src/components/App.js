import React from "react";
import { BrowserRouter as Router, Route, Routes, Link } from "react-router-dom";
// import ReactDOM from "react-dom";
import Signup from "./auth/Signup";
import Signin from "./auth/Signin";
import Splash from "./Splash";

function App(){
  return (
  <Router>
      <Routes>
        <Route path="/signin" element={<Signin />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/" element={<Splash />} />
        {/* <Route path='/user-profile' render={() => ( this.state.isLoggedIn ? <UserProfile /> : <Redirect to="/Signin" /> )}/> */}
      </Routes>
  </Router>
  );
}

export default App;
