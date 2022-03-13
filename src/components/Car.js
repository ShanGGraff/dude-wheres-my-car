import React from "react";
import PropTypes from "prop-types";

function Car(props){
  return (
    <React.Fragment>
      <div onClick = {() => props.whenCarClicked(props.id)}>
        <h3>{props.make}</h3>
      </div>
      <hr/>
    </React.Fragment>
  );
}

Car.propTypes = {
  // carimage: PropTypes.instanceOf(File),
  make: PropTypes.string,
  model: PropTypes.string,
  // stolen: PropTypes.string,
  // color: PropTypes.string,
  year: PropTypes.string,
  vin: PropTypes.string,
  license: PropTypes.string,
  date: PropTypes.string,
  location: PropTypes.string,
  id: PropTypes.string,
  formattedWaitTime: PropTypes.string,
  whenCarClicked: PropTypes.func
};

export default Car;