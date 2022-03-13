import React from "react";
import PropTypes from "prop-types";
import Car from "./Car";
import { useSelector } from 'react-redux';
import { useFirestoreConnect, isLoaded } from 'react-redux-firebase';
import CrashedCar from "../img/crashedcar.jpg";


function CarList(props){
  useFirestoreConnect([
    { collection: 'cars' }
  ]);

  const cars = useSelector(state => state.firestore.ordered.cars);

  if (isLoaded(cars)) {
    return (
      <React.Fragment>
        <hr/>
        {cars.map((car) => {
          return <Car
            whenCarClicked = { props.onCarSelection }
            make={car.make}
            model={car.model}
            year={car.year}
            vin={car.vin}
            license={car.license}
            // carimage={car.image}
            date={car.date}
            location={car.location}
            formattedWaitTime={car.formattedWaitTime}
            id={car.id}
            key={car.id}/>
        })}
      </React.Fragment>
    );
  } else {
    return (
      <React.Fragment>
        <h3>Loading...</h3>
      </React.Fragment>
    )
  }
}

CarList.propTypes = {
  onCarSelection: PropTypes.func
};

export default CarList;