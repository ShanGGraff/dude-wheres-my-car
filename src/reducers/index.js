import {combineReducers} from "redux";
// import {firebaseReducer} from "react-redux-firebase";
// import {firestoreReducer} from "redux-firestore";
import formVisibleReducer from './form-visible-reducer';
import mainCarList from './car-list-reducer';

const rootReducer = combineReducers({
  fromVisibleOnPage: formVisibleReducer,
  mainCarList: CarListReducer
  // firebase: firebaseReducer,
  // firestore: firestoreReducer
});

export default rootReducer;