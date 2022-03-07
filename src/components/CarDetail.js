import React from "react";
import PropTypes from "prop-types";

function CarDetail(props){
  const { car, onClickingDelete } = props;
  
  return (
    <React.Fragment>
      <h1>Car Detail</h1>
      <h3>{car.make}</h3>
      <h3>{car.model}</h3>
      <h3>{car.vin}</h3>
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