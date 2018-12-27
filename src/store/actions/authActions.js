export const LOGIN_SUCCES = "LOGIN_SUCCES";
export const LOGIN_ERROR = "LOGIN_ERROR";

export const SIGNOUT_SUCCES = "SIGNOUT_SUCCES";
export const SIGNOUT_ERROR = "LOSIGNOUT_ERRORGIN_ERROR";

export const SIGNUP_SUCCES = "SIGNUP_SUCCES";
export const SIGNUP_ERROR = "SIGNUP_ERROR";

export const actions = {
  //credentials ingformation email and password
  signIn(credentials) {
    return (dispatch, getState, { getFirebase }) => {
      const firebase = getFirebase();
      //firebase authentication function
      firebase
        .auth()
        .signInWithEmailAndPassword(credentials.email, credentials.password)
        .then(() => {
          dispatch({ type: LOGIN_SUCCES });
        })
        .catch(error => {
          dispatch({ type: LOGIN_ERROR, error });
        });
    };
  },

  signOut() {
    return (dispatch, getState, { getFirebase }) => {
      const firebase = getFirebase();
      firebase
        .auth()
        .signOut()
        .then(() => {
          dispatch({ type: SIGNOUT_SUCCES });
        })
        .catch(err => {
          dispatch({ type: SIGNOUT_ERROR });
        });
    };
  },
  //newUser FirstName, lastName, email, password
  signUp(newUser) {
    return (dispatch, getState, { getFirebase, getFirestore }) => {
      const firebase = getFirebase();
      const firestore = getFirestore();
      firebase
        .auth()
        .createUserWithEmailAndPassword(newUser.email, newUser.password)
        .then(response => {
          return firestore
            .collection("users")
            .doc(response.user.uid)
            .set({
              firstName: newUser.firstName,
              lastName: newUser.lastName,
              userName: newUser.firstName
            });
        })
        .then(() => {
          dispatch({ type: SIGNUP_SUCCES });
        })
        .catch(error => {
          dispatch({ type: SIGNUP_ERROR, error });
        });
    };
  }
};
