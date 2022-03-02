import {combineReducers} from "redux";
import {firebaseReducer} from "react-redux-firebase";
import {firestoreReducer} from "redux-firestore";
const rootReducer = combineReducers({
  fromVisibleOnPage: fomrVisibleReducer,
  mainTicketList: ticketListerReducer,
  firebase: firebaseReducer,
  firestore: firestoreReducer
});

export default rootReducer;