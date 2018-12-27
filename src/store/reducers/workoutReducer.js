// import {
//   FETCH_WORKOUT,
//   DELETE_WORKOUT,
//   FETCH_WORKOUT_ERROR
// } from "../actions/firebaseActions";

const workoutReducer = (state = {}, action) => {
  switch (action.type) {
    // case FETCH_WORKOUT:
    //   console.log(state);
    //   return {
    //     ...state,
    //     workouts: [...state.workouts, action.workout]
    //   };
    //
    // case FETCH_WORKOUT_ERROR:
    //   console.log(action.error);
    //   return {
    //     state
    //   };
    //
    // case DELETE_WORKOUT:
    default:
      return state;
  }
};

export default workoutReducer;
