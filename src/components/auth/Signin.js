import React from "react";
import firebase from "firebase/app";
import 'firebase/database';
import Button from '@mui/material/Button';
import Footer from "./../Footer";


function Signin(){
  function doSignIn(event) {
    event.preventDefault();
    const email = event.target.signinEmail.value;
    const password = event.target.signinPassword.value;
    firebase.auth().signInWithEmailAndPassword(email, password).then(function() {
      console.log("Successfully signed in!");
    }).catch(function(error) {
      console.log(error.message);
    });
  }

  function doSignOut() {
    firebase.auth().signOut().then(function() {
      console.log("Successfully signed out!");
    }).catch(function(error) {
      console.log(error.message);
    });
  }

  return(
    <React.Fragment>
      <form onSubmit={doSignIn}>
        <input
          type='text'
          name='signinEmail'
          placeholder='email' />
        {' '}
        <input
          type='password'
          name='signinPassword'
          placeholder='Password' />
        {' '}
        <Button variant="outlined" type='submit'>Sign in</Button>
      </form>
      <Button variant="outlined" onClick={doSignOut}>Sign out</Button>
      <Footer />
    </React.Fragment>
  )
}

export default Signin