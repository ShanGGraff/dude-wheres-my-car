import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Signup from "./auth/Signup";
import Signin from "./auth/Signin";
import Splash from "./Splash";
import CarList from "./CarList";
import CarDetail from "./CarDetail";
import StolenCarForm from "./StolenCarForm";
import CarControl from "./CarControl";

function App(){
  return (
  <Router>
      <Routes>
        <Route path="/signin" element={<Signin />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/carlist" element={<CarList />} />
        <Route path="/cardetail" element={<CarDetail />} />
        <Route path="/stolencarform" element={<StolenCarForm />} />
        <Route path="/carcontrol" element={<CarControl />} />
        <Route path="/" element={<Splash />} />
        
        {/* <Route path='/user-profile' render={() => ( this.state.isLoggedIn ? <UserProfile /> : <Redirect to="/Signin" /> )}/> */}
      </Routes>
  </Router>
  );
}

export default App;
