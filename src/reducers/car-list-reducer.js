import * as c from './../actions/ActionTypes';

export default (state = {}, action) => {
  const { make, model, year, vin, license, carimage, date, location, id, formattedWaitTime, timeOpen } = action;
  switch (action.type) {
  case c.ADD_CAR:
    return Object.assign({}, state, {
      [id]: {
        make: make,
        model: model,
        year: year,
        vin: vin,
        license: license,
        carimage: carimage,
        date: date,
        location: location,
        id: id,
        timeOpen: timeOpen,
        formattedWaitTime: formattedWaitTime
      }
    });
  case c.DELETE_CAR:
    const newState = { ...state };
    delete newState[id];
    return newState;
  case c.UPDATE_TIME:
    const updatedCar = Object.assign({}, state[id], {formattedWaitTime});
    const updatedState = Object.assign({}, state, {
      [id]: updatedCar
    });
    return updatedState;
  default:
    return state;
  }
};