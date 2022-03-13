import React from "react";
import PropTypes from "prop-types";

function CarDetail(props){
  const { car, onClickingDelete } = props;
  
  return (
    <React.Fragment>
      {/* {car.carimage} */}
      <b>Car Make: </b>{car.make}
      <br />
      <b>Car Model: </b>{car.model}
      <br />
      <b>Year of Vehicle: </b>{car.year}
      <br />
      <b>Vin Number: </b>{car.vin}
      <br />
      <b>License Number: </b>{car.license}
      <br />
      <b>Date car was found or went missing: </b>{car.date}
      <br />
      <b>Location car was stolen from or found: </b>{car.location}
      <br />
      <br />
      <button onClick={ props.onClickingEdit }>Update Car</button>
      <button onClick={()=> onClickingDelete(car.id) }>Delete car</button>
      <hr/>
    </React.Fragment>
  );
}

CarDetail.propTypes = {
  car: PropTypes.object,
  onClickingDelete: PropTypes.func,
  onClickingEdit: PropTypes.func
};

export default CarDetail;