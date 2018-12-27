export const FETCH_WORKOUT = "CREATE_WORKOUT";
export const FETCH_WORKOUT_ERROR = "CREATE_WORKOUT_ERROR";
export const DELETE_WORKOUT = "DELETE_WORKOUT";
export const SET_FAVOURITE = "SET_FAVOURITE";

export const actions = {
  createWorkout(workout) {
    //extra argumnet from thunk.withExtraArgument({ getFirebase, getFirestore } in idnex.js
    //passed inside the function as a third argument
    //async call to get data from database
    return (dispatch, getState, { getFirebase, getFirestore }) => {
      //collection name from firestore database
      const firestore = getFirestore();
      //profile data from firebaseAuth reducer
      const profile = getState().firebaseAuth.profile;
      const authorId = getState().firebaseAuth.auth.uid;
      firestore
        .collection("workouts")
        .add({
          ...workout,
          authorFirstName: profile.firstName,
          authorLastName: profile.lastName,
          authorId,
          createdAt: new Date()
        })
        .then(() => {
          dispatch({
            type: FETCH_WORKOUT,
            workout
          });
        })
        .catch(error => {
          dispatch({
            type: FETCH_WORKOUT_ERROR,
            error
          });
        });
    };
  },

  deleteWorkout(id) {
    return (dispatch, getState, { getFirebase, getFirestore }) => {
      const firestore = getFirestore();
      firestore
        .collection("workouts")
        .doc(id)
        .delete()
        .then(() => {
          dispatch({
            type: DELETE_WORKOUT,
            id
          });
        });
    };
  }

  // setFavourite(id) {
  //   return (dispatch, getState, { getFirebase, getFirestore }) => {
  //     const firestore = getFirestore();
  //     firestore
  //       .collection("workouts")
  //       .doc(id)
  //       .set({
  //         ...id,
  //         favourite: true
  //       })
  //       .then(() => {
  //         dispatch({
  //           type: SET_FAVOURITE
  //         });
  //       });
  //   };
  //}
};
