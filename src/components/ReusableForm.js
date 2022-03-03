import React from "react";
import PropTypes from "prop-types";

function ReusableForm(props) {
  return (
    <React.Fragment>
      <form onSubmit={props.formSubmissionHandler}>
        <input
          type='text'
          name='make'
          placeholder='Car Make' />
        <input
          type='text'
          name='model'
          placeholder='Car Model' />
        <input
          type='text'
          name='year'
          placeholder='Car Year' />
        <input
          type='text'
          name= 'vin'
          placeholder='VIN Number'/>
        <input
          type='text'
          name='license'
          placeholder='License Number'/>
        <input
          type='image'
          name='carimage'
          placeholder='Car image' />
        <input
          type='date'
          name='date'
          placeholder='Date Stolen or Found'/>
        <textarea
          type='text'
          name='location'
          placeholder='Location where vehicle was stolen or found'/>
        <button type='submit'>{props.buttonText}</button>
      </form>
    </React.Fragment>
  );
}

ReusableForm.propTypes = {
  formSubmissionHandler: PropTypes.func,
  buttonText: PropTypes.string
};

export default ReusableForm;