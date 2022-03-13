import React from "react";
import PropTypes from "prop-types";

function CarDetail(props){
  const { car, onClickingDelete } = props;
  
  return (
    <React.Fragment>
      {/* {car.carimage} */}
      <b>Car Make: </b> {car.make}
      <br />
      <b>Car Model: </b> {car.model}
      <br />
      <b>Year of Vehicle: </b> {car.year}
      <br />
      <h3>{car.vin}</h3>
      <h3>{car.license}</h3>
      <h3>{car.date}</h3>
      <h3>{car.location}</h3>
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