import {combineReducers} from "redux";
import {firebaseReducer} from "react-redux-firebase";
import {firestoreReducer} from "redux-firestore";
const rootReducer = combineReducers({
  fromVisibleOnPage: formVisibleReducer,
  mainCarList: CarListerReducer,
  firebase: firebaseReducer,
  firestore: firestoreReducer
});

export default rootReducer;