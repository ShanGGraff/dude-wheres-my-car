import React from "react";
// import { BrowserRouter as Router, Route } from "react-router-dom";
// import ReactDOM from "react-dom";
import Header from "./Header";
// import Footer from "./Footer";
// import Main from "./Main";
// import Signin from "./auth/Signin";
import CarControl from "./CarControl";

function App(){
  return (
    // <Router>
    //   <Header/>
    //     <Route path="/Signin">
    //       <Signin />
    //     </Route>
    //   <Main/>
    //   <Footer/>
    // </Router>
    <React.Fragment>
      <Header />
      <CarControl />
    </React.Fragment>
  );
}

export default App;
