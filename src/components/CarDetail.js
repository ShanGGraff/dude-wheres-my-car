import React from "react";
import PropTypes from "prop-types";
import Header from "./Header";
import Footer from "./Footer";
import Window from "../img/window.jpeg"

function CarDetail(props){
  const { car, onClickingDelete } = props;
  
  return (
    <React.Fragment>
      <Header />
      <div style={{
            backgroundImage: `url(${Window})`,
            backgroundSize: "cover",
            height: "100vh",
            color: "#f5f5f5"
            }}>
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
      </div>
      <Footer />
    </React.Fragment>
  );
}

CarDetail.propTypes = {
  car: PropTypes.object,
  onClickingDelete: PropTypes.func,
  onClickingEdit: PropTypes.func
};

export default CarDetail;