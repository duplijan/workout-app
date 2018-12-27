import {
  LOGIN_SUCCES,
  LOGIN_ERROR,
  SIGNOUT_SUCCES,
  SIGNOUT_ERROR,
  SIGNUP_SUCCES,
  SIGNUP_ERROR
} from "../actions/authActions";

const initState = {
  authError: null
};

const authReducer = (state = initState, action) => {
  switch (action.type) {
    case LOGIN_SUCCES: {
      return {
        ...state,
        authError: null
      };
    }
    case LOGIN_ERROR: {
      return {
        ...state,
        authError: action.error.message
      };
    }
    case SIGNOUT_SUCCES: {
      return {
        state
      };
    }
    case SIGNOUT_ERROR: {
      return {
        signOutError: action.error.message
      };
    }
    case SIGNUP_SUCCES: {
      return {
        ...state,
        authError: null
      };
    }
    case SIGNUP_ERROR: {
      console.log("signup error");
      return {
        ...state,
        authError: action.error.message
      };
    }
    default:
      return state;
  }
};

export default authReducer;
