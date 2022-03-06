import React from "react";
// import { v4 } from 'uuid';
import PropTypes from "prop-types";
import ReusableForm from "./ReusableForm";
// import Moment from 'moment';
import { useFirestore } from 'react-redux-firebase';

function StolenCarForm(props){
  const firestore = useFirestore();

  function handleStolenCarFormSubmission(event) {
    event.preventDefault();
    props.onNewCarCreation();
    return firestore.collection('cars').add(
      {
        make: event.target.make.value, 
        model: event.target.model, 
        year: event.target.year.value, 
        vin: event.target.vin.value, 
        license: event.target.license,
        // carimage: event.target.carimage,
        date: event.target.date,
        location: event.target.location
      }
    );
    //{
    //   make: event.target.make.value,
    //   model: event.target.make.model,
    //   year: event.target.make.year,
    //   vin: event.target.make.vin,
    //   license: event.target.make.license,
    //   carimage: event.target.make.carimage,
    //   date: event.target.make.date,
    //   location: event.target.location.value,
    //   id: v4(),
    //   timeOpen: new Moment(),
    //   formattedWaitTime: new Moment().fromNow(true)
    // });
  }

  return (
    <React.Fragment>
      <ReusableForm 
        formSubmissionHandler={handleStolenCarFormSubmission}
        buttonText="Submit!" />
    </React.Fragment>
  );
}

StolenCarForm.propTypes = {
  onNewCarCreation: PropTypes.func
};

export default StolenCarForm;