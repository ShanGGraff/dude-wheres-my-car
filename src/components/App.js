import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import car from '../img/StolenCar.jpg';
import ReactDOM from "react-dom";
// import App from "./App";
import Header from "./Header";


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

// ReactDOM.render(
//   <React.Fragment>
//     <Router>
//       <App>
//       <div>
//         <img src={car} alt="picture of stolen car and police officer in Portland Oregon" />
//       </div>
//       </App>
//     </Router>
//   </React.Fragment>,
//   document.getElementById("root")
// );

export default App;
