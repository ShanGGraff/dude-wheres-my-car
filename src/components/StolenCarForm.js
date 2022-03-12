import React from "react";
import PropTypes from "prop-types";
import ReusableForm from "./ReusableForm";
import { useFirestore } from 'react-redux-firebase';

function StolenCarForm(props){
  const firestore = useFirestore();

  function handleStolenCarFormSubmission(event) {
    event.preventDefault();
    props.onNewCarCreation();
    return firestore.collection('cars').add(
      {
        // carimage: event.target.carimage.value,
        // stolen: event.target.stolen.value,
        make: event.target.make.value, 
        model: event.target.model.value,
        color: event.target.color.value,
        year: event.target.year.value, 
        vin: event.target.vin.value, 
        license: event.target.license.value,
        date: event.target.date.value,
        location: event.target.location.value
      }
    );
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