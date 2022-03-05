import React from "react";
import ReusableForm from "./ReusableForm";
import PropTypes from "prop-types";

function EditCarForm (props) {
  const { car } = props;

  function handleEditCarFormSubmission(event) {
    event.preventDefault();
    props.onEditCar({make: event.target.make.value, model: event.target.location.model, year: event.target.year.value, timeOpen: car.timeOpen, vin: event.target.vin.value, license: event.target.license.value, target: event.target.date.value, location: event.target.location.value, formattedWaitTime: car.formattedWaitTime, id: car.id});
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