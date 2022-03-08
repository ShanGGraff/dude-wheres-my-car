import React from "react";
import car from '../../img/StolenCar.jpg';
import firebase from "firebase/app";
import 'firebase/database';
import Button from '@mui/material/Button';
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
          <div>
            <img src={car} alt="picture of stolen car and police officer in Portland Oregon" />
          </div>
          {/* <div style={{ backgroundImage: `url(${car})`}}>
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
          </div> */}
          {/* <Image
        source={car}
        style={{
          width: win.width,
          height: 300 * ratio,
        }}
      /> */}
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