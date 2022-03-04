import React from "react";
import CarDetail from "./CarDetail";
import CarList from "./CarList";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import * as a from "./../actions";
import EditCarForm from './EditCarForm';
import StolenCarForm from './StolenCarForm';
// import { withFirestore, isLoaded } from 'react-redux-firebase';

class CarControl extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      selectedCar: null,
      editing: false
    };
  }

  componentDidMount() {
    this.waitTimeUpdateTimer = setInterval(() =>
      this.updateCarElapsedWaitTime(),
    60000
    );
  }

  componentWillUnmount(){
    clearInterval(this.waitTimeUpdateTimer);
  }

  updateCarElapsedWaitTime = () => {
    const { dispatch } = this.props;
    Object.values(this.props.mainCarList).forEach(car => {
      const newFormattedWaitTime = car.timeOpen.fromNow(true);
      const action = a.updateTime(car.id, newFormattedWaitTime);
      dispatch(action);
    });
  }

  handleClick = () => {
    if (this.state.selectedCar != null) {
      this.setState({
        selectedCar: null,
        editing: false
      });
    } else {
      const { dispatch } = this.props;
      const action = a.toggleForm();
      dispatch(action);
    }
  }

  handleAddingNewCarToList = (newCar) => {
    const { dispatch } = this.props;
    const action = a.addCar(newCar)
    dispatch(action);
    const action2 = a.toggleForm();
    dispatch(action2);
  }

  handleChangingSelectedCar = (id) => {
    const selectedCar = this.props.mainCarList[id];
    this.setState({selectedCar: selectedCar});
  }

  handleEditClick = () => {
    this.setState({editing: true});
  }

  handleEditingCarInList = (carToEdit) => {
    const { dispatch } = this.props;
    const action = a.addCar(carToEdit);
    dispatch(action);
    this.setState({
      editing: false,
      selectedCar: null
    });
  }

  handleDeletingCar = (id) => {
    const { dispatch } = this.props;
    const action = a.deleteCar(id);
    dispatch(action);
    this.setState({selectedCar: null});
  }

  render(){
    let currentlyVisibleState = null;
    let buttonText = null;
    if (this.state.editing ) {      
      currentlyVisibleState = <EditCarForm car = {this.state.selectedCar} onEditCar = {this.handleEditingCarInList} />
      buttonText = "Return to Car List";
    } else if (this.state.selectedCar != null) {
      currentlyVisibleState = 
      <CarDetail 
        car = {this.state.selectedCar} 
        onClickingDelete = {this.handleDeletingCar} 
        onClickingEdit = {this.handleEditClick} />
      buttonText = "Return to Car List";
    } else if (this.props.formVisibleOnPage) {
      currentlyVisibleState = <StolenCarForm onNewCarCreation={this.handleAddingNewCarToList}  />;
      buttonText = "Return to Car List";
    } else {
      currentlyVisibleState = <CarList carList={this.props.mainCarList} onCarSelection={this.handleChangingSelectedCar} />;
      buttonText = "Add Car";
    }
    return (
      <React.Fragment>
        {currentlyVisibleState}
        <button onClick={this.handleClick}>{buttonText}</button>
      </React.Fragment>
    );
  }

}

CarControl.propTypes = {
  mainCarList: PropTypes.object
};

const mapStateToProps = state => {
  return {
    mainCarList: state.mainCarList,
    formVisibleOnPage: state.formVisibleOnPage
  }
}

CarControl = connect(mapStateToProps)(CarControl);

export default CarControl;