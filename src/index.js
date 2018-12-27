import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import * as serviceWorker from "./serviceWorker";
import { createStore, applyMiddleware, compose } from "redux";
import rootReducer from "./store/reducers/rootReducer";
import thunk from "redux-thunk";
import { Provider } from "react-redux";
import { reactReduxFirebase, getFirebase } from "react-redux-firebase";
import { reduxFirestore, getFirestore } from "redux-firestore";
import firebaseConfig from "./config/firebaseConfig";
import { BrowserRouter as Router } from "react-router-dom";

//thunk.withExtraArgument injecting a custom arguments {getFirebase, getFirestore}
//later used in async createWorkout action to get data from firestore
const store = createStore(
  rootReducer,
  compose(
    applyMiddleware(thunk.withExtraArgument({ getFirebase, getFirestore })),
    reactReduxFirebase(firebaseConfig, {
      //use firestore user data and sync it with the firebaseAuth.auth.uid
      useFirestoreForProfile: true,
      //get fata form user collection in firestore
      userProfile: "users",
      attachAuthIsReady: true,
      //rootReducer name of the firebase reducer
      //not required if the name is firebase
      firebaseStateName: "firebaseAuth"
    }),
    reduxFirestore(firebaseConfig)
  )
);

//loads application after the firebase authentication is initialized, logged out or logged in status
store.firebaseAuthIsReady.then(() => {
  ReactDOM.render(
    <Router>
      <Provider store={store}>
        <App />
      </Provider>
    </Router>,
    document.getElementById("root")
  );
});

serviceWorker.unregister();
