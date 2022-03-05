import React from "react";
import { v4 } from 'uuid';
import PropTypes from "prop-types";
import ReusableForm from "./ReusableForm";
import Moment from 'moment';

function StolenCarForm(props){

  function handleStolenCarFormSubmission(event) {
    event.preventDefault();
    props.onNewCarCreation({
      make: event.target.make.value,
      model: event.target.make.model,
      year: event.target.make.year,
      vin: event.target.make.vin,
      license: event.target.make.license,
      // carimage: event.target.make.carimage,
      date: event.target.make.date,
      location: event.target.location.value,
      id: v4(),
      timeOpen: new Moment(),
      formattedWaitTime: new Moment().fromNow(true)
    });
  }

  return (
    <React.Fragment>
      <ReusableForm 
        formSubmissionHandler={handleStolenCarFormSubmission}
        buttonText="Help!" />
    </React.Fragment>
  );
}

StolenCarForm.propTypes = {
  onNewCarCreation: PropTypes.func
};

export default StolenCarForm;