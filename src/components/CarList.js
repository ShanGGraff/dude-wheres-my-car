import React from "react";
import PropTypes from "prop-types";
import Car from "./Car";

function CarList(props){
  return (
    <React.Fragment>
      <hr/>
      {Object.values(props.carList).map((car) => {
        return <Car
          whenCarClicked = { props.onCarSelection }
          make={car.make}
          model={car.model}
          year={car.year}
          vin={car.vin}
          license={car.license}
          carimage={car.carimage}
          date={car.date}
          location={car.location}
          
          formattedWaitTime={car.formattedWaitTime}
          id={car.id}
          key={car.id}/>
      })}
    </React.Fragment>
  );
}

CarList.propTypes = {
  ticketList: PropTypes.object,
  onTicketSelection: PropTypes.func
};

export default CarList;