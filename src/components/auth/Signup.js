import React from "react";
import firebase from "firebase/app";
import 'firebase/database';
import Button from '@mui/material/Button';
import Header from "./../Header";
import Footer from "./../Footer";
import burningcar from '../../img/burning-car.jpg';

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
          <Header />
          <div style={{
            backgroundImage: `url(${burningcar})`,
            backgroundSize: "cover",
            height: "100vh",
            color: "#f5f5f5"
            }}>
          
          <form onSubmit={doSignUp}>
            <input
              type='text'
              name='email'
              placeholder='email' />
            <input
              type='password'
              name='password'
              placeholder='Password' />
            <Button variant="outlined" type='submit'>Submit!</Button>
          </form>
          
          </div>
          <Footer />
        </React.Fragment>
    )
}

export default Signup