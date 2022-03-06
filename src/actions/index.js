import * as c from './ActionTypes';

export const deleteCar = id => ({
  type: c.DELETE_CAR,
  id
});

export const toggleForm = () => ({
  type: c.TOGGLE_FORM
});

// export const addCar = (car) => {
//   const { make, model, year, vin, license, date, location, id, formattedWaitTime, timeOpen } = car;
//   return {
//     type: c.ADD_CAR,
//     make: make,
//     model: model,
//     year: year,
//     vin: vin,
//     license: license,
//     // carImage: carImage,
//     date: date,
//     location: location,
//     id: id,
//     formattedWaitTime,
//     timeOpen: timeOpen
//   }
// }

export const updateTime = (id, formattedWaitTime) => ({
  type: c.UPDATE_TIME,
  id: id,
  formattedWaitTime: formattedWaitTime
});