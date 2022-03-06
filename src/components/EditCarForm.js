import React from "react";
import ReusableForm from "./ReusableForm";
import PropTypes from "prop-types";
import { useFirestore } from 'react-redux-firebase';

function EditCarForm (props) {
  const firestore = useFirestore();
  const { car } = props;

  function handleEditCarFormSubmission(event) {
    event.preventDefault();
    props.onEditCar();
    const propertiesToUpdate = {
      make: event.target.make.value, 
      model: event.target.model.value, 
      year: event.target.year.value, 
      // timeOpen: car.timeOpen, 
      vin: event.target.vin.value, 
      license: event.target.license.value,
      // carimage: event.target.carimage,
      date: event.target.date.value,
      location: event.target.location.value
      // target: event.target.date.value, location: event.target.location.value, formattedWaitTime: car.formattedWaitTime, id: car.id
    }
    return firestore.update({collection: 'cars', doc: car.id }, propertiesToUpdate)
  }

  return (
    <React.Fragment>
      <ReusableForm 
        formSubmissionHandler={handleEditCarFormSubmission}
        buttonText="Update Car" />
    </React.Fragment>
  );
}

EditCarForm.propTypes = {
  onEditCar: PropTypes.func
};

export default EditCarForm;