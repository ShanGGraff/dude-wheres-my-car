import React from "react";
import car from '../../img/StolenCar.jpg';
import firebase from "firebase/app";
import 'firebase/database';
import Button from '@mui/material/Button';
import Header from "./../Header";
// import Image from 'react-image-resizer';


function Signup(){
  function doSignUp(event){
    event.preventDefault();
      const email = event.target.email.value;
      const password = event.target.password.value;
      firebase.auth().createUserWithEmailAndPassword(email, password).then(function(){
        console.log("successfully signed up!");
      }).catch(function(error) {
        console.log(error.message);
      });
    }

    return(
        <React.Fragment>
          <body>
            <img src={car} alt="picture of stolen car and police officer in Portland Oregon" />
          </body>
          {/* <div style={{ backgroundImage:`url(${car})`,backgroundRepeat:"no-repeat",
          width:'auto', height:'auto' }}>
          </div> */}
          
          {/* <div style={{ backgroundImage:`url(${car})`,backgroundRepeat:"no-repeat",backgroundSize:"contain", 
          height:1000,width:1000
          }}>
          </div> */}

          <form onSubmit={doSignUp}>
            <input
              type='text'
              name='email'
              placeholder='email' />
            <input
              type='password'
              name='password'
              placeholder='Password' />
            <Button variant="outlined" type='submit'>Sign up</Button>
          </form>
          
        </React.Fragment>
    )
}

export default Signup