import {combineReducers} from "redux";
// import {firebaseReducer} from "react-redux-firebase";
// import {firestoreReducer} from "redux-firestore";
import formVisibleReducer from './form-visible-reducer';
import carListReducer from './car-list-reducer';

const rootReducer = combineReducers({
  formVisibleOnPage: formVisibleReducer,
  mainCarList: carListReducer
  // firebase: firebaseReducer,
  // firestore: firestoreReducer
});

export default rootReducer;