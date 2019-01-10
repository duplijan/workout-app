import { combineReducers } from "redux";
import authReducer from "./authReducer";
//connect data from the database to the state
import { firestoreReducer } from "redux-firestore";
import { firebaseReducer } from "react-redux-firebase";

const rootReducer = combineReducers({
  auth: authReducer,
  firestore: firestoreReducer,
  firebaseAuth: firebaseReducer
});

export default rootReducer;
