import {
  LOGIN_START,
  LOGIN_SUCCESS,
  LOGIN_FAILED,
} from '../actions/actionTypes';

const initialAuthState = {
  user: {},
  error: null,
  isLoggedIn: false,
  inProgress: false,
};

export function auth(state = initialAuthState, action) {
  switch (action.type) {
    case LOGIN_START:
      return {
        ...state,
        inProgress: true,
      };
    case LOGIN_SUCCESS:
      return {
        ...state,
        user: action.user,
        isLoggedIn: true,
        inProgress:false,
        error:null
      };
    case LOGIN_FAILED:
      return {
        ...state,
        inProgress:false,
        error: action.error,
        
      };
    default:
      return state;
  }
}
